# Claudia Hart AR

Browser-based AR experiences replacing broken 8th Wall links. No app download required — works directly in a mobile browser via camera. Built with [MindAR.js](https://hiukim.github.io/mind-ar-js-doc/) + A-Frame, deployed on GitHub Pages.

## Live apps

| App | URL | Status |
|---|---|---|
| Machiavelli | `/machiavelli/` | ✅ Ready |
| Russian Roulette | `/russian-roulette/` | ✅ Ready |
| Alice XR | `/alice-xr/` | ✅ Ready |
| Digital Combines | `/digital-combines/` | ✅ Ready |

## How it works

Each app:
1. Opens the device camera automatically
2. Detects printed target images from the catalog/book
3. Plays an MP4 video overlay on top of the target
4. Pauses the video when the target leaves the frame

Multiple targets can be active simultaneously.

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

## Target → video mappings

### Machiavelli (9 targets)
Image targets compiled in order `1_target` → `9_target`. Videos: `src/assets/1.mp4` – `9.mp4`.

### Russian Roulette (8 targets — English)
Targets: `00060, 00113, 00182, 00225, 00313, 00342, 00387, 00806`
Videos in `rr-english/src/assets/`: `og3, og2, og9, og4, og6, og10, og8, og7` (matching target order above).
To switch language: change video paths in `index.html` to `rr-chinese/` or `rr-silent/`.

### Alice XR (4 targets)
| Target | Video |
|---|---|
| linear-leather | 9square.mp4 |
| paint-effects-bamboo | miniature-horse.mp4 |
| paint-effects-bamboo-inverted | eat-fb.mp4 |
| qr | cupcake.mp4 |

### Digital Combines (8 targets)
| Target | Video |
|---|---|
| ZigZagClothNoise | LittleRedRandom_LozengeAugment.mp4 |
| WeirdEastern | CellularPacMan_Lozenge.mp4 |
| RedArp | BigRedNudeSquare_augment.mp4 |
| QR_1000DPI | QR_Circle_Augment.mp4 |
| Random-Glitch-Plate | RandomGlitche_Square_HalfElipse_1.mp4 |
| MirrorGlitch_9.1inch | MirrorGlitch_WithElipseCut_Augment.mp4 |
| LinearLeather_9.1inch | LinearLeather_Square_Augment.mp4 |
| emoji-tartan | EmojiTartan_Square_Augment.mp4 |

## Compiling image targets

Use the [MindAR compiler](https://hiukim.github.io/mind-ar-js-doc/tools/compiler). Upload target images **in the exact order listed in the app's `index.html` comment** — the order determines the `targetIndex` used in the HTML. Save output as `image-targets/targets.mind`.

## Testing locally

```bash
python3 -m http.server 8080
# Open http://localhost:8080/machiavelli/
```

Camera access works on `localhost` without HTTPS. For mobile testing, use the GitHub Pages URL.

## Deployment (GitHub Pages)

Push to `main`. Enable Pages at **Settings → Pages → Branch: main / root**.

Apps are live at `https://keiiwia.github.io/claudia-hart-ar/<app-name>/`.

## QR code redirect

QR codes in printed catalogs were created via qr-code-generator.com (dynamic QR). Log in and update each code's destination URL to the corresponding GitHub Pages URL above. The printed QR code does not need to change.

## Video files & Git LFS

All `.mp4` files are stored in Git LFS (see `.gitattributes`). Large files (>50MB) should be compressed before adding:

```bash
ffmpeg -i input.mp4 -crf 28 -preset fast -movflags +faststart output.mp4
```
