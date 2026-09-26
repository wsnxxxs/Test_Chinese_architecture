import './styles.css';
import { createStore } from './store.js';
import { KeyboardStage } from './keyboard/scene.js';
import { initUI } from './ui.js';
import { playSound } from './audio.js';

const store = createStore();

const stage = new KeyboardStage({
  canvas: document.getElementById('kb-canvas'),
  viewport: document.getElementById('viewport'),
  // 音效是否播放由 audio 模块内的开关（与配置同步）决定
  onSound: (kind, v) => playSound(kind, v),
});

initUI({ store, stage });

// 便于调试与验证
window.__orbit65 = { store, stage };
