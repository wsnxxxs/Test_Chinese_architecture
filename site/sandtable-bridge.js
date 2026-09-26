// Enabled only in the gallery's temporary, same-origin scene loader.
(() => {
  if (window.parent === window || !new URLSearchParams(location.search).has('sandtable')) return;
  const scenes = window.__galleryScenes = [];
  window.__galleryCaptureScene = (scene) => scenes.push(scene);
  let previous = '', stable = 0;
  const started = performance.now();
  const timer = setInterval(() => {
    let meshes = 0, vertices = 0;
    for (const scene of scenes) scene.traverse((object) => {
      if (object.isMesh) { meshes++; vertices += object.geometry?.attributes?.position?.count ?? 0; }
    });
    const signature = `${meshes}/${vertices}`;
    stable = signature === previous ? stable + 1 : 0;
    previous = signature;
    if (meshes && stable >= 3 && performance.now() - started > 1800) {
      clearInterval(timer);
      parent.postMessage({ type: 'gallery-scene-ready' }, location.origin);
    }
  }, 400);
})();
