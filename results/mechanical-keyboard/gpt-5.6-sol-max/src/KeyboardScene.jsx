import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { KEYBOARD_LAYOUT } from './keyboardLayout.js';

const UNIT = 0.92;
const GAP = 0.085;
const ROW_STEP = 0.94;
const HOME_CAMERA = new THREE.Vector3(13.8, 12.3, 19.5);
const HOME_TARGET = new THREE.Vector3(0, 0.55, 0.1);

function isTypingTarget(target) {
  if (!(target instanceof HTMLElement)) return false;
  return (
    target.matches('input, textarea, select, [contenteditable="true"]') ||
    Boolean(target.closest('[contenteditable="true"]'))
  );
}

function makeLegendTexture(label, color) {
  const displayLabel = label === 'Space' ? 'SPACE' : label === 'Meta' ? '◆' : label;
  const longLabel = displayLabel.length > 2;
  const canvas = document.createElement('canvas');
  canvas.width = longLabel ? 384 : 160;
  canvas.height = 160;
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = color;
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.font = `${displayLabel.length > 6 ? 600 : 700} ${displayLabel.length > 7 ? 42 : displayLabel.length > 3 ? 50 : 68}px Arial, sans-serif`;
  context.fillText(displayLabel, canvas.width / 2, canvas.height / 2 + 2);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  texture.needsUpdate = true;
  return { texture, aspect: canvas.width / canvas.height };
}

function getKeyColors(theme, role) {
  if (role === 'accent') {
    return { cap: theme.accentKey, legend: theme.legendOnDark };
  }
  if (role === 'modifier' || role === 'space') {
    return { cap: theme.modifier, legend: theme.legendOnDark };
  }
  return { cap: theme.alpha, legend: theme.legendOnLight };
}

function addRoundedBox(parent, size, position, material, radius = 0.08, segments = 3) {
  const geometry = new RoundedBoxGeometry(size[0], size[1], size[2], segments, radius);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(...position);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function addScrew(parent, x, z, material) {
  const geometry = new THREE.CylinderGeometry(0.065, 0.065, 0.035, 20);
  const screw = new THREE.Mesh(geometry, material);
  screw.position.set(x, 0.555, z);
  screw.castShadow = true;
  parent.add(screw);

  const slot = new THREE.Mesh(
    new THREE.BoxGeometry(0.075, 0.008, 0.018),
    new THREE.MeshStandardMaterial({ color: '#17191c', roughness: 0.7 }),
  );
  slot.position.set(x, 0.578, z);
  slot.rotation.y = Math.PI / 4;
  parent.add(slot);
}

export default function KeyboardScene({
  caseColor,
  keyTheme,
  exploded,
  experienceEnabled,
  viewCommand,
  onKeyFeedback,
}) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const materialsRef = useRef(null);
  const keyEntriesRef = useRef([]);
  const legendEntriesRef = useRef([]);
  const explodeTargetRef = useRef(exploded ? 1 : 0);
  const experienceRef = useRef(experienceEnabled);
  const feedbackRef = useRef(onKeyFeedback);
  const activePointerKeyRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    explodeTargetRef.current = exploded ? 1 : 0;
  }, [exploded]);

  useEffect(() => {
    experienceRef.current = experienceEnabled;
  }, [experienceEnabled]);

  useEffect(() => {
    feedbackRef.current = onKeyFeedback;
  }, [onKeyFeedback]);

  useEffect(() => {
    if (!materialsRef.current) return;
    const materials = materialsRef.current;
    materials.caseBody.color.set(caseColor.color);
    materials.caseBody.sheenColor.set(caseColor.edge);
    materials.caseEdge.color.set(caseColor.edge);
    materials.accent.color.set(caseColor.accent);
    materials.rimLight.color.set(caseColor.accent);
    materials.halo.color.set(caseColor.accent);
    materials.alpha.color.set(keyTheme.alpha);
    materials.modifier.color.set(keyTheme.modifier);
    materials.keyAccent.color.set(keyTheme.accentKey);

    legendEntriesRef.current.forEach((entry) => {
      entry.material.map?.dispose();
      const { legend } = getKeyColors(keyTheme, entry.role);
      const next = makeLegendTexture(entry.label, legend);
      entry.material.map = next.texture;
      entry.material.needsUpdate = true;
    });
  }, [caseColor, keyTheme]);

  useEffect(() => {
    const handles = sceneRef.current;
    if (!handles || !viewCommand) return;
    const { camera, controls, resetting } = handles;
    resetting.active = false;

    if (viewCommand.type === 'reset') {
      resetting.active = true;
      return;
    }

    const offset = camera.position.clone().sub(controls.target);
    if (viewCommand.type === 'zoom-in' || viewCommand.type === 'zoom-out') {
      const factor = viewCommand.type === 'zoom-in' ? 0.84 : 1.18;
      offset.multiplyScalar(factor);
    }
    if (viewCommand.type === 'rotate-left' || viewCommand.type === 'rotate-right') {
      const spherical = new THREE.Spherical().setFromVector3(offset);
      spherical.theta += viewCommand.type === 'rotate-left' ? -0.32 : 0.32;
      offset.setFromSpherical(spherical);
    }
    camera.position.copy(controls.target).add(offset);
    controls.update();
  }, [viewCommand]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    let renderer;
    let animationFrameActive = true;
    const disposables = [];
    const legendTextures = [];

    try {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(33, 1, 0.1, 100);
      camera.position.copy(HOME_CAMERA);

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 0.86;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.domElement.className = 'keyboard-canvas';
      renderer.domElement.setAttribute('role', 'img');
      renderer.domElement.setAttribute(
        'aria-label',
        '可旋转缩放的 KEPLER 65 机械键盘三维模型',
      );
      mount.appendChild(renderer.domElement);

      const pmrem = new THREE.PMREMGenerator(renderer);
      const environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
      scene.environment = environment;
      disposables.push(environment, pmrem);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.065;
      controls.enablePan = false;
      controls.minDistance = 8.8;
      controls.maxDistance = 34;
      controls.minPolarAngle = 0.28;
      controls.maxPolarAngle = Math.PI / 2.08;
      controls.target.copy(HOME_TARGET);
      controls.update();

      const resetting = { active: false };
      controls.addEventListener('start', () => {
        resetting.active = false;
      });

      const hemisphere = new THREE.HemisphereLight('#dce6ff', '#2e1d18', 1.2);
      scene.add(hemisphere);

      const keyLight = new THREE.DirectionalLight('#fff4ea', 2.9);
      keyLight.position.set(6, 10, 8);
      keyLight.castShadow = true;
      keyLight.shadow.mapSize.set(2048, 2048);
      keyLight.shadow.camera.left = -10;
      keyLight.shadow.camera.right = 10;
      keyLight.shadow.camera.top = 8;
      keyLight.shadow.camera.bottom = -8;
      keyLight.shadow.bias = -0.0004;
      scene.add(keyLight);

      const rimLight = new THREE.DirectionalLight(caseColor.accent, 3.2);
      rimLight.position.set(-8, 5, -6);
      scene.add(rimLight);

      const frontLight = new THREE.PointLight('#8aa8ff', 15, 22, 2);
      frontLight.position.set(-5, 2, 7);
      scene.add(frontLight);

      const caseBody = new THREE.MeshPhysicalMaterial({
        color: caseColor.color,
        metalness: 0.86,
        roughness: 0.28,
        clearcoat: 0.4,
        clearcoatRoughness: 0.35,
        sheen: 0.25,
        sheenColor: caseColor.edge,
      });
      const caseEdge = new THREE.MeshStandardMaterial({
        color: caseColor.edge,
        metalness: 0.9,
        roughness: 0.23,
      });
      const plateMaterial = new THREE.MeshPhysicalMaterial({
        color: '#9aa1a8',
        metalness: 0.95,
        roughness: 0.2,
        clearcoat: 0.5,
      });
      const plateEdge = new THREE.MeshStandardMaterial({
        color: '#353a40',
        metalness: 0.82,
        roughness: 0.34,
      });
      const alphaMaterial = new THREE.MeshPhysicalMaterial({
        color: keyTheme.alpha,
        roughness: 0.43,
        metalness: 0.02,
        clearcoat: 0.2,
      });
      const modifierMaterial = new THREE.MeshPhysicalMaterial({
        color: keyTheme.modifier,
        roughness: 0.4,
        metalness: 0.03,
        clearcoat: 0.18,
      });
      const keyAccentMaterial = new THREE.MeshPhysicalMaterial({
        color: keyTheme.accentKey,
        roughness: 0.38,
        metalness: 0.02,
        clearcoat: 0.22,
      });
      const accentMaterial = new THREE.MeshStandardMaterial({
        color: caseColor.accent,
        metalness: 0.62,
        roughness: 0.28,
      });
      const switchMaterial = new THREE.MeshStandardMaterial({
        color: '#171a1e',
        metalness: 0.12,
        roughness: 0.48,
      });
      const pcbMaterial = new THREE.MeshStandardMaterial({
        color: '#183d3a',
        metalness: 0.24,
        roughness: 0.54,
      });
      const goldMaterial = new THREE.MeshStandardMaterial({
        color: '#c8a95e',
        metalness: 0.92,
        roughness: 0.24,
      });
      const screwMaterial = new THREE.MeshStandardMaterial({
        color: '#858c93',
        metalness: 0.96,
        roughness: 0.16,
      });
      materialsRef.current = {
        caseBody,
        caseEdge,
        accent: accentMaterial,
        alpha: alphaMaterial,
        modifier: modifierMaterial,
        keyAccent: keyAccentMaterial,
        rimLight,
      };
      disposables.push(
        caseBody,
        caseEdge,
        plateMaterial,
        plateEdge,
        alphaMaterial,
        modifierMaterial,
        keyAccentMaterial,
        accentMaterial,
        switchMaterial,
        pcbMaterial,
        goldMaterial,
        screwMaterial,
      );

      const assembly = new THREE.Group();
      assembly.rotation.x = -0.055;
      assembly.position.y = 0;
      scene.add(assembly);

      const caseLayer = new THREE.Group();
      caseLayer.name = 'case-layer';
      assembly.add(caseLayer);

      addRoundedBox(caseLayer, [15.05, 0.64, 5.55], [0, 0.18, 0], caseBody, 0.28, 5);
      addRoundedBox(caseLayer, [14.54, 0.18, 5.05], [0, 0.5, 0], plateEdge, 0.14, 4);
      addRoundedBox(caseLayer, [14.22, 0.075, 4.73], [0, 0.61, 0], pcbMaterial, 0.08, 3);
      addRoundedBox(caseLayer, [5.2, 0.075, 0.11], [0, -0.115, 2.76], accentMaterial, 0.04, 3);
      addRoundedBox(caseLayer, [10.8, 0.12, 0.3], [0, -0.2, -2.45], caseEdge, 0.08, 3);
      addRoundedBox(caseLayer, [7.5, 0.12, 0.24], [0, -0.2, 2.42], caseEdge, 0.08, 3);
      addScrew(caseLayer, -6.95, -2.32, screwMaterial);
      addScrew(caseLayer, 6.95, -2.32, screwMaterial);
      addScrew(caseLayer, -6.95, 2.32, screwMaterial);
      addScrew(caseLayer, 6.95, 2.32, screwMaterial);

      for (let i = 0; i < 18; i += 1) {
        const via = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.024, 0.012, 10), goldMaterial);
        via.position.set(-6.4 + (i % 9) * 1.6, 0.657, -1.75 + Math.floor(i / 9) * 3.45);
        caseLayer.add(via);
      }

      const plateLayer = new THREE.Group();
      plateLayer.name = 'plate-layer';
      assembly.add(plateLayer);
      addRoundedBox(plateLayer, [14.48, 0.14, 4.92], [0, 0.72, 0], plateMaterial, 0.12, 4);
      addRoundedBox(plateLayer, [14.03, 0.038, 4.48], [0, 0.805, 0], plateEdge, 0.08, 3);

      const keysLayer = new THREE.Group();
      keysLayer.name = 'keycap-layer';
      assembly.add(keysLayer);

      const keyEntries = [];
      const legendEntries = [];
      const capMeshes = [];
      const playableByLabel = new Map();

      KEYBOARD_LAYOUT.forEach((row, rowIndex) => {
        const rowUnits = row.reduce((sum, [, width]) => sum + width, 0);
        let cursor = -(rowUnits * UNIT) / 2;
        const z = (rowIndex - 2) * ROW_STEP;

        row.forEach(([label, width = 1, explicitRole], columnIndex) => {
          const role = explicitRole || 'alpha';
          const keyWidth = width * UNIT - GAP;
          const x = cursor + (width * UNIT) / 2;
          cursor += width * UNIT;
          const keyId = `${rowIndex}-${columnIndex}-${label}`;

          const switchHousing = addRoundedBox(
            plateLayer,
            [Math.min(0.56, keyWidth * 0.68), 0.22, 0.56],
            [x, 0.91, z],
            switchMaterial,
            0.045,
            2,
          );
          switchHousing.userData.keyId = keyId;
          const stem = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.24, 0.16), accentMaterial);
          stem.position.set(x, 1.08, z);
          stem.castShadow = true;
          plateLayer.add(stem);

          const keyGroup = new THREE.Group();
          const baseY = 0.92 - rowIndex * 0.018;
          keyGroup.position.set(x, baseY, z);
          keyGroup.rotation.x = [0.045, 0.027, 0.005, -0.018, -0.035][rowIndex];
          keyGroup.userData.keyId = keyId;
          keysLayer.add(keyGroup);

          const capMaterial =
            role === 'accent'
              ? keyAccentMaterial
              : role === 'modifier' || role === 'space'
                ? modifierMaterial
                : alphaMaterial;
          const capGeometry = new RoundedBoxGeometry(keyWidth, 0.5, 0.82, 4, 0.09);
          const cap = new THREE.Mesh(capGeometry, capMaterial);
          cap.position.y = 0.27;
          cap.castShadow = true;
          cap.receiveShadow = true;
          cap.userData.keyId = keyId;
          capMeshes.push(cap);
          keyGroup.add(cap);

          const bevelGeometry = new RoundedBoxGeometry(
            Math.max(0.14, keyWidth - 0.1),
            0.018,
            0.7,
            2,
            0.045,
          );
          const bevel = new THREE.Mesh(bevelGeometry, capMaterial);
          bevel.position.y = 0.526;
          bevel.userData.keyId = keyId;
          capMeshes.push(bevel);
          keyGroup.add(bevel);

          const { legend } = getKeyColors(keyTheme, role);
          const legendData = makeLegendTexture(label, legend);
          legendTextures.push(legendData.texture);
          const legendMaterial = new THREE.MeshBasicMaterial({
            map: legendData.texture,
            transparent: true,
            depthWrite: false,
            toneMapped: false,
          });
          disposables.push(legendMaterial);
          const legendWidth = Math.min(keyWidth * 0.74, 0.185 * legendData.aspect);
          const legendGeometry = new THREE.PlaneGeometry(legendWidth, 0.185);
          const legendMesh = new THREE.Mesh(legendGeometry, legendMaterial);
          legendMesh.rotation.x = -Math.PI / 2;
          legendMesh.position.set(0, 0.543, -0.015);
          legendMesh.userData.keyId = keyId;
          keyGroup.add(legendMesh);
          capMeshes.push(legendMesh);
          legendEntries.push({ label, role, material: legendMaterial });

          const entry = {
            id: keyId,
            label,
            group: keyGroup,
            baseY,
            pressed: false,
            pressOffset: 0,
          };
          keyEntries.push(entry);
          if (/^[A-Z]$/.test(label) || label === 'Space') playableByLabel.set(label, entry);
        });
      });

      keyEntriesRef.current = keyEntries;
      legendEntriesRef.current = legendEntries;

      const groundMaterial = new THREE.ShadowMaterial({
        color: '#000000',
        opacity: 0.32,
        transparent: true,
      });
      const ground = new THREE.Mesh(new THREE.PlaneGeometry(40, 26), groundMaterial);
      ground.rotation.x = -Math.PI / 2;
      ground.position.y = -0.58;
      ground.receiveShadow = true;
      scene.add(ground);
      disposables.push(ground.geometry, groundMaterial);

      const haloMaterial = new THREE.MeshBasicMaterial({
        color: caseColor.accent,
        transparent: true,
        opacity: 0.055,
        depthWrite: false,
      });
      const halo = new THREE.Mesh(new THREE.CircleGeometry(7.5, 96), haloMaterial);
      halo.rotation.x = -Math.PI / 2;
      halo.position.set(-2.5, -0.54, -0.4);
      scene.add(halo);
      materialsRef.current.halo = haloMaterial;
      disposables.push(halo.geometry, haloMaterial);

      const raycaster = new THREE.Raycaster();
      const pointer = new THREE.Vector2();

      const setEntryPressed = (entry, pressed, source = 'keyboard') => {
        if (!entry || entry.pressed === pressed) return;
        entry.pressed = pressed;
        if (pressed) feedbackRef.current?.(entry.label, source);
      };

      const getPointerEntry = (event) => {
        const rect = renderer.domElement.getBoundingClientRect();
        pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(pointer, camera);
        const hit = raycaster.intersectObjects(capMeshes, false)[0];
        if (!hit) return null;
        return keyEntries.find((entry) => entry.id === hit.object.userData.keyId) || null;
      };

      const onPointerDown = (event) => {
        if (!experienceRef.current) return;
        const entry = getPointerEntry(event);
        if (!entry) return;
        event.preventDefault();
        activePointerKeyRef.current = entry;
        controls.enabled = false;
        renderer.domElement.setPointerCapture?.(event.pointerId);
        setEntryPressed(entry, true, 'pointer');
      };

      const releasePointerKey = () => {
        if (activePointerKeyRef.current) {
          setEntryPressed(activePointerKeyRef.current, false, 'pointer');
          activePointerKeyRef.current = null;
        }
        controls.enabled = true;
      };

      const onKeyDown = (event) => {
        if (!experienceRef.current || isTypingTarget(event.target)) return;
        const label = event.code === 'Space' ? 'Space' : /^Key[A-Z]$/.test(event.code) ? event.code.slice(3) : '';
        if (!label) return;
        if (event.code === 'Space') event.preventDefault();
        setEntryPressed(playableByLabel.get(label), true, 'keyboard');
      };

      const onKeyUp = (event) => {
        const label = event.code === 'Space' ? 'Space' : /^Key[A-Z]$/.test(event.code) ? event.code.slice(3) : '';
        if (!label) return;
        setEntryPressed(playableByLabel.get(label), false, 'keyboard');
      };

      renderer.domElement.addEventListener('pointerdown', onPointerDown);
      window.addEventListener('pointerup', releasePointerKey);
      window.addEventListener('pointercancel', releasePointerKey);
      window.addEventListener('keydown', onKeyDown);
      window.addEventListener('keyup', onKeyUp);

      const resize = () => {
        const width = Math.max(1, mount.clientWidth);
        const height = Math.max(1, mount.clientHeight);
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.fov = camera.aspect < 0.82 ? 60 : camera.aspect < 1.05 ? 41 : 35;
        camera.updateProjectionMatrix();
      };
      const resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(mount);
      resize();

      const clock = new THREE.Clock();
      let explodeProgress = exploded ? 1 : 0;
      const animate = () => {
        if (!animationFrameActive) return;
        const delta = Math.min(clock.getDelta(), 0.05);
        explodeProgress = THREE.MathUtils.damp(
          explodeProgress,
          explodeTargetRef.current,
          5.2,
          delta,
        );
        keysLayer.position.y = THREE.MathUtils.lerp(0, 3.12, explodeProgress);
        plateLayer.position.y = THREE.MathUtils.lerp(0, 1.48, explodeProgress);
        keysLayer.rotation.y = THREE.MathUtils.lerp(0, -0.018, explodeProgress);
        plateLayer.rotation.y = THREE.MathUtils.lerp(0, 0.012, explodeProgress);

        keyEntries.forEach((entry) => {
          entry.pressOffset = THREE.MathUtils.damp(
            entry.pressOffset,
            entry.pressed ? -0.16 : 0,
            entry.pressed ? 24 : 15,
            delta,
          );
          entry.group.position.y = entry.baseY + entry.pressOffset;
        });

        if (resetting.active) {
          camera.position.lerp(HOME_CAMERA, 1 - Math.exp(-5.5 * delta));
          controls.target.lerp(HOME_TARGET, 1 - Math.exp(-5.5 * delta));
          if (
            camera.position.distanceToSquared(HOME_CAMERA) < 0.0008 &&
            controls.target.distanceToSquared(HOME_TARGET) < 0.0008
          ) {
            camera.position.copy(HOME_CAMERA);
            controls.target.copy(HOME_TARGET);
            resetting.active = false;
          }
        }

        controls.update();
        renderer.render(scene, camera);
      };
      renderer.setAnimationLoop(animate);

      sceneRef.current = { camera, controls, resetting };
      setReady(true);

      return () => {
        animationFrameActive = false;
        renderer.setAnimationLoop(null);
        resizeObserver.disconnect();
        renderer.domElement.removeEventListener('pointerdown', onPointerDown);
        window.removeEventListener('pointerup', releasePointerKey);
        window.removeEventListener('pointercancel', releasePointerKey);
        window.removeEventListener('keydown', onKeyDown);
        window.removeEventListener('keyup', onKeyUp);
        controls.dispose();
        scene.traverse((object) => {
          if (object.geometry) object.geometry.dispose();
        });
        legendTextures.forEach((texture) => texture.dispose());
        legendEntries.forEach((entry) => entry.material.map?.dispose());
        disposables.forEach((item) => item.dispose?.());
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
        sceneRef.current = null;
        materialsRef.current = null;
        keyEntriesRef.current = [];
        legendEntriesRef.current = [];
      };
    } catch (caughtError) {
      console.error(caughtError);
      setError('当前浏览器无法启动 3D 预览，请确认已开启硬件加速。');
      setReady(false);
      if (renderer?.domElement?.parentNode === mount) renderer.domElement.remove();
      return undefined;
    }
  }, []);

  return (
    <div className="scene-mount" ref={mountRef}>
      {!ready && !error && (
        <div className="scene-loading" aria-live="polite">
          <span className="loading-ring" />
          <span>正在装配 64 枚键帽</span>
        </div>
      )}
      {error && <div className="scene-error">{error}</div>}
    </div>
  );
}
