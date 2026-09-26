/** Frame-rate-independent exponential damping, with an exact final snap. */
export function damp(current, target, speed, dt, epsilon = 0.0001) {
  if (Math.abs(current - target) < epsilon) return target;
  const next = target + (current - target) * Math.exp(-speed * Math.min(Math.max(dt, 0), 0.05));
  return Math.abs(next - target) < epsilon ? target : next;
}

export function explosionOffsets(progress) {
  return { keycaps: progress * 3.6, plate: progress * 1.65, base: 0 };
}

/** Ignore text editing, IME, native control activation and browser shortcuts. */
export function shouldIgnoreKeyboard(event, activeElement, dialogOpen = false) {
  if (event.isComposing || event.ctrlKey || event.altKey || event.metaKey || dialogOpen) return true;
  if (!activeElement?.closest) return false;
  if (activeElement.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"]), [role="textbox"]')) return true;
  return event.code === 'Space' && Boolean(activeElement.closest('button, a, summary, [role="button"], [role="switch"]'));
}
