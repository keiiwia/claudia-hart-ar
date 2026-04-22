// Copyright (c) 2022 8th Wall, Inc.
//
// app.js is the main entry point for your 8th Wall app. Code here will execute after head.html
// is loaded, and before body.html is loaded.

XR8.XrController.configure({
  disableWorldTracking: true,
  imageTargets: ['00060', '00113', '00182', '00225-v2', '00313', '00387', '00806', '00342'],
})
