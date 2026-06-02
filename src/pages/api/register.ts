// Dieser Endpunkt wird von functions/api/register.js (Cloudflare Pages Function) übernommen.
// Diese Datei ist nur ein Platzhalter damit der Astro-Build nicht meckert.
export const prerender = true;

export function GET() {
  return new Response(JSON.stringify({ info: 'Verwende POST /api/register' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
