import { useEffect, useMemo, useRef, useState } from 'react';
import KeyboardScene from './KeyboardScene.jsx';
import {
  CASE_COLORS,
  DEFAULT_CONFIG,
  KEY_THEMES,
  STORAGE_KEY,
} from './config.js';
import { TOTAL_KEYS } from './keyboardLayout.js';

function readSavedConfig() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const validCase = CASE_COLORS.some((item) => item.id === parsed?.caseId);
    const validTheme = KEY_THEMES.some((item) => item.id === parsed?.themeId);
    if (validCase && validTheme) return { config: parsed, restored: true };
  } catch {
    // Invalid page-specific data falls back to the product defaults.
  }
  return { config: DEFAULT_CONFIG, restored: false };
}

function Icon({ name }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };
  if (name === 'rotate-left') {
    return (
      <svg {...common}>
        <path d="M4 7v5h5" />
        <path d="M5.7 16.8A8 8 0 1 0 5 8.3L4 12" />
      </svg>
    );
  }
  if (name === 'rotate-right') {
    return (
      <svg {...common}>
        <path d="M20 7v5h-5" />
        <path d="M18.3 16.8A8 8 0 1 1 19 8.3l1 3.7" />
      </svg>
    );
  }
  if (name === 'minus') {
    return (
      <svg {...common}>
        <circle cx="11" cy="11" r="7" />
        <path d="M8 11h6M20 20l-4-4" />
      </svg>
    );
  }
  if (name === 'plus') {
    return (
      <svg {...common}>
        <circle cx="11" cy="11" r="7" />
        <path d="M8 11h6M11 8v6M20 20l-4-4" />
      </svg>
    );
  }
  if (name === 'reset') {
    return (
      <svg {...common}>
        <path d="M4 4v6h6" />
        <path d="M5.5 15.5a8 8 0 1 0 .3-8.7L4 10" />
      </svg>
    );
  }
  if (name === 'save') {
    return (
      <svg {...common}>
        <path d="M5 4h11l3 3v13H5z" />
        <path d="M8 4v6h8V4M8 20v-6h8v6" />
      </svg>
    );
  }
  return null;
}

function ColorSwatch({ item, selected, onSelect }) {
  return (
    <button
      type="button"
      className={`case-swatch ${selected ? 'is-selected' : ''}`}
      onClick={() => onSelect(item.id)}
      aria-pressed={selected}
      aria-label={`${item.name}，${item.detail}`}
    >
      <span className="swatch-orb" style={{ background: item.swatch }}>
        <span className="swatch-shine" />
      </span>
      <span className="swatch-copy">
        <strong>{item.name}</strong>
        <small>{item.detail}</small>
      </span>
      <span className="choice-mark" aria-hidden="true" />
    </button>
  );
}

function ThemeCard({ theme, selected, onSelect }) {
  return (
    <button
      type="button"
      className={`theme-card ${selected ? 'is-selected' : ''}`}
      onClick={() => onSelect(theme.id)}
      aria-pressed={selected}
    >
      <span className="mini-keys" aria-hidden="true">
        {theme.preview.map((color, index) => (
          <span key={color} style={{ background: color }}>
            {['A', '⌘', '↵'][index]}
          </span>
        ))}
      </span>
      <span>
        <strong>{theme.name}</strong>
        <small>{theme.hint}</small>
      </span>
    </button>
  );
}

export default function App() {
  const initial = useMemo(readSavedConfig, []);
  const [config, setConfig] = useState(initial.config);
  const [exploded, setExploded] = useState(false);
  const [experienceEnabled, setExperienceEnabled] = useState(false);
  const [viewCommand, setViewCommand] = useState({ type: 'reset', nonce: 0 });
  const [lastKey, setLastKey] = useState('—');
  const [keyPulse, setKeyPulse] = useState(0);
  const [toast, setToast] = useState(initial.restored ? '已恢复上次保存的配置' : '');
  const toastTimerRef = useRef(null);

  const caseColor = CASE_COLORS.find((item) => item.id === config.caseId) || CASE_COLORS[0];
  const keyTheme = KEY_THEMES.find((item) => item.id === config.themeId) || KEY_THEMES[0];

  const showToast = (message) => {
    window.clearTimeout(toastTimerRef.current);
    setToast('');
    window.requestAnimationFrame(() => setToast(message));
    toastTimerRef.current = window.setTimeout(() => setToast(''), 2600);
  };

  useEffect(() => {
    if (!initial.restored) return undefined;
    toastTimerRef.current = window.setTimeout(() => setToast(''), 2600);
    return () => window.clearTimeout(toastTimerRef.current);
  }, [initial.restored]);

  useEffect(
    () => () => {
      window.clearTimeout(toastTimerRef.current);
    },
    [],
  );

  const updateConfig = (key, value) => {
    setConfig((current) => ({ ...current, [key]: value }));
  };

  const sendViewCommand = (type) => {
    setViewCommand((current) => ({ type, nonce: current.nonce + 1 }));
  };

  const handleSave = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    showToast('配置已保存到此设备');
  };

  const handleReset = () => {
    localStorage.removeItem(STORAGE_KEY);
    setConfig(DEFAULT_CONFIG);
    setExploded(false);
    setExperienceEnabled(false);
    setLastKey('—');
    sendViewCommand('reset');
    showToast('已恢复出厂配置');
  };

  const handleKeyFeedback = (label) => {
    setLastKey(label === 'Space' ? '空格' : label);
    setKeyPulse((value) => value + 1);
  };

  return (
    <div
      className="app-shell"
      style={{
        '--case-accent': caseColor.accent,
        '--theme-accent': keyTheme.accent,
        '--case-color': caseColor.color,
      }}
    >
      <header className="topbar">
        <a className="brand" href="#top" aria-label="KEPLER 首页">
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>KEPLER</span>
          <em>STUDIO / 01</em>
        </a>
        <div className="topbar-meta">
          <span className="spec-chip">65% COMPACT</span>
          <span className="status-chip"><i /> 3D CONFIGURATOR</span>
        </div>
      </header>

      <main className="workspace" id="top">
        <section className="product-stage" aria-labelledby="product-title">
          <div className="stage-grid" aria-hidden="true" />
          <div className="ambient-glow glow-one" aria-hidden="true" />
          <div className="ambient-glow glow-two" aria-hidden="true" />

          <div className="product-copy">
            <div className="eyebrow">
              <span>01</span>
              <i />
              PRECISION INPUT SYSTEM
            </div>
            <h1 id="product-title">KEPLER <span>65</span></h1>
            <p>紧凑，但不妥协。全铝结构、五行 64 键布局与可拆解悬浮式内胆，为每一次输入留下清晰回响。</p>
          </div>

          <div className="stage-telemetry stage-telemetry-left" aria-hidden="true">
            <span>BODY / 6063 AL</span>
            <span>PLATE / CNC</span>
          </div>

          <div className={`layer-indicator ${exploded ? 'is-exploded' : ''}`} aria-live="polite">
            <span className="layer-line layer-line-keys"><i /> 键帽层</span>
            <span className="layer-line layer-line-plate"><i /> 定位板</span>
            <span className="layer-line layer-line-case"><i /> 底壳</span>
          </div>

          <KeyboardScene
            caseColor={caseColor}
            keyTheme={keyTheme}
            exploded={exploded}
            experienceEnabled={experienceEnabled}
            viewCommand={viewCommand}
            onKeyFeedback={handleKeyFeedback}
          />

          <div className="scene-badge" aria-hidden="true">
            <span className="live-dot" />
            REAL-TIME 3D
          </div>

          <div className="view-toolbar" aria-label="3D 视图控制">
            <button type="button" onClick={() => sendViewCommand('rotate-left')} title="向左旋转">
              <Icon name="rotate-left" />
              <span>左转</span>
            </button>
            <button type="button" onClick={() => sendViewCommand('rotate-right')} title="向右旋转">
              <Icon name="rotate-right" />
              <span>右转</span>
            </button>
            <span className="toolbar-divider" />
            <button type="button" onClick={() => sendViewCommand('zoom-out')} title="缩小">
              <Icon name="minus" />
              <span>缩小</span>
            </button>
            <button type="button" onClick={() => sendViewCommand('zoom-in')} title="放大">
              <Icon name="plus" />
              <span>放大</span>
            </button>
            <button className="toolbar-reset" type="button" onClick={() => sendViewCommand('reset')} title="复位视角">
              <Icon name="reset" />
              <span>复位</span>
            </button>
          </div>

          <div className="orbit-hint">
            <span className="mouse-icon" aria-hidden="true"><i /></span>
            拖拽旋转 · 滚轮缩放
          </div>

          {experienceEnabled && (
            <div className="experience-float">
              <span>体验模式</span>
              按下 A—Z 或空格，也可直接点击键帽
            </div>
          )}
        </section>

        <aside className="config-panel" aria-label="键盘配置">
          <div className="panel-heading">
            <div>
              <span className="panel-index">CONFIG / 01</span>
              <h2>定制你的 KEPLER</h2>
            </div>
            <span className="panel-live"><i /> LIVE</span>
          </div>

          <div className="panel-scroll">
            <section className="config-section">
              <div className="section-heading">
                <span><b>01</b> 外壳配色</span>
                <em>{caseColor.name}</em>
              </div>
              <div className="case-options">
                {CASE_COLORS.map((item) => (
                  <ColorSwatch
                    key={item.id}
                    item={item}
                    selected={config.caseId === item.id}
                    onSelect={(id) => updateConfig('caseId', id)}
                  />
                ))}
              </div>
            </section>

            <section className="config-section">
              <div className="section-heading">
                <span><b>02</b> 键帽主题</span>
                <em>{keyTheme.name}</em>
              </div>
              <div className="theme-options">
                {KEY_THEMES.map((theme) => (
                  <ThemeCard
                    key={theme.id}
                    theme={theme}
                    selected={config.themeId === theme.id}
                    onSelect={(id) => updateConfig('themeId', id)}
                  />
                ))}
              </div>
            </section>

            <section className="config-section interaction-section">
              <div className="section-heading">
                <span><b>03</b> 结构与手感</span>
                <em>{exploded ? '已拆解' : '已组装'}</em>
              </div>

              <button
                type="button"
                className={`feature-toggle explode-toggle ${exploded ? 'is-active' : ''}`}
                onClick={() => setExploded((value) => !value)}
                aria-pressed={exploded}
              >
                <span className="layer-glyph" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="feature-copy">
                  <strong>{exploded ? '组装键盘' : '拆解结构'}</strong>
                  <small>键帽 / 定位板 / 底壳</small>
                </span>
                <span className="toggle-arrow" aria-hidden="true">{exploded ? '↓' : '↑'}</span>
              </button>

              <div className={`experience-card ${experienceEnabled ? 'is-active' : ''}`}>
                <button
                  type="button"
                  className="experience-toggle"
                  onClick={() => setExperienceEnabled((value) => !value)}
                  aria-pressed={experienceEnabled}
                >
                  <span>
                    <strong>键盘体验模式</strong>
                    <small>A—Z / 空格 / 触屏键帽</small>
                  </span>
                  <i className="switch-control"><b /></i>
                </button>
                <div className="key-readout">
                  <span>LAST INPUT</span>
                  <strong key={keyPulse}>{lastKey}</strong>
                  <i>{experienceEnabled ? 'READY' : 'OFF'}</i>
                </div>
              </div>
            </section>

            <section className="config-summary" aria-label="当前配置摘要">
              <div className="summary-title">
                <span>配置摘要</span>
                <em>K65-{caseColor.id.slice(0, 2).toUpperCase()}{keyTheme.id.slice(0, 2).toUpperCase()}</em>
              </div>
              <dl>
                <div><dt>外壳</dt><dd>{caseColor.name} · {caseColor.detail}</dd></div>
                <div><dt>键帽</dt><dd>{keyTheme.name} · PBT 热升华</dd></div>
                <div><dt>布局</dt><dd>65% · {TOTAL_KEYS} 键 · ANSI</dd></div>
                <div><dt>结构</dt><dd>Gasket Mount · CNC 定位板</dd></div>
              </dl>
            </section>
          </div>

          <div className="panel-actions">
            <button type="button" className="save-button" onClick={handleSave}>
              <Icon name="save" />
              保存此配置
            </button>
            <button type="button" className="reset-button" onClick={handleReset}>
              恢复默认
            </button>
          </div>
        </aside>
      </main>

      <div className={`toast ${toast ? 'is-visible' : ''}`} role="status" aria-live="polite">
        <span>✓</span>
        {toast}
      </div>
    </div>
  );
}
