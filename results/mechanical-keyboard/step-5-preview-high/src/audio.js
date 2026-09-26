// 按键音：WebAudio 合成，无外部素材
let ctx = null;
let enabled = false;

function ensureCtx() {
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
}

function click(freq, gainValue, bandpass) {
  const ac = ensureCtx();
  if (!ac) return;
  const t = ac.currentTime;
  const osc = ac.createOscillator();
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(freq, t);
  osc.frequency.exponentialRampToValueAtTime(freq * 0.55, t + 0.05);
  const gain = ac.createGain();
  gain.gain.setValueAtTime(gainValue, t);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.07);
  const filter = ac.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.value = bandpass;
  filter.Q.value = 1.2;
  osc.connect(filter).connect(gain).connect(ac.destination);
  osc.start(t);
  osc.stop(t + 0.09);
}

export const audio = {
  set enabled(v) {
    enabled = v;
    if (v) ensureCtx();
  },
  get enabled() {
    return enabled;
  },
  down() {
    if (enabled) click(520, 0.05, 1600);
  },
  up() {
    if (enabled) click(760, 0.03, 2200);
  },
  ui() {
    if (enabled) click(880, 0.035, 2600);
  },
};
