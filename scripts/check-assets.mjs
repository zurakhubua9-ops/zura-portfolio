import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { artworks, projects } from '../src/content.js'

const missing = [...artworks, ...projects]
  .filter(item => item.image)
  .filter(item => !existsSync(fileURLToPath(new URL(`../public/${item.image}`, import.meta.url))))
if (missing.length) {
  missing.forEach(item => console.error(`Missing image: ${item.image}`))
  process.exitCode = 1
} else {
  console.log(`All ${artworks.length} artwork files exist. Optional project screenshots are not yet connected.`)
}
