import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

const rows = [
  [
    ["Esc", 1],
    ["1", 1],
    ["2", 1],
    ["3", 1],
    ["4", 1],
    ["5", 1],
    ["6", 1],
    ["7", 1],
    ["8", 1],
    ["9", 1],
    ["0", 1],
    ["−", 1],
    ["=", 1],
    ["Backspace", 2],
    ["Del", 1],
  ],
  [
    ["Tab", 1.5],
    ["Q", 1],
    ["W", 1],
    ["E", 1],
    ["R", 1],
    ["T", 1],
    ["Y", 1],
    ["U", 1],
    ["I", 1],
    ["O", 1],
    ["P", 1],
    ["[", 1],
    ["]", 1],
    ["\\", 1.5],
    ["PgUp", 1],
  ],
  [
    ["Caps", 1.75],
    ["A", 1],
    ["S", 1],
    ["D", 1],
    ["F", 1],
    ["G", 1],
    ["H", 1],
    ["J", 1],
    ["K", 1],
    ["L", 1],
    [";", 1],
    ["'", 1],
    ["Enter", 2.25],
    ["PgDn", 1],
  ],
  [
    ["Shift", 2.25],
    ["Z", 1],
    ["X", 1],
    ["C", 1],
    ["V", 1],
    ["B", 1],
    ["N", 1],
    ["M", 1],
    [",", 1],
    [".", 1],
    ["/", 1],
    ["Shift", 1.75],
    ["↑", 1],
    ["End", 1],
  ],
  [
    ["Ctrl", 1.25],
    ["◆", 1.25],
    ["Alt", 1.25],
    ["Space", 6.25],
    ["Alt", 1],
    ["Fn", 1],
    ["←", 1],
    ["↓", 1],
    ["→", 1],
    ["Home", 1],
  ],
];
const editable = (el) =>
  el instanceof Element &&
  !!el.closest(
    'input, textarea, select, [contenteditable]:not([contenteditable="false"]), [role="textbox"]',
  );

export class KeyboardScene {
  constructor(host, onKey) {
    this.host = host;
    this.onKey = onKey;
    this.keys = [];
    this.keyMap = new Map();
    this.pressed = new Set();
    this.pointerKeys = new Map();
    this.typing = false;
    this.exploded = false;
    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();
    this.clock = new THREE.Clock();
    this.reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.02;
    this.renderer.domElement.setAttribute(
      "aria-label",
      "Rotate and inspect the Form 68 keyboard",
    );
    this.renderer.domElement.tabIndex = 0;
    host.appendChild(this.renderer.domElement);
    this.camera = new THREE.PerspectiveCamera(29, 1, 0.1, 150);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.enablePan = false;
    this.controls.minPolarAngle = 0.15;
    this.controls.maxPolarAngle = Math.PI / 2.08;
    this.controls.minDistance = 12;
    this.controls.maxDistance = 39;
    this.controls.rotateSpeed = 0.65;
    this.controls.zoomSpeed = 0.7;
    this.controls.addEventListener("start", () => {
      this.cameraTween = null;
    });
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x9ba18d, 1.8));
    const light = new THREE.DirectionalLight(0xfff8e9, 3.2);
    light.position.set(-8, 17, 8);
    light.castShadow = true;
    light.shadow.mapSize.set(2048, 2048);
    Object.assign(light.shadow.camera, {
      left: -14,
      right: 14,
      top: 13,
      bottom: -13,
      near: 0.5,
      far: 45,
    });
    light.shadow.normalBias = 0.035;
    light.shadow.bias = -0.00015;
    light.shadow.radius = 4;
    this.scene.add(light);
    const fill = new THREE.DirectionalLight(0xe8efff, 1.5);
    fill.position.set(10, 6, -8);
    this.scene.add(fill);
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(200, 200),
      new THREE.ShadowMaterial({ color: 0x626b54, opacity: 0.16 }),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.59;
    ground.receiveShadow = true;
    this.scene.add(ground);
    this.keyboard = new THREE.Group();
    this.keyboard.rotation.set(0.065, -0.085, 0);
    this.scene.add(this.keyboard);
    this.caseLayer = new THREE.Group();
    this.plateLayer = new THREE.Group();
    this.keyLayer = new THREE.Group();
    this.keyboard.add(this.caseLayer, this.plateLayer, this.keyLayer);
    this.caseMaterial = new THREE.MeshStandardMaterial({
      color: 0xc9cbc2,
      roughness: 0.55,
      metalness: 0.22,
    });
    this.plateMaterial = new THREE.MeshStandardMaterial({
      color: 0x565e53,
      roughness: 0.42,
      metalness: 0.68,
    });
    this.alphaMaterial = new THREE.MeshStandardMaterial({ roughness: 0.62 });
    this.modMaterial = new THREE.MeshStandardMaterial({ roughness: 0.62 });
    this.accentMaterial = new THREE.MeshStandardMaterial({ roughness: 0.59 });
    const bottomMaterial = new THREE.MeshStandardMaterial({
      color: 0x8e9786,
      roughness: 0.7,
      metalness: 0.18,
    });
    this.box(
      16.82,
      0.25,
      5.94,
      0.13,
      bottomMaterial,
      this.caseLayer,
      0,
      -0.31,
      0,
    );
    this.box(
      17,
      0.62,
      6.08,
      0.19,
      this.caseMaterial,
      this.caseLayer,
      0,
      -0.015,
      0,
    );
    // An inset cavity gives the plate and keys a continuous, physical enclosure.
    this.box(
      16.46,
      0.07,
      5.51,
      0.12,
      new THREE.MeshStandardMaterial({ color: 0x3e4739, roughness: 0.85 }),
      this.caseLayer,
      0,
      0.319,
      -0.025,
    );
    this.box(
      16.37,
      0.15,
      5.42,
      0.08,
      this.plateMaterial,
      this.plateLayer,
      0,
      0.39,
      -0.025,
    );
    const gasket = new THREE.MeshStandardMaterial({
      color: 0x31382b,
      roughness: 0.95,
    });
    for (const x of [-6.6, 0, 6.6])
      for (const z of [-2.67, 2.64])
        this.box(0.85, 0.1, 0.09, 0.035, gasket, this.plateLayer, x, 0.41, z);
    const screwMaterial = new THREE.MeshStandardMaterial({
      color: 0xa1a697,
      metalness: 0.8,
      roughness: 0.3,
    });
    for (const x of [-8.03, 8.03])
      for (const z of [-2.48, 2.48]) {
        const screw = new THREE.Mesh(
          new THREE.CylinderGeometry(0.055, 0.055, 0.018, 12),
          screwMaterial,
        );
        screw.position.set(x, 0.476, z);
        this.plateLayer.add(screw);
      }
    const switchMaterial = new THREE.MeshStandardMaterial({
      color: 0xc2c5b4,
      roughness: 0.4,
      metalness: 0.08,
    });
    const stemMaterial = new THREE.MeshStandardMaterial({
      color: 0xe7a16b,
      roughness: 0.55,
    });
    rows.forEach((row, r) => {
      let cursor = -8;
      row.forEach(([label, units]) => {
        const x = cursor + units / 2;
        const z = (r - 2) * 1.035;
        cursor += units;
        this.box(
          0.52,
          0.17,
          0.52,
          0.05,
          switchMaterial,
          this.plateLayer,
          x,
          0.54,
          z,
        );
        this.box(
          0.2,
          0.14,
          0.2,
          0.025,
          stemMaterial,
          this.plateLayer,
          x,
          0.69,
          z,
        );
        const isAlpha =
          label.length === 1 && !["◆", "↑", "↓", "←", "→"].includes(label);
        const accent = label === "Esc" || label === "Enter";
        const group = new THREE.Group();
        group.position.set(x, 0.89, z);
        this.keyLayer.add(group);
        const width = units - 0.115;
        const material = accent
          ? this.accentMaterial
          : isAlpha || label === "Space"
            ? this.alphaMaterial
            : this.modMaterial;
        const keycap = this.box(
          width,
          0.46,
          0.905,
          0.075,
          material,
          group,
          0,
          0,
          0,
        );
        // Slightly inset top with a rounded shoulder, rather than floating cubes.
        this.box(
          width - 0.1,
          0.055,
          0.78,
          0.026,
          material,
          group,
          0,
          0.218,
          -0.018,
        );
        const legend = new THREE.Mesh(
          new THREE.PlaneGeometry(width - 0.09, 0.77),
          new THREE.MeshBasicMaterial({
            transparent: true,
            depthWrite: false,
            polygonOffset: true,
            polygonOffsetFactor: -2,
          }),
        );
        legend.rotation.x = -Math.PI / 2;
        legend.position.set(0, 0.248, -0.018);
        group.add(legend);
        const key = {
          group,
          keycap,
          legend,
          label,
          width,
          isAlpha,
          accent,
          travel: 0,
          hitUntil: 0,
        };
        keycap.userData.key = key;
        group.children.forEach((child) => {
          child.userData.key = key;
        });
        this.keys.push(key);
        this.keyMap.set(label, key);
        if (label === "F" || label === "J")
          this.box(0.19, 0.016, 0.028, 0.009, material, group, 0, 0.254, 0.245);
      });
    });
    // Visible rear USB-C port and a subtle front maker's mark.
    this.box(
      0.72,
      0.19,
      0.04,
      0.07,
      gasket,
      this.caseLayer,
      -5.7,
      0.025,
      -3.044,
    );
    this.box(
      0.48,
      0.045,
      0.047,
      0.015,
      screwMaterial,
      this.caseLayer,
      -5.7,
      0.02,
      -3.057,
    );
    const mark = this.labelTexture("f o r m", "#707963", 3, true);
    const badge = new THREE.Mesh(
      new THREE.PlaneGeometry(0.67, 0.16),
      new THREE.MeshBasicMaterial({
        map: mark,
        transparent: true,
        depthWrite: false,
      }),
    );
    badge.position.set(6.8, -0.025, 3.043);
    this.caseLayer.add(badge);
    const led = new THREE.Mesh(
      new THREE.SphereGeometry(0.026, 10, 8),
      new THREE.MeshStandardMaterial({
        color: 0xe7a45e,
        emissive: 0xe58a34,
        emissiveIntensity: 0.6,
      }),
    );
    led.position.set(7.7, 0.327, 2.78);
    this.caseLayer.add(led);
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(host);
    this.resize();
    this.resetView(true);
    this.bindEvents();
    this.renderer.setAnimationLoop(() => this.animate());
  }

  box(w, h, d, radius, material, parent, x, y, z) {
    const mesh = new THREE.Mesh(
      new RoundedBoxGeometry(w, h, d, 3, radius),
      material,
    );
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  }

  labelTexture(label, color, width, center = false) {
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(128 * width);
    canvas.height = 128;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.font = `${label.length > 2 ? 19 : 26}px Arial, sans-serif`;
    ctx.textBaseline = "middle";
    ctx.textAlign = center ? "center" : "left";
    if (label === "Space") {
      ctx.font = "11px monospace";
      ctx.textAlign = "center";
      ctx.fillText("f  o  r  m", canvas.width / 2, 65);
    } else {
      ctx.fillText(label, center ? canvas.width / 2 : 17, center ? 64 : 37);
      const secondary = {
        1: "!",
        2: "@",
        3: "#",
        4: "$",
        5: "%",
        6: "^",
        7: "&",
        8: "*",
        9: "(",
        0: ")",
        "−": "_",
        "=": "+",
      }[label];
      if (secondary) {
        ctx.font = "15px Arial";
        ctx.globalAlpha = 0.65;
        ctx.fillText(secondary, 17, 83);
      }
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = Math.min(
      8,
      this.renderer.capabilities.getMaxAnisotropy(),
    );
    return texture;
  }

  setColors(shell, theme) {
    this.caseMaterial.color.setHex(shell);
    this.alphaMaterial.color.setHex(theme.alpha);
    this.modMaterial.color.setHex(theme.mod);
    this.accentMaterial.color.setHex(theme.accent);
    if (this.themeId !== theme.id) {
      for (const key of this.keys) {
        key.legend.material.map?.dispose();
        const color = key.accent
          ? "#3c4134"
          : key.isAlpha || key.label === "Space"
            ? theme.text
            : theme.modText;
        key.legend.material.map = this.labelTexture(
          key.label,
          color,
          key.width,
        );
        key.legend.material.needsUpdate = true;
      }
      this.themeId = theme.id;
    }
  }

  resize() {
    const { width, height } = this.host.getBoundingClientRect();
    if (!width || !height) return;
    const prior = this.camera.aspect;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    if (Math.abs(prior - this.camera.aspect) > 0.05) this.resetView(true);
  }

  viewDistance() {
    // Fit rotated bounds, including the near corners, inside the preview controls.
    const fitCamera = this.camera.clone();
    const target = new THREE.Vector3(0, this.exploded ? 1.5 : 0.25, 0);
    const direction = new THREE.Vector3(0.13, 0.86, 0.75).normalize();
    this.keyboard.updateMatrixWorld(true);
    for (let distance = 16; distance <= 60; distance += 0.4) {
      fitCamera.position.copy(direction).multiplyScalar(distance).add(target);
      fitCamera.lookAt(target);
      fitCamera.updateMatrixWorld();
      let fits = true;
      for (const x of [-8.6, 8.6])
        for (const y of [-0.5, this.exploded ? 4.3 : 1.3])
          for (const z of [-3.15, 3.15]) {
            const p = new THREE.Vector3(x, y, z)
              .applyMatrix4(this.keyboard.matrixWorld)
              .project(fitCamera);
            if (Math.abs(p.x) > 0.91 || Math.abs(p.y) > 0.84) fits = false;
          }
      if (fits) return distance;
    }
    return 60;
  }

  resetView(immediate = false) {
    const target = new THREE.Vector3(0, this.exploded ? 1.5 : 0.25, 0);
    const position = new THREE.Vector3(0.13, 0.86, 0.75)
      .normalize()
      .multiplyScalar(this.viewDistance())
      .add(target);
    this.controls.maxDistance = Math.max(39, this.viewDistance() * 1.6);
    if (immediate) {
      this.camera.position.copy(position);
      this.controls.target.copy(target);
      this.controls.update();
    } else this.cameraTween = { position, target };
  }

  zoom(factor) {
    this.cameraTween = null;
    const offset = this.camera.position.clone().sub(this.controls.target);
    offset.setLength(
      THREE.MathUtils.clamp(
        offset.length() * factor,
        this.controls.minDistance,
        this.controls.maxDistance,
      ),
    );
    this.camera.position.copy(this.controls.target).add(offset);
    this.controls.update();
  }

  setExploded(value) {
    this.exploded = value;
    // Animate toward absolute targets; repeated toggles cannot accumulate offsets.
    const target = new THREE.Vector3(0, value ? 1.5 : 0.25, 0);
    const direction = this.camera.position
      .clone()
      .sub(this.controls.target)
      .normalize();
    this.cameraTween = {
      target,
      position: direction.multiplyScalar(this.viewDistance()).add(target),
    };
  }

  setTyping(value) {
    this.typing = value;
    if (!value) this.releaseAll();
  }
  releaseAll() {
    this.pressed.clear();
    this.pointerKeys.clear();
  }
  press(key) {
    if (!key) return;
    key.hitUntil = performance.now() + 110;
    this.onKey(key.label);
  }
  pick(event) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.pointer.set(
      ((event.clientX - rect.left) / rect.width) * 2 - 1,
      -((event.clientY - rect.top) / rect.height) * 2 + 1,
    );
    this.raycaster.setFromCamera(this.pointer, this.camera);
    return this.raycaster.intersectObjects(this.keyLayer.children, true)[0]
      ?.object.userData.key;
  }

  bindEvents() {
    window.addEventListener("keydown", (event) => {
      if (
        !this.typing ||
        editable(event.target) ||
        event.ctrlKey ||
        event.metaKey ||
        event.altKey
      )
        return;
      const label =
        event.code === "Space"
          ? "Space"
          : /^Key[A-Z]$/.test(event.code)
            ? event.code.slice(3)
            : null;
      if (!label) return;
      // Space on a focused button keeps its native activation behavior.
      if (
        label === "Space" &&
        event.target instanceof Element &&
        event.target.closest("button,a")
      )
        return;
      event.preventDefault();
      if (!this.pressed.has(label)) {
        this.pressed.add(label);
        this.press(this.keyMap.get(label));
      }
    });
    window.addEventListener("keyup", (event) => {
      this.pressed.delete(
        event.code === "Space" ? "Space" : event.code.replace("Key", ""),
      );
    });
    window.addEventListener("blur", () => this.releaseAll());
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) this.releaseAll();
    });
    const canvas = this.renderer.domElement;
    canvas.addEventListener("pointerdown", (event) => {
      if (!this.typing) return;
      const key = this.pick(event);
      if (!key) return;
      this.pointerKeys.set(event.pointerId, key);
      this.press(key);
    });
    const release = (event) => {
      this.pointerKeys.delete(event.pointerId);
    };
    window.addEventListener("pointerup", release);
    window.addEventListener("pointercancel", release);
  }

  animate() {
    const dt = Math.min(this.clock.getDelta(), 0.05);
    const blend = this.reducedMotion ? 1 : 1 - Math.exp(-dt * 8);
    this.keyLayer.position.y = THREE.MathUtils.lerp(
      this.keyLayer.position.y,
      this.exploded ? 3.05 : 0,
      blend,
    );
    this.plateLayer.position.y = THREE.MathUtils.lerp(
      this.plateLayer.position.y,
      this.exploded ? 1.35 : 0,
      blend,
    );
    if (
      Math.abs(this.keyLayer.position.y - (this.exploded ? 3.05 : 0)) < 0.0001
    )
      this.keyLayer.position.y = this.exploded ? 3.05 : 0;
    if (
      Math.abs(this.plateLayer.position.y - (this.exploded ? 1.35 : 0)) < 0.0001
    )
      this.plateLayer.position.y = this.exploded ? 1.35 : 0;
    const now = performance.now();
    for (const key of this.keys) {
      const down =
        this.pressed.has(key.label) ||
        [...this.pointerKeys.values()].includes(key) ||
        now < key.hitUntil;
      key.travel = THREE.MathUtils.lerp(
        key.travel,
        down ? 0.17 : 0,
        1 - Math.exp(-dt * 32),
      );
      key.group.position.y = 0.89 - key.travel;
    }
    if (this.cameraTween) {
      this.camera.position.lerp(this.cameraTween.position, blend);
      this.controls.target.lerp(this.cameraTween.target, blend);
      if (this.camera.position.distanceTo(this.cameraTween.position) < 0.003)
        this.cameraTween = null;
    }
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}
