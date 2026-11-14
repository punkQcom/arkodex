import { defineConfig } from 'vite'

// BASE_PATH is set by the deploy workflow from GitHub Pages itself:
// "/arkodex/" while the site lives at punkq.com/arkodex/, "/" once a custom
// domain like arkodex.punkq.com is set. Locally it's always "/".
export default defineConfig({
  base: process.env.BASE_PATH || '/',
})
