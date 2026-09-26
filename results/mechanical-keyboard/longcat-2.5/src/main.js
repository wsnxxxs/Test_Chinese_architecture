import * as THREE from 'three';
import { KeyboardScene } from './keyboard/KeyboardScene.js';
import { ConfigManager } from './ui/config.js';
import './style.css';

/**
 * Boot: wire up scene, config panel, keyboard input, and touch interaction.
 */
class App {
  constructor() {
    this.canvas = document.getElementById('gl');
    this.kb = new KeyboardScene(this.canvas);
    this.config = new ConfigManager(this.kb);

    // Render config panel
    const configContainer = document.getElementById('configPanel');
    this.config.render(configContainer);

    // Apply saved config to scene
    this.kb.setCaseColor(this.config.get('caseColor'));
    this.kb.setKeycapTheme(this.config.get('keycapTheme'));
    this.kb.setExplode(this.config.get('explodeAmount'));

    // Keyboard input handling
    this._initKeyboardInput();

    // Touch / click on keycaps
    this._initPointerInteraction();
  }

  _initKeyboardInput() {
    const isTyping = () => {
      const active = document.activeElement;
      return active && (
        active.tagName === 'INPUT' ||
        active.tagName === 'TEXTAREA' ||
        active.tagName === 'SELECT' ||
        active.isContentEditable
      );
    };

    document.addEventListener('keydown', (e) => {
      if (isTyping()) return;
      if (e.repeat) return;

      const key = e.key.toLowerCase();
      const keyId = this._mapKeyToId(key);
      if (keyId) {
        this.kb.pressKey(keyId);
      }
    });

    document.addEventListener('keyup', (e) => {
      if (isTyping()) return;
      const key = e.key.toLowerCase();
      const keyId = this._mapKeyToId(key);
      if (keyId) {
        this.kb.releaseKey(keyId);
      }
    });
  }

  _mapKeyToId(key) {
    const map = {
      'a': 'a', 'b': 'b', 'c': 'c', 'd': 'd', 'e': 'e',
      'f': 'f', 'g': 'g', 'h': 'h', 'i': 'i', 'j': 'j',
      'k': 'k', 'l': 'l', 'm': 'm', 'n': 'n', 'o': 'o',
      'p': 'p', 'q': 'q', 'r': 'r', 's': 's', 't': 't',
      'u': 'u', 'v': 'v', 'w': 'w', 'x': 'x', 'y': 'y',
      'z': 'z',
      ' ': 'space',
      'arrowup': 'up',
      'arrowdown': 'down',
      'arrowleft': 'left',
      'arrowright': 'right',
      'enter': 'enter',
      'backspace': 'bksp',
      'tab': 'tab',
      'escape': 'esc',
      'shift': 'lshift',
      'control': 'lctrl',
      'alt': 'lalt',
      'capslock': 'caps',
    };
    return map[key] || null;
  }

  _initPointerInteraction() {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    this.canvas.addEventListener('pointerdown', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, this.kb.camera);
      const keycapGroup = this.kb.keycapGroup;
      const intersects = raycaster.intersectObjects(keycapGroup.children, true);

      if (intersects.length > 0) {
        // Walk up to the root keycap mesh (skip legend plane children)
        let obj = intersects[0].object;
        while (obj.parent && obj.parent !== keycapGroup) {
          obj = obj.parent;
        }
        const keyData = obj.userData?.keyData;
        if (keyData) {
          this.kb.pressKey(keyData.id);
          setTimeout(() => this.kb.releaseKey(keyData.id), 120);
        }
      }
    });
  }
}

// Boot when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new App());
} else {
  new App();
}
