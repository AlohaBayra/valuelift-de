/**
 * Cloudflare Pages Function: POST /api/register
 *
 * Empfängt { vorname, email } und legt den Kontakt in systeme.io an.
 * Der Tag "ki-kickstart-anmeldung" triggert dort die DOI-Automation.
 *
 * Umgebungsvariable im Cloudflare-Dashboard setzen:
 *   Settings → Environment Variables → SYSTEME_API_KEY = <dein API-Key>
 */

export async function onRequestPost(context) {
  const { request, env } = context;

  // CORS für valuelift.de
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://valuelift.de',
  };

  try {
    const body = await request.json();
    const { vorname = '', email = '' } = body;

    // Validierung
    if (!email || !email.includes('@')) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Bitte gib eine gültige E-Mail-Adresse ein.' }),
        { status: 400, headers }
      );
    }

    const apiKey = env.SYSTEME_API_KEY;
    if (!apiKey) {
      console.error('SYSTEME_API_KEY nicht konfiguriert');
      return new Response(
        JSON.stringify({ ok: false, error: 'Serverkonfiguration fehlt.' }),
        { status: 500, headers }
      );
    }

    // systeme.io API v2 — Kontakt anlegen / aktualisieren
    const systemeRes = await fetch('https://api.systeme.io/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': apiKey,
      },
      body: JSON.stringify({
        email: email.toLowerCase().trim(),
        firstName: vorname.trim(),
        fields: [],
        tags: ['ki-kickstart-anmeldung'],
      }),
    });

    // 422 = Kontakt existiert bereits → trotzdem Erfolg melden
    if (systemeRes.status === 422) {
      return new Response(
        JSON.stringify({ ok: true, status: 'already_exists' }),
        { status: 200, headers }
      );
    }

    if (!systemeRes.ok) {
      const errData = await systemeRes.json().catch(() => ({}));
      console.error('systeme.io Fehler:', systemeRes.status, errData);
      return new Response(
        JSON.stringify({ ok: false, error: 'Anmeldung fehlgeschlagen. Bitte versuche es erneut.' }),
        { status: 500, headers }
      );
    }

    return new Response(
      JSON.stringify({ ok: true, status: 'registered' }),
      { status: 200, headers }
    );

  } catch (err) {
    console.error('Unerwarteter Fehler:', err);
    return new Response(
      JSON.stringify({ ok: false, error: 'Serverfehler. Bitte versuche es erneut.' }),
      { status: 500, headers }
    );
  }
}

// OPTIONS für CORS-Preflight
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': 'https://valuelift.de',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
