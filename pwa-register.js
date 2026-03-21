/*
 * Optional registration helper for hosts that can inject external scripts
 * without editing index.html source. This keeps app logic untouched.
 */
(function registerBillzPWA() {
  if (!('serviceWorker' in navigator)) return;

  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('./sw.js', { scope: './' });

      registration.addEventListener('updatefound', () => {
        const worker = registration.installing;
        if (!worker) return;

        worker.addEventListener('statechange', () => {
          if (worker.state === 'installed' && navigator.serviceWorker.controller) {
            // Autoupdate to keep the hosted app fresh.
            worker.postMessage({ type: 'SKIP_WAITING' });
          }
        });
      });

      navigator.serviceWorker.addEventListener('controllerchange', () => {
        // Ensure fresh assets are loaded once the new SW takes control.
        window.location.reload();
      });
    } catch {
      // Silent fail keeps app behavior identical if registration fails.
    }
  });
})();
