import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export interface CameraPreset {
  name: string;
  pos: THREE.Vector3;
  target: THREE.Vector3;
}

/**
 * 场景、渲染器、相机与视角控制器
 */
export class SceneManager {
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public renderer: THREE.WebGLRenderer;
  public controls: OrbitControls;

  // 初始等距视角配置 (低 FOV 产生精致微缩玩具等距透视感)
  public readonly initialPos = new THREE.Vector3(72, 58, 76);
  public readonly initialTarget = new THREE.Vector3(0, 0, 0);

  // 相机插值平滑飞行
  private isCameraTransitioning = false;
  private cameraTransProgress = 1.0;
  private cameraTransDuration = 1.2;
  private startCamPos = new THREE.Vector3();
  private targetCamPos = new THREE.Vector3();
  private startCamTarget = new THREE.Vector3();
  private targetCamTarget = new THREE.Vector3();

  // 是否处于列车追踪视角
  public isFollowTrain: boolean = false;
  private followTargetObj?: THREE.Object3D;

  constructor(container: HTMLElement) {
    // 1. 创建场景
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xd6c7bc);
    this.scene.fog = new THREE.FogExp2(0xd6c7bc, 0.0035);

    // 2. 创建相机 (等距微缩视角，FOV = 38度)
    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(38, aspect, 0.5, 300);
    this.camera.position.copy(this.initialPos);

    // 3. 渲染器
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.08;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(this.renderer.domElement);

    // 4. 轨道控制器
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.target.copy(this.initialTarget);
    this.controls.minDistance = 25;
    this.controls.maxDistance = 190;
    this.controls.maxPolarAngle = Math.PI / 2 - 0.05; // 防止看到底座下方空洞

    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  private onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  /**
   * 平滑飞行到指定相机位置与目标点
   */
  public flyTo(pos: THREE.Vector3, target: THREE.Vector3, duration = 1.0) {
    this.isFollowTrain = false;
    this.isCameraTransitioning = true;
    this.cameraTransProgress = 0;
    this.cameraTransDuration = duration;

    this.startCamPos.copy(this.camera.position);
    this.targetCamPos.copy(pos);

    this.startCamTarget.copy(this.controls.target);
    this.targetCamTarget.copy(target);
  }

  /**
   * 恢复初始机位
   */
  public resetCamera() {
    this.flyTo(this.initialPos, this.initialTarget, 1.0);
  }

  /**
   * 启用/取消列车跟随视角
   */
  public setFollowTrain(targetObj?: THREE.Object3D) {
    this.followTargetObj = targetObj;
    this.isFollowTrain = !!targetObj;
  }

  /**
   * 逐帧更新相机插值与跟随
   */
  public update(delta: number) {
    if (this.isFollowTrain && this.followTargetObj) {
      // 列车平滑跟随机位
      const trainPos = new THREE.Vector3();
      this.followTargetObj.getWorldPosition(trainPos);

      // 保持一定相对距离与俯视角度
      const offset = new THREE.Vector3(20, 16, 22);
      const desiredPos = trainPos.clone().add(offset);

      this.camera.position.lerp(desiredPos, 0.06);
      this.controls.target.lerp(trainPos, 0.08);
      this.controls.update();
      return;
    }

    if (this.isCameraTransitioning) {
      this.cameraTransProgress += delta / this.cameraTransDuration;
      if (this.cameraTransProgress >= 1.0) {
        this.cameraTransProgress = 1.0;
        this.isCameraTransitioning = false;
      }

      const t = THREE.MathUtils.smoothstep(this.cameraTransProgress, 0, 1);
      this.camera.position.lerpVectors(this.startCamPos, this.targetCamPos, t);
      this.controls.target.lerpVectors(this.startCamTarget, this.targetCamTarget, t);
    }

    this.controls.update();
  }

  public render() {
    this.renderer.render(this.scene, this.camera);
  }
}
