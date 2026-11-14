# arkodex

Personal site for **arkodex**: a landing page that lists his games and experiments.
It's his playground, so it's expected to grow and change. Help him build what he wants.

New to the project? The `/welcome` command gives a guided first session.

## Stack

- Vite + plain JavaScript (no framework). Adding React or anything else later is fine if he wants it.
- Static site, deployed to GitHub Pages by `.github/workflows/deploy.yml`.

## Commands

```
npm install      # once, after cloning
npm run dev      # local dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve dist/ locally
```

## Layout

| Path | What it is |
|---|---|
| `index.html` | Page shell; content is rendered by `src/main.js` |
| `src/site.js` | Site name, tagline, intro, footer links |
| `src/projects.js` | The project cards — one object per project (see the comment at the top for fields and `status` values) |
| `src/main.js` | Renders hero, cards and footer from the two files above |
| `src/style.css` | All styling |
| `public/` | Copied to the site as-is: `public/images/…`, favicon, and any self-hosted games |

Adding a project normally means adding one object to `src/projects.js` and, if it has an image, a 4:3 image in `public/images/`.

## Publishing

- Every push to `main` builds and deploys automatically (Actions → Deploy). It can also be run by hand from the Actions tab.
- The live site: **https://arkodex.punkq.com** (before the custom domain is set up it's https://punkq.com/arkodex/).
- If a build fails, the previous version stays online. Check the Actions tab for the error.

## Base path — important

The site can be served from `/arkodex/` (punkq.com/arkodex) or from `/` (arkodex.punkq.com). The deploy workflow reads the right value from GitHub Pages and passes it to Vite as `BASE_PATH`.

So **never hard-code `/arkodex/` or root-absolute links to files in `public/`**:
- In JS, build URLs with `import.meta.env.BASE_URL` (see `asset()` in `src/main.js`).
- In `index.html`, `/file` paths are fine: Vite rewrites them.
- Imported assets (`import img from './x.png'`) are handled by Vite automatically.

## Hosting a game on this site

HTML5 games can live in `public/games/<slug>/` and be served at `/games/<slug>/`. Things to know:
- The repo is **public** — anyone can download the files, and GitHub Pages has **no password protection**. Password-protected games should stay on itch.io.
- Godot 4: export the single-threaded web build (the threaded one needs COOP/COEP headers Pages can't send).
- Unity WebGL: enable "Decompression Fallback" or export uncompressed (Pages can't send `Content-Encoding` headers for .br/.gz).
- Keep single files under 100 MB (GitHub's push limit).

## What's outside this repo

The repo is owned by **punkQcom**; arkodex is a collaborator with write access. He can push code, but these are handled by punkQcom, so don't try to change them from here:
- Repo settings, visibility, collaborators, branch rules
- GitHub Pages settings and the custom domain
- DNS for punkq.com

`main` may be protected against force-pushes and deletion. Normal pushes work.

## Conventions

- Keep it simple and readable — he's learning and experimenting; explain what you change.
- He's on Windows: give PowerShell commands, not bash. If the session is running inside WSL, use Linux commands instead.
- It's a public repo: never commit passwords, API keys or private email addresses.
- Commit messages: short and in plain words.
- Optional: Claude Code adds a `Co-Authored-By` line to commits by default. To turn that off, set `"attribution": { "commit": "", "pr": "" }` in `.claude/settings.json` (for everyone) or `.claude/settings.local.json` (just for him). It's his call.
