# Claudia Hart AR

Browser-based AR experiences replacing broken 8th Wall links. Works directly in a mobile browser via camera (works better on iOS Safari vs Chrome) Built with [MindAR.js](https://hiukim.github.io/mind-ar-js-doc/) + A-Frame.

## Live apps

| App | URL |
|---|---|
| Machiavelli | `/machiavelli/` |
| Russian Roulette | `/russian-roulette/` |
| Alice XR | `/alice-xr/` |
| Digital Combines | `/digital-combines/` |
| Alice Walking | `/alice-walking/` |

## Procedure! (Enter with the URLs directly)

Each app:
1. Opens the device camera automatically
2. Detects printed target images from the catalog/book
3. Plays an MP4 video overlay on top of the target

Tracking is limited to one target at a time (`maxTrack: 1`) so neighboring catalog pages don't trigger overlapping augments; all video overlays use a consistent horizontal (landscape) plane. A `keep-upright` component counter-rotates each overlay to the nearest 90° of the tracked print's on-screen angle, so augments always read horizontally even when a wallpaper tile or compiled target is rotated. Videos found before the sound tap start playing on the tap (`ar-user-ready` event) instead of staying black.

## Folder structure

```
<app-name>/
  index.html                  ← AR experience (self-contained, no build step)
  image-targets/
    targets.mind              ← compiled MindAR target file (all targets combined)
    <name>.mind               ← individual compiled targets (for reference)
    <name>_target.jpeg        ← source images used for compilation
  src/assets/                 ← video files (MP4)
  videos/                     ← video files for digital-combines
```

## Targeting key

### Machiavelli (9 targets)
Image targets compiled in order `1_target` → `9_target`. Videos: `src/assets/1.mp4` – `9.mp4`.

### Russian Roulette (1 wallpaper target, 8 videos)
One target: a full catalog page of the Russian Roulette wallpaper (`russianroulette/image-targets/wallpaper_target.png`). The medallion pattern repeats, so per-medallion targets cross-matched against every repeat (overlapping, rotated augments); a single large target spanning several repeats avoids this. Each `targetFound` plays a random video from `rr-english/src/assets/` — the roulette.
To switch language: change video paths in `index.html` to `rr-chinese/` or `rr-silent/`.
The old 8 per-medallion compiled targets remain at `russianroulette/image-targets/0*.mind`.

### Alice XR (4 targets)
| Target | Video |
|---|---|
| linear-leather | 9square.mp4 |
| paint-effects-bamboo | miniature-horse.mp4 |
| paint-effects-bamboo-inverted | eat-fb.mp4 |
| qr | cupcake.mp4 |

### Alice Walking (11 targets)

### Digital Combines (10 targets)
Content taken from the original 8th Wall export (`digital-combines-hermitage-wallpaper-2021-plus-alice-dishes-2014`): wallpaper targets get video overlays, dish targets get 3D models.
| Target | Augment |
|---|---|
| ZigZagClothNoise | videos/og-15.mp4 |
| WeirdEastern | videos/og-8.mp4 |
| RedArp | videos/og-6.mp4 |
| QR_1000DPI | models/flower-matrix.glb |
| Random-Glitch-Plate | models/glitch-picassos.glb |
| MirrorGlitch_9.1inch | models/henri.glb |
| LinearLeather_9.1inch | models/linear-leather-still-life-guitar.glb |
| emoji-tartan | models/matisse-still-life.glb |
| JoyfulNoiseOrange | videos/og-16.mp4 |
| nue-morte-round-dish | models/nue-morte-round.glb |


<!-- ## Testing locally

```bash
python3 -m http.server 8080
# Open http://localhost:8080/machiavelli/
``` -->


<!-- ## Deployment (GitHub Pages)

Push to `main`. Enable Pages at **Settings → Pages → Branch: main / root**. -->

Apps are live at `https://keiiwia.github.io/claudia-hart-ar/<app-name>/`.

<!-- ## QR code redirect

QR codes in printed catalogs were created via qr-code-generator.com (dynamic QR). Log in and update each code's destination URL to the corresponding GitHub Pages URL above. The printed QR code does not need to change. -->

## Video files & Git LFS

All `.mp4` files are stored in Git LFS (see `.gitattributes`).

```bash
ffmpeg -i input.mp4 -crf 28 -preset fast -movflags +faststart output.mp4
```
