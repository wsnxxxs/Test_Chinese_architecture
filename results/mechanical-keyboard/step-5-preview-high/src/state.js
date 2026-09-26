// 全局状态：配置持久化（仅使用本页自己的 localStorage 键）+ 订阅
import { DEFAULT_CONFIG, STORAGE_KEY, CASE_THEMES, CAP_THEMES } from './config.js';

function sanitize(raw) {
  const cfg = { ...DEFAULT_CONFIG };
  if (!raw || typeof raw !== 'object') return { cfg, stored: false };
  const validCase = CASE_THEMES.some((t) => t.id === raw.case) ? raw.case : DEFAULT_CONFIG.case;
  const validCaps = CAP_THEMES.some((t) => t.id === raw.caps) ? raw.caps : DEFAULT_CONFIG.caps;
  cfg.case = validCase;
  cfg.caps = validCaps;
  cfg.exploded = !!raw.exploded;
  cfg.experience = !!raw.experience;
  cfg.sound = !!raw.sound;
  return { cfg, stored: true, savedAt: typeof raw.savedAt === 'number' ? raw.savedAt : null };
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return sanitize(raw ? JSON.parse(raw) : null);
  } catch {
    return sanitize(null);
  }
}

const initial = load();
let cfg = initial.cfg;
let lastSavedAt = initial.savedAt;
const listeners = new Set();

function emit() {
  for (const fn of listeners) fn({ ...cfg }, lastSavedAt);
}

export const state = {
  get cfg() {
    return { ...cfg };
  },
  get lastSavedAt() {
    return lastSavedAt;
  },
  set(patch) {
    Object.assign(cfg, patch);
    try {
      cfg.savedAt = Date.now();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cfg));
      lastSavedAt = cfg.savedAt;
    } catch {
      /* 隐私模式等场景下静默失败 */
    }
    emit();
  },
  reset() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    cfg = { ...DEFAULT_CONFIG };
    lastSavedAt = null;
    emit();
  },
  subscribe(fn) {
    listeners.add(fn);
    fn({ ...cfg }, lastSavedAt);
  },
};
