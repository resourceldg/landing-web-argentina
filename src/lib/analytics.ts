// ─── Google Analytics 4 — módulo centralizado ───────────────────────────────
// Measurement ID: G-9GTZ1HTB16
// Docs: https://developers.google.com/analytics/devguides/collection/ga4

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

// Fallback al ID hardcodeado en index.html por si el env var no está disponible en build
const GA_ID = (import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined) || 'G-9GTZ1HTB16';

// ── Inicialización ────────────────────────────────────────────────────────────
export function initGA(): void {
  if (!GA_ID) {
    console.warn('[Analytics] VITE_GA_MEASUREMENT_ID no está definido.');
    return;
  }
  // El script ya fue cargado en index.html; aquí solo configuramos el ID.
  if (typeof window.gtag !== 'function') {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function (...args) {
      window.dataLayer.push(args);
    };
  }
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, { send_page_view: false });
}

// ── Page view ─────────────────────────────────────────────────────────────────
/**
 * Trackear una página. Llamar cada vez que cambia la ruta.
 * Usamos el hash path (/#/profesionales → /profesionales).
 */
export function trackPageView(path: string, title?: string): void {
  if (!GA_ID || typeof window.gtag !== 'function') return;
  window.gtag('event', 'page_view', {
    page_location: window.location.href,
    page_path: path,
    page_title: title || document.title,
  });
}

// ── Eventos genéricos ─────────────────────────────────────────────────────────
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
): void {
  if (!GA_ID || typeof window.gtag !== 'function') return;
  window.gtag('event', eventName, params ?? {});
}

// ── Eventos de Engagement / Embudos Avanzados ───────────────────────────────

/**
 * Scroll Depth - Saber hasta dónde baja el usuario en la página.
 */
export function trackScrollDepth(percentScrolled: number): void {
  trackEvent('scroll_depth_reached', {
    event_category: 'engagement',
    event_label: `Scroll ${percentScrolled}%`,
    percent_scrolled: percentScrolled,
  });
}

/**
 * Tiempo de lectura / Engagement Heartbeat.
 */
export function trackEngagementTime(secondsSpent: number): void {
  trackEvent('engagement_time', {
    event_category: 'engagement',
    event_label: `Time > ${secondsSpent}s`,
    time_spent_seconds: secondsSpent,
  });
}

/**
 * Abrir/Cerrar FAQs - Para saber qué dudas tienen más.
 */
export function trackFAQToggle(questionTitle: string, action: 'open' | 'close'): void {
  trackEvent('faq_toggle', {
    event_category: 'engagement',
    event_label: questionTitle,
    action: action,
  });
}

// ── Eventos específicos del negocio ──────────────────────────────────────────

/**
 * Click a WhatsApp — el evento más importante (macro-conversion).
 * @param source  Dónde estaba el botón: 'floating_button' | 'cta_section' | 'hero' | 'header' | 'pricing'
 * @param message Texto pre-cargado en el chat
 * @param buttonText Texto del botón disparador
 */
export function trackWhatsAppClick(source: string, message?: string, buttonText?: string): void {
  trackEvent('whatsapp_click', {
    event_category: 'conversion',
    event_label: source,
    whatsapp_message: message?.slice(0, 100) ?? '',
    button_text: buttonText ?? '',
  });
}

/**
 * Click en un plan de precios (macro-conversion intent).
 * @param planName  'Inicio' | 'Profesional' | 'Premium'
 * @param planPrice 'ARS 50.000' | etc.
 * @param billingCycle 'mensual' | 'anual'
 */
export function trackPlanClick(planName: string, planPrice: string, billingCycle: string = 'mensual'): void {
  trackEvent('select_plan', {
    event_category: 'conversion',
    event_label: planName,
    plan_name: planName,
    plan_price: planPrice,
    billing_cycle: billingCycle,
    currency: 'ARS',
  });
}

/**
 * Click en CTA del Hero o secciones internas (micro-conversion).
 * @param ctaText   Texto del botón clickeado
 * @param section   Nombre de la sección donde estaba el CTA
 */
export function trackCTAClick(ctaText: string, section: string): void {
  trackEvent('cta_click', {
    event_category: 'engagement',
    event_label: ctaText,
    section,
  });
}
