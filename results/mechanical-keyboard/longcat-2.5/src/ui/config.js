import { CASE_COLORS, KEYCAP_THEMES, SWITCH_TYPES, DEFAULT_CONFIG } from '../keyboard/themes.js';

const STORAGE_KEY = 'keyboard-showcase-config';

/**
 * Manages configuration state, UI rendering, and localStorage persistence.
 */
export class ConfigManager {
  constructor(keyboardScene) {
    this.kb = keyboardScene;
    this.config = this._load();
    this._listeners = [];
  }

  _load() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return { ...DEFAULT_CONFIG, ...JSON.parse(saved) };
    } catch (e) { /* ignore */ }
    return { ...DEFAULT_CONFIG };
  }

  _save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.config));
  }

  get(key) {
    return this.config[key];
  }

  set(key, value) {
    this.config[key] = value;
    this._save();
    this._notify(key, value);
  }

  onChange(fn) {
    this._listeners.push(fn);
  }

  _notify(key, value) {
    this._listeners.forEach(fn => fn(key, value));
  }

  /**
   * Render the full config panel into the given container element.
   */
  render(container) {
    container.innerHTML = `
      <div class="config-panel">
        <section class="config-section">
          <h3>外壳配色</h3>
          <div class="color-options" id="caseColors">
            ${CASE_COLORS.map(c => `
              <button class="color-swatch ${this.config.caseColor === c.id ? 'active' : ''}"
                      data-id="${c.id}" data-group="caseColor"
                      style="--swatch-body:${c.body};--swatch-accent:${c.plateEdge}"
                      title="${c.name}">
                <span class="swatch-preview"></span>
                <span class="swatch-name">${c.name}</span>
              </button>
            `).join('')}
          </div>
          <p class="option-desc">${CASE_COLORS.find(c => c.id === this.config.caseColor)?.desc || ''}</p>
        </section>

        <section class="config-section">
          <h3>键帽主题</h3>
          <div class="color-options" id="keycapThemes">
            ${KEYCAP_THEMES.map(t => `
              <button class="color-swatch ${this.config.keycapTheme === t.id ? 'active' : ''}"
                      data-id="${t.id}" data-group="keycapTheme"
                      style="--swatch-alpha:${t.alphas};--swatch-mod:${t.mods};--swatch-accent:${t.accent}"
                      title="${t.name}">
                <span class="swatch-preview"></span>
                <span class="swatch-name">${t.name}</span>
              </button>
            `).join('')}
          </div>
          <p class="option-desc">${KEYCAP_THEMES.find(t => t.id === this.config.keycapTheme)?.desc || ''}</p>
        </section>

        <section class="config-section">
          <h3>轴体类型</h3>
          <div class="switch-options" id="switchTypes">
            ${SWITCH_TYPES.map(s => `
              <button class="switch-btn ${this.config.switchType === s.id ? 'active' : ''}"
                      data-id="${s.id}" data-group="switchType">
                <span class="switch-name">${s.name}</span>
                <span class="switch-desc">${s.desc}</span>
              </button>
            `).join('')}
          </div>
        </section>

        <section class="config-section">
          <h3>拆解视图</h3>
          <div class="explode-control">
            <button id="btnAssemble" class="ctrl-btn ${this.config.viewMode === 'assembled' ? 'active' : ''}">组装</button>
            <button id="btnExplode" class="ctrl-btn ${this.config.viewMode === 'exploded' ? 'active' : ''}">拆解</button>
            <input type="range" id="explodeSlider" min="0" max="100" value="${this.config.explodeAmount * 100}"
                   class="explode-slider" title="拆解程度">
          </div>
        </section>

        <section class="config-section">
          <h3>操作</h3>
          <div class="action-buttons">
            <button id="btnResetView" class="ctrl-btn">复位视角</button>
            <button id="btnResetConfig" class="ctrl-btn danger">恢复默认</button>
          </div>
        </section>

        <section class="config-section">
          <h3>配置摘要</h3>
          <div class="config-summary" id="configSummary">
            ${this._buildSummaryHtml()}
          </div>
        </section>
      </div>
    `;

    this._bindEvents(container);
  }

  _buildSummaryHtml() {
    const caseColor = CASE_COLORS.find(c => c.id === this.config.caseColor);
    const keycapTheme = KEYCAP_THEMES.find(t => t.id === this.config.keycapTheme);
    const switchType = SWITCH_TYPES.find(s => s.id === this.config.switchType);
    return `
      <div class="summary-row"><span>外壳</span><strong>${caseColor?.name || '-'}</strong></div>
      <div class="summary-row"><span>键帽</span><strong>${keycapTheme?.name || '-'}</strong></div>
      <div class="summary-row"><span>轴体</span><strong>${switchType?.name || '-'}</strong></div>
    `;
  }

  _bindEvents(container) {
    // Color swatches
    container.querySelectorAll('.color-swatch').forEach(btn => {
      btn.addEventListener('click', () => {
        const group = btn.dataset.group;
        const id = btn.dataset.id;
        this.set(group, id);

        // Update active state visually
        container.querySelectorAll(`[data-group="${group}"]`).forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Update 3D scene
        if (group === 'caseColor') this.kb.setCaseColor(id);
        if (group === 'keycapTheme') this.kb.setKeycapTheme(id);

        // Update description text
        const section = btn.closest('.config-section');
        const descEl = section.querySelector('.option-desc');
        if (descEl) {
          const source = group === 'caseColor' ? CASE_COLORS : KEYCAP_THEMES;
          const item = source.find(c => c.id === id);
          descEl.textContent = item?.desc || '';
        }

        // Update summary
        const summaryEl = container.querySelector('#configSummary');
        if (summaryEl) summaryEl.innerHTML = this._buildSummaryHtml();
      });
    });

    // Switch type buttons
    container.querySelectorAll('.switch-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        this.set('switchType', id);
        container.querySelectorAll('.switch-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const summaryEl = container.querySelector('#configSummary');
        if (summaryEl) summaryEl.innerHTML = this._buildSummaryHtml();
      });
    });

    // Explode buttons
    const btnAssemble = container.querySelector('#btnAssemble');
    const btnExplode = container.querySelector('#btnExplode');
    const slider = container.querySelector('#explodeSlider');

    btnAssemble?.addEventListener('click', () => {
      this.set('viewMode', 'assembled');
      this.set('explodeAmount', 0);
      this.kb.setExplode(0);
      slider.value = 0;
      btnAssemble.classList.add('active');
      btnExplode.classList.remove('active');
    });

    btnExplode?.addEventListener('click', () => {
      this.set('viewMode', 'exploded');
      this.set('explodeAmount', 1);
      this.kb.setExplode(1);
      slider.value = 100;
      btnExplode.classList.add('active');
      btnAssemble.classList.remove('active');
    });

    slider?.addEventListener('input', () => {
      const val = slider.value / 100;
      this.set('explodeAmount', val);
      this.kb.setExplode(val);
      if (val === 0) {
        btnAssemble.classList.add('active');
        btnExplode.classList.remove('active');
        this.set('viewMode', 'assembled');
      } else {
        btnExplode.classList.add('active');
        btnAssemble.classList.remove('active');
        this.set('viewMode', 'exploded');
      }
    });

    // Reset view
    container.querySelector('#btnResetView')?.addEventListener('click', () => {
      this.kb.resetView();
    });

    // Reset config
    container.querySelector('#btnResetConfig')?.addEventListener('click', () => {
      localStorage.removeItem(STORAGE_KEY);
      this.config = { ...DEFAULT_CONFIG };
      this.render(container);
      // Re-apply to 3D scene
      this.kb.setCaseColor(this.config.caseColor);
      this.kb.setKeycapTheme(this.config.keycapTheme);
      this.kb.setExplode(0);
      this.kb.resetView();
    });
  }
}
