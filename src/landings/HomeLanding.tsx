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
const IgIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

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
          badge="Precio de lanzamiento · Solo hasta el 30 de abril"
          title={
            <span>
              No es profesional compartir tu{' '}
              <IgIcon className="inline w-8 h-8 align-middle mx-1.5 text-pink-400 lg:text-pink-500" />
              <br />
              <span className="inline-block bg-amber-400 text-slate-900 px-3 py-1 rounded-md mt-1">Sé profesional</span>
              {' '}y compartí tu web
            </span>
          }
          subtitle="Desde $50.000. Pago único. En el día."
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

        {/* 3. PRICING — el precio accesible es el argumento principal: va temprano */}
        <PricingCards
          title="Elegí el plan que mejor va con tu momento"
          subtitle="Desde una página simple hasta una web completa con todo incluido."
        />

        {/* 4. BENEFITS — la solución, ahora que ya saben el precio */}
        <BenefitsSection />

        {/* 5. PROCESS — cómo funciona */}
        <ProcessSection
          title="En 4 pasos, tu web está online"
          subtitle="Sin reuniones largas ni formularios complicados"
        />

        {/* 6. SOCIAL PROOF — confianza y prueba social */}
        <SocialProofSection />

        {/* 7. FAQ — resolver objeciones */}
        <FAQSection
          title="Preguntas frecuentes"
          items={homeFAQ}
        />

        {/* 8. CTA FINAL — última oportunidad de conversión */}
        <CTASection
          variant="gradient"
          title="Sos profesional. Mostrate como tal."
          subtitle="Tené tu web ahora y empezá a compartir algo que te represente de verdad."
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
