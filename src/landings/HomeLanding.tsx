import {
  Header,
  Footer,
  WhatsAppButton,
  HeroSection,
  PainPointsSection,
  BenefitsSection,
  ProcessSection,
  SocialProofSection,
  PricingCards,
  FAQSection,
  CTASection
} from '@/components/shared';

// Mensaje pre-cargado en WhatsApp — específico y con intención comercial
const WA_HERO = 'Hola! Vi tu anuncio y quiero saber más sobre la web. ¿Cuánto sale y qué incluye?';
const WA_FINAL = 'Hola! Quiero contratar mi web profesional. ¿Por dónde arrancamos?';

const homeFAQ = [
  {
    question: '¿Cómo es el proceso?',
    answer: 'Simple. Charlamos unos minutos por WhatsApp, me contás qué hacés y qué necesitás. Yo armo tu web y en el día (o hasta 72 hs para planes más complejos) te la muestro. Hacemos los ajustes que quieras y ¡listo!'
  },
  {
    question: '¿En cuánto tiempo está lista mi web?',
    answer: 'El plan Inicio está listo el mismo día. Los planes Profesional y Premium pueden tomar hasta 72 horas según la complejidad y los ajustes que necesités.'
  },
  {
    question: '¿Qué pasa si no me gusta cómo queda?',
    answer: 'Tenés garantía de satisfacción. Hacemos todos los ajustes necesarios y si igual no quedás conforme, te devolvemos el dinero. No tenés nada que perder.'
  },
  {
    question: '¿Hay que pagar algo mensual?',
    answer: 'No. El precio es único y final. El hosting y dominio están incluidos por el primer año. Después, la renovación es aproximadamente $10.000 por año (menos de $1.000 por mes).'
  },
  {
    question: '¿Puedo cambiar de plan después?',
    answer: 'Sí. Podés empezar con el plan Inicio y después pasar al Profesional o Premium pagando la diferencia. Tu web crece con vos.'
  },
  {
    question: '¿Cómo es el proceso de pago?',
    answer: 'Aceptamos transferencia bancaria, MercadoPago y efectivo en Buenos Aires. Para el plan Inicio, el pago es 100% adelantado. Para planes mayores, podemos hacer 50% al iniciar y 50% al entregar.'
  },
  {
    question: '¿Necesito tener dominio propio?',
    answer: 'No es necesario. Podemos usar un subdominio gratuito (tunombre.webexpress.ar) o registramos tu dominio .com.ar por un costo adicional de aproximadamente $5.000 por año.'
  },
  {
    question: '¿Puedo ver ejemplos de webs que hayan hecho?',
    answer: '¡Claro! Escribinos por WhatsApp y te pasamos ejemplos de webs de profesionales de diferentes rubros para que veas la calidad del trabajo.'
  }
];

export default function HomeLanding() {
  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags */}
      <title>Páginas web para profesionales independientes | Desde ARS 50.000</title>
      <meta name="description" content="Diseño y desarrollo de landing pages para profesionales en Argentina. Listas en el día, optimizadas para campañas de Meta Ads. Desde $50.000. Garantía de satisfacción." />
      <meta name="keywords" content="landing page, diseño web, Argentina, profesionales, WhatsApp, psicólogo, abogado, nutricionista, Meta Ads" />

      <Header ctaText="Escribinos" ctaLink="https://wa.me/542236202061?text=Hola!%20Quiero%20consultar%20sobre%20la%20web." />

      <main>
        {/* 1. HERO — promesa clara + CTA WhatsApp con tracking */}
        <HeroSection
          badge="Precio especial de lanzamiento · 50% OFF"
          title="Tu web profesional lista para generar más consultas"
          subtitle="En el día. Sin vueltas. Desde $50.000."
          description="Te armamos una página rápida, clara y orientada a conversión. Ideal para publicitar en Meta Ads y convertir visitantes en clientes reales."
          primaryCta="Quiero mi web ahora"
          secondaryCta="Ver planes"
          showCheckmarks={true}
          checkmarks={['Entrega en el día', 'Optimizada para celular', 'Lista para publicitar']}
          whatsappMessage={WA_HERO}
          showSimpleFormula={false}
        />

        {/* 2. PAIN POINTS — el problema que resolvemos */}
        <PainPointsSection />

        {/* 3. BENEFITS — la solución */}
        <BenefitsSection />

        {/* 4. PROCESS — cómo funciona (antes estaba ausente en esta landing) */}
        <ProcessSection
          title="En 4 pasos, tu web está online"
          subtitle="Sin reuniones largas ni formularios complicados"
        />

        {/* 5. SOCIAL PROOF — confianza basada en proceso y garantías reales */}
        <SocialProofSection />

        {/* 6. PRICING — ancla de precio + planes */}
        <PricingCards
          title="Elegí el plan que mejor va con tu momento"
          subtitle="Desde una página simple hasta una web completa con todo incluido."
        />

        {/* 7. FAQ — resolver objeciones */}
        <FAQSection
          title="Preguntas frecuentes"
          items={homeFAQ}
        />

        {/* 8. CTA FINAL — última oportunidad de conversión */}
        <CTASection
          variant="gradient"
          title="¿Listo para tener tu web?"
          subtitle="Escribinos por WhatsApp y en minutos te contamos cómo arrancar."
          ctaText="Quiero mi web ahora"
          secondaryCta="Consultar por WhatsApp"
          whatsappMessage={WA_FINAL}
        />
      </main>

      <Footer />
      {/* Botón flotante WhatsApp — siempre visible en mobile */}
      <WhatsAppButton message={WA_HERO} />
    </div>
  );
}
