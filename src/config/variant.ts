function isWorldMonitorHost(hostname: string): boolean {
  return hostname === 'worldmonitor.app'
    || hostname === 'www.worldmonitor.app'
    || hostname.endsWith('.worldmonitor.app');
}

export const SITE_VARIANT: string = (() => {
  if (typeof window === 'undefined') return import.meta.env?.VITE_VARIANT || 'full';

  const isTauri = '__TAURI_INTERNALS__' in window || '__TAURI__' in window;
  if (isTauri) {
    const stored = localStorage.getItem('worldmonitor-variant');
    if (stored === 'tech' || stored === 'full' || stored === 'finance' || stored === 'happy' || stored === 'commodity') return stored;
    return import.meta.env.VITE_VARIANT || 'full';
  }

  const h = location.hostname;
  if (isWorldMonitorHost(h)) {
    if (h.startsWith('tech.')) return 'tech';
    if (h.startsWith('finance.')) return 'finance';
    if (h.startsWith('happy.')) return 'happy';
    if (h.startsWith('commodity.')) return 'commodity';
    return 'full';
  }

  // Custom domain (e.g. theflickdaily.com) or localhost: URL param > localStorage > default
  const urlVariant = new URLSearchParams(location.search).get('variant');
  if (urlVariant === 'tech' || urlVariant === 'full' || urlVariant === 'finance' || urlVariant === 'happy' || urlVariant === 'commodity') {
    try { localStorage.setItem('worldmonitor-variant', urlVariant); } catch {}
    return urlVariant;
  }
  const stored = localStorage.getItem('worldmonitor-variant');
  if (stored === 'tech' || stored === 'full' || stored === 'finance' || stored === 'happy' || stored === 'commodity') return stored;
  return import.meta.env.VITE_VARIANT || 'full';
})();
