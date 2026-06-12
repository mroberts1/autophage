import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync, copyFileSync, statSync } from 'fs'
import { join, basename, extname } from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const LANDING_FILE  = 'landing.md'
let SITE_NAME     = 'goya'
let SITE_SUBTITLE = 'recursive aesthetic | feedback | fractals'
const GOYA_IMAGE    = 'raw/images/Francisco_de_Goya,_Saturno_devorando_a_su_hijo_(1819-1823).jpg'
const GOYA_DEST     = 'dist/images/goya-saturn.jpg'

const SOURCES = [
  { dir: 'wiki/concepts',  urlPrefix: '/concepts',  label: 'Concepts'  },
  { dir: 'wiki/art',       urlPrefix: '/art',       label: 'Art'       },
  { dir: 'wiki/sources',   urlPrefix: '/sources',   label: 'Sources'   },
  { dir: 'wiki/indexes',   urlPrefix: '/indexes',   label: 'Indexes'   },
  { dir: 'output/reports', urlPrefix: '/reports',   label: 'Reports'   },
  { dir: 'output/slides',  urlPrefix: '/slides',    label: 'Slides'    },
]

const SIDEBAR_SECTIONS = [
  { label: 'home',     href: '/'          },
  { label: 'concepts', href: '/concepts'  },
  { label: 'art',      href: '/art'       },
  { label: 'sources',  href: '/sources'   },
  { label: 'indexes',  href: '/indexes'   },
  { label: 'reports',  href: '/reports'   },
]

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/[—–]/g, '-')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

function walkDir(dir) {
  if (!existsSync(dir)) return []
  return readdirSync(dir)
    .filter(f => extname(f) === '.md')
    .map(f => join(dir, f))
}

function buildSlugMap(allFiles) {
  const map = {}
  for (const { filepath, url } of allFiles) {
    const name = basename(filepath, '.md')
    map[name]          = url
    map[slugify(name)] = url
  }
  return map
}

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.avif'])

function resolveWikilinks(markdown, slugMap) {
  return markdown.replace(/!?\[\[([^\]|]+?)(?:\|([^\]]+?))?\]\]/g, (match, target, display) => {
    const ext = target.includes('.') ? '.' + target.split('.').pop().toLowerCase() : ''
    // Image embed: ![[filename.ext]] or ![[subdir/filename.ext]]
    if (match.startsWith('!') && IMAGE_EXTS.has(ext)) {
      const filename = target.includes('/') ? target : target.split('/').pop()
      const alt = display || filename.replace(/\.[^.]+$/, '').split('/').pop()
      return `<img src="/images/${filename}" alt="${alt}" class="content-img">`
    }
    // Page link
    const label = display || target
    const url   = slugMap[target] ?? slugMap[slugify(target)]
    if (url) return `<a href="${url}">${label}</a>`
    return `<span class="unresolved" title="Not published">${label}</span>`
  })
}

// ---------------------------------------------------------------------------
// CSS (shared)
// ---------------------------------------------------------------------------

const CSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0 }

  :root {
    --bg:       #0e0c0a;
    --sidebar:  #131109;
    --surface:  #1a1714;
    --border:   #2e2820;
    --text:     #d8d2c4;
    --muted:    #7a7060;
    --gold:     #c8a45a;
    --gold-dim: #8a6e38;
    --link:     #c8a45a;
    --code-bg:  #1e1b14;
    --max:      680px;
    --sans: system-ui, -apple-system, 'Helvetica Neue', sans-serif;
    --mono: ui-monospace, 'SF Mono', Consolas, monospace;
    --sidebar-w: 220px;
  }

  :root.light {
    --bg:       #f5f2ec;
    --sidebar:  #ede8df;
    --surface:  #e4ddd1;
    --border:   #cdc5b8;
    --text:     #2a2318;
    --muted:    #8a7d6a;
    --gold:     #8a6020;
    --gold-dim: #a07830;
    --link:     #7a5018;
    --code-bg:  #e8e2d8;
  }

  .theme-toggle {
    margin-top: auto;
    padding-top: 2rem;
    background: none;
    border: 1px solid var(--border);
    color: var(--muted);
    font-size: 0.7rem;
    letter-spacing: 0.08em;
    text-transform: lowercase;
    padding: 0.35rem 0.75rem;
    border-radius: 4px;
    cursor: pointer;
    width: fit-content;
    transition: color 0.15s, border-color 0.15s;
    font-family: var(--sans);
  }

  .theme-toggle:hover { color: var(--text); border-color: var(--gold-dim) }

  html, body { height: 100% }

  body {
    font-family: var(--sans);
    font-size: 15px;
    line-height: 1.75;
    color: var(--text);
    background: var(--bg);
  }

  a { color: var(--link); text-decoration: none }
  a:hover { text-decoration: underline; color: #e0bb78 }

  .unresolved {
    color: var(--muted);
    border-bottom: 1px dashed var(--border);
    cursor: default;
  }

  /* --- Sidebar layout ---------------------------------------------------- */

  .layout {
    display: flex;
    min-height: 100vh;
  }

  aside {
    width: var(--sidebar-w);
    flex-shrink: 0;
    background: var(--sidebar);
    border-right: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0; left: 0; bottom: 0;
    overflow-y: auto;
    padding: 2rem 1.5rem;
    z-index: 10;
  }

  .site-name {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--gold);
    display: block;
    margin-bottom: 0.3rem;
  }

  .site-sub {
    font-size: 0.65rem;
    color: var(--muted);
    letter-spacing: 0.05em;
    line-height: 1.5;
    margin-bottom: 2.5rem;
  }

  nav { display: flex; flex-direction: column; gap: 0.1rem }

  nav a {
    color: var(--muted);
    font-size: 0.8rem;
    letter-spacing: 0.08em;
    text-transform: lowercase;
    padding: 0.35rem 0.5rem;
    border-radius: 4px;
    transition: color 0.15s, background 0.15s;
  }

  nav a:hover, nav a.active {
    color: var(--text);
    background: var(--surface);
    text-decoration: none;
  }

  /* --- Main content area ------------------------------------------------- */

  .page {
    margin-left: var(--sidebar-w);
    display: flex;
    min-height: 100vh;
  }

  main {
    flex: 1;
    padding: 3rem 3.5rem 5rem;
    max-width: var(--max);
    min-width: 0;
  }

  /* --- Right tag sidebar ------------------------------------------------- */

  .tag-sidebar {
    width: 160px;
    flex-shrink: 0;
    padding: 3rem 1.25rem 5rem 0;
    border-left: 1px solid var(--border);
  }

  .tag-sidebar-label {
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--muted);
    margin-bottom: 0.75rem;
  }

  .tag-sidebar .tag {
    display: block;
    margin-bottom: 0.4rem;
  }

  /* --- Typography -------------------------------------------------------- */

  h1 { font-size: 1.6rem; font-weight: 700; color: #f0ead8; line-height: 1.2; margin-bottom: 1.25rem }
  h2 { font-size: 1.1rem; font-weight: 600; color: #e0d8c8; margin: 2.25rem 0 0.6rem }
  h3 { font-size: 0.95rem; font-weight: 600; color: var(--text); margin: 1.75rem 0 0.4rem }
  h4 { font-size: 0.9rem; font-weight: 600; margin: 1.25rem 0 0.3rem }

  p { margin-bottom: 1rem }
  p:last-child { margin-bottom: 0 }

  ul, ol { padding-left: 1.4rem; margin-bottom: 1rem }
  li { margin-bottom: 0.25rem }

  blockquote {
    border-left: 2px solid var(--gold-dim);
    padding: 0.5rem 1.25rem;
    color: var(--muted);
    margin: 1.25rem 0;
    font-style: italic;
  }

  code {
    font-family: var(--mono);
    font-size: 0.82em;
    background: var(--code-bg);
    border: 1px solid var(--border);
    padding: 0.1em 0.4em;
    border-radius: 3px;
    color: #c8c0a8;
  }

  pre {
    background: var(--code-bg);
    border: 1px solid var(--border);
    padding: 1.25rem;
    border-radius: 6px;
    overflow-x: auto;
    margin-bottom: 1.25rem;
  }

  pre code { background: none; border: none; padding: 0 }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
  }

  th, td {
    text-align: left;
    padding: 0.5rem 0.75rem;
    border-bottom: 1px solid var(--border);
  }

  th { font-weight: 600; color: var(--gold-dim); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.06em }

  tr:hover td { background: var(--surface) }

  hr { border: none; border-top: 1px solid var(--border); margin: 2.5rem 0 }

  .tag {
    font-size: 0.7rem;
    color: var(--gold-dim);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 3px;
    padding: 0.15em 0.6em;
    letter-spacing: 0.04em;
  }

  .content-img {
    max-width: 100%;
    height: auto;
    border-radius: 6px;
    margin: 1.5rem 0;
    display: block;
    border: 1px solid var(--border);
  }

  /* --- Gallery layout ---------------------------------------------------- */

  main.gallery-page { max-width: 960px }

  main.gallery-page p {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 0.75rem;
    margin-bottom: 0.75rem;
  }

  main.gallery-page .content-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin: 0;
    border-radius: 4px;
    cursor: zoom-in;
    transition: opacity 0.15s;
  }

  main.gallery-page .content-img:hover { opacity: 0.8 }

  .section-label {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--muted);
    margin-bottom: 2rem;
  }

  /* --- Responsive -------------------------------------------------------- */

  @media (max-width: 900px) { .tag-sidebar { display: none } }

  @media (max-width: 700px) {
    aside { position: relative; width: 100%; height: auto; flex-direction: row; flex-wrap: wrap; padding: 1rem 1.25rem }
    .layout { flex-direction: column }
    .page { margin-left: 0; flex-direction: column }
    main { padding: 2rem 1.25rem 3rem }
    .site-sub { display: none }
  }
`

// ---------------------------------------------------------------------------
// Sidebar HTML
// ---------------------------------------------------------------------------

function sidebarHtml(activePath = '') {
  const links = SIDEBAR_SECTIONS.map(({ label, href }) => {
    const active = href === '/' ? activePath === '/' : activePath.startsWith(href)
    return `<a href="${href}"${active ? ' class="active"' : ''}>${label}</a>`
  }).join('\n    ')

  return `<aside>
  <a class="site-name" href="/">${SITE_NAME}</a>
  <span class="site-sub">${SITE_SUBTITLE}</span>
  <nav>
    ${links}
  </nav>
  <button class="theme-toggle" id="theme-toggle" onclick="toggleTheme()">light / dark</button>
</aside>
<script>
  function applyTheme(t) {
    document.documentElement.classList.toggle('light', t === 'light')
    localStorage.setItem('theme', t)
  }
  function toggleTheme() {
    applyTheme(document.documentElement.classList.contains('light') ? 'dark' : 'light')
  }
  applyTheme(localStorage.getItem('theme') || 'dark')
</script>`
}

// ---------------------------------------------------------------------------
// Inner page template
// ---------------------------------------------------------------------------

function renderPage(title, contentHtml, activePath = '', section = '', tags = [], gallery = false) {
  const tagSidebar = tags.length ? `
  <div class="tag-sidebar">
    <div class="tag-sidebar-label">tags</div>
    ${tags.map(t => `<span class="tag">${t}</span>`).join('\n    ')}
  </div>` : ''

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title} — ${SITE_NAME}</title>
  <style>${CSS}</style>
</head>
<body>
<div class="layout">
  ${sidebarHtml(activePath)}
  <div class="page">
    <main${gallery ? ' class="gallery-page"' : ''}>
      ${section ? `<div class="section-label">${section}</div>` : ''}
      ${contentHtml}
    </main>
    ${tagSidebar}
  </div>
</div>
</body>
</html>`
}

// ---------------------------------------------------------------------------
// Landing page
// ---------------------------------------------------------------------------

function renderLanding(sections, landingContent = '') {
  const cards = sections
    .filter(s => s.count > 0)
    .map(s => `
      <a class="card" href="${s.urlPrefix}">
        <span class="card-label">${s.label.toLowerCase()}</span>
        <span class="card-count">${s.count}</span>
      </a>`).join('')

  const blurb = landingContent
    ? `<div class="landing-blurb">${landingContent}</div>`
    : ''

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${SITE_NAME}</title>
  <style>
    ${CSS}

    /* Landing-specific */
    body { overflow: hidden }

    @media (max-width: 700px) { body { overflow: auto } }

    .landing {
      display: flex;
      height: 100vh;
      margin-left: var(--sidebar-w);
    }

    .landing-left {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 4rem 3.5rem;
      min-width: 0;
    }

    .landing-title {
      font-size: clamp(3rem, 6vw, 5.5rem);
      font-weight: 800;
      letter-spacing: -0.04em;
      color: var(--gold);
      line-height: 1;
      margin-bottom: 1rem;
    }

    .landing-sub {
      font-size: 0.8rem;
      color: var(--muted);
      letter-spacing: 0.12em;
      text-transform: lowercase;
      margin-bottom: 1.5rem;
    }

    .landing-blurb {
      font-size: 0.9rem;
      color: var(--muted);
      line-height: 1.7;
      max-width: 380px;
      margin-bottom: 2.5rem;
    }

    .landing-blurb p { margin-bottom: 0.5rem }

    .cards {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.75rem;
      max-width: 360px;
    }

    .card {
      display: flex;
      flex-direction: column;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 1.25rem 1.5rem;
      text-decoration: none;
      transition: border-color 0.15s, background 0.15s;
    }

    .card:hover {
      border-color: var(--gold-dim);
      background: #201c14;
      text-decoration: none;
    }

    .card-label {
      font-size: 0.75rem;
      text-transform: lowercase;
      letter-spacing: 0.08em;
      color: var(--muted);
      margin-bottom: 0.5rem;
    }

    .card-count {
      font-size: 1.75rem;
      font-weight: 700;
      color: var(--gold);
      line-height: 1;
    }

    .landing-painting {
      width: 300px;
      flex-shrink: 0;
      height: 100vh;
      object-fit: cover;
      object-position: center top;
      display: block;
      opacity: 0.85;
      filter: contrast(1.05) brightness(0.9);
    }

    @media (max-width: 900px) { .landing-painting { display: none } }

    @media (max-width: 700px) {
      body { overflow: auto }
      .landing { height: auto; flex-direction: column; margin-left: 0; padding-top: 0 }
      .landing-left { padding: 2.5rem 1.5rem }
    }
  </style>
</head>
<body>
<div class="layout">
  ${sidebarHtml('/')}
  <div class="landing">
    <div class="landing-left">
      <div class="landing-title">${SITE_NAME}</div>
      <div class="landing-sub">${SITE_SUBTITLE}</div>
      ${blurb}
      <div class="cards">${cards}</div>
    </div>
    <img class="landing-painting" src="/images/goya-saturn.jpg" alt="Goya — Saturn Devouring His Son">
  </div>
</div>
</body>
</html>`
}

// ---------------------------------------------------------------------------
// Section index (list of pages)
// ---------------------------------------------------------------------------

function renderSectionIndex(section, files, slugMap) {
  const items = files
    .map(({ filepath, url }) => {
      const name = basename(filepath, '.md')
      const raw  = readFileSync(filepath, 'utf8')
      const { data: fm } = matter(raw)
      const title = fm.title ?? name
      return `<li><a href="${url}">${title}</a></li>`
    })
    .join('\n')

  const html = `<h1>${section.label}</h1>\n<ul>\n${items}\n</ul>`
  return renderPage(section.label, html, section.urlPrefix, section.label, [])
}

// ---------------------------------------------------------------------------
// Main build
// ---------------------------------------------------------------------------

async function build() {
  mkdirSync('dist/images', { recursive: true })

  // Copy all images from raw/images/ recursively
  function copyImages(srcDir, destDir) {
    if (!existsSync(srcDir)) return
    mkdirSync(destDir, { recursive: true })
    for (const f of readdirSync(srcDir)) {
      const src  = join(srcDir, f)
      const dest = join(destDir, f)
      if (statSync(src).isDirectory()) {
        copyImages(src, dest)
      } else {
        const ext = '.' + f.split('.').pop().toLowerCase()
        if (IMAGE_EXTS.has(ext)) copyFileSync(src, dest)
      }
    }
  }
  copyImages('raw/images', 'dist/images')

  // Collect all files
  const allFiles = []
  for (const src of SOURCES) {
    for (const filepath of walkDir(src.dir)) {
      const name = basename(filepath, '.md')
      const slug = slugify(name)
      const url  = `${src.urlPrefix}/${slug}`
      allFiles.push({ filepath, url, src })
    }
  }

  const slugMap = buildSlugMap(allFiles)

  // Render each page
  for (const { filepath, url, src } of allFiles) {
    const raw = readFileSync(filepath, 'utf8')
    const { data: fm, content } = matter(raw)

    const resolved  = resolveWikilinks(content, slugMap)
    const renderer = { heading({ text, depth }) {
      return depth === 1 ? `<h1>${text}</h1>\n` : `<h2>${text}</h2>\n`
    }}
    marked.use({ renderer })
    const bodyHtml  = marked(resolved, { gfm: true, breaks: false })
    const title     = fm.title ?? basename(filepath, '.md')
    const tags      = Array.isArray(fm.tags) ? fm.tags : []
    const isGallery = fm.layout === 'gallery'

    const pageHtml = renderPage(
      title,
      bodyHtml,
      src.urlPrefix,
      src.label,
      tags,
      isGallery
    )

    mkdirSync(`dist${src.urlPrefix}`, { recursive: true })
    writeFileSync(`dist${url}.html`, pageHtml)
  }

  // Section index pages
  const sectionCounts = []
  for (const src of SOURCES) {
    const files = walkDir(src.dir).map(filepath => {
      const slug = slugify(basename(filepath, '.md'))
      return { filepath, url: `${src.urlPrefix}/${slug}` }
    })
    sectionCounts.push({ ...src, count: files.length })
    if (files.length === 0) continue
    mkdirSync(`dist${src.urlPrefix}`, { recursive: true })
    writeFileSync(`dist${src.urlPrefix}/index.html`, renderSectionIndex(src, files, slugMap))
  }

  // Landing page — read from landing.md
  let landingContent = ''
  if (existsSync(LANDING_FILE)) {
    const raw = readFileSync(LANDING_FILE, 'utf8')
    const { data: fm, content } = matter(raw)
    if (fm.title)    SITE_NAME     = fm.title
    if (fm.subtitle) SITE_SUBTITLE = fm.subtitle
    landingContent = marked(content.trim(), { gfm: true, breaks: false })
  }
  writeFileSync('dist/index.html', renderLanding(sectionCounts, landingContent))

  console.log(`Built ${allFiles.length} pages → dist/`)
}

build().catch(err => { console.error(err); process.exit(1) })
