import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import {
  ArrowDown, ArrowDownRight, ArrowUpRight, Check, CircleHelp, Keyboard,
  Layers3, Minus, MousePointer2, Plus, RotateCcw, Save, SlidersHorizontal, X,
} from 'lucide-react';
import { KeyboardScene, type KeyboardSceneHandle } from './components/KeyboardScene';
import { Configurator } from './components/Configurator';
import {
  DEFAULT_CONFIG, clearSavedConfiguration, configurationsMatch, loadConfiguration, persistConfiguration,
  type Configuration,
} from './config';

const detailItems = [
  {
    number: '01', english: 'THE FIRST TOUCH', title: '细腻，落在每一枚键帽。',
    description: '温润的 PBT 质感、柔和的圆角与清晰的字符。从字母区到那枚宽大的空格键，每一次触碰都有自己的分寸。',
    material: 'PBT 质感键帽',
  },
  {
    number: '02', english: 'BEAUTY WITHIN', title: '看不见的地方，也有秩序。',
    description: '独立轴体嵌入精确开孔的定位板，长键下方藏着平衡结构。拆开看看，探索键帽之下井然有序的世界。',
    material: '金属定位板与独立轴体',
  },
  {
    number: '03', english: 'A SOLID FOUNDATION', title: '稳稳承接，每一个想法。',
    description: '有厚度的金属质感底壳，配上自然的六度倾角。细至边框的分层、底部脚垫与 USB-C 接口，都不必妥协。',
    material: '6 度倾角底壳',
  },
];

const specItems = [
  ['紧凑布局', '65% / 68 键'],
  ['键帽设计', 'PBT 质感 / 圆角轮廓'],
  ['外壳工艺', '铝合金质感 / 三款配色'],
  ['结构层次', '键帽 / 定位板 / 底壳'],
  ['人体工学', '6 度自然倾角'],
  ['接口细节', 'USB-C'],
];

export default function App() {
  const [initial] = useState(loadConfiguration);
  const [config, setConfig] = useState<Configuration>(initial.config);
  const [savedConfig, setSavedConfig] = useState<Configuration | null>(initial.saved);
  const [exploded, setExploded] = useState(false);
  const [experience, setExperience] = useState(false);
  const [sound, setSound] = useState(false);
  const [lastKey, setLastKey] = useState<{ label: string; id: number } | null>(null);
  const [toast, setToast] = useState<{ message: string; error?: boolean; id: number } | null>(null);
  const [openDetail, setOpenDetail] = useState<number | null>(0);
  const [activeSection, setActiveSection] = useState('studio');
  const sceneRef = useRef<KeyboardSceneHandle>(null);
  const guideRef = useRef<HTMLDialogElement>(null);
  const saved = configurationsMatch(config, savedConfig);
  const notify = (message: string, error = false) => setToast({ message, error, id: Date.now() });

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 3800);
    return () => window.clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    if (!lastKey) return;
    const timer = window.setTimeout(() => setLastKey(null), 1800);
    return () => window.clearTimeout(timer);
  }, [lastKey]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
    }, { rootMargin: '-15% 0px -30% 0px', threshold: 0 });
    ['studio', 'design', 'specifications'].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const handleKey = useCallback((_code: string, label: string) => {
    setLastKey({ label, id: performance.now() });
  }, []);

  const saveConfiguration = () => {
    try {
      const normalized = persistConfiguration(config);
      setConfig(normalized);
      setSavedConfig({ ...normalized });
      notify('搭配已保存在此设备，下次打开依然是你的 Forma。');
    } catch {
      notify('浏览器未允许本地存储，搭配暂时无法保存。', true);
    }
  };

  const resetConfiguration = () => {
    let storageCleared = true;
    try { clearSavedConfiguration(); } catch { storageCleared = false; }
    setConfig({ ...DEFAULT_CONFIG });
    setSavedConfig(null);
    setExploded(false);
    setExperience(false);
    setSound(false);
    setLastKey(null);
    sceneRef.current?.reset();
    notify(storageCleared ? '已恢复默认搭配，只清除了 Forma 的本地配置。' : '当前搭配已复位，但浏览器未允许清除本地记录。', !storageCleared);
  };

  const toggleExperience = () => {
    const next = !experience;
    setExperience(next);
    setLastKey(null);
    if (next) sceneRef.current?.focus();
  };

  const exploreInside = () => {
    setExploded(true);
    sceneRef.current?.reset();
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById('studio')?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <MotionConfig reducedMotion="user">
      <a href="#studio" className="skip-link">跳转到键盘配置</a>
      <header className="site-header">
        <a className="wordmark" href="#studio" aria-label="Forma 首页">forma<span>.</span></a>
        <nav className="main-nav" aria-label="主导航">
          <a className={activeSection === 'studio' ? 'active' : ''} href="#studio">配置你的 Forma</a>
          <a className={activeSection === 'design' ? 'active' : ''} href="#design">设计细节</a>
          <a className={activeSection === 'specifications' ? 'active' : ''} href="#specifications">规格参数</a>
        </nav>
        <button className="guide-trigger" onClick={() => guideRef.current?.showModal()} aria-label="打开交互指南">
          <span>一点使用灵感</span><ArrowUpRight size={17} strokeWidth={1.6} />
        </button>
      </header>
      <main>
        <section className="studio-section" id="studio" aria-label="Forma 68 产品配置工作台">
          <div className="workspace">
            <div className="product-visual">
              <motion.div
                className="product-intro" initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <p className="eyebrow product-eyebrow"><span />SMALL FOOTPRINT. BIG PERSONALITY.</p>
                <h1>Forma <span className="model-number">68</span><span className="product-period">.</span></h1>
                <p className="product-description">精简布局，不简化表达。把日常敲成自己的节奏。</p>
              </motion.div>
              <KeyboardScene
                ref={sceneRef} config={config} exploded={exploded}
                experience={experience} sound={sound} onKey={handleKey}
              />
              <div className="scene-toolbar">
                <div className={`viewer-hint ${experience ? 'typing-hint' : ''}`} aria-live="polite" aria-atomic="true">
                  {experience ? (
                    <>
                      <motion.kbd key={lastKey?.id ?? 'idle'} initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.2 }}>
                        {lastKey?.label ?? 'A-Z'}
                      </motion.kbd>
                      <span>{lastKey ? '每一次敲击，都有回应。' : '用你的键盘，试试手感。'}</span>
                    </>
                  ) : exploded ? (
                    <><Layers3 size={15} /><span>键帽 / 定位板 / 底壳</span></>
                  ) : (
                    <><MousePointer2 size={15} strokeWidth={1.5} /><span className="desktop-hint">拖动旋转<span className="hint-separator">/</span>滚轮缩放</span><span className="mobile-hint">单指旋转 / 双指缩放</span></>
                  )}
                </div>
                <div className="view-actions">
                  <button
                    className={`explode-button ${exploded ? 'active' : ''}`}
                    aria-pressed={exploded} onClick={() => setExploded((value) => !value)}
                    title={exploded ? '平滑还原三层结构' : '展开键帽、定位板与底壳'}
                  ><Layers3 size={16} strokeWidth={1.6} /><span>{exploded ? '组装键盘' : '拆解探索'}</span></button>
                  <span className="toolbar-divider" />
                  <button className="icon-button" onClick={() => sceneRef.current?.zoom(-1)} aria-label="缩小键盘" title="缩小"><Minus size={17} strokeWidth={1.5} /></button>
                  <button className="icon-button reset-view" onClick={() => sceneRef.current?.reset()} aria-label="复位视角" title="复位视角"><RotateCcw size={16} strokeWidth={1.5} /></button>
                  <button className="icon-button" onClick={() => sceneRef.current?.zoom(1)} aria-label="放大键盘" title="放大"><Plus size={17} strokeWidth={1.5} /></button>
                </div>
              </div>
            </div>
            <motion.div
              className="config-column" initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.12 }}
            >
              <Configurator
                config={config} saved={saved} experience={experience} sound={sound}
                onChange={setConfig} onExperience={toggleExperience}
                onSound={() => setSound((value) => !value)}
                onSave={saveConfiguration} onReset={resetConfiguration}
              />
            </motion.div>
          </div>
          <div className="studio-baseline">
            <span className="baseline-signature">LESS, BUT MORE YOU.</span>
            <a href="#design">好手感，不止于表面<ArrowDownRight size={17} strokeWidth={1.5} /></a>
          </div>
        </section>
        <section id="design" className="design-section" aria-labelledby="design-title">
          <div className="design-inner">
            <motion.div className="design-intro" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.65 }}>
              <p className="eyebrow">THOUGHTFUL. THROUGH AND THROUGH.</p>
              <h2 id="design-title">每一层，<br />都恰到好处。</h2>
              <p>好的设计，不只看起来刚刚好。<br />也藏在每一次敲击的细节里。</p>
              <button className="underlined-link" onClick={exploreInside}>探索内在<ArrowUpRight size={16} /></button>
            </motion.div>
            <div className="design-accordion">
              {detailItems.map((item, index) => (
                <div className={`detail-item ${openDetail === index ? 'is-open' : ''}`} key={item.number}>
                  <h3>
                    <button
                      className="detail-heading" aria-expanded={openDetail === index}
                      aria-controls={`detail-panel-${index}`}
                      onClick={() => setOpenDetail(openDetail === index ? null : index)}
                    >
                      <span className="detail-number">{item.number}</span>
                      <span className="detail-title"><span className="eyebrow">{item.english}</span><span>{item.title}</span></span>
                      {openDetail === index ? <Minus size={19} strokeWidth={1.4} /> : <Plus size={19} strokeWidth={1.4} />}
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {openDetail === index && (
                      <motion.div id={`detail-panel-${index}`} className="detail-content-wrap" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                        <div className="detail-content">
                          <p>{item.description}</p>
                          <div><span>{item.material}</span><button onClick={exploreInside}>拆开看看<ArrowUpRight size={14} /></button></div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="specifications" className="specification-section" aria-labelledby="spec-title">
          <div className="spec-intro">
            <p className="eyebrow">COMPACT BY DESIGN</p>
            <h2 id="spec-title">留出空间，<br />装下全部。</h2>
          </div>
          <dl className="spec-grid">
            {specItems.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
          </dl>
        </section>
      </main>
      <footer className="site-footer">
        <a className="wordmark" href="#studio" aria-label="返回 Forma 配置">forma<span>.</span></a>
        <p>为灵感，留一点空间。</p>
        <button className="footer-guide" onClick={() => guideRef.current?.showModal()}>交互指南</button>
        <span className="footer-note">原创产品交互概念 / 非在售商品</span>
        <a className="back-to-top" href="#studio" aria-label="返回顶部"><ArrowDown size={17} /></a>
      </footer>
      <div className="toast-region" aria-live="polite" aria-atomic="true">
        <AnimatePresence>
          {toast && (
            <motion.div
              key={toast.id} className={`toast ${toast.error ? 'toast-error' : ''}`}
              initial={{ opacity: 0, y: 18, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.25 }}
            >
              {toast.error ? <CircleHelp size={18} /> : <Check size={18} />}<span>{toast.message}</span>
              <button onClick={() => setToast(null)} aria-label="关闭提示"><X size={15} /></button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <dialog
        className="guide-dialog" ref={guideRef} aria-labelledby="guide-title"
        onClick={(event) => { if (event.target === event.currentTarget) guideRef.current?.close(); }}
      >
        <button className="dialog-close icon-button" onClick={() => guideRef.current?.close()} aria-label="关闭交互指南"><X size={20} /></button>
        <p className="eyebrow">A QUICK HELLO</p>
        <h2 id="guide-title">认识你的 Forma。</h2>
        <p className="guide-intro">一点点探索，就能找到属于你的手感。</p>
        <div className="guide-steps">
          <div><MousePointer2 size={21} /><section><h3>换个角度看</h3><p>拖动旋转，滚轮或双指缩放。点击复位按钮，随时回到最初的完整视角。</p></section></div>
          <div><SlidersHorizontal size={21} /><section><h3>让色彩自由组合</h3><p>三款外壳与三套键帽可任意混搭，3D 预览与配置摘要会同步更新。</p></section></div>
          <div><Keyboard size={21} /><section><h3>敲一下，也拆开看看</h3><p>开启键盘体验后，按 A-Z 或空格，触屏也可轻触键帽。输入名称时不会触发试按；按键音可以独立开关。</p></section></div>
          <div><Save size={21} /><section><h3>把喜欢的搭配留下</h3><p>可以编辑搭配名称，点击保存后刷新自动恢复。恢复默认只会清除本页面的配置，不影响其他网站数据。</p></section></div>
        </div>
        <p className="guide-note">这是原创产品的交互演示。按键音由浏览器合成，无需连接真实键盘硬件。</p>
        <button className="save-button" onClick={() => guideRef.current?.close()}><span>开始探索</span><ArrowUpRight size={19} /></button>
      </dialog>
    </MotionConfig>
  );
}
