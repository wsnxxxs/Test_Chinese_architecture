import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const STORAGE_KEY = 'forma68.saved-configuration.v1';
const DEFAULT_CONFIG = { shell: 'graphite', caps: 'atelier' };

const SHELLS = [
  { id: 'graphite', name: 'Graphite', detail: '阳极氧化 · 深石墨', color: '#393a3c', trim: '#b8a376', display: '#383a3d' },
  { id: 'chalk', name: 'Chalk', detail: '粉末涂层 · 雾白', color: '#dedbd2', trim: '#a89270', display: '#ddd9d0' },
  { id: 'moss', name: 'Moss', detail: '阳极氧化 · 苔藓绿', color: '#596252', trim: '#c9aa71', display: '#596252' },
];

const THEMES = [
  { id: 'atelier', name: 'Atelier', subtitle: '温润陶白', base: '#e8e4db', accent: '#cf745d', legend: '#343436', modifier: '#d9cbbb', swatch: ['#e8e4db', '#d9cbbb', '#cf745d'] },
  { id: 'glacier', name: 'Glacier', subtitle: '雾蓝冰川', base: '#d5e2e5', accent: '#397f91', legend: '#253942', modifier: '#b9cbd0', swatch: ['#d5e2e5', '#b9cbd0', '#397f91'] },
  { id: 'ember', name: 'Ember', subtitle: '陶土余烬', base: '#e5d8ca', accent: '#b76542', legend: '#43352f', modifier: '#d8c1ab', swatch: ['#e5d8ca', '#d8c1ab', '#b76542'] },
];

const NAVY = '#25282a';
const UNIT = 0.67;
const GAP = 0.055;
const ROW_Z = [1.63, 0.81, 0, -0.81, -1.63];

const rows = [
  [['Esc', 1], ['`', 1], ['1', 1], ['2', 1], ['3', 1], ['4', 1], ['5', 1], ['6', 1], ['7', 1], ['8', 1], ['9', 1], ['0', 1], ['-', 1], ['=', 1], ['Backspace', 2], ['Del', 1]],
  [['Tab', 1.5], ...'QWERTYUIOP'.split('').map((key) => [key, 1]), ['[', 1], [']', 1], ['\\', 1.5], ['Home', 1]],
  [['Caps', 1.75], ...'ASDFGHJKL'.split('').map((key) => [key, 1]), [';', 1], ["'", 1], ['Enter', 2.25], ['PgDn', 1]],
  [['Shift', 2.25], ...'ZXCVBNM'.split('').map((key) => [key, 1]), [',', 1], ['.', 1], ['/', 1], ['Shift', 2.75], ['↑', 1]],
  [['Ctrl', 1.25], ['Win', 1.25], ['Alt', 1.25], ['Space', 6.25], ['Alt', 1.25], ['Fn', 1.25], ['Ctrl', 1.25], ['←', 1], ['↓', 1], ['→', 1]],
];

function makeKeyLayout() {
  return rows.flatMap((row, rowIndex) => {
    const gapBeforeArrow = rowIndex >= 3 ? 0.28 : 0;
    const rowWidth = row.reduce((sum, [, width]) => sum + width * UNIT + GAP, -GAP) + gapBeforeArrow;
    let x = -rowWidth / 2;
    return row.map(([label, width]) => {
      if (label === '↑' || label === '←') x += gapBeforeArrow;
      const key = { label, width, x: x + (width * UNIT) / 2, z: ROW_Z[rowIndex], row: rowIndex };
      x += width * UNIT + GAP;
      return key;
    });
  });
}

const KEY_LAYOUT = makeKeyLayout();
const MODIFIER_KEYS = new Set(['Esc', 'Backspace', 'Tab', 'Caps', 'Enter', 'Shift', 'Ctrl', 'Win', 'Alt', 'Fn', 'Space', '↑', '←', '↓', '→', 'Del', 'Home', 'PgDn']);

function readSavedConfig() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && SHELLS.some((item) => item.id === saved.shell) && THEMES.some((item) => item.id === saved.caps)) {
      return saved;
    }
  } catch {
    // Ignore malformed values from this page's own storage key.
  }
  return DEFAULT_CONFIG;
}

function Icon({ name, size = 16 }) {
  const paths = {
    reset: <><path d="M3 7v5h5"/><path d="M4.2 12a7 7 0 1 0 1.1-5.2L3 9"/></>,
    expand: <><path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"/><path d="m9 9-5-5m11 5 5-5m-5 11 5 5m-11-5-5 5"/></>,
    assemble: <><path d="M8 4H4v4m12-4h4v4M4 16v4h4m12-4v4h-4"/><path d="m9 9-5-5m11 5 5-5m-5 11 5 5m-11-5-5 5"/></>,
    save: <><path d="M5 3h12l4 4v14H3V3h2Z"/><path d="M7 3v6h10V3M7 21v-8h10v8"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    keyboard: <><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01M10 9h.01M14 9h.01M18 9h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M8 16h8"/></>,
  };
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

function drawLegend(label, color) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 256, 256);
  ctx.fillStyle = color;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const fontSize = label.length > 7 ? 28 : label.length > 4 ? 36 : 60;
  ctx.font = `600 ${fontSize}px Inter, Arial, sans-serif`;
  ctx.fillText(label === 'Space' ? 'space' : label, 128, 132, 226);
  return new THREE.CanvasTexture(canvas);
}

function App() {
  const stageRef = useRef(null);
  const modelRef = useRef(null);
  const sceneApiRef = useRef(null);
  const savedAtLoad = useRef(Boolean(localStorage.getItem(STORAGE_KEY)));
  const [config, setConfig] = useState(readSavedConfig);
  const [saved, setSaved] = useState(savedAtLoad.current);
  const [exploded, setExploded] = useState(false);
  const [typingMode, setTypingMode] = useState(false);
  const [pressed, setPressed] = useState(false);
  const typingModeRef = useRef(typingMode);

  const shell = useMemo(() => SHELLS.find((item) => item.id === config.shell), [config.shell]);
  const theme = useMemo(() => THEMES.find((item) => item.id === config.caps), [config.caps]);

  useEffect(() => {
    const host = stageRef.current;
    if (!host) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.set(0.3, 7.8, 14.6);
    camera.lookAt(0, 0.35, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.22;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    host.appendChild(renderer.domElement);

    const ambient = new THREE.HemisphereLight(0xffffff, 0x777874, 2.1);
    scene.add(ambient);
    const keyLight = new THREE.DirectionalLight(0xfff7e8, 3.3);
    keyLight.position.set(-4, 10, 7);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(1024, 1024);
    keyLight.shadow.camera.left = -11;
    keyLight.shadow.camera.right = 11;
    keyLight.shadow.camera.top = 8;
    keyLight.shadow.camera.bottom = -8;
    keyLight.shadow.bias = -0.0003;
    scene.add(keyLight);
    const fill = new THREE.DirectionalLight(0xc6e0e5, 1.65);
    fill.position.set(8, 5, -5);
    scene.add(fill);
    const rim = new THREE.DirectionalLight(0xffffff, 2.3);
    rim.position.set(-6, 3, -8);
    scene.add(rim);

    const root = new THREE.Group();
    root.rotation.set(0.13, -0.24, 0);
    root.scale.setScalar(0.88);
    scene.add(root);
    modelRef.current = root;

    const shellMaterial = new THREE.MeshStandardMaterial({ color: shell.color, metalness: 0.54, roughness: 0.27 });
    const trimMaterial = new THREE.MeshStandardMaterial({ color: shell.trim, metalness: 0.72, roughness: 0.24 });
    const plateMaterial = new THREE.MeshStandardMaterial({ color: '#343538', metalness: 0.7, roughness: 0.28 });
    const switchMaterial = new THREE.MeshStandardMaterial({ color: '#24282c', metalness: 0.15, roughness: 0.48 });
    const switchStemMaterial = new THREE.MeshStandardMaterial({ color: '#cf745d', metalness: 0.08, roughness: 0.4 });
    const glassMaterial = new THREE.MeshPhysicalMaterial({ color: '#f3f1eb', metalness: 0.2, roughness: 0.2, clearcoat: 0.5, clearcoatRoughness: 0.22 });
    const baseLayer = new THREE.Group();
    const plateLayer = new THREE.Group();
    const capLayer = new THREE.Group();
    root.add(baseLayer, plateLayer, capLayer);

    const width = 12.72;
    const depth = 4.96;
    const base = new THREE.Mesh(new RoundedBoxGeometry(width, 0.57, depth, 6, 0.15), shellMaterial);
    base.position.y = -0.04;
    base.castShadow = true;
    base.receiveShadow = true;
    baseLayer.add(base);
    const lowerBand = new THREE.Mesh(new RoundedBoxGeometry(width - 0.09, 0.12, depth - 0.09, 6, 0.035), trimMaterial);
    lowerBand.position.y = -0.21;
    lowerBand.castShadow = true;
    baseLayer.add(lowerBand);
    const underside = new THREE.Mesh(new RoundedBoxGeometry(width - 0.22, 0.16, depth - 0.22, 6, 0.05), shellMaterial);
    underside.position.y = -0.31;
    baseLayer.add(underside);
    for (const side of [-1, 1]) {
      const foot = new THREE.Mesh(new RoundedBoxGeometry(2.7, 0.16, 0.26, 4, 0.055), switchMaterial);
      foot.position.set(0, -0.43, side * 1.83);
      foot.rotation.x = side === 1 ? -0.1 : 0.1;
      baseLayer.add(foot);
    }
    const badge = new THREE.Mesh(new RoundedBoxGeometry(1.04, 0.18, 0.12, 4, 0.04), glassMaterial);
    badge.position.set(0, -0.065, 2.49);
    baseLayer.add(badge);
    const badgeLabel = drawLegend('F / 68', '#303235');
    const badgePlane = new THREE.Mesh(new THREE.PlaneGeometry(0.76, 0.105), new THREE.MeshBasicMaterial({ map: badgeLabel, transparent: true, depthWrite: false }));
    badgePlane.rotation.x = -Math.PI / 2;
    badgePlane.position.set(0, 0.034, 2.495);
    baseLayer.add(badgePlane);

    const plate = new THREE.Mesh(new RoundedBoxGeometry(12.3, 0.13, 4.48, 6, 0.08), plateMaterial);
    plate.position.set(0, 0.345, 0);
    plate.receiveShadow = true;
    plateLayer.add(plate);
    const plateLip = new THREE.Mesh(new RoundedBoxGeometry(12.4, 0.035, 4.55, 6, 0.022), trimMaterial);
    plateLip.position.set(0, 0.419, 0);
    plateLayer.add(plateLip);

    const capMeshes = [];
    const keyHitMeshes = [];
    const keyObjects = [];
    const themedMaterial = new THREE.MeshPhysicalMaterial({ color: theme.base, metalness: 0.03, roughness: 0.3, clearcoat: 0.46, clearcoatRoughness: 0.24 });
    const themedModifier = new THREE.MeshPhysicalMaterial({ color: theme.modifier, metalness: 0.025, roughness: 0.31, clearcoat: 0.4, clearcoatRoughness: 0.26 });
    const themedAccent = new THREE.MeshPhysicalMaterial({ color: theme.accent, metalness: 0.035, roughness: 0.29, clearcoat: 0.4, clearcoatRoughness: 0.25 });

    KEY_LAYOUT.forEach((item, index) => {
      const keyWidth = item.width * UNIT;
      const keyDepth = item.label === 'Space' ? 0.75 : 0.68;
      const y = 0.79 + Math.max(0, -item.z) * 0.023;
      const switchBox = new THREE.Mesh(new RoundedBoxGeometry(Math.min(keyWidth * 0.72, 0.77), 0.1, 0.47, 4, 0.055), switchMaterial);
      switchBox.position.set(item.x, 0.49, item.z);
      plateLayer.add(switchBox);
      const stem = new THREE.Mesh(new RoundedBoxGeometry(0.18, 0.08, 0.18, 3, 0.035), switchStemMaterial);
      stem.position.set(item.x, 0.562, item.z);
      plateLayer.add(stem);

      const group = new THREE.Group();
      group.position.set(item.x, y, item.z);
      const modifier = MODIFIER_KEYS.has(item.label);
      const accent = modifier && ['Esc', 'Enter', 'Backspace', 'Shift'].includes(item.label);
      const material = accent ? themedAccent : modifier ? themedModifier : themedMaterial;
      const cap = new THREE.Mesh(new RoundedBoxGeometry(keyWidth, 0.43, keyDepth, 4, 0.065), material);
      cap.castShadow = true;
      cap.receiveShadow = true;
      cap.position.y = 0;
      group.add(cap);
      const legend = drawLegend(item.label, theme.legend);
      const legendPlane = new THREE.Mesh(new THREE.PlaneGeometry(Math.min(keyWidth * 0.84, 0.63), item.label.length > 5 ? 0.25 : 0.42), new THREE.MeshBasicMaterial({ map: legend, transparent: true, depthWrite: false, toneMapped: false }));
      legendPlane.rotation.x = -Math.PI / 2;
      legendPlane.position.set(0, 0.218, 0);
      group.add(legendPlane);
      capLayer.add(group);
      capMeshes.push(cap);
      keyObjects.push({ label: item.label, group, homeY: y, texture: legend, keyWidth, keyDepth, index });
      keyHitMeshes.push(cap);
    });

    const shadow = new THREE.Mesh(new THREE.CircleGeometry(7.6, 56), new THREE.MeshBasicMaterial({ color: '#53585b', transparent: true, opacity: 0.105, depthWrite: false }));
    shadow.rotation.x = -Math.PI / 2;
    shadow.scale.set(1, 0.42, 1);
    shadow.position.set(0, -0.37, 0);
    root.add(shadow);

    const pressState = new Map();
    const raycaster = new THREE.Raycaster();
    const pointerNdc = new THREE.Vector2();
    let pointerDrag = null;
    let targetExploded = false;
    let cameraTargetZ = 18.4;
    let animationFrame = 0;

    function resize() {
      const bounds = host.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      camera.aspect = bounds.width / bounds.height;
      camera.position.z = Math.max(13.5, Math.min(19.8, cameraTargetZ + (1.55 - bounds.width / bounds.height) * 5.5));
      camera.lookAt(0, 0.3, 0);
      renderer.setSize(bounds.width, bounds.height, false);
    }
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();

    function render() {
      animationFrame = requestAnimationFrame(render);
      const ease = 0.095;
      const baseTarget = targetExploded ? -0.38 : 0;
      const plateTarget = targetExploded ? 0.27 : 0;
      const capsTarget = targetExploded ? 1.18 : 0;
      baseLayer.position.y += (baseTarget - baseLayer.position.y) * ease;
      plateLayer.position.y += (plateTarget - plateLayer.position.y) * ease;
      capLayer.position.y += (capsTarget - capLayer.position.y) * ease;
      keyObjects.forEach((key) => {
        const amount = pressState.get(key.label) || 0;
        const goal = amount > 0 ? 1 : 0;
        const next = amount + (goal - amount) * 0.32;
        pressState.set(key.label, Math.abs(next) < 0.005 ? 0 : next);
        key.group.position.y = key.homeY - next * 0.12;
      });
      renderer.render(scene, camera);
    }
    render();

    function setFromPointer(event) {
      const bounds = renderer.domElement.getBoundingClientRect();
      pointerNdc.set(((event.clientX - bounds.left) / bounds.width) * 2 - 1, -((event.clientY - bounds.top) / bounds.height) * 2 + 1);
      raycaster.setFromCamera(pointerNdc, camera);
      const hit = raycaster.intersectObjects(keyHitMeshes, false)[0];
      if (!hit) return null;
      return keyObjects.find((key) => key.index === keyHitMeshes.indexOf(hit.object))?.label || null;
    }

    function pointerDown(event) {
      if (event.button !== 0 && event.pointerType === 'mouse') return;
      const pressedKey = setFromPointer(event);
      if (pressedKey) {
        pressState.set(pressedKey, 1);
        setPressed(true);
        pointerDrag = { type: 'key', key: pressedKey, x: event.clientX, y: event.clientY };
      } else {
        pointerDrag = { type: 'orbit', x: event.clientX, y: event.clientY };
      }
      renderer.domElement.setPointerCapture(event.pointerId);
    }
    function pointerMove(event) {
      if (!pointerDrag) return;
      const dx = event.clientX - pointerDrag.x;
      const dy = event.clientY - pointerDrag.y;
      if (pointerDrag.type === 'key' && (Math.abs(dx) + Math.abs(dy) > 9)) {
        pressState.set(pointerDrag.key, 0);
        pointerDrag = { type: 'orbit', x: event.clientX - dx, y: event.clientY - dy };
      }
      if (pointerDrag.type === 'orbit' && modelRef.current) {
        root.rotation.y += dx * 0.009;
        root.rotation.x = THREE.MathUtils.clamp(root.rotation.x + dy * 0.0055, -0.3, 0.62);
        pointerDrag.x = event.clientX;
        pointerDrag.y = event.clientY;
      }
    }
    function pointerUp() {
      if (pointerDrag?.type === 'key') {
        pressState.set(pointerDrag.key, 0);
        window.setTimeout(() => setPressed(pressStateHasValue(pressState)), 160);
      }
      pointerDrag = null;
    }
    function wheel(event) {
      event.preventDefault();
      cameraTargetZ = THREE.MathUtils.clamp(cameraTargetZ + Math.sign(event.deltaY) * 0.65, 15.2, 23.0);
      resize();
    }
    function pressStateHasValue(map) {
      return Array.from(map.values()).some((value) => value > 0.15);
    }
    const canvas = renderer.domElement;
    canvas.addEventListener('pointerdown', pointerDown);
    canvas.addEventListener('pointermove', pointerMove);
    canvas.addEventListener('pointerup', pointerUp);
    canvas.addEventListener('pointercancel', pointerUp);
    canvas.addEventListener('wheel', wheel, { passive: false });

    sceneApiRef.current = {
      resetView() {
        root.rotation.set(0.13, -0.24, 0);
        cameraTargetZ = 18.4;
        resize();
      },
      setExploded(value) { targetExploded = value; },
      setTheme(value) {
        themedMaterial.color.set(value.base);
        themedModifier.color.set(value.modifier);
        themedAccent.color.set(value.accent);
        keyObjects.forEach((key) => {
          key.texture.dispose();
          key.texture = drawLegend(key.label, value.legend);
          const mesh = key.group.children[1];
          mesh.material.map = key.texture;
          mesh.material.needsUpdate = true;
        });
      },
      setShell(value) {
        shellMaterial.color.set(value.color);
        trimMaterial.color.set(value.trim);
      },
      pressKey(label, down) {
        if (!keyObjects.some((key) => key.label.toLowerCase() === label.toLowerCase() || (label === ' ' && key.label === 'Space'))) return false;
        const keyLabel = label === ' ' ? 'Space' : keyObjects.find((key) => key.label.toLowerCase() === label.toLowerCase())?.label;
        pressState.set(keyLabel, down ? 1 : 0);
        setPressed(pressStateHasValue(pressState));
        return true;
      },
    };

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
      canvas.removeEventListener('pointerdown', pointerDown);
      canvas.removeEventListener('pointermove', pointerMove);
      canvas.removeEventListener('pointerup', pointerUp);
      canvas.removeEventListener('pointercancel', pointerUp);
      canvas.removeEventListener('wheel', wheel);
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => {
            if (material.map) material.map.dispose();
            material.dispose();
          });
        }
      });
      renderer.dispose();
      canvas.remove();
      modelRef.current = null;
      sceneApiRef.current = null;
    };
  }, []);

  useEffect(() => { sceneApiRef.current?.setShell(shell); }, [shell]);
  useEffect(() => { sceneApiRef.current?.setTheme(theme); }, [theme]);
  useEffect(() => { sceneApiRef.current?.setExploded(exploded); }, [exploded]);
  useEffect(() => { typingModeRef.current = typingMode; }, [typingMode]);

  useEffect(() => {
    const isEditable = (target) => target instanceof HTMLElement && (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName));
    const down = (event) => {
      if (!typingModeRef.current || isEditable(event.target) || event.metaKey || event.ctrlKey || event.altKey) return;
      if (event.key === ' ' && event.target instanceof HTMLElement && event.target.closest('button, a')) return;
      const key = event.key === ' ' ? ' ' : event.key.length === 1 ? event.key.toUpperCase() : '';
      if (key && sceneApiRef.current?.pressKey(key, true)) {
        event.preventDefault();
        setTypingMode(true);
      }
    };
    const up = (event) => {
      if (isEditable(event.target)) return;
      const key = event.key === ' ' ? ' ' : event.key.length === 1 ? event.key.toUpperCase() : '';
      if (key) sceneApiRef.current?.pressKey(key, false);
    };
    const blur = () => {
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ '.split('').forEach((key) => sceneApiRef.current?.pressKey(key === ' ' ? ' ' : key, false));
    };
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    window.addEventListener('blur', blur);
    return () => {
      window.removeEventListener('keydown', down);
      window.removeEventListener('keyup', up);
      window.removeEventListener('blur', blur);
    };
  }, []);

  function choose(key, value) {
    setConfig((current) => ({ ...current, [key]: value }));
    setSaved(false);
  }

  function saveConfig() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    setSaved(true);
  }

  function resetConfig() {
    localStorage.removeItem(STORAGE_KEY);
    setConfig(DEFAULT_CONFIG);
    setSaved(false);
    setExploded(false);
    setTypingMode(false);
    sceneApiRef.current?.resetView();
  }

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="FORMA 首页">
          <span className="wordmark-mark">F</span>
          <span className="wordmark-name">FORMA<span> / OBJECTS</span></span>
        </a>
        <div className="topbar-meta"><span className="status-dot" /> STUDIO SERIES <span className="meta-divider">/</span> 2026</div>
        <a className="topbar-link" href="#configuration">CONFIGURE YOURS <Icon name="arrow" size={14} /></a>
      </header>

      <main id="top" className="main-layout">
        <section className="product-column" aria-label="产品预览">
          <div className="intro-row">
            <div>
              <p className="eyebrow"><span>01</span> — OBJECT STUDY</p>
              <h1>FORMA <span>68</span></h1>
              <p className="product-intro">紧凑而从容。为日常输入打造的机械键盘，<br className="desktop-break" />以真实材质与恰到好处的触感，回到每一次敲击。</p>
            </div>
            <div className="edition-stamp"><strong>68</strong><span>KEY<br />LAYOUT</span></div>
          </div>

          <div className={`product-stage ${typingMode ? 'typing-active' : ''}`}>
            <div className="stage-grid" aria-hidden="true" />
            <div className="stage-topline"><span><i /> LIVE 3D PREVIEW</span><span>DRAG TO ROTATE <b>·</b> SCROLL TO ZOOM</span></div>
            <div className="stage-note"><span className="note-rule" />PRECISION IN EVERY DETAIL</div>
            <div ref={stageRef} className="three-host" aria-label="可旋转、缩放的 FORMA 68 三维键盘模型" role="img" />
            <div className="stage-index" aria-hidden="true">01<span> / </span>03</div>
            <div className="stage-controls">
              <button className={`mode-chip ${typingMode ? 'selected' : ''}`} onClick={() => setTypingMode((value) => !value)} aria-pressed={typingMode}>
                <Icon name="keyboard" size={15} /><span>{typingMode ? '正在体验' : '键盘体验'}</span><kbd>A—Z</kbd>
              </button>
              <div className="stage-actions">
                <button className={`icon-action ${exploded ? 'active' : ''}`} onClick={() => setExploded((value) => !value)} aria-pressed={exploded} title={exploded ? '组装键盘' : '拆解键盘'}>
                  <Icon name={exploded ? 'assemble' : 'expand'} size={15} /><span>{exploded ? '组装' : '拆解'}</span>
                </button>
                <button className="icon-action reset-view" onClick={() => sceneApiRef.current?.resetView()} title="复位视角"><Icon name="reset" size={15} /><span>复位视角</span></button>
              </div>
            </div>
            {typingMode && <div className="typing-hint"><span className="typing-indicator" />按下任意字母键，感受机械回弹{pressed && <span className="press-badge">CLICK</span>}</div>}
            <div className="stage-caption"><span>DESIGNED FOR THE DAILY</span><span>ALUMINUM · PBT · MECHANICAL</span></div>
          </div>
        </section>

        <aside className="config-panel" id="configuration" aria-label="键盘配置">
          <div className="panel-heading">
            <div><p className="eyebrow"><span>02</span> — YOUR CONFIGURATION</p><h2>Make it yours<span>.</span></h2></div>
            <span className="config-count">{KEY_LAYOUT.length.toString().padStart(2, '0')}<small> KEYS</small></span>
          </div>
          <div className="config-divider" />

          <fieldset className="option-group">
            <legend><span className="step-number">01</span><span>选择外壳</span><small>CASE FINISH</small></legend>
            <div className="shell-options">
              {SHELLS.map((option, index) => (
                <button key={option.id} className={`shell-option ${config.shell === option.id ? 'is-selected' : ''}`} onClick={() => choose('shell', option.id)} aria-pressed={config.shell === option.id}>
                  <span className="shell-swatch" style={{ '--swatch-color': option.display, '--swatch-trim': option.trim }}><span /></span>
                  <span className="shell-copy"><strong>{option.name}</strong><small>{option.detail}</small></span>
                  <span className="selection-check"><Icon name="check" size={13} /></span>
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="option-group theme-group">
            <legend><span className="step-number">02</span><span>选择键帽主题</span><small>KEYCAP SET</small></legend>
            <div className="theme-options">
              {THEMES.map((option) => (
                <button key={option.id} className={`theme-option ${config.caps === option.id ? 'is-selected' : ''}`} onClick={() => choose('caps', option.id)} aria-pressed={config.caps === option.id}>
                  <span className="mini-keycaps" aria-hidden="true">{option.swatch.map((color, index) => <i key={index} style={{ '--mini-cap': color, '--mini-top': color }} />)}</span>
                  <strong>{option.name}</strong>
                  <small>{option.subtitle}</small>
                  {config.caps === option.id && <span className="theme-check"><Icon name="check" size={11} /></span>}
                </button>
              ))}
            </div>
          </fieldset>

          <section className="summary-card" aria-live="polite">
            <div className="summary-top"><span className="summary-label">你的 FORMA 68</span><span className="summary-mark">F—68</span></div>
            <div className="summary-selection"><span className="summary-swatch" style={{ backgroundColor: shell.display }} /><strong>{shell.name}</strong><span className="summary-plus">+</span><span className="summary-cap-dots">{theme.swatch.map((color) => <i key={color} style={{ backgroundColor: color }} />)}</span><strong>{theme.name}</strong></div>
            <div className="summary-bottom"><span>65% ANSI 布局 <b>·</b> 68 键</span><span className={`save-state ${saved ? 'is-saved' : ''}`}><i />{saved ? '已保存' : '未保存'}</span></div>
          </section>

          <div className="panel-footer">
            <button className={`save-button ${saved ? 'saved' : ''}`} onClick={saveConfig}>
              <Icon name={saved ? 'check' : 'save'} size={16} /><span>{saved ? '配置已保存' : '保存我的配置'}</span><Icon name="arrow" size={16} />
            </button>
            <button className="reset-config" onClick={resetConfig}><Icon name="reset" size={13} /> 恢复默认</button>
          </div>
          <p className="local-note"><span className="lock-mark">⌑</span> 配置仅保存在此设备的浏览器中</p>
        </aside>

        <footer className="page-footer"><span>FORMA OBJECTS <b>®</b> 2026</span><span>BUILT TO BE USED. MADE TO BE KEPT.</span><span>DESIGN STUDY <b>NO. 068</b></span></footer>
      </main>
    </div>
  );
}

export default App;
