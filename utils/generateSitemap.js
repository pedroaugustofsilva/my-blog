const fs = require('fs')
const globby = require('globby')

async function generateSitemap() {
  const pages = await globby([
    'posts/*.md'
  ])

  const sitemap = 
  `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${pages
            .map(page => {
              const path = page
                .replace('pages', '')
                .replace('.js', '')
                .replace('.md', '')
                .replace('posts/', '')

              const route = path === '/index' ? '' : path
              return `
                      <url>
                          <loc>${`https://pedrofs.com.br/${route}`}</loc>
                      </url>
                  `
            })
            .join('')}
  </urlset>`

  fs.writeFileSync('public/sitemap.xml', sitemap)
}

generateSitemap()