import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initGA, trackPageView } from '@/lib/analytics';

// Inicializar GA4 una sola vez
initGA();

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Trackear page view en cada cambio de ruta
    trackPageView(pathname);
  }, [pathname]);

  return null;
}

