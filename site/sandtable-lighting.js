import * as THREE from 'three';

export const lightingPanel = `<details class="sand-lighting" open>
  <summary><span><span class="sand-light-icon" aria-hidden="true">☀</span> 光照与时间</span><span><output data-clock aria-live="off">12:00</output> <span class="sand-light-chevron">⌄</span></span></summary>
  <div class="sand-light-content">
    <div class="sand-time-presets" role="group" aria-label="时段预设">
      <button data-hour="6.5" aria-pressed="false">晨曦</button><button data-hour="12" aria-pressed="true">正午</button><button data-hour="17.5" aria-pressed="false">黄昏</button><button data-hour="21" aria-pressed="false">夜景</button>
    </div>
    <label class="sand-time-label" for="sand-time"><span data-phase>日照充足</span><span>24 小时</span></label>
    <input id="sand-time" type="range" min="0" max="1439" step="1" value="720" aria-label="沙盘时间" aria-valuetext="12:00">
    <div class="sand-time-ticks" aria-hidden="true"><span>00</span><span>06</span><span>12</span><span>18</span><span>24</span></div>
    <div class="sand-time-play"><button data-light-action="play" aria-pressed="false">▶ 播放昼夜</button><select aria-label="昼夜播放速度"><option value="120">2 分钟 / 天</option><option value="60">1 分钟 / 天</option><option value="300">5 分钟 / 天</option></select></div>
    <div class="sand-light-adjust"><label for="sand-exposure">画面亮度</label><output data-exposure>100%</output><input id="sand-exposure" type="range" min="65" max="160" step="5" value="100" aria-label="画面亮度"></div>
    <div class="sand-light-footer"><label><input type="checkbox" data-shadows checked> 建筑阴影</label><button data-light-action="reset">恢复默认</button></div>
  </div>
</details>`;

// Shared presentation lighting; original materials and their emissive colours stay intact.
const keyframes = [
  // hour, horizon, zenith, skylight, ground bounce, key colour, sky power, key power
  [0, '#303d60', '#0c142b', '#829bd5', '#3b405b', '#b2ccff', 0.65, 1.15],
  [5, '#565774', '#202a4c', '#9aa6d4', '#494555', '#c3d5ff', 0.75, 0.65],
  [6, '#ddac91', '#6b8cae', '#f0c4ad', '#8c7567', '#ffb778', 1.25, 0],
  [6.5, '#ebc1a1', '#8cacca', '#fce0c0', '#938778', '#ffbd83', 1.65, 2.3],
  [9, '#dce3dd', '#92b7d5', '#eaf2ff', '#969e8b', '#fff0dc', 2.1, 3.1],
  [12, '#e6e7df', '#8fb6d8', '#eef5ff', '#949c87', '#fff5e5', 2.2, 3.4],
  [16, '#e7d9c6', '#94afc9', '#f9e8d0', '#9a8d78', '#ffe0b0', 1.95, 2.8],
  [17.5, '#e6ad91', '#778ba8', '#ecc2b3', '#806d65', '#ffab70', 1.45, 2.2],
  [18, '#ba8e9e', '#525e88', '#c6b1d0', '#635e77', '#ffc095', 1.1, 0],
  [19, '#4b5279', '#182641', '#8e9ec9', '#42495f', '#b8d2ff', 0.65, 0.8],
  [21, '#303d60', '#0c142b', '#829bd5', '#3b405b', '#b2ccff', 0.65, 1.15],
  [24, '#303d60', '#0c142b', '#829bd5', '#3b405b', '#b2ccff', 0.65, 1.15],
].map(([hour, ...values]) => ({ hour, colors: values.slice(0, 5).map(c => new THREE.Color(c)), sky: values[5], key: values[6] }));

export function createSandtableLighting({ scene, renderer, grid, el, signal }) {
  const panel = el.querySelector('.sand-lighting');
  const timeInput = panel.querySelector('#sand-time');
  const brightnessInput = panel.querySelector('#sand-exposure');
  const shadowsInput = panel.querySelector('[data-shadows]');
  const playButton = panel.querySelector('[data-light-action="play"]');
  let hour = 12, brightness = 100, shadows = true, playing = false, dayDuration = 120;
  let lastFrame = 0, lastUpdate = 0, dirty = true, radius = 190, height = 60;
  try {
    const saved = JSON.parse(localStorage.getItem('sandtable-lighting'));
    if (saved && Number.isFinite(saved.hour)) hour = THREE.MathUtils.clamp(saved.hour, 0, 23.9833);
    if (saved && Number.isFinite(saved.brightness)) brightness = THREE.MathUtils.clamp(saved.brightness, 65, 160);
    if (typeof saved?.shadows === 'boolean') shadows = saved.shadows;
  } catch { /* Browser storage is optional. */ }
  function save() {
    try { localStorage.setItem('sandtable-lighting', JSON.stringify({ hour, brightness, shadows })); } catch { /* Optional preference. */ }
  }

  renderer.shadowMap.enabled = shadows;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.shadowMap.autoUpdate = false;
  const skyLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 2);
  const keyLight = new THREE.DirectionalLight(0xffffff, 3);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.set(2048, 2048);
  keyLight.shadow.normalBias = 0.1;
  keyLight.shadow.bias = -0.00015;
  keyLight.shadow.intensity = 0.8;
  keyLight.shadow.radius = 2;
  scene.add(skyLight, keyLight, keyLight.target);
  const sky = new THREE.Mesh(new THREE.SphereGeometry(2400, 24, 16), new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false,
    uniforms: { horizon: { value: new THREE.Color() }, zenith: { value: new THREE.Color() } },
    vertexShader: 'varying vec3 direction; void main() { direction = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: 'uniform vec3 horizon; uniform vec3 zenith; varying vec3 direction; void main() { float h = pow(max(normalize(direction).y, 0.0), 0.55); gl_FragColor = vec4(mix(horizon, zenith, h), 1.0);\n #include <tonemapping_fragment>\n #include <colorspace_fragment>\n }',
  }));
  sky.renderOrder = -1;
  scene.add(sky);
  scene.background = new THREE.Color();
  scene.fog = new THREE.Fog(0xffffff, 600, 1750);
  const colors = Array.from({ length: 5 }, () => new THREE.Color());

  function updateUI() {
    const minutes = Math.floor(hour * 60) % 1440;
    const clock = `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;
    panel.querySelector('[data-clock]').textContent = clock;
    timeInput.value = minutes;
    timeInput.setAttribute('aria-valuetext', clock);
    brightnessInput.value = brightness;
    panel.querySelector('[data-exposure]').textContent = `${brightness}%`;
    shadowsInput.checked = shadows;
    panel.querySelectorAll('[data-hour]').forEach(button => button.setAttribute('aria-pressed', String(Math.abs(hour - Number(button.dataset.hour)) < 1 / 120)));
    const night = hour < 6 || hour >= 18;
    panel.querySelector('.sand-light-icon').textContent = night ? '☾' : '☀';
    panel.querySelector('[data-phase]').textContent = hour < 5 || hour >= 19 ? '月光夜景' : hour < 9 ? '晨光渐起' : hour < 16 ? '日照充足' : '落日余晖';
    el.classList.toggle('sand-night', night);
    playButton.textContent = playing ? 'Ⅱ 暂停昼夜' : '▶ 播放昼夜';
    playButton.setAttribute('aria-pressed', String(playing));
  }
  function apply() {
    const end = keyframes.findIndex(frame => frame.hour > hour);
    const a = keyframes[end - 1], b = keyframes[end];
    let blend = (hour - a.hour) / (b.hour - a.hour);
    blend = blend * blend * (3 - 2 * blend);
    colors.forEach((color, i) => color.copy(a.colors[i]).lerp(b.colors[i], blend));
    sky.material.uniforms.horizon.value.copy(colors[0]);
    sky.material.uniforms.zenith.value.copy(colors[1]);
    scene.background.copy(colors[0]); scene.fog.color.copy(colors[0]);
    skyLight.color.copy(colors[2]); skyLight.groundColor.copy(colors[3]);
    skyLight.intensity = THREE.MathUtils.lerp(a.sky, b.sky, blend);
    keyLight.color.copy(colors[4]); keyLight.intensity = THREE.MathUtils.lerp(a.key, b.key, blend);
    const night = hour < 6 || hour >= 18;
    grid.material.opacity = THREE.MathUtils.lerp(0.07, 0.2, Math.min(1, skyLight.intensity / 2.2));
    const angle = ((hour - 6) / 12) * Math.PI;
    const direction = new THREE.Vector3(-Math.cos(angle), Math.sin(angle), 0.38);
    if (night) direction.multiplyScalar(-1);
    direction.y = Math.max(0.04, direction.y); direction.normalize();
    const distance = radius * 2 + 200;
    keyLight.target.position.set(0, height / 2, 0);
    keyLight.position.copy(keyLight.target.position).addScaledVector(direction, distance);
    Object.assign(keyLight.shadow.camera, { left: -radius, right: radius, top: radius, bottom: -radius, near: 1, far: distance + radius * 2 });
    keyLight.shadow.camera.updateProjectionMatrix();
    renderer.toneMappingExposure = brightness / 100;
    renderer.shadowMap.enabled = shadows;
    renderer.shadowMap.needsUpdate = true;
    updateUI(); dirty = false;
  }
  panel.addEventListener('input', event => {
    if (event.target === timeInput) { hour = Number(timeInput.value) / 60; playing = false; }
    else if (event.target === brightnessInput) brightness = Number(brightnessInput.value);
    else if (event.target === shadowsInput) shadows = shadowsInput.checked;
    else return;
    dirty = true; updateUI();
  }, { signal });
  panel.addEventListener('change', event => {
    if (event.target.tagName === 'SELECT') dayDuration = Number(event.target.value);
    save();
  }, { signal });
  panel.addEventListener('click', event => {
    const button = event.target.closest('button'); if (!button) return;
    if (button.dataset.hour) { hour = Number(button.dataset.hour); playing = false; }
    else if (button.dataset.lightAction === 'play') playing = !playing;
    else if (button.dataset.lightAction === 'reset') { hour = 12; brightness = 100; shadows = true; playing = false; dayDuration = 120; panel.querySelector('select').value = '120'; }
    dirty = true; updateUI(); save();
  }, { signal });
  if (matchMedia('(max-width: 1000px)').matches) panel.open = false;
  apply();
  return {
    fit(width, depth, modelHeight) { height = Math.max(30, modelHeight); radius = Math.hypot(width, depth, height) / 2 + 15; dirty = true; },
    tick(now, camera) {
      const delta = lastFrame ? Math.min((now - lastFrame) / 1000, 0.1) : 0;
      lastFrame = now;
      if (document.hidden) return;
      sky.position.copy(camera.position);
      if (playing) { hour = (hour + delta * 24 / dayDuration) % 24; }
      // Static shadows are reused when orbiting; playback refreshes at 12 Hz.
      if (dirty || (playing && now - lastUpdate >= 80)) { apply(); lastUpdate = now; }
    },
    dispose() { save(); keyLight.shadow.dispose(); },
  };
}
