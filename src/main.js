import './style.css'
import { site } from './site.js'
import { projects } from './projects.js'

// Files in public/ are served from the site's base path, which is
// "/arkodex/" on punkq.com/arkodex/ and "/" on a custom domain.
const asset = (file) => `${import.meta.env.BASE_URL}${file}`

const escape = (text = '') =>
  text.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

function card(project) {
  const style = project.accent ? ` style="--card-accent:${escape(project.accent)}"` : ''
  const image = project.image
    ? `<img class="card-image" src="${asset(`images/${escape(project.image)}`)}" alt="" loading="lazy">`
    : `<div class="card-image card-image-empty" aria-hidden="true">✦</div>`

  let action = ''
  if (project.status === 'coming-soon') {
    action = `<span class="badge">Coming soon</span>`
  } else {
    const lock = project.status === 'password' ? `<span class="badge">🔒 Password required</span>` : ''
    action = `${lock}<span class="button">Play →</span>`
  }

  const body = `
    ${image}
    <div class="card-body">
      <h3>${escape(project.title)}</h3>
      <p>${escape(project.tagline)}</p>
      <div class="card-actions">${action}</div>
    </div>`

  return project.url && project.status !== 'coming-soon'
    ? `<a class="card" href="${escape(project.url)}"${style}>${body}</a>`
    : `<div class="card card-muted"${style}>${body}</div>`
}

document.title = site.name
document.querySelector('#app').innerHTML = `
  <header class="hero">
    <h1>${escape(site.name)}</h1>
    <p class="tagline">${escape(site.tagline)}</p>
    <p class="intro">${escape(site.intro)}</p>
  </header>

  <main>
    <h2 class="section-title">Projects</h2>
    <div class="cards">${projects.map(card).join('')}</div>
  </main>

  <footer>
    ${site.links.map((l) => `<a href="${escape(l.url)}">${escape(l.label)}</a>`).join('<span>·</span>')}
  </footer>
`
