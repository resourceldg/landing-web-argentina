import { useEffect, useRef } from 'react';
import { trackScrollDepth, trackEngagementTime } from '../lib/analytics';

export function useScrollTracking() {
  const trackedDepths = useRef(new Set<number>());

  useEffect(() => {
    const handleScroll = () => {
      // Calcular porcentaje de scroll
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPos = window.scrollY;
      
      if (docHeight > 0) {
        const percentScrolled = Math.round((scrollPos / docHeight) * 100);
        
        // thresholds we care about
        const thresholds = [25, 50, 75, 90, 100];
        
        for (const threshold of thresholds) {
          if (percentScrolled >= threshold && !trackedDepths.current.has(threshold)) {
            trackedDepths.current.add(threshold);
            trackScrollDepth(threshold);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
