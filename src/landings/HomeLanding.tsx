import { 
  Header, 
  Footer, 
  WhatsAppButton,
  HeroSection,
  PainPointsSection,
  BenefitsSection,
  PricingCards,
  FAQSection,
  CTASection
} from '@/components/shared';

const homeFAQ = [
  {
    question: '¿Cómo es el proceso?',
    answer: 'Es muy simple. Charlamos unos minutos por WhatsApp, me contás qué hacés y qué necesitás. Yo armo tu web y en el día (o hasta 72 hs para planes más complejos) te la muestro. Hacemos los ajustes que quieras y ¡listo! Tu web online.'
  },
  {
    question: '¿En cuánto tiempo está lista mi web?',
    answer: 'El plan Inicio está listo en el mismo día. Los planes Profesional y Premium pueden tomar hasta 72 horas dependiendo de la complejidad y los ajustes que necesites.'
  },
  {
    question: '¿Qué pasa si no me gusta cómo queda?',
    answer: 'Tenés garantía de satisfacción. Hacemos los ajustes necesarios y si igual no estás conforme, te devolvemos tu dinero. No tenés nada que perder.'
  },
  {
    question: '¿Hay que pagar algo mensual?',
    answer: 'No, el precio es único y final. El hosting y dominio están incluidos por el primer año. Después, la renovación es aproximadamente $10.000 por año (menos de $1.000 por mes).'
  },
  {
    question: '¿Puedo cambiar de plan después?',
    answer: 'Sí, podés empezar con el plan Inicio y después upgrade al Profesional o Premium pagando la diferencia. Tu web crece con vos.'
  },
  {
    question: '¿Cómo es el proceso de pago?',
    answer: 'Aceptamos transferencia bancaria, MercadoPago (con todas sus opciones) y efectivo en Buenos Aires. Para el plan Inicio, el pago es 100% adelantado. Para planes mayores, podemos hacer 50% al iniciar y 50% al entregar.'
  },
  {
    question: '¿Necesito tener dominio propio?',
    answer: 'No es necesario. Podemos usar un subdominio gratuito (tunombre.webexpress.ar) o registramos tu dominio .com.ar por un costo adicional de aproximadamente $5.000 por año.'
  },
  {
    question: '¿Puedo ver ejemplos de webs que hayan hecho?',
    answer: '¡Claro! Escribinos por WhatsApp y te pasamos ejemplos de webs de profesionales de diferentes rubros para que veas la calidad de nuestro trabajo.'
  }
];

export default function HomeLanding() {
  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags */}
      <title>Web Personal en el Día | Desde ARS 50.000</title>
      <meta name="description" content="Tu web personal lista en el día. Charlamos, me contás qué hacés, y en el día tenés tu web. Planes desde $50.000 para profesionales independientes en Argentina." />
      <meta name="keywords" content="web personal, landing page, diseño web, Argentina, profesionales, WhatsApp, psicólogo, abogado, nutricionista" />
      
      <Header ctaText="Charlemos" ctaLink="#/whatsapp" />
      
      <main>
        {/* Hero - Nuevo mensaje más cálido */}
        <HeroSection
          badge="Web en el día"
          title="Tu web personal lista en el día"
          subtitle="Charlamos, me contás qué hacés, y en el día tenés tu web."
          description="Sin vueltas. Sin reuniones eternas. Sin complicarte. Elegís tu plan, charlamos unos minutos, y en horas tenés tu web personal online, lista para compartir."
          primaryCta="Charlemos"
          secondaryCta="Ver planes"
          showCheckmarks={true}
          checkmarks={['En el día', 'Sin vueltas', 'Lista para compartir']}
          whatsappMessage="Hola! Quiero mi web personal. Charlamos?"
          showSimpleFormula={true}
        />

        {/* Pain Points */}
        <PainPointsSection />

        {/* Benefits */}
        <BenefitsSection />

        {/* Pricing Cards - Los 3 planes */}
        <PricingCards 
          title="Elegí el plan que mejor va con tu momento"
          subtitle="Charlamos unos minutos, me contás qué hacés, y en el día tenés tu web."
        />

        {/* FAQ */}
        <FAQSection 
          title="Preguntas frecuentes"
          items={homeFAQ}
        />

        {/* Final CTA */}
        <CTASection 
          variant="gradient"
          title="No necesitás saber de tecnología. No necesitás perder tiempo."
          subtitle="Charlamos y yo me encargo del resto."
          ctaText="Charlemos"
          whatsappMessage="Hola! Quiero mi web personal. Charlamos?"
        />
      </main>

      <Footer />
      <WhatsAppButton message="Hola! Quiero mi web personal. Charlamos?" />
    </div>
  );
}
