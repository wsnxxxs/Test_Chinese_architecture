/**
 * 配置状态：内存态 + localStorage 持久化（仅本页命名空间）。
 * 任何写入都会自动保存，刷新后恢复；恢复默认只删除本页自己的 key。
 */
import { SHELLS, THEMES } from './keyboard/themes.js';

const STORAGE_KEY = 'orbit65:showcase:config:v1';

export const DEFAULTS = Object.freeze({
  shell: SHELLS[0].id,
  theme: THEMES[0].id,
  sound: true,
});

function sanitize(raw) {
  const state = { ...DEFAULTS };
  if (!raw || typeof raw !== 'object') return state;
  if (SHELLS.some((s) => s.id === raw.shell)) state.shell = raw.shell;
  if (THEMES.some((t) => t.id === raw.theme)) state.theme = raw.theme;
  if (typeof raw.sound === 'boolean') state.sound = raw.sound;
  return state;
}

function load() {
  try {
    const text = localStorage.getItem(STORAGE_KEY);
    return text ? sanitize(JSON.parse(text)) : { ...DEFAULTS };
  } catch {
    return { ...DEFAULTS };
  }
}

export function createStore() {
  let state = load();
  let restoredFromStorage = (() => {
    try {
      return !!localStorage.getItem(STORAGE_KEY);
    } catch {
      return false;
    }
  })();
  const listeners = new Set();

  const persist = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      return true;
    } catch {
      return false;
    }
  };

  const notify = () => listeners.forEach((fn) => fn(state));

  return {
    getState: () => state,
    wasRestored: () => restoredFromStorage,
    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
    setShell(id) {
      if (state.shell === id) return;
      state = { ...state, shell: id };
      persist();
      notify();
    },
    setTheme(id) {
      if (state.theme === id) return;
      state = { ...state, theme: id };
      persist();
      notify();
    },
    setSound(on) {
      if (state.sound === on) return;
      state = { ...state, sound: on };
      persist();
      notify();
    },
    /** 显式保存（自动保存之外的手动确认） */
    save() {
      return persist();
    },
    /** 恢复默认：只清除本页面自己的配置键，不影响浏览器其它数据 */
    restoreDefaults() {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        /* 忽略隐私模式等场景 */
      }
      state = { ...DEFAULTS };
      restoredFromStorage = false;
      notify();
    },
  };
}
