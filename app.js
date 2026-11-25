(() => {
  const root = document.documentElement;
  const button = document.getElementById('lang-toggle');
  if (!button) return;

  const apply = (lang) => {
    const next = lang === 'en' ? 'en' : 'zh';
    root.dataset.lang = next;
    root.lang = next === 'zh' ? 'zh-CN' : 'en';
    button.textContent = next === 'zh' ? 'EN' : '中文';
    button.setAttribute(
      'aria-label',
      next === 'zh' ? 'Switch to English' : '切换到中文'
    );
    try {
      localStorage.setItem('dayweave-lang', next);
    } catch (_) {
      // Language preference is optional; ignore private-mode storage errors.
    }
  };

  let saved = null;
  try {
    saved = localStorage.getItem('dayweave-lang');
  } catch (_) {
    saved = null;
  }

  apply(saved === 'en' ? 'en' : 'zh');

  button.addEventListener('click', () => {
    apply(root.dataset.lang === 'zh' ? 'en' : 'zh');
  });
})();
