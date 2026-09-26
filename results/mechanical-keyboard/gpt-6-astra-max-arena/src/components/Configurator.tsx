import { ArrowUpRight, Check, CheckCheck, LockKeyhole, Pencil, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import { CASE_COLORS, KEYCAP_THEMES, type Configuration } from '../config';

interface Props {
  config: Configuration;
  saved: boolean;
  experience: boolean;
  sound: boolean;
  onChange: (config: Configuration) => void;
  onExperience: () => void;
  onSound: () => void;
  onSave: () => void;
  onReset: () => void;
}

export function Configurator({ config, saved, experience, sound, onChange, onExperience, onSound, onSave, onReset }: Props) {
  const enclosure = CASE_COLORS.find((item) => item.id === config.caseColor)!;
  const theme = KEYCAP_THEMES.find((item) => item.id === config.keycapTheme)!;

  return (
    <aside className="configurator" aria-labelledby="config-title">
      <div className="config-intro">
        <p className="eyebrow">MAKE IT YOURS</p>
        <h2 id="config-title">由你，定义。</h2>
        <p className="config-description">一把键盘，九种独特表达。</p>
      </div>
      <fieldset className="config-field case-field">
        <legend><span className="field-number">01</span>外壳配色</legend>
        <span className="selected-option" aria-hidden="true">{enclosure.english}</span>
        <div className="case-options">
          {CASE_COLORS.map((color) => (
            <label key={color.id} className="case-option">
              <input
                className="visually-hidden" type="radio" name="case-color"
                value={color.id} checked={config.caseColor === color.id}
                onChange={() => onChange({ ...config, caseColor: color.id })}
                aria-label={`${color.name}外壳`}
              />
              <span className="swatch-ring">
                <span className="color-swatch" style={{ backgroundColor: color.color }}>
                  {config.caseColor === color.id && <Check size={16} strokeWidth={1.8} style={{ color: color.ink }} />}
                </span>
              </span>
              <span className="option-name">{color.name}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset className="config-field theme-field">
        <legend><span className="field-number">02</span>键帽主题</legend>
        <span className="selected-option" aria-hidden="true">{theme.english}</span>
        <div className="theme-options">
          {KEYCAP_THEMES.map((item) => (
            <label key={item.id} className="theme-option">
              <input
                className="visually-hidden" type="radio" name="keycap-theme"
                value={item.id} checked={config.keycapTheme === item.id}
                onChange={() => onChange({ ...config, keycapTheme: item.id })}
                aria-label={`${item.name}键帽主题`}
              />
              <span className="theme-sample" aria-hidden="true">
                <span className="mini-key" style={{ backgroundColor: item.alpha, color: item.ink }}>F</span>
                <span className="mini-key" style={{ backgroundColor: item.modifier, color: item.ink }}>6</span>
                <span className="mini-key" style={{ backgroundColor: item.accent, color: item.accentInk }}>8</span>
              </span>
              <span className="option-name">{item.name}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className={`experience-control ${experience ? 'is-active' : ''}`}>
        <div className="experience-copy">
          <label id="experience-label" htmlFor="keyboard-experience">键盘体验<span className="experience-light" /></label>
          <p id="experience-description">{experience ? '按 A-Z、空格，或轻触键帽' : '不止于看，试着敲一下。'}</p>
        </div>
        <button
          className="sound-button" onClick={onSound} disabled={!experience}
          aria-pressed={sound} aria-label={sound ? '关闭模拟按键音' : '开启模拟按键音'}
          title={sound ? '关闭模拟按键音' : '开启模拟按键音'}
        >
          {sound ? <Volume2 size={17} /> : <VolumeX size={17} />}
        </button>
        <button
          id="keyboard-experience" className="toggle-switch" role="switch" aria-checked={experience}
          aria-labelledby="experience-label" aria-describedby="experience-description" onClick={onExperience}
        ><span /></button>
      </div>
      <div className="configuration-summary">
        <div className="summary-heading">
          <span>你的专属搭配</span>
          <span className={`save-state ${saved ? 'is-saved' : ''}`}>
            {saved && <CheckCheck size={12} />}{saved ? '已保存' : '尚未保存'}
          </span>
        </div>
        <div className="config-name-field">
          <input
            id="configuration-name" type="text" value={config.name} maxLength={32}
            aria-label="配置名称" placeholder="为你的 Forma 起个名字"
            autoComplete="off" spellCheck={false}
            onChange={(event) => onChange({ ...config, name: event.target.value })}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && !event.nativeEvent.isComposing) event.currentTarget.blur();
            }}
          />
          <label htmlFor="configuration-name" title="编辑配置名称"><Pencil size={13} /><span className="visually-hidden">编辑配置名称</span></label>
        </div>
        <p className="selected-summary" aria-live="polite" aria-atomic="true">
          {enclosure.name}外壳<span />{theme.name}键帽<span />68 键
        </p>
      </div>
      <button className={`save-button ${saved ? 'is-saved' : ''}`} onClick={onSave} aria-label="保存配置到本地">
        <span>{saved ? '搭配已保存' : '保存我的搭配'}</span>
        {saved ? <Check size={18} /> : <ArrowUpRight size={20} />}
      </button>
      <div className="config-footer">
        <span><LockKeyhole size={11} />仅保存在此设备</span>
        <button onClick={onReset}><RotateCcw size={11} />恢复默认</button>
      </div>
    </aside>
  );
}