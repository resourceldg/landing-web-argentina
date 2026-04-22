import { useEffect, useRef } from 'react';
import {
  trackScrollDepth,
  trackScrollMilestone,
  trackEngagementTime,
  trackViewPricing,
  captureAndPersistUTMs,
} from '../lib/analytics';

/**
 * Captura UTMs de la URL al montar la página y los guarda en localStorage.
 * Llamar una vez por sesión (en GlobalAnalytics).
 */
export function useUTMCapture() {
  useEffect(() => {
    captureAndPersistUTMs();
  }, []);
}

export function useScrollTracking() {
  const trackedDepths = useRef(new Set<number>());
  // rAF handle para cancelar si el componente se desmonta
  const rafHandle = useRef<number | null>(null);
  // Flag para saber si ya hay un frame pendiente (throttle con rAF)
  const pending = useRef(false);

  useEffect(() => {
    const checkDepth = () => {
      pending.current = false;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPos = window.scrollY;

      if (docHeight > 0) {
        const percentScrolled = Math.round((scrollPos / docHeight) * 100);
        const thresholds = [25, 50, 75, 90, 100];

        for (const threshold of thresholds) {
          if (percentScrolled >= threshold && !trackedDepths.current.has(threshold)) {
            trackedDepths.current.add(threshold);
            trackScrollDepth(threshold);
            // Eventos con nombre propio para configurar como conversiones en GA4
            if (threshold === 50 || threshold === 75) {
              trackScrollMilestone(threshold);
            }
          }
        }
      }
    };

    const handleScroll = () => {
      // Un solo frame por evento de scroll — evita cálculos innecesarios
      if (!pending.current) {
        pending.current = true;
        rafHandle.current = requestAnimationFrame(checkDepth);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafHandle.current !== null) cancelAnimationFrame(rafHandle.current);
    };
  }, []);
}

/**
 * Dispara view_pricing una sola vez cuando #precio entra en el viewport.
 * Usa IntersectionObserver para no depender del scroll.
 */
export function usePricingVisibility() {
  useEffect(() => {
    const el = document.getElementById('precio');
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackViewPricing();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);
}

export function useEngagementTracking() {
  const engagementIntervals = useRef(new Set<number>());
  
  useEffect(() => {
    const startTime = Date.now();
    let isTracked = false;
    
    // Heartbeat: Check every 5 seconds
    const interval = setInterval(() => {
      if (document.hidden) return; // No contar si la pestaña está inactiva
      
      const secondsSpent = Math.floor((Date.now() - startTime) / 1000);
      
      // Thresholds: 15s, 30s, 60s, 120s
      const thresholds = [15, 30, 60, 120];
      
      for (const threshold of thresholds) {
        if (secondsSpent >= threshold && !engagementIntervals.current.has(threshold)) {
          engagementIntervals.current.add(threshold);
          trackEngagementTime(threshold);
          // Si llegamos a 30s, lo consideramos "engaged user" y podríamos trackearlo una sola vez
          if (threshold === 30 && !isTracked) {
             // Micro-conversion general 
             isTracked = true;
          }
        }
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);
}
