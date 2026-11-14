// The project cards on the front page, in the order they appear.
//
// To add a project, copy one block and change it.
//   title    – name shown on the card
//   tagline  – one or two short sentences
//   url      – where the button goes (itch.io page, a page on this site, …)
//   status   – "live"        → normal Play button
//              "password"    → Play button plus a 🔒 "Password required" note
//              "coming-soon" → no button, just a "Coming soon" label
//   image    – file name inside public/images/ (4:3 looks best), or leave it out
//   accent   – optional colour for the card's border and button

export const projects = [
  {
    title: 'JouluDimangiJahti',
    tagline: 'Carlos Santanaclausen’s Christmas diamond hunt — a match-three browser game.',
    url: 'https://joulujukka.itch.io/jouludimangijahti',
    status: 'password',
    image: 'jouludimangijahti.webp',
    accent: '#e0393e',
  },
  {
    title: 'Next project',
    tagline: 'Something new is on the way.',
    status: 'coming-soon',
  },
]
