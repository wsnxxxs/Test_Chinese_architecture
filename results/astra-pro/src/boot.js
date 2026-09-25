const errorCard = document.querySelector('#error-card');
const help = document.querySelector('#help-dialog');
document.querySelector('#help').addEventListener('click', () => help.showModal());
help.addEventListener('click', (e) => { if (e.target === help) { const r=help.getBoundingClientRect(); if(e.clientX<r.left || e.clientX>r.right || e.clientY<r.top || e.clientY>r.bottom) help.close(); }});
document.querySelector('#retry').addEventListener('click', () => location.reload());

let settled = false;
const timer = setTimeout(() => {
  if (!settled) document.querySelector('#loading-text').textContent = '正在载入三维引擎，请检查网络连接';
}, 7000);
const fail = (error) => {
  settled = true; clearTimeout(timer); console.error('[Yunque]', error);
  document.body.dataset.state = 'error'; errorCard.hidden = false;
  const engineMissing = /fetch|module|resolve|import|network/i.test(error.message || '');
  document.querySelector('#error-message').textContent = engineMissing
    ? 'Three.js 引擎未能载入。请在项目目录执行以下命令，将引擎安装到本地；安装后运行不再依赖 CDN。未安装依赖时，请确认网络可访问 jsDelivr。'
    : '浏览器无法创建三维场景。请使用支持 WebGL 2 的近期浏览器，并启用硬件加速。错误信息：' + (error.message || String(error));
  document.querySelector('#fps').textContent='未开始渲染';
};
try {
  const { init } = await import('./main.js');
  await init();
  settled = true; clearTimeout(timer);
} catch (error) { fail(error); }
