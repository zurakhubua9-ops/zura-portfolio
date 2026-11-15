# ZURA Portfolio

React + Vite + CSS portfolio with Home, Selected Work, project details, a ten-piece design gallery, About, Services and Contact.

## Run in VS Code

Open this project folder. In a terminal:

```sh
npm ci
npm run dev
```

Open the Local address printed by Vite. Keep that terminal open; Ctrl+C stops the server. Node.js 26 is specified in `.nvmrc`. Dependencies are already installed on the original development computer, so `npm run dev` is enough there.

If Windows cannot find Node, restart VS Code after installation. In Command Prompt, this temporary fix also works:

```bat
set "PATH=C:\Program Files\nodejs;%PATH%"
npm run dev
```

## Verify and build

```sh
npm run lint
npm run check:assets
npm run build
npm run preview
```

The production site is generated in `dist/`. Opening `index.html` directly is not supported; use the server URL.

## Editing

- `src/content.js`: project URLs, descriptions, artwork titles and public email.
- `src/App.jsx`: sections, featured projects and expandable design gallery.
- `src/ProjectDetails.jsx`: native modal with Escape support and focus restoration.
- `src/App.css` and `src/index.css`: responsive layout and global styling.
- `public/designs/`: ten original PNG files, preserved unchanged.
- `public/previews/`: lightweight JPEG copies, approximately 1.5 MB in total; used by the gallery. Clicking a design opens the original PNG.
- `public/projects/`: actual screenshots of the three live websites.
- `.github/workflows/ci.yml`: lint, asset validation and build on pushes and pull requests.

## Connected projects

- PLAYZONE: https://zurakhubua9-ops.github.io/playzone/
- BREWCOFFEESHOP: https://zurakhubua9-ops.github.io/BREWCOFFEESHOP/
- ONEMODE (the FASHION project): https://zurakhubua9-ops.github.io/onemode/

Each project has its matching GitHub source link and a description. These are portfolio concepts; descriptions do not claim real customers, purchases or reservations.

## Contact

The contact link opens an email draft to zurakhubua9@gmail.com in the visitor's email app. No backend or credentials are required. Messages are sent by the visitor, not automatically by this site.

## Publishing

The source repository is https://github.com/zurakhubua9-ops/zura-portfolio. Saving code to GitHub does not publish the portfolio as a website.

Deploy the generated `dist/` folder to a static host. Build command: `npm run build`; output directory: `dist`. Relative asset URLs support hosting under a repository subdirectory. No environment variables or secrets are needed. Do not upload `node_modules`.

The three project URLs and all artwork assets are connected. Live portfolio: https://zura-khubua-portfolio.zurakhubua9.chatgpt.site. A custom domain is optional. A CV, portrait and social links are optional, not required to run this portfolio.

