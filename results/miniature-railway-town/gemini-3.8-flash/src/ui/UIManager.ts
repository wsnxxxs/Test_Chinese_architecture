import { TrainController } from '../railway/TrainController';
import { Lighting, LightingMode } from '../scene/Lighting';
import { SceneManager } from '../scene/SceneManager';
import * as THREE from 'three';

/**
 * 现代精致悬浮沙盘控制面板与交互管理器
 */
export class UIManager {
  private trainController: TrainController;
  private lighting: Lighting;
  private sceneManager: SceneManager;

  // DOM 元素引用
  private playPauseBtn!: HTMLButtonElement;
  private playPauseIcon!: HTMLElement;
  private speedLabel!: HTMLElement;
  private speedSlider!: HTMLInputElement;
  private speedPresetBtns: HTMLButtonElement[] = [];
  private timeModeBtns: { [key in LightingMode]?: HTMLButtonElement } = {};
  private statusDot!: HTMLElement;
  private statusText!: HTMLElement;

  constructor(
    trainController: TrainController,
    lighting: Lighting,
    sceneManager: SceneManager
  ) {
    this.trainController = trainController;
    this.lighting = lighting;
    this.sceneManager = sceneManager;

    this.createUIElements();
    this.bindEvents();
    this.updateStatus();
  }

  private createUIElements() {
    // 根容器
    const root = document.createElement('div');
    root.id = 'diorama-ui-overlay';
    root.innerHTML = `
      <!-- 顶部信息栏与状态胶囊 -->
      <header class="ui-header">
        <div class="brand">
          <div class="brand-icon">🚂</div>
          <div class="brand-text">
            <h1 class="brand-title">微缩铁路小镇</h1>
            <span class="brand-sub">ALPINE JUNCTION · 1:87 DIORAMA</span>
          </div>
        </div>

        <div class="status-capsule" id="status-capsule">
          <span class="status-dot" id="status-dot"></span>
          <span class="status-text" id="status-text">正常巡航中</span>
        </div>
      </header>

      <!-- 底部主控悬浮面板 -->
      <footer class="ui-bottom-dock">
        <div class="dock-panel">
          <!-- 核心走停控制与复位 -->
          <div class="dock-section">
            <button class="btn btn-primary" id="btn-play-pause" title="运行 / 暂停 (空格键)">
              <span class="btn-icon" id="play-pause-icon">⏸</span>
              <span class="btn-label" id="play-pause-text">暂停</span>
            </button>
            <button class="btn btn-secondary" id="btn-reset" title="复位视角、列车位置与速度 (R键)">
              <span class="btn-icon">↺</span>
              <span class="btn-label">复位</span>
            </button>
          </div>

          <div class="divider"></div>

          <!-- 速度控制 -->
          <div class="dock-section speed-section">
            <div class="section-title">
              <span>运行速度</span>
              <span class="speed-value" id="speed-value">1.0x</span>
            </div>
            <div class="speed-controls">
              <input type="range" id="speed-slider" min="0.25" max="3.0" step="0.25" value="1.0" class="custom-slider" />
              <div class="btn-group">
                <button class="btn-chip" data-speed="0.5">0.5x</button>
                <button class="btn-chip active" data-speed="1.0">1.0x</button>
                <button class="btn-chip" data-speed="2.0">2.0x</button>
              </div>
            </div>
          </div>

          <div class="divider"></div>

          <!-- 昼夜环境光照 -->
          <div class="dock-section">
            <div class="section-title">光照氛围</div>
            <div class="btn-group">
              <button class="btn-chip active" id="btn-dusk" data-mode="DUSK" title="傍晚暖阳与长投影">
                <span>🌅 傍晚</span>
              </button>
              <button class="btn-chip" id="btn-day" data-mode="DAY" title="清爽明亮白昼">
                <span>☀️ 白天</span>
              </button>
              <button class="btn-chip" id="btn-night" data-mode="NIGHT" title="夜幕与窗户路灯暖光">
                <span>🌙 夜晚</span>
              </button>
            </div>
          </div>

          <div class="divider"></div>

          <!-- 相机视角预设 -->
          <div class="dock-section">
            <div class="section-title">视角观察</div>
            <div class="btn-group">
              <button class="btn-chip active" id="cam-overview">全景沙盘</button>
              <button class="btn-chip" id="cam-station">火车站</button>
              <button class="btn-chip" id="cam-bridge">跨河铁桥</button>
              <button class="btn-chip" id="cam-follow">追踪列车</button>
            </div>
          </div>
        </div>

        <!-- 底部快捷提示 -->
        <div class="dock-tips">
          <span>🖱️ 鼠标左键拖拽旋转 · 滚轮缩放 · 右键平移 · [空格] 暂停/运行 · [R] 复位</span>
        </div>
      </footer>
    `;

    document.body.appendChild(root);

    // 绑定内部引用
    this.playPauseBtn = document.getElementById('btn-play-pause') as HTMLButtonElement;
    this.playPauseIcon = document.getElementById('play-pause-icon') as HTMLElement;
    this.speedLabel = document.getElementById('speed-value') as HTMLElement;
    this.speedSlider = document.getElementById('speed-slider') as HTMLInputElement;
    this.statusDot = document.getElementById('status-dot') as HTMLElement;
    this.statusText = document.getElementById('status-text') as HTMLElement;

    this.timeModeBtns['DUSK'] = document.getElementById('btn-dusk') as HTMLButtonElement;
    this.timeModeBtns['DAY'] = document.getElementById('btn-day') as HTMLButtonElement;
    this.timeModeBtns['NIGHT'] = document.getElementById('btn-night') as HTMLButtonElement;

    this.speedPresetBtns = Array.from(document.querySelectorAll('[data-speed]')) as HTMLButtonElement[];
  }

  private bindEvents() {
    // 1. 播放/暂停
    this.playPauseBtn.addEventListener('click', () => {
      const isPlaying = this.trainController.togglePlayPause();
      this.updatePlayPauseButton(isPlaying);
      this.updateStatus();
    });

    // 2. 复位按钮
    const resetBtn = document.getElementById('btn-reset');
    resetBtn?.addEventListener('click', () => {
      this.trainController.reset();
      this.sceneManager.resetCamera();
      this.setSpeed(1.0);
      this.updatePlayPauseButton(true);
      this.updateStatus();
      this.updateActiveCamBtn(document.getElementById('cam-overview') as HTMLButtonElement);
    });

    // 3. 速度滑块
    this.speedSlider.addEventListener('input', (e) => {
      const val = parseFloat((e.target as HTMLInputElement).value);
      this.setSpeed(val, false);
    });

    // 4. 速度快捷键预设
    this.speedPresetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const val = parseFloat(btn.getAttribute('data-speed') || '1.0');
        this.setSpeed(val, true);
      });
    });

    // 5. 昼夜模式切换
    Object.keys(this.timeModeBtns).forEach(key => {
      const mode = key as LightingMode;
      const btn = this.timeModeBtns[mode];
      btn?.addEventListener('click', () => {
        this.lighting.setMode(mode);
        Object.values(this.timeModeBtns).forEach(b => b?.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // 6. 相机视角切换
    const camOverview = document.getElementById('cam-overview') as HTMLButtonElement;
    const camStation = document.getElementById('cam-station') as HTMLButtonElement;
    const camBridge = document.getElementById('cam-bridge') as HTMLButtonElement;
    const camFollow = document.getElementById('cam-follow') as HTMLButtonElement;

    camOverview?.addEventListener('click', () => {
      this.sceneManager.resetCamera();
      this.updateActiveCamBtn(camOverview);
    });

    camStation?.addEventListener('click', () => {
      // 特写火车站
      this.sceneManager.flyTo(
        new THREE.Vector3(12, 14, 38),
        new THREE.Vector3(0, 1.2, 18),
        1.2
      );
      this.updateActiveCamBtn(camStation);
    });

    camBridge?.addEventListener('click', () => {
      // 俯瞰跨河铁桥
      this.sceneManager.flyTo(
        new THREE.Vector3(56, 26, 8),
        new THREE.Vector3(34, 1.0, -3),
        1.2
      );
      this.updateActiveCamBtn(camBridge);
    });

    camFollow?.addEventListener('click', () => {
      // 列车追踪跟随模式
      this.sceneManager.setFollowTrain(this.trainController['train'].engineGroup);
      this.updateActiveCamBtn(camFollow);
    });

    // 7. 键盘快捷键监听
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        const isPlaying = this.trainController.togglePlayPause();
        this.updatePlayPauseButton(isPlaying);
        this.updateStatus();
      } else if (e.code === 'KeyR') {
        resetBtn?.click();
      } else if (e.code === 'Digit1') {
        this.timeModeBtns['DAY']?.click();
      } else if (e.code === 'Digit2') {
        this.timeModeBtns['DUSK']?.click();
      } else if (e.code === 'Digit3') {
        this.timeModeBtns['NIGHT']?.click();
      }
    });

    // 8. 监听列车控制器状态变更
    this.trainController.onStateChange = (_state, _remaining) => {
      this.updateStatus();
    };
  }

  private updateActiveCamBtn(activeBtn: HTMLButtonElement) {
    const camBtns = [
      document.getElementById('cam-overview'),
      document.getElementById('cam-station'),
      document.getElementById('cam-bridge'),
      document.getElementById('cam-follow'),
    ];
    camBtns.forEach(b => b?.classList.remove('active'));
    activeBtn.classList.add('active');
  }

  private setSpeed(mult: number, updateSlider = true) {
    this.trainController.setSpeedMultiplier(mult);
    this.speedLabel.textContent = `${mult.toFixed(2).replace(/\.00$/, '.0')}x`;
    if (updateSlider) {
      this.speedSlider.value = mult.toString();
    }
    this.speedPresetBtns.forEach(btn => {
      const v = parseFloat(btn.getAttribute('data-speed') || '');
      btn.classList.toggle('active', Math.abs(v - mult) < 0.05);
    });
  }

  public updatePlayPauseButton(isPlaying: boolean) {
    const textSpan = document.getElementById('play-pause-text');
    if (isPlaying) {
      this.playPauseIcon.textContent = '⏸';
      if (textSpan) textSpan.textContent = '暂停';
      this.playPauseBtn.classList.remove('paused');
    } else {
      this.playPauseIcon.textContent = '▶';
      if (textSpan) textSpan.textContent = '运行';
      this.playPauseBtn.classList.add('paused');
    }
  }

  /**
   * 刷新顶部状态显示胶囊（实时倒计时、停靠提示）
   */
  public updateStatus() {
    const status = this.trainController.getStatusText();
    this.statusText.textContent = status.label;

    this.statusDot.className = 'status-dot';
    switch (status.tag) {
      case 'RUNNING':
        this.statusDot.classList.add('dot-green');
        break;
      case 'STATION_STOP':
        this.statusDot.classList.add('dot-red');
        break;
      case 'DECEL':
        this.statusDot.classList.add('dot-yellow');
        break;
      case 'ACCEL':
        this.statusDot.classList.add('dot-blue');
        break;
      case 'PAUSED':
        this.statusDot.classList.add('dot-gray');
        break;
    }
  }
}
