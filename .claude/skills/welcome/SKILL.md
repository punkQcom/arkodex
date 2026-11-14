---
name: welcome
description: Guided first session for arkodex — greets him, checks his setup, runs the site locally, gives a tour and helps him publish his first change.
disable-model-invocation: true
---

# Welcome to arkodex

This repo was built as a **surprise gift** for arkodex by his friend at **punkQ**: a ready-made personal site at **https://arkodex.punkq.com**, already listing his game JouluDimangiJahti. Your job in this session is to make his first time here fun and easy.

Talk in the language he uses (he's probably Finnish-speaking; switch to Finnish if he writes in Finnish). Keep it relaxed and short — one step at a time, and wait for him before moving on. He's on **Windows**: use PowerShell commands unless you detect the session is running in WSL.

## 1. Say hi

- Tell him this site was made for him by his friend at punkQ, it's his to play with, and it's already online.
- Give him the live address. If `gh` is available, check where it currently lives with `gh api repos/punkQcom/arkodex/pages --jq .html_url`; otherwise mention https://arkodex.punkq.com (or https://punkq.com/arkodex/ if the domain isn't set up yet).
- Tell him what you'll do together: check his tools, run the site on his computer, a quick tour, and his first published change.

## 2. Check his tools

Run these and report what's missing in plain words:

```
git --version
node --version
npm --version
gh --version
```

- **Node.js** missing or older than 20.19 → offer `winget install OpenJS.NodeJS.LTS`.
- **GitHub CLI** (`gh`) is optional but handy → offer `winget install GitHub.cli`, then `gh auth login` (GitHub.com → HTTPS → log in with browser).
- After installing anything with winget, he must **close and reopen** the terminal (or VS Code) and restart Claude Code so the new commands are found. Tell him to type `/welcome` again afterwards; skip the parts already done.

## 3. Keep his email private

Commits in a public repo show the author's email, and he signed up to GitHub with his Gmail.

1. Ask him to open https://github.com/settings/emails and turn on **"Keep my email addresses private"**. GitHub then shows a no-reply address like `12345678+username@users.noreply.github.com`.
2. Check the current settings: `git config user.name` and `git config user.email`.
3. Set them for this repo with his GitHub username and that no-reply address:
   ```
   git config user.name "<his GitHub username>"
   git config user.email "<his no-reply address>"
   ```
   Offer `--global` too if he wants the same for all his repos.

## 4. Run the site

```
npm install
npm run dev
```

Have him open http://localhost:5173. Explain that this copy is only on his computer and reloads by itself when a file is saved.

## 5. Quick tour

Show him only these, briefly:

- `src/site.js` — his name, tagline, intro text and footer links
- `src/projects.js` — the project cards; adding a game = copying one block. Explain the `status` values (`live`, `password`, `coming-soon`). JouluDimangiJahti is `password` because the itch.io page is password-protected; when he removes the password there, he changes it to `live`.
- `public/images/` — card images (4:3 looks best)
- `src/style.css` — colours and layout

Mention that `CLAUDE.md` holds the technical notes, so he can just ask you for changes in plain words.

## 6. First change, published together

Suggest making the intro his own: ask him how he'd describe himself and what he makes, and update `tagline` and `intro` in `src/site.js`. Let him see it on localhost first.

Then publish it:

```
git add -A
git commit -m "Write my own intro"
git push
```

- The first push may open a browser window to log in to GitHub — that's normal (Git Credential Manager).
- If the push is refused with a permission error, he probably hasn't accepted the collaborator invite yet: https://github.com/punkQcom/arkodex/invitations
- Show him the **Actions** tab (https://github.com/punkQcom/arkodex/actions): the Deploy run takes about a minute, then the change is live.

## 7. Ideas for next time

Offer a few ideas and let him pick (don't start them unless he asks):

- Add screenshots or a short gameplay GIF for JouluDimangiJahti
- Add his next game or a "work in progress" card
- A devlog page for what he's working on
- His own colour scheme or a new look
- A small web toy or experiment, linked from the front page
- Later, when the game is public: host it right here on his site (see "Hosting a game" in `CLAUDE.md`)

Finish by reminding him: push to `main` = live in a minute, and if something breaks, the last working version stays online.

## Good to know

- He's a collaborator: he can push code, but repo settings, the domain and DNS belong to punkQ. If he wants one of those changed, he should ask them.
- Never commit passwords, API keys or private email addresses — the repo is public.
