# Claudia Hart Web AR (AR.js)

This project is a lightweight web-based AR experience using **AR.js (A-Frame)**, intended to host materials and image targets migrated from 8th Wall.

## Getting started

1. **Install a simple static server** (if you don't already have one):
   - Node.js: `npm install -g serve` (or use `npx serve`).
2. **Start a server in this folder**:
   - From the project root: `serve .` or `python -m http.server 8080`.
3. **Open in a mobile browser** (or desktop with webcam):
   - Navigate to `http://localhost:3000` or the port your server reports.
   - Grant camera permission when asked.

> AR.js requires serving files over HTTP(S), not from the `file://` protocol.

## Folder structure

- `index.html` — main AR scene using AR.js (A-Frame).
- `styles.css` — UI shell & layout styles.
- `main.js` — small status handling and marker events.
- **`test-aframe/`** — **preliminary test**: put your migrated 8th Wall target files here (e.g. `target.iset`, `target.fset`, `target.fset3`). The app is wired to load the NFT target from this folder.
- `targets/` — optional; use for additional image targets later.

## Using migrated 8th Wall image targets

AR.js NFT image tracking expects a set of files (typically `.iset`, `.fset`, `.fset3`) that share the same base filename. For example:

- `targets/example-target.iset`
- `targets/example-target.fset`
- `targets/example-target.fset3`

Then in `index.html` the `a-nft` component references the base URL **without the extension**:

```html
<a-nft
  type="nft"
  url="targets/example-target"
  emitevents="true"
>
  <!-- 3D content goes here -->
</a-nft>
```

For the **preliminary test**, put your target files in `test-aframe/` with base name `target` (e.g. `target.iset`, `target.fset`, `target.fset3`). No change to `index.html` needed. If your files use a different base name, change the `a-nft` url in `index.html` to `test-aframe/your-base-name`.

For other targets:

1. Copy the AR.js-compatible target files into `targets/` or `test-aframe/`.
2. In `index.html`, add or update an `a-nft` with `url="targets/your-name"` or `url="test-aframe/your-name"`.
3. Adjust or replace the placeholder 3D content inside the `a-nft` (e.g. swap the box for models, planes with textures, etc.).

If you have **multiple** targets, duplicate the `a-nft` block and point each one to a different `url` value.

## Notes

- This setup uses the A-Frame build of AR.js via CDN for simplicity.
- For production or advanced control (e.g., custom Three.js pipeline or performance tuning), you may want to pin AR.js to a specific release and/or self-host the script files.

