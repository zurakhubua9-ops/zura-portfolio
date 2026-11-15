import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { artworks, projects } from '../src/content.js'
const paths = [...artworks.map(item => item.image), ...artworks.map(item => item.image.replace('designs/', 'previews/').replace(/\.png$/i, '.jpg')), ...projects.map(item => item.image)]
const missing = paths.filter(path => !path || !existsSync(fileURLToPath(new URL(`../public/${path}`, import.meta.url))))
if (missing.length) {
  missing.forEach(path => console.error(`Missing image: ${path}`))
  process.exitCode = 1
} else {
  console.log(`Verified ${artworks.length} originals, ${artworks.length} previews and ${projects.length} project screenshots.`)
}
for (const project of projects) {
  for (const key of ['sourceUrl', 'liveUrl']) {
    if (!project[key] || new URL(project[key]).protocol !== 'https:') throw new Error(`${project.id}: invalid ${key}`)
  }
}
