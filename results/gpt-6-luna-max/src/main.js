import './style.css';
import { createSanctuary } from './scene.js';

const mount = document.querySelector('#scene-root');
const { controls, renderer, resetView } = createSanctuary(mount);
const motionButton = document.querySelector('#toggle-motion');
let autoRotate = true;

motionButton.addEventListener('click', () => {
  autoRotate = !autoRotate;
  controls.autoRotate = autoRotate;
  motionButton.textContent = autoRotate ? 'Ⅱ' : '▶';
  motionButton.setAttribute('aria-label', autoRotate ? '暂停自动环游' : '继续自动环游');
  motionButton.title = autoRotate ? '暂停自动环游' : '继续自动环游';
});

document.querySelector('#reset-view').addEventListener('click', () => {
  resetView();
  autoRotate = true;
  controls.autoRotate = true;
  motionButton.textContent = 'Ⅱ';
  motionButton.setAttribute('aria-label', '暂停自动环游');
});

window.addEventListener('pagehide', () => renderer.dispose(), { once: true });
