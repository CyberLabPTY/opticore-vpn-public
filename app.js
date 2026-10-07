(() => {
  const VERSION = '0.5.6.1';
  document.documentElement.dataset.opticoreVersion = VERSION;

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js?v=0561').catch(() => {});
    });
  }
})();
