const statusEl = document.getElementById("ar-status");
const sceneEl = document.getElementById("ar-scene");

function setStatus(text, variant) {
  if (!statusEl) return;
  statusEl.textContent = text;
  statusEl.classList.remove("status--ready", "status--error");
  if (variant) statusEl.classList.add(`status--${variant}`);
}

// Basic scene lifecycle hooks
if (sceneEl) {
  sceneEl.addEventListener("loaded", () => {
    setStatus("Point at an image target", "ready");
  });

  sceneEl.addEventListener("arjs-video-loaded", () => {
    setStatus("Camera ready — point at target", "ready");
  });

  sceneEl.addEventListener("arjs-error", () => {
    setStatus("AR error — check camera permissions", "error");
  });
}

// Marker events
["model-marker", "video-marker"].forEach((id) => {
  const marker = document.getElementById(id);
  if (marker) {
    marker.addEventListener("markerFound", () => setStatus("Target found", "ready"));
    marker.addEventListener("markerLost", () => setStatus("Point at target", "ready"));
  }
});

// Small UX enhancement: on iOS Safari, hint to use full-screen
document.addEventListener("DOMContentLoaded", () => {
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
    // iOS
    setStatus("On iOS, use Safari for best AR", "ready");
  }
});

