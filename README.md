# valuelift.de

Website für **Value Lift AI** — KI-Systeme für Berater, Coaches und Dienstleister im DACH-Raum.

Gebaut mit [Astro](https://astro.build) und [Tailwind CSS v4](https://tailwindcss.com) (Montserrat).

## Entwicklung

```bash
npm install      # Abhängigkeiten installieren
npm run dev      # Dev-Server auf http://localhost:4321
npm run build    # Statischer Build nach ./dist
npm run preview  # Build lokal ansehen
```

## Projektstruktur

```
src/
├── components/   Header, Hero, OfferCards, Testimonials, FAQ, Footer
├── layouts/      Base.astro (mit Nav), LandingPage.astro (nur Logo, keine Nav)
├── pages/        index, bootcamp, workshop, system, ueber-mich,
│                 ergebnisse, buchen, danke, impressum, datenschutz, agb
└── styles/       global.css (Tailwind + @config → tailwind.config.mjs)
public/           logo.png, favicon.png, og-image.jpg
```

## Branding

**Farbpalette** (`tailwind.config.mjs`, Namespace `brand`):

| Klasse            | Hex       |
| ----------------- | --------- |
| `brand-blue`      | `#015FA3` |
| `brand-blueLight` | `#4A90E2` |
| `brand-dark`      | `#111111` |
| `brand-black`     | `#000000` |
| `brand-white`     | `#FFFFFF` |
| `brand-lightBg`   | `#F9F7F7` |
| `brand-gray`      | `#5F5F5F` |

Nutzbar als `bg-brand-blue`, `text-brand-gray`, `bg-brand-lightBg` usw.

**Typografie:** Montserrat (Google Fonts, Gewichte 400/600/700/800), eingebunden im Layout. Default-`font-sans` ist auf Montserrat gesetzt.

## Layouts

- **Base.astro** — volle Navigation, für index, ueber-mich, ergebnisse, buchen, danke, Rechtsseiten.
- **LandingPage.astro** — ohne Navigation, nur Logo oben links. Für bootcamp, workshop, system (Conversion-Fokus).

## Noch zu erledigen vor Go-Live

- **Google Tag Manager** in `Base.astro` / `LandingPage.astro` aktivieren (GTM-ID einsetzen, Kommentare entfernen).
- **Impressum, Datenschutz, AGB** mit echten, rechtsgültigen Inhalten füllen (aktuell Platzhalter).
- **Testimonials / Case Studies** durch echte Stimmen, Fotos und Namen ersetzen.
- **favicon**: aktuell `favicon.png` (32×32). Bei Bedarf zusätzlich `favicon.ico` erzeugen (kein ICO-Konverter lokal verfügbar).
- Außer dem Logo keine Bilder — Platzhalter-Divs (`bg-brand-lightBg`).

## Buchung

Terminbuchung via TidyCal-iframe auf `/buchen`:
`https://tidycal.com/marcuseichler/kennenlerngesprach-mit-marcus-eichler-1wr7yd6`
