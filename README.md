# ZURA Portfolio

React + Vite + CSS portfolio for Zura. Includes Home, Selected Work, ten graphic artworks, project detail dialogs, About, Services, and Contact.

## Run

Use Node.js 26 with npm, matching the installed development environment.

```sh
npm ci
npm run dev
```

Open the Local address printed by Vite. Keep the terminal running. Stop with Ctrl+C.

```sh
npm run lint
npm run check:assets
npm run build
npm run preview
```

## Files

- `src/App.jsx`: complete layout and filters.
- `src/App.css`: component and responsive styles.
- `src/index.css`: global reset, colors, and typography.
- `src/content.js`: artwork paths, project links, and public contact email.
- `src/ProjectDetails.jsx`: accessible native project dialog.
- `public/designs/`: the ten original artwork files, unchanged.
- `public/projects/`: add project screenshots here.
- `.github/workflows/ci.yml`: lint, asset validation, and production build on pushes and pull requests.

## Contact

The public email is zurakhubua9@gmail.com. The mailto link opens the visitor’s email app. The site does not automatically send or store messages.

## Missing project materials

PLAYZONE, BREWCOFFEESHOP, and FASHION screenshots are not present yet. Their image fields are null to avoid broken images. Add `playzone.png`, `brew.png`, and `fashion.png` to `public/projects/`, then set each project's image in `src/content.js` to `projects/<filename>` (matching the real extension).

PLAYZONE and BREWCOFFEESHOP have verified GitHub repository links. Live website URLs and the FASHION repository URL still need to be supplied; do not invent them. Set the matching `liveUrl` and `sourceUrl` values when known.

The actual ninth artwork is `orange.png`, so the gallery uses it instead of the missing `scarpa.png`. Rename the generic Design 03 title after confirming its intended title. Before public release, confirm project descriptions and About/Services copy.

## Git

Track source, `package-lock.json`, configuration, and `public/` assets. `node_modules/`, `dist/`, local environment files, and logs are ignored. This project does not need secrets. The original PNGs are intentionally preserved; optimized copies can be created later for faster loading.

GitHub repository storage does not by itself publish the website. No deployment workflow is included. A static host can serve the built `dist/` directory. Asset paths support a repository subdirectory via Vite's relative base.
