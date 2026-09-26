import * as THREE from 'three';
import { Station } from '../town/Station';
import { Buildings } from '../town/Buildings';
import { TownDecorations } from '../town/TownDecorations';
import { Train } from '../railway/Train';

export type LightingMode = 'DUSK' | 'DAY' | 'NIGHT';

/**
 * 沙盘全景光照与昼夜系统管理器
 * 支持：
 * 1. 默认暖色傍晚夕阳光照与长投影
 * 2. 白天清爽阳光
 * 3. 夜间月光氛围（全景依然清晰可见）+ 窗户、路灯、车灯发光
 * 4. 平滑过渡插值动画
 */
export class Lighting {
  public scene: THREE.Scene;
  public mode: LightingMode = 'DUSK';

  // 光源组件
  public sunLight!: THREE.DirectionalLight;
  public hemiLight!: THREE.HemisphereLight;
  public ambientLight!: THREE.AmbientLight;

  // 场景外部引用
  private station: Station;
  private buildings: Buildings;
  private townDeco: TownDecorations;
  private train: Train;

  // 插值过渡状态
  private isTransitioning: boolean = false;
  private transitionProgress: number = 1.0;
  private transitionDuration: number = 0.8; // 0.8秒平滑切换
  
  // 插值当前与目标参数
  private currentSunColor = new THREE.Color();
  private targetSunColor = new THREE.Color();
  private currentSunIntensity: number = 2.2;
  private targetSunIntensity: number = 2.2;
  private currentSunPos = new THREE.Vector3();
  private targetSunPos = new THREE.Vector3();

  private currentHemiSky = new THREE.Color();
  private targetHemiSky = new THREE.Color();
  private currentHemiGround = new THREE.Color();
  private targetHemiGround = new THREE.Color();
  private currentHemiIntensity: number = 1.0;
  private targetHemiIntensity: number = 1.0;

  private currentBgColor = new THREE.Color();
  private targetBgColor = new THREE.Color();

  constructor(
    scene: THREE.Scene,
    station: Station,
    buildings: Buildings,
    townDeco: TownDecorations,
    train: Train
  ) {
    this.scene = scene;
    this.station = station;
    this.buildings = buildings;
    this.townDeco = townDeco;
    this.train = train;

    this.initLights();
    this.setMode('DUSK', true); // 默认傍晚，立即生效
  }

  private initLights() {
    // 1. 半球环境光 (HemisphereLight: 天空反射与地面反弹光)
    this.hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.0);
    this.hemiLight.position.set(0, 50, 0);
    this.scene.add(this.hemiLight);

    // 2. 基础环境弱补光 (AmbientLight)
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    this.scene.add(this.ambientLight);

    // 3. 主平行太阳光 (DirectionalLight)，支持高品质软阴影
    this.sunLight = new THREE.DirectionalLight(0xffffff, 2.2);
    this.sunLight.castShadow = true;

    // 阴影贴图分辨率与精确范围（覆盖沙盘宽 104 x 74）
    this.sunLight.shadow.mapSize.width = 2048;
    this.sunLight.shadow.mapSize.height = 2048;
    this.sunLight.shadow.camera.near = 5;
    this.sunLight.shadow.camera.far = 160;

    const d = 58;
    this.sunLight.shadow.camera.left = -d;
    this.sunLight.shadow.camera.right = d;
    this.sunLight.shadow.camera.top = d;
    this.sunLight.shadow.camera.bottom = -d;
    this.sunLight.shadow.bias = -0.0004;
    this.sunLight.shadow.normalBias = 0.02;

    this.scene.add(this.sunLight);
    this.scene.add(this.sunLight.target);
    this.sunLight.target.position.set(0, 0, 0);
  }

  /**
   * 切换光照模式
   */
  public setMode(mode: LightingMode, immediate = false) {
    this.mode = mode;

    switch (mode) {
      case 'DUSK': // 默认傍晚：暖阳金橙色、长阴影、微缩模型温润质感
        this.targetSunColor.setHex(0xff9a47);
        this.targetSunIntensity = 2.4;
        this.targetSunPos.set(45, 30, -35); // 低倾角，拉出长投影

        this.targetHemiSky.setHex(0x9d80a8); // 紫粉色暮光
        this.targetHemiGround.setHex(0x704832); // 暖橙褐地表
        this.targetHemiIntensity = 1.0;

        this.targetBgColor.setHex(0xd6c7bc); // 柔和暮色背景
        break;

      case 'DAY': // 白天：明亮清新暖白阳光、通透大气
        this.targetSunColor.setHex(0xfff3e0);
        this.targetSunIntensity = 2.8;
        this.targetSunPos.set(30, 60, 25); // 高角度阳光

        this.targetHemiSky.setHex(0xb5d8f7); // 清澈天蓝
        this.targetHemiGround.setHex(0x608055); // 绿草地反射
        this.targetHemiIntensity = 1.25;

        this.targetBgColor.setHex(0xdce7ee); // 白昼温润浅青灰背景
        break;

      case 'NIGHT': // 夜晚：幽蓝深邃夜空，月光映照，小镇万家灯火通明！
        this.targetSunColor.setHex(0x5577aa); // 清冷月光
        this.targetSunIntensity = 0.95;
        this.targetSunPos.set(35, 45, -25);

        this.targetHemiSky.setHex(0x223658); // 深蓝夜空光
        this.targetHemiGround.setHex(0x1a222e); // 暗蓝褐地面光
        this.targetHemiIntensity = 0.85;

        this.targetBgColor.setHex(0x131924); // 典雅深夜黑蓝
        break;
    }

    // 更新各物件的夜间自发光
    const isNight = mode === 'NIGHT';
    const isDusk = mode === 'DUSK';
    this.station.setNightMode(isNight, isDusk);
    this.buildings.setNightMode(isNight, isDusk);
    this.townDeco.setNightMode(isNight, isDusk);
    this.train.setNightMode(isNight, isDusk);

    if (immediate) {
      this.currentSunColor.copy(this.targetSunColor);
      this.currentSunIntensity = this.targetSunIntensity;
      this.currentSunPos.copy(this.targetSunPos);

      this.currentHemiSky.copy(this.targetHemiSky);
      this.currentHemiGround.copy(this.targetHemiGround);
      this.currentHemiIntensity = this.targetHemiIntensity;

      this.currentBgColor.copy(this.targetBgColor);

      this.applyCurrentLighting();
      this.isTransitioning = false;
    } else {
      this.isTransitioning = true;
      this.transitionProgress = 0;
    }
  }

  private applyCurrentLighting() {
    this.sunLight.color.copy(this.currentSunColor);
    this.sunLight.intensity = this.currentSunIntensity;
    this.sunLight.position.copy(this.currentSunPos);

    this.hemiLight.color.copy(this.currentHemiSky);
    this.hemiLight.groundColor.copy(this.currentHemiGround);
    this.hemiLight.intensity = this.currentHemiIntensity;

    this.scene.background = this.currentBgColor.clone();
    if (this.scene.fog) {
      this.scene.fog.color.copy(this.currentBgColor);
    }
  }

  /**
   * 逐帧更新过渡动画
   */
  public update(delta: number) {
    if (!this.isTransitioning) return;

    this.transitionProgress += delta / this.transitionDuration;
    if (this.transitionProgress >= 1.0) {
      this.transitionProgress = 1.0;
      this.isTransitioning = false;
    }

    const t = THREE.MathUtils.smoothstep(this.transitionProgress, 0, 1);

    this.currentSunColor.lerpColors(this.currentSunColor, this.targetSunColor, t);
    this.currentSunIntensity = THREE.MathUtils.lerp(this.currentSunIntensity, this.targetSunIntensity, t);
    this.currentSunPos.lerpVectors(this.currentSunPos, this.targetSunPos, t);

    this.currentHemiSky.lerpColors(this.currentHemiSky, this.targetHemiSky, t);
    this.currentHemiGround.lerpColors(this.currentHemiGround, this.targetHemiGround, t);
    this.currentHemiIntensity = THREE.MathUtils.lerp(this.currentHemiIntensity, this.targetHemiIntensity, t);

    this.currentBgColor.lerpColors(this.currentBgColor, this.targetBgColor, t);

    this.applyCurrentLighting();
  }
}
