# Using this folder with the AR.js app (root index.html)

The main app at the **repo root** (`../index.html`) is wired to use:

- **Assets**: `src/assets/jellyfish-model.glb`, `src/assets/jellyfish-video.mp4`, `src/assets/video-thumbnail.jpg`
- **Image targets**: AR.js expects **NFT** format (`.iset`, `.fset`, `.fset3`), not 8th Wall’s JSON + jpeg.

## Generate NFT target files

1. Use an NFT marker generator (e.g. [NFT Marker Creator](https://carnaux.github.io/NFT-Marker-Creator/)) with your **target image**.
2. For **model-target**: use `image-targets/model-target_target.jpeg` → generate and save the three files as **`model-target.iset`**, **`model-target.fset`**, **`model-target.fset3`** in this folder (`test-aframe/`).
3. For **video-target**: use `image-targets/video-target_target.jpeg` → generate and save as **`video-target.iset`**, **`video-target.fset`**, **`video-target.fset3`** in this folder.
4. From the **repo root**, run a local server (e.g. `npx serve .` or `python -m http.server 8080`) and open the app. Point the camera at the printed target images to see the jellyfish model or video.

Print the `*_target.jpeg` images and use them as the physical targets when testing.
