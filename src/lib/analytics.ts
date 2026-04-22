// ─── Google Analytics 4 — módulo centralizado ───────────────────────────────
// Measurement ID: G-9GTZ1HTB16
// Docs: https://developers.google.com/analytics/devguides/collection/ga4

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
    // Meta Pixel
    fbq: (command: string, event: string, params?: Record<string, unknown>) => void;
    _fbq: unknown;
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
 * Dispara un evento en Meta Pixel (fbq).
 * Silencia el error si el Pixel no está cargado.
 */
export function trackMetaPixelEvent(eventName: string, params?: Record<string, unknown>): void {
  if (typeof window.fbq === 'function') {
    window.fbq('track', eventName, params ?? {});
  }
}

/**
 * Click a WhatsApp — el evento más importante (macro-conversion).
 * Dispara GA4 + Meta Pixel Contact.
 *
 * NO dispara Lead porque un click no es un lead calificado.
 * Lead solo se dispara en trackPlanClick (intent explícito de compra).
 *
 * @param source  Dónde estaba el botón: 'floating_button' | 'cta_section' | 'hero_desktop' | 'hero_mobile' | 'header' | 'pricing' | 'social_proof_cta'
 * @param message Texto pre-cargado en el chat
 * @param buttonText Texto del botón disparador
 */
export function trackWhatsAppClick(source: string, message?: string, buttonText?: string): void {
  // GA4
  trackEvent('whatsapp_click', {
    event_category: 'conversion',
    event_label: source,
    whatsapp_message: message?.slice(0, 100) ?? '',
    button_text: buttonText ?? '',
  });
  // Meta Pixel Contact — señal de intención de contacto
  // No es Lead porque un click no garantiza que la persona haya enviado un mensaje
  trackMetaPixelEvent('Contact', { source, button_text: buttonText ?? '' });
}

/**
 * Click en un plan de precios (macro-conversion intent).
 * @param planName  'Inicio' | 'Profesional' | 'Premium'
 * @param planPrice 'ARS 50.000' | etc.
 * @param billingCycle 'mensual' | 'anual'
 */
export function trackPlanClick(planName: string, planPrice: string, billingCycle: string = 'mensual'): void {
  // GA4
  trackEvent('select_plan', {
    event_category: 'conversion',
    event_label: planName,
    plan_name: planName,
    plan_price: planPrice,
    billing_cycle: billingCycle,
    currency: 'ARS',
  });
  // Meta Pixel Lead — acá sí hay intent explícito: el usuario eligió un plan y fue a WhatsApp
  trackMetaPixelEvent('Lead', { plan_name: planName, plan_price: planPrice });
}

/**
 * El usuario llegó a la sección #precio (IntersectionObserver, dispara una sola vez).
 * Llamar desde usePricingVisibility.
 */
export function trackViewPricing(): void {
  trackEvent('view_pricing', {
    event_category: 'engagement',
    event_label: 'pricing_section_visible',
  });
}

/**
 * El usuario expandió un plan en el acordeón mobile.
 * @param planName 'Inicio' | 'Profesional' | 'Premium'
 */
export function trackExpandPlan(planName: string): void {
  trackEvent('expand_plan', {
    event_category: 'engagement',
    event_label: planName,
    plan_name: planName,
  });
}

/**
 * Hitos de scroll con nombre propio para usarlos como conversiones en GA4
 * sin necesidad de filtros por parámetro.
 * @param milestone 50 | 75
 */
export function trackScrollMilestone(milestone: 50 | 75): void {
  trackEvent(`scroll_depth_${milestone}`, {
    event_category: 'engagement',
    event_label: `${milestone}%`,
    percent_scrolled: milestone,
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

// ── UTM Persistence ──────────────────────────────────────────────────────────
// Guarda los UTMs de la URL en localStorage para atribuir correctamente
// el gasto publicitario cuando el usuario convierte más tarde.
const UTM_STORAGE_KEY = 'webexpress_utms';
const UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid'];

/**
 * Lee los UTMs de la URL actual y los guarda en localStorage.
 * Llamar una vez al cargar la página.
 */
export function captureAndPersistUTMs(): void {
  const searchParams = new URLSearchParams(window.location.search);
  const captured: Record<string, string> = {};

  UTM_PARAMS.forEach(param => {
    const value = searchParams.get(param);
    if (value) captured[param] = value;
  });

  // Algunos deployments de SPA usan hash routing — también buscar en el hash
  if (window.location.hash.includes('?')) {
    const hashParams = new URLSearchParams(window.location.hash.split('?')[1]);
    UTM_PARAMS.forEach(param => {
      const value = hashParams.get(param);
      if (value && !captured[param]) captured[param] = value;
    });
  }

  if (Object.keys(captured).length > 0) {
    try {
      localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify({
        ...captured,
        captured_at: new Date().toISOString(),
        landing_path: window.location.href,
      }));
    } catch {
      // localStorage puede no estar disponible en algunos contextos
    }
  }
}

/**
 * Recupera los UTMs guardados en localStorage.
 * Usarlos para adjuntar a formularios o mensajes de WhatsApp.
 */
export function getStoredUTMs(): Record<string, string> {
  try {
    const stored = localStorage.getItem(UTM_STORAGE_KEY);
    if (!stored) return {};
    const parsed = JSON.parse(stored) as Record<string, string>;
    // Eliminar campos internos antes de devolver
    const { captured_at: _ca, landing_path: _lp, ...utms } = parsed;
    return utms;
  } catch {
    return {};
  }
}

/**
 * Construye la URL de WhatsApp adjuntando los UTMs almacenados al mensaje.
 * Permite saber de qué campaña viene cada lead cuando contesta por WhatsApp.
 */
export function buildWhatsAppUrl(phone: string, message: string): string {
  const utms = getStoredUTMs();
  let fullMessage = message;

  if (Object.keys(utms).length > 0) {
    // Adjuntar source al mensaje para contexto en el chat
    const source = utms.utm_source || utms.utm_medium || '';
    if (source) {
      fullMessage += ` [via ${source}]`;
    }
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(fullMessage)}`;
}
