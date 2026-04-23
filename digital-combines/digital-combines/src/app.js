// Copyright (c) 2022 8th Wall, Inc.
//
// app.js is the main entry point for your 8th Wall app. Code here will execute after head.html
// is loaded, and before body.html is loaded.

XR8.XrController.configure({
  disableWorldTracking: true,
  imageTargets: ['alpha-circular', 'JoyfulNoiseOrange', 'RedArp', 'WeirdEastern', 'ZigZagClothNoise', 'MirrorGlitch_9.1inch', 'LinearLeather_9.1inch', 'QR_1000DPI', 'Random-Glitch-Plate', 'emoji-tartan', 'hermitage-combined-1'],
})

// import {productLinkComponent} from './components'
// AFRAME.registerComponent('product-link', productLinkComponent)

// document.addEventListener('click',(e) => {
//   console.log(e.target)
// })

// document.querySelector('#statement-1')

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
const vh = window.innerHeight * 0.01
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`)

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
})
AFRAME.registerComponent('my-named-image-target', {
  schema: {
    name: {type: 'string'},
  },
  init() {
    const {name} = this.data

    this.el.sceneEl.addEventListener('xrimagefound', ({detail}) => {
      if (name != detail.name) return
      document.querySelector('#statement-1').classList.add('visible')
    })

    document.querySelector('#show-intro').onclick = () => {
      document.querySelector('#text-content-1').classList.add('visible')
      document.querySelector('#text-content-2').classList.remove('visible')
      document.querySelector('#text-content-1').scrollTop = 0
    }

    document.querySelector('#show-memento').onclick = () => {
      document.querySelector('#text-content-2').classList.add('visible')
      document.querySelector('#text-content-1').classList.remove('visible')
      document.querySelector('#text-content-2').scrollTop = 0
    }

    // this.el.sceneEl.addEventListener('xrimageupdated', showImage)
    // this.el.sceneEl.addEventListener('xrimagelost', hideImage)

    const statements = document.querySelectorAll('.statement')
    const closeModals = document.querySelectorAll('.close-modal')
    closeModals.forEach((elm) => {
      elm.onclick = () => {
        statements.forEach((statementElm) => {
          statementElm.classList.remove('visible')
        })
      }
    })
  },
})
