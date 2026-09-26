/** Quiet, gesture-initiated synthesized clicks; no recordings or network audio. */
export class KeySound {
  constructor() { this.context = null; this.enabled = false; this.noise = null; }
  async setEnabled(enabled) {
    this.enabled = enabled;
    if (!enabled) return true;
    try {
      const Context = window.AudioContext || window.webkitAudioContext;
      if (!Context) throw new Error('Web Audio unavailable');
      this.context ??= new Context();
      await this.context.resume();
      if (!this.noise) {
        const length = Math.floor(this.context.sampleRate * .06);
        this.noise = this.context.createBuffer(1, length, this.context.sampleRate);
        const data = this.noise.getChannelData(0);
        for (let i = 0; i < length; i++) data[i] = (Math.random() * 2 - 1) * Math.exp(-i / length * 5);
      }
      return true;
    } catch { this.enabled = false; return false; }
  }
  play(isSpace = false) {
    if (!this.enabled || !this.context || this.context.state !== 'running' || !this.noise) return;
    const ctx = this.context, time = ctx.currentTime;
    const noise = ctx.createBufferSource(), filter = ctx.createBiquadFilter(), gain = ctx.createGain();
    noise.buffer = this.noise;
    filter.type = 'lowpass'; filter.frequency.value = isSpace ? 750 : 1450;
    gain.gain.setValueAtTime(.10, time); gain.gain.exponentialRampToValueAtTime(.001, time + .06);
    noise.connect(filter); filter.connect(gain); gain.connect(ctx.destination);
    noise.start(time); noise.stop(time + .065);
    noise.onended = () => { noise.disconnect(); filter.disconnect(); gain.disconnect(); };
    const oscillator = ctx.createOscillator(), body = ctx.createGain();
    oscillator.type = 'sine'; oscillator.frequency.setValueAtTime(isSpace ? 110 : 170, time);
    oscillator.frequency.exponentialRampToValueAtTime(65, time + .075);
    body.gain.setValueAtTime(.04, time); body.gain.exponentialRampToValueAtTime(.0001, time + .08);
    oscillator.connect(body); body.connect(ctx.destination);
    oscillator.start(time); oscillator.stop(time + .085);
    oscillator.onended = () => { oscillator.disconnect(); body.disconnect(); };
  }
  dispose() { this.enabled = false; this.context?.close().catch(() => {}); }
}
