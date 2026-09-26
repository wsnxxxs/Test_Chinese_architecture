import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import {
  Check,
  Layers3,
  Minus,
  Plus,
  RotateCcw,
  RotateCw,
  RotateCcw as ResetIcon,
} from "lucide-react";

type ShellId = "silver" | "graphite" | "copper";
type ThemeId = "fog" | "citrus" | "tide";
type ProductConfig = { shell: ShellId; theme: ThemeId };

const STORAGE_KEY = "nova68-studio-config-v1";
const DEFAULT_CONFIG: ProductConfig = { shell: "silver", theme: "fog" };

const shellOptions: Record<ShellId, { name: string; color: string; seam: string; metalness: number; roughness: number }> = {
  silver: { name: "霧銀", color: "#bfc9c5", seam: "#7f8d88", metalness: 0.72, roughness: 0.31 },
  graphite: { name: "墨岩", color: "#34413e", seam: "#1b2422", metalness: 0.58, roughness: 0.34 },
  copper: { name: "氧化铜", color: "#b87555", seam: "#704333", metalness: 0.63, roughness: 0.3 },
};

const themeOptions: Record<ThemeId, {
  name: string;
  base: string;
  modifier: string;
  accent: string;
  legend: string;
  accentLegend: string;
  samples: [string, string, string];
}> = {
  fog: {
    name: "雾面灰",
    base: "#e8e9e2",
    modifier: "#cfd5ce",
    accent: "#8da397",
    legend: "#293531",
    accentLegend: "#1f302b",
    samples: ["#e8e9e2", "#cfd5ce", "#8da397"],
  },
  citrus: {
    name: "野柚",
    base: "#eee9d8",
    modifier: "#d9ddbd",
    accent: "#bdca49",
    legend: "#34392c",
    accentLegend: "#333a23",
    samples: ["#eee9d8", "#d9ddbd", "#bdca49"],
  },
  tide: {
    name: "深潮",
    base: "#d7e2dc",
    modifier: "#9bb9b1",
    accent: "#294f4b",
    legend: "#243936",
    accentLegend: "#e2eee8",
    samples: ["#d7e2dc", "#9bb9b1", "#294f4b"],
  },
};

function readSavedConfig(): ProductConfig {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return DEFAULT_CONFIG;
    const parsed = JSON.parse(saved) as Partial<ProductConfig>;
    return {
      shell: parsed.shell && parsed.shell in shellOptions ? parsed.shell : DEFAULT_CONFIG.shell,
      theme: parsed.theme && parsed.theme in themeOptions ? parsed.theme : DEFAULT_CONFIG.theme,
    };
  } catch {
    return DEFAULT_CONFIG;
  }
}

interface SceneApi {
  rotate: (direction: -1 | 1) => void;
  zoomIn: () => void;
  zoomOut: () => void;
  resetView: () => void;
}

interface KeyDefinition {
  id: string;
  label: string;
  units: number;
  role?: "modifier" | "accent";
  top?: string;
}

type LayoutItem = KeyDefinition | { spacer: number };
const K = (id: string, label: string, units = 1, role?: KeyDefinition["role"], top?: string): KeyDefinition => ({
  id,
  label,
  units,
  role,
  top,
});
const S = (spacer: number): LayoutItem => ({ spacer });

const KEY_ROWS: LayoutItem[][] = [
  [
    K("ESC", "ESC", 1, "accent"), K("GRAVE", "`", 1, "modifier", "~"),
    K("DIGIT1", "1", 1, undefined, "!"), K("DIGIT2", "2", 1, undefined, "@"),
    K("DIGIT3", "3", 1, undefined, "#"), K("DIGIT4", "4", 1, undefined, "$"),
    K("DIGIT5", "5", 1, undefined, "%"), K("DIGIT6", "6", 1, undefined, "^"),
    K("DIGIT7", "7", 1, undefined, "&"), K("DIGIT8", "8", 1, undefined, "*"),
    K("DIGIT9", "9", 1, undefined, "("), K("DIGIT0", "0", 1, undefined, ")"),
    K("MINUS", "-", 1, undefined, "_"), K("EQUAL", "=", 1, undefined, "+"),
    K("BACKSPACE", "BKSP", 2, "modifier"), K("DELETE", "DEL", 1, "modifier"),
  ],
  [
    K("TAB", "TAB", 1.5, "modifier"), K("Q", "Q"), K("W", "W"), K("E", "E"),
    K("R", "R"), K("T", "T"), K("Y", "Y"), K("U", "U"), K("I", "I"), K("O", "O"),
    K("P", "P"), K("LBRACKET", "[", 1, undefined, "{"), K("RBRACKET", "]", 1, undefined, "}"),
    K("BACKSLASH", "\\", 1.5, undefined, "|"), K("PGUP", "PGUP", 1, "modifier"),
  ],
  [
    K("CAPS", "CAPS", 1.75, "modifier"), K("A", "A"), K("S", "S"), K("D", "D"),
    K("F", "F"), K("G", "G"), K("H", "H"), K("J", "J"), K("K", "K"), K("L", "L"),
    K("SEMICOLON", ";", 1, undefined, ":"), K("QUOTE", "'", 1, undefined, '"'),
    K("ENTER", "ENTER", 2.25, "accent"), K("PGDN", "PGDN", 1, "modifier"),
  ],
  [
    K("LSHIFT", "SHIFT", 2.25, "modifier"), K("Z", "Z"), K("X", "X"), K("C", "C"),
    K("V", "V"), K("B", "B"), K("N", "N"), K("M", "M"),
    K("COMMA", ",", 1, undefined, "<"), K("PERIOD", ".", 1, undefined, ">"),
    K("SLASH", "/", 1, undefined, "?"), K("RSHIFT", "SHIFT", 1.75, "modifier"),
    S(0.72), K("ARROWUP", "↑", 1, "modifier"),
  ],
  [
    K("CTRL", "CTRL", 1.25, "modifier"), K("WIN", "WIN", 1.25, "modifier"),
    K("ALTLEFT", "ALT", 1.25, "modifier"), K("SPACE", "SPACE", 6.25, "accent"),
    K("ALTRIGHT", "ALT", 1, "modifier"), K("FN", "FN", 1, "modifier"),
    K("MENU", "CTRL", 1, "modifier"), S(0.44),
    K("ARROWLEFT", "←", 1, "modifier"), K("ARROWDOWN", "↓", 1, "modifier"),
    K("ARROWRIGHT", "→", 1, "modifier"),
  ],
];

const KEY_UNIT = 0.42;
const KEY_GAP = 0.048;
const KEY_DEPTH = KEY_UNIT - 0.02;
const ROW_PITCH = 0.49;
const PLATE_HOME_Y = 0.245;
const CAPS_HOME_Y = 0.385;

function isSpacer(item: LayoutItem): item is { spacer: number } {
  return "spacer" in item;
}

function itemWidth(item: LayoutItem): number {
  if (isSpacer(item)) return item.spacer * KEY_UNIT;
  return item.units * KEY_UNIT + (item.units - 1) * KEY_GAP - 0.014;
}

function rowWidth(row: LayoutItem[]): number {
  return row.reduce((sum, item) => sum + itemWidth(item), 0) + Math.max(0, row.length - 1) * KEY_GAP;
}

function getBoardSize() {
  const width = Math.max(...KEY_ROWS.map(rowWidth)) + 0.34;
  const depth = KEY_ROWS.length * KEY_DEPTH + (KEY_ROWS.length - 1) * (ROW_PITCH - KEY_DEPTH) + 0.34;
  return { width, depth };
}

function getCapColor(theme: ThemeId, key: KeyDefinition): string {
  const palette = themeOptions[theme];
  if (key.role === "accent") return palette.accent;
  if (key.role === "modifier") return palette.modifier;
  return palette.base;
}

function getLegendColor(theme: ThemeId, key: KeyDefinition): string {
  return key.role === "accent" ? themeOptions[theme].accentLegend : themeOptions[theme].legend;
}

function drawLegend(key: KeyDefinition, color: string): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  const aspect = (itemWidth(key) * 0.74) / (KEY_DEPTH * 0.69);
  canvas.width = Math.ceil(256 * Math.max(1, aspect));
  canvas.height = 256;
  const context = canvas.getContext("2d");
  if (!context) return new THREE.CanvasTexture(canvas);

  context.clearRect(0, 0, 256, 256);
  context.fillStyle = color;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.font = "600 78px Arial, Helvetica, sans-serif";

  if (key.top) {
    context.textAlign = "left";
    context.font = "500 31px Arial, Helvetica, sans-serif";
    context.fillText(key.top, 31, 48);
    context.textAlign = "center";
    context.font = "600 77px Arial, Helvetica, sans-serif";
    context.fillText(key.label, canvas.width / 2, 166, canvas.width * 0.85);
  } else {
    const size = key.label.length > 4 ? 28 : key.label.length > 2 ? 38 : key.label === "SPACE" ? 27 : 78;
    context.font = `600 ${size}px Arial, Helvetica, sans-serif`;
    context.fillText(key.label, canvas.width / 2, 132, canvas.width * 0.86);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  return texture;
}

interface KeyRecord {
  definition: KeyDefinition;
  pivot: THREE.Group;
  capMaterial: THREE.MeshPhysicalMaterial;
  legendMaterial: THREE.MeshBasicMaterial;
  mesh: THREE.Mesh;
  pressed: boolean;
  pressAmount: number;
}

interface KeyboardSceneProps {
  shell: ShellId;
  theme: ThemeId;
  exploded: boolean;
  experience: boolean;
  controllerRef: { current: SceneApi | null };
  onActivity: (key: string) => void;
}

function KeyboardScene({ shell, theme, exploded, experience, controllerRef, onActivity }: KeyboardSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const recordsRef = useRef<Map<string, KeyRecord>>(new Map());
  const layersRef = useRef<{ caps: THREE.Group; plate: THREE.Group } | null>(null);
  const shellMaterialsRef = useRef<{ body: THREE.MeshStandardMaterial; seam: THREE.MeshStandardMaterial } | null>(null);
  const textureCacheRef = useRef<Map<string, THREE.CanvasTexture>>(new Map());
  const liveTexturesRef = useRef<Set<THREE.Texture>>(new Set());
  const experienceRef = useRef(experience);
  const explodedRef = useRef(exploded);
  const activityRef = useRef(onActivity);
  const pressTimersRef = useRef<Map<string, number>>(new Map());

  experienceRef.current = experience;
  explodedRef.current = exploded;
  activityRef.current = onActivity;

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const { width: boardWidth, depth: boardDepth } = getBoardSize();
    const outerWidth = boardWidth + 0.4;
    const outerDepth = boardDepth + 0.37;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 80);
    const initialDirection = new THREE.Vector3(0.45, 0.52, 0.72).normalize();
    const aspectRatio = mount.clientWidth / Math.max(1, mount.clientHeight);
    const projectedWidth = outerWidth * 0.848 + outerDepth * 0.53 + 0.5;
    const initialDistance = Math.max(10.8, projectedWidth / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * aspectRatio));
    const lookAt = new THREE.Vector3(0, 0.05, 0);
    camera.position.copy(lookAt).addScaledVector(initialDirection, initialDistance);
    camera.lookAt(lookAt);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.domElement.className = "keyboard-webgl";
    renderer.domElement.setAttribute("aria-label", "NOVA 68 可旋转的 3D 键盘预览");
    renderer.domElement.style.touchAction = "none";
    mount.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.copy(lookAt);
    controls.enableDamping = true;
    controls.dampingFactor = 0.065;
    controls.enablePan = false;
    controls.minDistance = 8.4;
    controls.maxDistance = 30;
    controls.minPolarAngle = 0.26;
    controls.maxPolarAngle = 1.48;
    controls.update();
    controls.saveState();

    const geometrySet = new Set<THREE.BufferGeometry>();
    const materialSet = new Set<THREE.Material>();
    const textureSet = liveTexturesRef.current;
    const textureCache = textureCacheRef.current;
    textureSet.clear();
    textureCache.clear();
    const trackGeometry = <T extends THREE.BufferGeometry>(geometry: T): T => {
      geometrySet.add(geometry);
      return geometry;
    };
    const trackMaterial = <T extends THREE.Material>(material: T): T => {
      materialSet.add(material);
      return material;
    };
    const sceneRoot = new THREE.Group();
    scene.add(sceneRoot);

    scene.add(new THREE.AmbientLight(0xdbe7df, 1.6));
    const keyLight = new THREE.DirectionalLight(0xfff0d8, 3.4);
    keyLight.position.set(-3.5, 8, 5.5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(1024, 1024);
    keyLight.shadow.camera.left = -8;
    keyLight.shadow.camera.right = 8;
    keyLight.shadow.camera.top = 8;
    keyLight.shadow.camera.bottom = -8;
    keyLight.shadow.bias = -0.0005;
    scene.add(keyLight);
    const fillLight = new THREE.DirectionalLight(0x9bc7c0, 2.2);
    fillLight.position.set(4, 4, -5);
    scene.add(fillLight);
    const rimLight = new THREE.PointLight(0xc2ebd2, 19, 18, 2);
    rimLight.position.set(-5, 3.5, -1.5);
    scene.add(rimLight);

    const shadowCanvas = document.createElement("canvas");
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const shadowContext = shadowCanvas.getContext("2d");
    if (shadowContext) {
      const gradient = shadowContext.createRadialGradient(128, 128, 18, 128, 128, 128);
      gradient.addColorStop(0, "rgba(0, 0, 0, 0.48)");
      gradient.addColorStop(0.55, "rgba(0, 0, 0, 0.2)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      shadowContext.fillStyle = gradient;
      shadowContext.fillRect(0, 0, 256, 256);
    }
    const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
    textureSet.add(shadowTexture);
    const softShadow = new THREE.Mesh(
      trackGeometry(new THREE.PlaneGeometry(1, 1)),
      trackMaterial(new THREE.MeshBasicMaterial({ map: shadowTexture, transparent: true, opacity: 0.8, depthWrite: false, toneMapped: false })),
    );
    softShadow.rotation.x = -Math.PI / 2;
    softShadow.position.set(0, -0.305, 0);
    softShadow.scale.set(boardWidth + 2.1, boardDepth + 1.7, 1);
    sceneRoot.add(softShadow);

    const bodyMaterial = trackMaterial(new THREE.MeshStandardMaterial({ color: shellOptions[shell].color, metalness: shellOptions[shell].metalness, roughness: shellOptions[shell].roughness })) as THREE.MeshStandardMaterial;
    const seamMaterial = trackMaterial(new THREE.MeshStandardMaterial({ color: shellOptions[shell].seam, metalness: 0.48, roughness: 0.42 })) as THREE.MeshStandardMaterial;
    shellMaterialsRef.current = { body: bodyMaterial, seam: seamMaterial };

    const baseLayer = new THREE.Group();
    const plateLayer = new THREE.Group();
    const capsLayer = new THREE.Group();
    sceneRoot.add(baseLayer, plateLayer, capsLayer);
    plateLayer.position.y = PLATE_HOME_Y;
    capsLayer.position.y = CAPS_HOME_Y;
    layersRef.current = { caps: capsLayer, plate: plateLayer };

    const housing = new THREE.Mesh(
      trackGeometry(new RoundedBoxGeometry(outerWidth, 0.44, outerDepth, 7, 0.11)),
      bodyMaterial,
    );
    housing.castShadow = true;
    housing.receiveShadow = true;
    baseLayer.add(housing);

    const lowerLip = new THREE.Mesh(
      trackGeometry(new RoundedBoxGeometry(outerWidth + 0.035, 0.045, outerDepth + 0.035, 5, 0.085)),
      seamMaterial,
    );
    lowerLip.position.y = -0.188;
    lowerLip.castShadow = true;
    baseLayer.add(lowerLip);

    const footGeometry = trackGeometry(new RoundedBoxGeometry(boardWidth * 0.29, 0.075, 0.15, 3, 0.028));
    const footMaterial = trackMaterial(new THREE.MeshStandardMaterial({ color: "#151d1b", roughness: 0.68, metalness: 0.22 }));
    for (const side of [-1, 1]) {
      for (const end of [-1, 1]) {
        const foot = new THREE.Mesh(footGeometry, footMaterial);
        foot.position.set(side * boardWidth * 0.29, -0.239, end * (outerDepth / 2 - 0.22));
        foot.castShadow = true;
        baseLayer.add(foot);
      }
    }

    const brandCanvas = document.createElement("canvas");
    brandCanvas.width = 512;
    brandCanvas.height = 96;
    const brandContext = brandCanvas.getContext("2d");
    if (brandContext) {
      brandContext.clearRect(0, 0, 512, 96);
      brandContext.fillStyle = "#eef1e9";
      brandContext.font = "600 34px Arial, Helvetica, sans-serif";
      brandContext.textAlign = "center";
      brandContext.textBaseline = "middle";
      brandContext.letterSpacing = "7px";
      brandContext.fillText("N O V A   /   6 8", 256, 48);
    }
    const brandTexture = new THREE.CanvasTexture(brandCanvas);
    brandTexture.colorSpace = THREE.SRGBColorSpace;
    textureSet.add(brandTexture);
    const brandPlate = new THREE.Mesh(
      trackGeometry(new THREE.PlaneGeometry(0.72, 0.135)),
      trackMaterial(new THREE.MeshBasicMaterial({ map: brandTexture, transparent: true, side: THREE.DoubleSide, toneMapped: false })),
    );
    brandPlate.position.set(-boardWidth * 0.23, -0.048, outerDepth / 2 + 0.006);
    baseLayer.add(brandPlate);

    const usbPort = new THREE.Mesh(
      trackGeometry(new RoundedBoxGeometry(0.3, 0.09, 0.018, 3, 0.025)),
      trackMaterial(new THREE.MeshStandardMaterial({ color: "#111918", roughness: 0.37, metalness: 0.42 })),
    );
    usbPort.position.set(boardWidth * 0.36, -0.035, outerDepth / 2 + 0.005);
    baseLayer.add(usbPort);

    const plateMaterial = trackMaterial(new THREE.MeshStandardMaterial({ color: "#9ca7a2", metalness: 0.72, roughness: 0.32 }));
    const plateMesh = new THREE.Mesh(
      trackGeometry(new RoundedBoxGeometry(boardWidth + 0.12, 0.1, boardDepth + 0.14, 6, 0.045)),
      plateMaterial,
    );
    plateMesh.castShadow = true;
    plateMesh.receiveShadow = true;
    plateLayer.add(plateMesh);

    const screwMaterial = trackMaterial(new THREE.MeshStandardMaterial({ color: "#4d5a56", metalness: 0.78, roughness: 0.27 }));
    const screwGeo = trackGeometry(new THREE.CylinderGeometry(0.035, 0.035, 0.012, 16));
    const screwSlotMaterial = trackMaterial(new THREE.MeshBasicMaterial({ color: "#26312e" }));
    const screwSlotGeo = trackGeometry(new THREE.BoxGeometry(0.034, 0.003, 0.005));
    for (const xSide of [-1, 1]) {
      for (const zSide of [-1, 1]) {
        const x = xSide * (boardWidth / 2 - 0.13);
        const z = zSide * (boardDepth / 2 - 0.13);
        const screw = new THREE.Mesh(screwGeo, screwMaterial);
        screw.position.set(x, 0.056, z);
        plateLayer.add(screw);
        const slot = new THREE.Mesh(screwSlotGeo, screwSlotMaterial);
        slot.position.set(x, 0.064, z);
        slot.rotation.y = Math.PI / 4;
        plateLayer.add(slot);
      }
    }

    const switchBodyMaterial = trackMaterial(new THREE.MeshStandardMaterial({ color: "#26322f", metalness: 0.18, roughness: 0.48 }));
    const switchStemMaterial = trackMaterial(new THREE.MeshStandardMaterial({ color: "#c8643d", metalness: 0.12, roughness: 0.42 }));
    const switchBodyGeometry = trackGeometry(new THREE.BoxGeometry(0.17, 0.09, 0.17));
    const switchTopGeometry = trackGeometry(new THREE.BoxGeometry(0.115, 0.045, 0.115));
    const switchStemGeometry = trackGeometry(new THREE.BoxGeometry(0.035, 0.075, 0.035));
    const capGeometries = new Map<string, THREE.BufferGeometry>();
    const capMeshes: THREE.Mesh[] = [];
    const records = new Map<string, KeyRecord>();

    KEY_ROWS.forEach((row, rowIndex) => {
      const length = rowWidth(row);
      let cursor = -length / 2;
      const z = (rowIndex - (KEY_ROWS.length - 1) / 2) * ROW_PITCH;

      row.forEach((item, itemIndex) => {
        const width = itemWidth(item);
        if (isSpacer(item)) {
          cursor += width + (itemIndex < row.length - 1 ? KEY_GAP : 0);
          return;
        }

        const x = cursor + width / 2;
        const keyWidthKey = width.toFixed(3);
        let capGeometry = capGeometries.get(keyWidthKey);
        if (!capGeometry) {
          capGeometry = trackGeometry(new RoundedBoxGeometry(width, 0.275, KEY_DEPTH, 4, 0.036));
          capGeometries.set(keyWidthKey, capGeometry);
        }

        const pivot = new THREE.Group();
        pivot.position.set(x, 0, z);
        capsLayer.add(pivot);

        const capMaterial = trackMaterial(new THREE.MeshPhysicalMaterial({
          color: getCapColor(theme, item),
          roughness: 0.3,
          metalness: 0.035,
          clearcoat: 0.14,
          clearcoatRoughness: 0.25,
        })) as THREE.MeshPhysicalMaterial;
        const cap = new THREE.Mesh(capGeometry, capMaterial);
        cap.position.y = 0.145;
        cap.castShadow = true;
        cap.receiveShadow = true;
        cap.userData.keyId = item.id;
        pivot.add(cap);
        capMeshes.push(cap);

        const textureKey = `${item.label}|${item.top ?? ""}|${item.units}|${getLegendColor(theme, item)}`;
        let legendTexture = textureCache.get(textureKey);
        if (!legendTexture) {
          legendTexture = drawLegend(item, getLegendColor(theme, item));
          legendTexture.userData.cacheKey = textureKey;
          textureCache.set(textureKey, legendTexture);
          textureSet.add(legendTexture);
        }
        const legendMaterial = trackMaterial(new THREE.MeshBasicMaterial({
          map: legendTexture,
          transparent: true,
          depthWrite: false,
          side: THREE.DoubleSide,
          toneMapped: false,
        })) as THREE.MeshBasicMaterial;
        const legend = new THREE.Mesh(trackGeometry(new THREE.PlaneGeometry(width * 0.74, KEY_DEPTH * 0.69)), legendMaterial);
        legend.rotation.x = -Math.PI / 2;
        legend.position.y = 0.284;
        legend.renderOrder = 2;
        pivot.add(legend);

        const switchBody = new THREE.Mesh(switchBodyGeometry, switchBodyMaterial);
        switchBody.position.set(x, 0.095, z);
        plateLayer.add(switchBody);
        const switchTop = new THREE.Mesh(switchTopGeometry, switchStemMaterial);
        switchTop.position.set(x, 0.158, z);
        plateLayer.add(switchTop);
        const stem = new THREE.Mesh(switchStemGeometry, switchStemMaterial);
        stem.position.set(x, 0.202, z);
        plateLayer.add(stem);

        records.set(item.id, { definition: item, pivot, capMaterial, legendMaterial, mesh: cap, pressed: false, pressAmount: 0 });
        cursor += width + (itemIndex < row.length - 1 ? KEY_GAP : 0);
      });
    });
    recordsRef.current = records;

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let pointerStart: { x: number; y: number } | null = null;
    const onPointerDown = (event: PointerEvent) => {
      if (!experienceRef.current) return;
      pointerStart = { x: event.clientX, y: event.clientY };
    };
    const releaseTap = (event: PointerEvent) => {
      if (!experienceRef.current || !pointerStart) {
        pointerStart = null;
        return;
      }
      const travel = Math.hypot(event.clientX - pointerStart.x, event.clientY - pointerStart.y);
      pointerStart = null;
      if (travel > 7) return;

      const rect = renderer.domElement.getBoundingClientRect();
      pointer.set(((event.clientX - rect.left) / rect.width) * 2 - 1, -((event.clientY - rect.top) / rect.height) * 2 + 1);
      raycaster.setFromCamera(pointer, camera);
      const hit = raycaster.intersectObjects(capMeshes, false).find((entry) => typeof entry.object.userData.keyId === "string");
      const id = hit?.object.userData.keyId as string | undefined;
      if (id && (id === "SPACE" || /^[A-Z]$/.test(id))) {
        const record = records.get(id);
        if (!record) return;
        record.pressed = true;
        activityRef.current(id === "SPACE" ? "空格" : id);
        const activeTimer = pressTimersRef.current.get(id);
        if (activeTimer) window.clearTimeout(activeTimer);
        const timer = window.setTimeout(() => {
          record.pressed = false;
          pressTimersRef.current.delete(id);
        }, 170);
        pressTimersRef.current.set(id, timer);
      }
    };
    renderer.domElement.addEventListener("pointerdown", onPointerDown);
    renderer.domElement.addEventListener("pointerup", releaseTap);
    renderer.domElement.addEventListener("pointercancel", releaseTap);

    const isTypingTarget = (target: EventTarget | null) => {
      if (!(target instanceof HTMLElement)) return false;
      if (target.isContentEditable) return true;
      return Boolean(target.closest("input, textarea, select, [contenteditable='true'], [role='textbox'], button, a"));
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (!experienceRef.current || isTypingTarget(event.target) || event.metaKey || event.ctrlKey || event.altKey) return;
      const id = event.code === "Space" ? "SPACE" : /^[a-z]$/i.test(event.key) ? event.key.toUpperCase() : null;
      if (!id || event.repeat) return;
      if (id === "SPACE") event.preventDefault();
      const record = records.get(id);
      if (!record) return;
      record.pressed = true;
      activityRef.current(id === "SPACE" ? "空格" : id);
    };
    const onKeyUp = (event: KeyboardEvent) => {
      const id = event.code === "Space" ? "SPACE" : /^[a-z]$/i.test(event.key) ? event.key.toUpperCase() : null;
      if (id) {
        const record = records.get(id);
        if (record) record.pressed = false;
      }
    };
    const releaseAll = () => records.forEach((record) => { record.pressed = false; });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("blur", releaseAll);

    const api: SceneApi = {
      rotate: (direction) => controls.rotateLeft(direction * Math.PI / 6),
      zoomIn: () => controls.dollyIn(1.14),
      zoomOut: () => controls.dollyOut(1.14),
      resetView: () => controls.reset(),
    };
    controllerRef.current = api;

    const resize = () => {
      const w = Math.max(1, mount.clientWidth);
      const h = Math.max(1, mount.clientHeight);
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      const fitDistance = projectedWidth / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.aspect);
      const offset = camera.position.clone().sub(controls.target);
      if (offset.length() < fitDistance) camera.position.copy(controls.target).add(offset.setLength(fitDistance));
      controls.update();
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    resize();

    let frame = 0;
    let lastTime = performance.now();
    const animate = (now: number) => {
      frame = requestAnimationFrame(animate);
      const delta = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      const smoothing = 1 - Math.exp(-delta * 9);
      const layers = layersRef.current;
      if (layers) {
        const plateTarget = PLATE_HOME_Y + (explodedRef.current ? 0.62 : 0);
        const capsTarget = CAPS_HOME_Y + (explodedRef.current ? 1.38 : 0);
        layers.plate.position.y += (plateTarget - layers.plate.position.y) * smoothing;
        layers.caps.position.y += (capsTarget - layers.caps.position.y) * smoothing;
      }
      records.forEach((record) => {
        const pressTarget = record.pressed ? 0.105 : 0;
        record.pressAmount += (pressTarget - record.pressAmount) * (1 - Math.exp(-delta * 22));
        record.pivot.position.y = -record.pressAmount;
      });
      controls.update();
      renderer.render(scene, camera);
    };
    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      controls.dispose();
      renderer.domElement.removeEventListener("pointerdown", onPointerDown);
      renderer.domElement.removeEventListener("pointerup", releaseTap);
      renderer.domElement.removeEventListener("pointercancel", releaseTap);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("blur", releaseAll);
      pressTimersRef.current.forEach((timer) => window.clearTimeout(timer));
      pressTimersRef.current.clear();
      geometrySet.forEach((geometry) => geometry.dispose());
      materialSet.forEach((material) => material.dispose());
      textureSet.forEach((texture) => texture.dispose());
      textureSet.clear();
      textureCache.clear();
      renderer.dispose();
      renderer.domElement.remove();
      recordsRef.current.clear();
      layersRef.current = null;
      shellMaterialsRef.current = null;
      controllerRef.current = null;
    };
  }, [controllerRef]);

  useEffect(() => {
    const shellMaterials = shellMaterialsRef.current;
    if (shellMaterials) {
      const selectedShell = shellOptions[shell];
      shellMaterials.body.color.set(selectedShell.color);
      shellMaterials.body.metalness = selectedShell.metalness;
      shellMaterials.body.roughness = selectedShell.roughness;
      shellMaterials.seam.color.set(selectedShell.seam);
    }

    const records = recordsRef.current;
    records.forEach((record) => {
      record.capMaterial.color.set(getCapColor(theme, record.definition));
      const color = getLegendColor(theme, record.definition);
      const cacheKey = `${record.definition.label}|${record.definition.top ?? ""}|${record.definition.units}|${color}`;
      let texture = textureCacheRef.current.get(cacheKey);
      if (!texture) {
        texture = drawLegend(record.definition, color);
        texture.userData.cacheKey = cacheKey;
        textureCacheRef.current.set(cacheKey, texture);
        liveTexturesRef.current.add(texture);
      }
      if (record.legendMaterial.map !== texture) {
        record.legendMaterial.map = texture;
        record.legendMaterial.needsUpdate = true;
      }
    });
  }, [shell, theme]);

  return <div className="scene-canvas" ref={mountRef} aria-label="可旋转、可缩放的 NOVA 68 三维产品预览" />;
}

export default function App() {
  const [config, setConfig] = useState<ProductConfig>(readSavedConfig);
  const [isExploded, setIsExploded] = useState(false);
  const [experience, setExperience] = useState(false);
  const [lastKey, setLastKey] = useState("");
  const [saveMessage, setSaveMessage] = useState("配置仅保存在此设备");
  const controllerRef = useRef<SceneApi | null>(null);

  const updateConfig = (next: ProductConfig) => {
    setConfig(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setSaveMessage("已保存到此设备");
    } catch {
      setSaveMessage("浏览器未允许本地保存");
    }
  };

  const resetConfig = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      setSaveMessage("已恢复默认配置");
    } catch {
      setSaveMessage("无法清除本地配置");
    }
    setConfig({ ...DEFAULT_CONFIG });
    setLastKey("");
    setIsExploded(false);
    setExperience(false);
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="NOVA 键盘工作室首页">
          <span className="wordmark-icon">N</span>
          <span className="wordmark-name">NOVA <i>/</i> OBJECTS</span>
        </a>
        <div className="topbar-center">
          <span className="topbar-active">产品配置</span>
          <span className="topbar-divider" />
            <span className="topbar-series">键盘工作室 <span>01 / 68</span></span>
        </div>
        <div className="topbar-note"><span className="online-dot" /> BUILT FOR YOUR DESK</div>
      </header>

      <main className="workspace" id="home">
        <aside className="config-panel">
          <div className="product-intro">
            <div className="eyebrow"><span>01</span> MECHANICAL KEYBOARD</div>
            <h1>NOVA <span>68</span></h1>
            <p>为日常创作，调出恰好属于你的手感与色彩。</p>
          </div>

          <div className="panel-rule" />

          <section className="control-group" aria-labelledby="shell-title">
            <div className="group-heading">
              <h2 id="shell-title"><span>01</span> 外壳配色</h2>
              <span className="selected-value">{shellOptions[config.shell].name}</span>
            </div>
            <div className="shell-options">
              {(Object.keys(shellOptions) as ShellId[]).map((id) => {
                const option = shellOptions[id];
                const selected = config.shell === id;
                return (
                  <button
                    className={`shell-option${selected ? " is-selected" : ""}`}
                    type="button"
                    aria-label={`外壳配色：${option.name}`}
                    aria-pressed={selected}
                    key={id}
                    onClick={() => updateConfig({ ...config, shell: id })}
                  >
                    <span className="shell-swatch" style={{ "--swatch-color": option.color } as CSSProperties}>
                      {selected && <Check size={14} strokeWidth={2.4} />}
                    </span>
                    <span className="option-name">{option.name}</span>
                  </button>
                );
              })}
            </div>
          </section>

          <section className="control-group theme-group" aria-labelledby="theme-title">
            <div className="group-heading">
              <h2 id="theme-title"><span>02</span> 键帽主题</h2>
              <span className="selected-value">{themeOptions[config.theme].name}</span>
            </div>
            <div className="theme-options">
              {(Object.keys(themeOptions) as ThemeId[]).map((id) => {
                const option = themeOptions[id];
                const selected = config.theme === id;
                return (
                  <button
                    className={`theme-option${selected ? " is-selected" : ""}`}
                    type="button"
                    aria-label={`键帽主题：${option.name}`}
                    aria-pressed={selected}
                    key={id}
                    onClick={() => updateConfig({ ...config, theme: id })}
                  >
                    <span className="theme-samples" aria-hidden="true">
                      {option.samples.map((color, index) => <i key={index} style={{ backgroundColor: color }} />)}
                    </span>
                    <span className="option-name">{option.name}</span>
                    <span className="theme-check">{selected ? <Check size={13} strokeWidth={2.4} /> : null}</span>
                  </button>
                );
              })}
            </div>
          </section>

          <section className="control-group experience-group" aria-labelledby="experience-title">
            <div className="group-heading experience-heading">
              <h2 id="experience-title"><span>03</span> 键盘体验</h2>
              <button
                className={`toggle-switch${experience ? " is-on" : ""}`}
                type="button"
                role="switch"
                aria-checked={experience}
                aria-label="切换键盘体验模式"
                onClick={() => setExperience((active) => !active)}
              ><span /></button>
            </div>
            <p className="experience-hint">
              {experience
                ? <>按下 A–Z 或空格，也可点按 3D 键帽{lastKey && <span className="last-key">最近：{lastKey}</span>}</>
                : "开启后，试试真实的按键下压与回弹。"}
            </p>
          </section>

          <button
            className={`assembly-button${isExploded ? " is-open" : ""}`}
            type="button"
            aria-pressed={isExploded}
            onClick={() => setIsExploded((open) => !open)}
          >
            <span className="assembly-icon"><Layers3 size={17} strokeWidth={1.7} /></span>
            <span>{isExploded ? "收拢结构" : "拆解结构"}</span>
            <span className="assembly-state">{isExploded ? "3 层已展开" : "查看内部构造"}</span>
          </button>

          <div className="build-summary" aria-live="polite">
            <div className="summary-label">YOUR BUILD <span>68 KEYS · 65%</span></div>
            <div className="summary-config">{shellOptions[config.shell].name}外壳 <i>·</i> {themeOptions[config.theme].name}键帽</div>
            <div className="summary-foot">
              <span><i className="save-dot" />{saveMessage}</span>
              <span>{isExploded ? "分层展示" : "已组装"}</span>
            </div>
          </div>

          <button className="restore-button" type="button" onClick={resetConfig}>
            恢复默认配置 <span aria-hidden="true">↺</span>
          </button>
        </aside>

        <section className="preview-stage" aria-label="NOVA 68 3D 产品展示">
          <div className="stage-grid" aria-hidden="true" />
          <KeyboardScene
            shell={config.shell}
            theme={config.theme}
            exploded={isExploded}
            experience={experience}
            controllerRef={controllerRef}
            onActivity={setLastKey}
          />

          <div className="stage-topline">
            <span><i /> LIVE PREVIEW</span>
            <span>ANODIZED ALUMINUM <b>/</b> HOT-SWAP</span>
          </div>

          <div className="view-toolbar" aria-label="3D 视角操作">
            <button type="button" aria-label="向左旋转" title="向左旋转" onClick={() => controllerRef.current?.rotate(-1)}><RotateCcw size={16} /></button>
            <button type="button" aria-label="向右旋转" title="向右旋转" onClick={() => controllerRef.current?.rotate(1)}><RotateCw size={16} /></button>
            <span className="toolbar-divider" />
            <button type="button" aria-label="缩小" title="缩小" onClick={() => controllerRef.current?.zoomOut()}><Minus size={16} /></button>
            <button type="button" aria-label="放大" title="放大" onClick={() => controllerRef.current?.zoomIn()}><Plus size={16} /></button>
            <span className="toolbar-divider" />
            <button className="view-reset" type="button" onClick={() => controllerRef.current?.resetView()}>
              <ResetIcon size={14} /> <span>复位</span>
            </button>
          </div>

          <div className="stage-footnote">
            <span>拖动旋转 <i>·</i> 滚轮缩放</span>
            <span className="stage-index">N68 <b>/</b> 01</span>
          </div>
        </section>
      </main>
    </div>
  );
}