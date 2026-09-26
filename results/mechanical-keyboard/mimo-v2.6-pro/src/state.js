/**
 * 配置状态管理：内存状态 + localStorage 持久化（只读写本页面自己的 key）
 */
import { DEFAULT_ENGRAVE } from './data/themes.js';

const STORAGE_KEY = 'lumen68:config:v1';

export const DEFAULT_CONFIG = Object.freeze({
  caseId: 'graphite',
  themeId: 'frost',
  switchId: 'red',
  engrave: DEFAULT_ENGRAVE,
  typingMode: true,
});

const VALID = {
  caseId: ['graphite', 'moon', 'navy'],
  themeId: ['frost', 'carbon', 'retro'],
  switchId: ['red', 'brown', 'blue'],
};

function sanitize(raw) {
  if (!raw || typeof raw !== 'object') return { ...DEFAULT_CONFIG };
  const next = { ...DEFAULT_CONFIG };
  for (const key of Object.keys(VALID)) {
    if (VALID[key].includes(raw[key])) next[key] = raw[key];
  }
  if (typeof raw.engrave === 'string') {
    next.engrave = raw.engrave.slice(0, 10).trim() || DEFAULT_ENGRAVE;
  }
  if (typeof raw.typingMode === 'boolean') next.typingMode = raw.typingMode;
  return next;
}

function readStorage() {
  try {
    const text = localStorage.getItem(STORAGE_KEY);
    return text ? sanitize(JSON.parse(text)) : null;
  } catch {
    return null;
  }
}

export function createStore() {
  const restored = readStorage();
  let config = restored ?? { ...DEFAULT_CONFIG };
  let saved = restored !== null;
  const listeners = new Set();

  function notify() {
    listeners.forEach((fn) => fn(config, { saved }));
  }

  function persist() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ v: 1, ...config }));
      saved = true;
    } catch {
      saved = false;
    }
  }

  return {
    get config() {
      return config;
    },
    get saved() {
      return saved;
    },
    /** 局部更新并自动保存（刷新后可恢复） */
    set(patch) {
      config = sanitize({ ...config, ...patch });
      persist();
      notify();
    },
    /** 显式保存按钮 */
    save() {
      persist();
      notify();
    },
    /** 恢复默认：只移除本页面自己的配置，不影响其它存储 */
    reset() {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        /* 忽略隐私模式下的异常 */
      }
      config = { ...DEFAULT_CONFIG };
      saved = false;
      notify();
    },
    subscribe(fn) {
      listeners.add(fn);
      fn(config, { saved });
      return () => listeners.delete(fn);
    },
  };
}

export { STORAGE_KEY };
