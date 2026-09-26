import "./style.css";
import { KeyboardScene } from "./scene.js";

const icons = {
  arrow: '<path d="M5 12h14m-5-5 5 5-5 5"/>',
  reset: '<path d="M4 10a8 8 0 1 1 1 8M4 4v6h6"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5"/>',
  keyboard:
    '<rect x="2" y="5" width="20" height="14" rx="3"/><path d="M6 9h1m3 0h1m3 0h1m3 0h.1M6 12h1m3 0h1m3 0h1m3 0h.1M7 15h10"/>',
  sound:
    '<path d="m11 4-6 5H2v6h3l6 5V4Zm4 4a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  save: '<path d="M5 3h12l4 4v14H3V3h2Zm2 0v7h10V3M7 21v-7h10v7"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
};
const icon = (name, cls = "") =>
  `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;
const shells = [
  { id: "chalk", name: "Chalk", color: "#dcdcd3", hex: 0xc9cbc2 },
  { id: "graphite", name: "Graphite", color: "#414745", hex: 0x333b38 },
  { id: "sage", name: "Sage", color: "#8e9c88", hex: 0x899a82 },
];
const themes = [
  {
    id: "studio",
    name: "Studio",
    note: "A warm original",
    colors: ["#e9e8dc", "#646c63", "#ec7146"],
    alpha: 0xe9e7da,
    mod: 0x677066,
    accent: 0xed7349,
    text: "#444a40",
    modText: "#f7f7ed",
  },
  {
    id: "carbon",
    name: "Carbon",
    note: "After hours",
    colors: ["#444947", "#242a28", "#e9bb70"],
    alpha: 0x414846,
    mod: 0x252d2a,
    accent: 0xe9b76d,
    text: "#e1e6dc",
    modText: "#e6e7de",
  },
  {
    id: "garden",
    name: "Garden",
    note: "A softer perspective",
    colors: ["#dce3d2", "#81967c", "#ecddaf"],
    alpha: 0xd9e1ce,
    mod: 0x7e9579,
    accent: 0xe7d7a5,
    text: "#425440",
    modText: "#f3f5e9",
  },
];
const storageKey = "form68.config.v1";
const defaults = { shell: "chalk", theme: "studio" };
let config = { ...defaults };
try {
  const saved = JSON.parse(localStorage.getItem(storageKey));
  if (
    saved &&
    shells.some((s) => s.id === saved.shell) &&
    themes.some((t) => t.id === saved.theme)
  )
    config = { shell: saved.shell, theme: saved.theme };
} catch {
  /* A fresh configuration works when browser storage is unavailable. */
}
let exploded = false;
let typing = false;
let sound = false;
let savedConfig = JSON.stringify(config);

document.querySelector("#app").innerHTML = `
  <header class="site-header">
    <a class="wordmark" href="#" aria-label="Form home"><span class="brand-symbol"><i></i><i></i><i></i></span>form<span class="brand-period">®</span></a>
    <nav aria-label="Main navigation"><a href="#product" class="active">The keyboard <span>01</span></a><a href="#details">The details</a></nav>
    <span class="header-note"><span class="status-dot"></span> LESS, BUT BETTER.</span>
  </header>
  <main id="product">
    <div class="product-layout">
      <section class="product-showcase" aria-label="Form 68 interactive product preview">
        <div class="product-heading">
          <div><p class="eyebrow"><span></span> DESIGNED FOR YOUR EVERYDAY</p><h1>Form <span>68</span><sup>™</sup></h1><p class="intro">A little less on your desk.<br>A lot more at your fingertips.</p></div>
          <div class="edition">THE ESSENTIAL SERIES<br><span>NO. 001 / MECHANICAL</span></div>
        </div>
        <div class="stage" id="stage">
          <div class="stage-topline"><span class="preview-label"><span class="status-dot"></span> LIVE 3D PREVIEW</span><span id="view-label">ASSEMBLED / 01</span></div>
          <div id="canvas-host" role="img" aria-label="Interactive 3D model of a 68-key mechanical keyboard. Drag to rotate, scroll or pinch to zoom."></div>
          <div class="layer-labels" id="layer-labels" aria-hidden="true"><span>PBT KEYCAPS</span><span>ALUMINUM PLATE</span><span>SCULPTED CASE</span></div>
          <div class="stage-caption"><span class="tiny-cross">+</span><span>GOOD DESIGN. GREAT FEEL.</span><span class="tiny-cross">+</span></div>
          <div class="stage-bottom"><span class="drag-hint"><span>↔</span> Drag to rotate <i>·</i> Scroll to zoom</span><div class="view-actions"><button id="zoom-out" class="icon-button" aria-label="Zoom out">${icon("minus")}</button><button id="zoom-in" class="icon-button" aria-label="Zoom in">${icon("plus")}</button><span></span><button id="reset-view" class="icon-button" aria-label="Reset view" title="Reset view">${icon("reset")}</button></div></div>
          <div class="loading" id="loading">Shaping your keyboard<span></span></div>
        </div>
        <div class="experience-bar"><button id="explode" class="experience-button" aria-pressed="false">${icon("layers")}<span>Explore the layers</span><span class="button-arrow">↗</span></button><span class="bar-divider"></span><button id="typing" class="experience-button" aria-pressed="false">${icon("keyboard")}<span>Give it a try</span><span class="toggle-track"><i></i></span></button></div>
        <div class="typing-panel" id="typing-panel" hidden><div><span class="live-dot"></span><strong>Feel every keystroke.</strong><span class="typing-instruction"> Press A–Z or space. On touch, tap a key.</span></div><button id="sound" aria-pressed="false">${icon("sound")} Sound off</button><div id="key-feedback" aria-live="polite">Ready when you are</div></div>
      </section>
      <aside class="config-panel" aria-label="Keyboard configuration">
        <div class="panel-title"><p class="eyebrow">MAKE IT YOURS</p><span>01 — 03</span></div><h2>Your desk. Your Form.</h2><p class="panel-intro">Considered details. Personal touches.</p>
        <fieldset class="shell-section"><legend><span class="step">01</span> Case finish <span class="selection-name" id="shell-name">Chalk</span></legend><div class="shell-options">${shells.map((s) => `<button class="shell-option" data-shell="${s.id}" aria-label="${s.name} case" aria-pressed="false"><span class="shell-swatch" style="--swatch:${s.color}">${icon("check")}</span><span>${s.name}</span></button>`).join("")}</div><p class="material-note">A smooth, matte finish. Made to be touched.</p></fieldset>
        <fieldset class="theme-section"><legend><span class="step">02</span> Keycap palette</legend><div class="theme-options">${themes.map((t) => `<button class="theme-option" data-theme="${t.id}" aria-pressed="false"><span class="palette">${t.colors.map((c) => `<i style="background:${c}"></i>`).join("")}</span><span class="theme-text"><strong>${t.name}</strong><small>${t.note}</small></span><span class="radio-mark"></span></button>`).join("")}</div></fieldset>
        <section class="config-summary"><div class="summary-title"><span><span class="step">03</span> Your configuration</span><span class="little-tag">68 KEYS</span></div><div class="summary-product"><span>Form 68</span><span class="summary-mark">↗</span></div><p id="summary">Chalk case / Studio keycaps</p><div class="summary-spec"><span><i></i> Linear switches</span><span>US · ANSI</span></div></section>
        <button id="save" class="save-button"><span>${icon("save")} Save your configuration</span>${icon("arrow")}</button>
        <div class="save-meta"><span id="save-status" role="status">Saved on this device only</span><button id="defaults">Restore defaults</button></div>
        <div class="panel-footnote"><span>✳</span> A small object. A daily difference.</div>
      </aside>
    </div>
    <section class="details-strip" id="details" aria-label="Product details"><div class="detail-item"><span class="detail-icon">68<span>↗</span></span><div><h3>Less footprint. More room.</h3><p>All the essentials, in a compact 65% layout.</p></div></div><div class="detail-item"><span class="detail-icon switch-icon">${icon("layers")}</span><div><h3>A satisfying kind of quiet.</h3><p>Smooth linear switches. A softer landing.</p></div></div><div class="detail-item"><span class="detail-icon material-icon">PBT</span><div><h3>Made for the long run.</h3><p>Textured keycaps. A feel that stays with you.</p></div></div></section>
  </main>
  <footer><span>FORM / OBJECTS FOR EVERYDAY</span><span>Thoughtfully made. Unmistakably yours.</span><span>EST. 2026 <span class="footer-star">✳</span></span></footer>
  <div class="toast" id="toast" role="status"></div>
`;

let scene;
export { scene };
let toastTimer;
function toast(message) {
  const el = document.querySelector("#toast");
  el.textContent = message;
  el.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("visible"), 2600);
}
function updateUI() {
  const shell = shells.find((s) => s.id === config.shell);
  const theme = themes.find((t) => t.id === config.theme);
  document
    .querySelectorAll("[data-shell]")
    .forEach((b) =>
      b.setAttribute("aria-pressed", b.dataset.shell === config.shell),
    );
  document
    .querySelectorAll("[data-theme]")
    .forEach((b) =>
      b.setAttribute("aria-pressed", b.dataset.theme === config.theme),
    );
  document.querySelector("#shell-name").textContent = shell.name;
  document.querySelector("#summary").textContent =
    `${shell.name} case / ${theme.name} keycaps`;
  document.querySelector("#save-status").textContent =
    JSON.stringify(config) === savedConfig
      ? "Saved on this device only"
      : "Unsaved changes";
  scene?.setColors(shell.hex, theme);
}
try {
  scene = new KeyboardScene(document.querySelector("#canvas-host"), (key) => {
    document.querySelector("#key-feedback").textContent =
      key === "Space"
        ? "SPACE — a little breathing room."
        : `${key.toUpperCase()} — nice touch.`;
    if (sound) playKey();
  });
  document.querySelector("#loading").remove();
} catch (error) {
  document.querySelector("#loading").textContent =
    "3D preview needs WebGL. Please try a browser with hardware acceleration enabled.";
  console.error(error);
}
updateUI();
document.querySelectorAll("[data-shell]").forEach((b) =>
  b.addEventListener("click", () => {
    config.shell = b.dataset.shell;
    updateUI();
  }),
);
document.querySelectorAll("[data-theme]").forEach((b) =>
  b.addEventListener("click", () => {
    config.theme = b.dataset.theme;
    updateUI();
  }),
);
document.querySelector("#explode").addEventListener("click", () => {
  exploded = !exploded;
  scene?.setExploded(exploded);
  document.querySelector("#explode").setAttribute("aria-pressed", exploded);
  document.querySelector("#explode span").textContent = exploded
    ? "Bring it together"
    : "Explore the layers";
  document.querySelector("#view-label").textContent = exploded
    ? "EXPLODED / 02"
    : "ASSEMBLED / 01";
  document.querySelector("#layer-labels").classList.toggle("visible", exploded);
});
document.querySelector("#typing").addEventListener("click", () => {
  typing = !typing;
  scene?.setTyping(typing);
  document.querySelector("#typing").setAttribute("aria-pressed", typing);
  document.querySelector("#typing-panel").hidden = !typing;
  if (typing) scene?.renderer.domElement.focus({ preventScroll: true });
});
document
  .querySelector("#reset-view")
  .addEventListener("click", () => scene?.resetView());
document
  .querySelector("#zoom-in")
  .addEventListener("click", () => scene?.zoom(0.85));
document
  .querySelector("#zoom-out")
  .addEventListener("click", () => scene?.zoom(1.18));
document.querySelector("#save").addEventListener("click", () => {
  try {
    localStorage.setItem(storageKey, JSON.stringify(config));
    savedConfig = JSON.stringify(config);
    updateUI();
    toast("Your Form, saved. Pick up here next time.");
  } catch {
    toast("Storage is unavailable. Your configuration is still active.");
  }
});
document.querySelector("#defaults").addEventListener("click", () => {
  config = { ...defaults };
  savedConfig = JSON.stringify(defaults);
  try {
    localStorage.removeItem(storageKey);
  } catch {
    /* UI can still reset. */
  }
  updateUI();
  toast("Back to the original. Chalk + Studio.");
});
let audioContext;
function playKey() {
  audioContext ??= new (window.AudioContext || window.webkitAudioContext)();
  if (audioContext.state === "suspended") audioContext.resume();
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(190, audioContext.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(
    65,
    audioContext.currentTime + 0.045,
  );
  gain.gain.setValueAtTime(0.045, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(
    0.001,
    audioContext.currentTime + 0.065,
  );
  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.07);
}
document.querySelector("#sound").addEventListener("click", () => {
  sound = !sound;
  document.querySelector("#sound").setAttribute("aria-pressed", sound);
  document.querySelector("#sound").innerHTML =
    `${icon("sound")} Sound ${sound ? "on" : "off"}`;
  if (sound) playKey();
});
