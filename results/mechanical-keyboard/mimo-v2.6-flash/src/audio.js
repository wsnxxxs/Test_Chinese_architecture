/**
 * 轴体音效：用 WebAudio 合成，无需任何音频素材。
 * - press/click：短噪声带通 + 低频“ thock ”，模拟机械轴触底
 * - explode/assemble：低通噪声扫频，配合拆解动画
 */

let ctx = null;
let noiseBuffer = null;
let enabled = true;

function ensureContext() {
  if (ctx) return ctx;
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    const len = Math.floor(ctx.sampleRate * 0.3);
    noiseBuffer = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
  } catch {
    ctx = null;
  }
  return ctx;
}

export function setSoundEnabled(on) {
  enabled = !!on;
}

export function playSound(kind, velocity = 1) {
  if (!enabled) return;
  const ac = ensureContext();
  if (!ac) return;
  if (ac.state === 'suspended') ac.resume().catch(() => {});
  const now = ac.currentTime;

  if (kind === 'press' || kind === 'click') {
    const v = Math.min(1.4, Math.max(0.5, velocity));

    // 塑料触底的“哒”
    const noise = ac.createBufferSource();
    noise.buffer = noiseBuffer;
    const band = ac.createBiquadFilter();
    band.type = 'bandpass';
    band.frequency.value = 2200 + Math.random() * 700;
    band.Q.value = 1.1;
    const g = ac.createGain();
    g.gain.setValueAtTime(0.09 * v, now);
    g.gain.exponentialRampToValueAtTime(0.0005, now + 0.05);
    noise.connect(band).connect(g).connect(ac.destination);
    noise.start(now);
    noise.stop(now + 0.07);

    // 轴心“ thock ”
    const osc = ac.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(165 + Math.random() * 35, now);
    osc.frequency.exponentialRampToValueAtTime(95, now + 0.06);
    const og = ac.createGain();
    og.gain.setValueAtTime(0.06 * v, now);
    og.gain.exponentialRampToValueAtTime(0.0005, now + 0.07);
    osc.connect(og).connect(ac.destination);
    osc.start(now);
    osc.stop(now + 0.09);
    return;
  }

  if (kind === 'explode' || kind === 'assemble') {
    const noise = ac.createBufferSource();
    noise.buffer = noiseBuffer;
    const lp = ac.createBiquadFilter();
    lp.type = 'lowpass';
    lp.Q.value = 0.8;
    const up = kind === 'explode';
    lp.frequency.setValueAtTime(up ? 420 : 1300, now);
    lp.frequency.exponentialRampToValueAtTime(up ? 1300 : 380, now + 0.34);
    const g = ac.createGain();
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(0.045, now + 0.05);
    g.gain.exponentialRampToValueAtTime(0.0004, now + 0.38);
    noise.connect(lp).connect(g).connect(ac.destination);
    noise.start(now);
    noise.stop(now + 0.4);
  }
}
