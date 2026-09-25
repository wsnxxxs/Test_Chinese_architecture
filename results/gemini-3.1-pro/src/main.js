import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Setup scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87CEEB); // Sky color
scene.fog = new THREE.Fog(0x87CEEB, 100, 400);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 80, 160);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.getElementById('app').appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.target.set(0, 10, -10);
controls.maxPolarAngle = Math.PI / 2 + 0.1;

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xfffae0, 1.2);
dirLight.position.set(100, 150, 100);
dirLight.castShadow = true;
dirLight.shadow.camera.top = 150;
dirLight.shadow.camera.bottom = -150;
dirLight.shadow.camera.left = -150;
dirLight.shadow.camera.right = 150;
dirLight.shadow.camera.near = 0.1;
dirLight.shadow.camera.far = 400;
dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;
scene.add(dirLight);

// Voxel Data
const voxels = [];

function addVoxel(x, y, z, color) {
    voxels.push({ x: Math.floor(x), y: Math.floor(y), z: Math.floor(z), color });
}

// Colors (Hex)
const C_RED = 0x8b0000;       // Pillars/Doors
const C_WALL = 0xa03333;      // Main walls
const C_GOLD_ROOF = 0xd4af37; // Main hall roof
const C_DARK_ROOF = 0x2f4f4f; // Other roofs
const C_STONE = 0xdcdcdc;     // Base, steps, path
const C_WOOD = 0x5c4033;      // Beams, brackets
const C_GRASS = 0x4b7835;     // Grass
const C_PATH = 0x888c8d;      // Main path
const C_WHITE = 0xffffff;     // Windows/Decor

// Generators
function buildBase(cx, cz, w, d, h, hasSteps = true) {
    const hw = Math.floor(w/2);
    const hd = Math.floor(d/2);

    // Main Base Block (Empty inside to save voxels)
    for (let x = -hw; x <= hw; x++) {
        for (let z = -hd; z <= hd; z++) {
            for (let y = 0; y < h; y++) {
                if (y === h - 1 || x === -hw || x === hw || z === -hd || z === hd) {
                    addVoxel(cx + x, y, cz + z, C_STONE);
                }
            }
        }
    }

    // Steps (Front and optionally back/sides, keeping it simple to front steps for most)
    if (hasSteps) {
        const stepWidth = Math.max(4, Math.floor(w / 3));
        const hsw = Math.floor(stepWidth / 2);
        for (let y = 0; y < h; y++) {
            const stepOut = h - y; // how far it extends out
            for (let x = -hsw; x <= hsw; x++) {
                for (let z = 1; z <= stepOut; z++) {
                    addVoxel(cx + x, y, cz + hd + z, C_STONE);
                }
            }
            // Add back steps for main buildings
            if (h > 2) {
                for (let x = -hsw; x <= hsw; x++) {
                    for (let z = 1; z <= stepOut; z++) {
                        addVoxel(cx + x, y, cz - hd - z, C_STONE);
                    }
                }
            }
        }
    }
}

function buildWalls(cx, cz, w, d, baseY, h) {
    const hw = Math.floor(w/2);
    const hd = Math.floor(d/2);

    for (let x = -hw; x <= hw; x++) {
        for (let z = -hd; z <= hd; z++) {
            const isBoundary = (x === -hw || x === hw || z === -hd || z === hd);
            if (isBoundary) {
                // Determine if it's a column or wall
                const isColumn = (Math.abs(x) % 4 === 0 || Math.abs(z) % 4 === 0) || (x === -hw || x === hw || z === -hd || z === hd);

                // Front door logic
                const isFrontDoor = (z === hd && Math.abs(x) <= 3);

                for (let y = 0; y < h; y++) {
                    if (isFrontDoor) {
                        if (y < h - 2) {
                            addVoxel(cx + x, baseY + y, cz + z, C_WOOD);
                        } else {
                            addVoxel(cx + x, baseY + y, cz + z, C_RED);
                        }
                    } else {
                        let c = isColumn ? C_RED : C_WALL;

                        // Add some window details
                        if (!isColumn && y > 2 && y < h - 2 && (Math.abs(x) % 4 === 2 || Math.abs(z) % 4 === 2)) {
                            c = C_WHITE;
                        }

                        addVoxel(cx + x, baseY + y, cz + z, c);
                    }
                }
            }
        }
    }
}

function buildRoof(cx, cz, w, d, baseY, h, color) {
    const hw = Math.floor(w/2) + 3; // Overhang
    const hd = Math.floor(d/2) + 3;

    for (let x = -hw; x <= hw; x++) {
        for (let z = -hd; z <= hd; z++) {
            const nx = Math.abs(x) / hw;
            const nz = Math.abs(z) / hd;

            // Xieshan/Wudian profile
            const profileX = 1 - Math.pow(nx, 1.4);
            const profileZ = 1 - Math.pow(nz, 1.4);
            const profile = Math.min(profileX, profileZ);

            let ry = Math.floor(profile * h);

            // Sweeping eaves
            let eaveLift = 0;
            if (nx > 0.6 && nz > 0.6) {
                const cornerness = (nx - 0.6) * (nz - 0.6) * 10;
                eaveLift = Math.floor(cornerness * 3);
            } else if (nx > 0.8 || nz > 0.8) {
                 eaveLift = 1;
            }

            ry += eaveLift;

            addVoxel(cx + x, baseY + ry, cz + z, color);
            addVoxel(cx + x, baseY + ry - 1, cz + z, color);

            // Dougong / support brackets
            if ((ry + eaveLift) > 0 && Math.max(nx, nz) > 0.85 && (Math.abs(x) % 2 === 0 || Math.abs(z) % 2 === 0)) {
                addVoxel(cx + x, baseY + ry - 2, cz + z, C_WOOD);
            }
        }
    }

    // Roof ridge
    for (let x = -hw + 1; x <= hw - 1; x++) {
        addVoxel(cx + x, baseY + h + 1, cz, C_WOOD); // Ridge decor
        addVoxel(cx + x, baseY + h, cz, color);
        // Ends
        if (x === -hw + 1 || x === hw - 1) {
            addVoxel(cx + x, baseY + h + 2, cz, C_WOOD);
        }
    }
}

function buildBuilding(cx, cz, w, d, baseH, wallH, roofH, isMain) {
    const roofColor = isMain ? C_GOLD_ROOF : C_DARK_ROOF;
    buildBase(cx, cz, w + 4, d + 4, baseH, true);
    buildWalls(cx, cz, w, d, baseH, wallH);
    buildRoof(cx, cz, w, d, baseH + wallH, roofH, roofColor);
}

function buildPagoda(cx, cz, size, tiers, baseH) {
    buildBase(cx, cz, size + 2, size + 2, baseH, true);
    let currentY = baseH;
    let currentSize = size;

    for (let i = 0; i < tiers; i++) {
        const wallH = 6;
        const roofH = 5;

        buildWalls(cx, cz, currentSize, currentSize, currentY, wallH);
        buildRoof(cx, cz, currentSize, currentSize, currentY + wallH, roofH, C_DARK_ROOF);

        currentY += wallH + roofH - 1;
        currentSize = Math.max(4, currentSize - 2);
    }

    // Spire
    for(let y = 0; y < 8; y++) {
        addVoxel(cx, currentY + y, cz, C_GOLD_ROOF);
    }
}

function buildEnvironment() {
    // Ground plane via voxels for texture
    const gw = 180;
    const gd = 220;

    // Add random variations to grass
    for (let x = -gw/2; x <= gw/2; x++) {
        for (let z = -gd/2; z <= gd/2; z+=2) {
             if(Math.random() > 0.9) addVoxel(x, -1, z, C_GRASS);
        }
    }

    // Central Path
    for (let x = -6; x <= 6; x++) {
        for (let z = -70; z <= 100; z++) {
            addVoxel(x, -1, z, C_PATH);
            if (x >= -4 && x <= 4) addVoxel(x, 0, z, C_STONE); // Elevated center path
        }
    }

    // Courtyard (between gate and main hall)
    for (let x = -20; x <= 20; x++) {
        for (let z = 5; z <= 40; z++) {
            addVoxel(x, -1, z, C_PATH);
            if (Math.abs(x) > 6 && Math.random() > 0.95) { // Small decor stones
                addVoxel(x, 0, z, C_STONE);
            }
        }
    }

    // Paths to Side Halls
    for (let x = -40; x <= 40; x++) {
        for (let z = 18; z <= 26; z++) {
            addVoxel(x, -1, z, C_PATH);
            if (z >= 20 && z <= 24) addVoxel(x, 0, z, C_STONE);
        }
    }
}

// Generate Scene
buildEnvironment();

// 1. Main Hall (Taihe Dian style)
buildBuilding(0, -15, 36, 20, 5, 12, 10, true);

// 2. Front Gate (Shanmen)
buildBuilding(0, 70, 20, 10, 3, 8, 7, false);

// 3. East Side Hall
buildBuilding(35, 22, 16, 24, 3, 9, 8, false);

// 4. West Side Hall
buildBuilding(-35, 22, 16, 24, 3, 9, 8, false);

// 5. Drum Tower
buildBuilding(25, 45, 12, 12, 6, 8, 7, false);

// 6. Bell Tower
buildBuilding(-25, 45, 12, 12, 6, 8, 7, false);

// 7. Pagoda (Back area)
buildPagoda(0, -60, 14, 5, 3);

// Create InstancedMesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
// Optimize geometry by removing internal faces where possible, but BoxGeometry is fine for instancing
const material = new THREE.MeshLambertMaterial({ color: 0xffffff });
const instancedMesh = new THREE.InstancedMesh(geometry, material, voxels.length);
instancedMesh.castShadow = true;
instancedMesh.receiveShadow = true;

const dummy = new THREE.Object3D();
const colorObj = new THREE.Color();

for (let i = 0; i < voxels.length; i++) {
    const v = voxels[i];
    dummy.position.set(v.x, v.y, v.z);
    dummy.updateMatrix();
    instancedMesh.setMatrixAt(i, dummy.matrix);
    colorObj.setHex(v.color);
    instancedMesh.setColorAt(i, colorObj);
}

scene.add(instancedMesh);

// Ground Plane (To catch shadows properly and fill gaps)
const groundGeo = new THREE.PlaneGeometry(400, 400);
const groundMat = new THREE.MeshLambertMaterial({ color: C_GRASS });
const ground = new THREE.Mesh(groundGeo, groundMat);
ground.rotation.x = -Math.PI / 2;
ground.position.y = -1.1;
ground.receiveShadow = true;
scene.add(ground);

// Animation Loop
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

animate();

// Handle Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
