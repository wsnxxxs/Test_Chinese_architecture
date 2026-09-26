/**
 * 按键音：WebAudio 合成的短促「哒」声（噪声敲击 + 低频闷响）。
 * 只在用户手势（敲键 / 点键帽）后触发，遵守浏览器自动播放策略。
 */

let ctx = null;
let enabled = true;

export function setSound(on) {
  enabled = on;
}

function ensureCtx() {
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    ctx = new AC();
  }
  if (ctx.state === 'suspended') ctx.resume();
  return true;
}

export function thock() {
  if (!enabled) return;
  if (!ensureCtx()) return;
  const t = ctx.currentTime;

  // 敲击噪声：短噪声串 + 低通
  const len = Math.floor(ctx.sampleRate * 0.05);
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < len; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2);
  }
  const src = ctx.createBufferSource();
  src.buffer = buf;
  const lp = ctx.createBiquadFilter();
  lp.type = 'lowpass';
  lp.frequency.value = 900 + Math.random() * 350;
  lp.Q.value = 0.7;
  const g1 = ctx.createGain();
  g1.gain.setValueAtTime(0.2, t);
  g1.gain.exponentialRampToValueAtTime(0.001, t + 0.09);
  src.connect(lp);
  lp.connect(g1);
  g1.connect(ctx.destination);
  src.start(t);

  // 低频闷响
  const osc = ctx.createOscillator();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(165, t);
  osc.frequency.exponentialRampToValueAtTime(72, t + 0.07);
  const g2 = ctx.createGain();
  g2.gain.setValueAtTime(0.16, t);
  g2.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
  osc.connect(g2);
  g2.connect(ctx.destination);
  osc.start(t);
  osc.stop(t + 0.12);
}
