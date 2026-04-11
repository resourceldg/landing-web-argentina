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
import { DollarSign, X, TrendingDown, Clock, CheckCircle, Shield, Zap, Award, Sparkles } from 'lucide-react';

const precioPainPoints = [
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: 'Agencias caras',
    description: 'Presupuestos de $200.000 o más por una web simple.'
  },
  {
    icon: <X className="w-6 h-6" />,
    title: 'Costos mensuales ocultos',
    description: 'Te cobran hosting, mantenimiento y actualizaciones por separado.'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Procesos eternos',
    description: 'Meses de ida y vuelta para tener una web básica.'
  },
  {
    icon: <TrendingDown className="w-6 h-6" />,
    title: 'No sabés cuánto va a salir',
    description: 'Cada cambio es un costo adicional impredecible.'
  }
];

const precioBenefits = [
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: 'Precio fijo y claro',
    description: 'Tres opciones claras: $50k, $150k, $300k. Sin sorpresas.'
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: 'Todo incluido',
    description: 'Diseño, desarrollo, publicación y soporte incluidos.'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Entrega en el día',
    description: 'El plan Inicio está listo en horas. Los otros en 72 hs máximo.'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Garantía de satisfacción',
    description: 'Si no te gusta, te devolvemos tu dinero.'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Calidad profesional',
    description: 'Diseño moderno, responsive y optimizado para convertir.'
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Sin complicaciones',
    description: 'Charlamos, me contás qué hacés, y listo. Yo me encargo del resto.'
  }
];

const precioFAQ = [
  {
    question: '¿Los precios son finales?',
    answer: 'Sí, los precios son únicos y finales. Plan Inicio $50.000, Profesional $150.000, Premium $300.000. Incluyen diseño, desarrollo, publicación online y soporte. No hay costos extras ni sorpresas.'
  },
  {
    question: '¿Hay que pagar algo mensual?',
    answer: 'No. El precio es único. El hosting y dominio están incluidos por el primer año. Después, la renovación es aproximadamente $10.000 por año (menos de $1.000 por mes).'
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos transferencia bancaria, MercadoPago (con todas sus opciones: tarjeta de crédito, débito, efectivo en Rapipago/PagoFácil) y efectivo si estás en Buenos Aires.'
  },
  {
    question: '¿Puedo pagar en cuotas?',
    answer: 'Sí, a través de MercadoPago podés pagar en cuotas con tarjeta de crédito. Las opciones dependen de tu banco y tarjeta. También podemos hacer un acuerdo de 50% al iniciar y 50% al entregar para planes Profesional y Premium.'
  },
  {
    question: '¿Qué pasa si no me gusta el resultado?',
    answer: 'Tenés garantía de satisfacción. Hacemos los ajustes que necesites y si igual no estás conforme, te devolvemos el 100% de tu dinero. No tenés nada que perder.'
  },
  {
    question: '¿Por qué son más económicos que las agencias?',
    answer: 'Nos especializamos en landing pages para profesionales, con un proceso optimizado y plantillas probadas. No reinventamos la rueda cada vez, sino que adaptamos un sistema que ya funciona. Eso nos permite ofrecer calidad a precios accesibles.'
  },
  {
    question: '¿Incluye el dominio (.com.ar)?',
    answer: 'El plan Inicio incluye un subdominio gratuito. Para tener tu propio dominio .com.ar, hay un costo adicional de aproximadamente $5.000 por año. Los planes Profesional y Premium pueden incluir dominio propio dependiendo de la promoción vigente.'
  },
  {
    question: '¿Puedo cambiar de plan después?',
    answer: 'Sí, podés empezar con el plan Inicio y después upgrade al Profesional o Premium pagando solo la diferencia. Tu web puede crecer con vos.'
  }
];

export default function PrecioLanding() {
  return (
    <div className="min-h-screen">
      {/* SEO */}
      <title>Precios Claros | Web desde ARS 50.000 | WebExpress</title>
      <meta name="description" content="Web profesional desde ARS 50.000. Sin agencia, sin vueltas, sin presupuestos imposibles. Charlamos, me contás qué hacés, y en el día tenés tu web." />
      
      <Header ctaText="Charlemos" ctaLink="#/web-50k" />
      
      <main>
        {/* Hero - Enfoque precio */}
        <HeroSection
          badge="Precios Claros"
          title="Tu web profesional por menos de lo que sale un celular"
          subtitle="Sin agencia, sin vueltas y sin presupuestos imposibles."
          description="Tres planes claros: $50.000, $150.000, $300.000. Charlamos, me contás qué hacés, y en el día tenés tu web personal online. Ideal para profesionales independientes, monotributistas y emprendedores de servicios."
          primaryCta="Charlemos"
          secondaryCta="Ver planes"
          showCheckmarks={true}
          checkmarks={['Precios claros', 'Sin costos mensuales', 'Garantía de satisfacción']}
          whatsappMessage="Hola! Me interesa la web. Charlamos?"
          showSimpleFormula={true}
        />

        {/* Pain Points - Agencias caras */}
        <PainPointsSection 
          title="Las agencias te cobran esto:"
          subtitle="Y te hacen esperar meses por una web simple"
          painPoints={precioPainPoints}
        />

        {/* Benefits - Por qué nuestro precio es mejor */}
        <BenefitsSection 
          title="Con WebExpress tenés:"
          subtitle="Calidad profesional a un precio que realmente podés pagar"
          benefits={precioBenefits}
        />

        {/* Pricing Cards - Los 3 planes destacados */}
        <PricingCards 
          title="Elegí el plan que se ajusta a tu presupuesto"
          subtitle="Charlamos unos minutos, me contás qué hacés, y en el día tenés tu web personal."
        />

        {/* FAQ - Específico para precio */}
        <FAQSection 
          title="Todo sobre los precios"
          items={precioFAQ}
        />

        {/* Final CTA */}
        <CTASection 
          variant="dark"
          title="Precios claros, entrega rápida, garantía real"
          subtitle="Elegís tu plan y en horas tenés tu web online."
          ctaText="Charlemos"
          whatsappMessage="Hola! Me interesa la web. Charlamos?"
        />
      </main>

      <Footer />
      <WhatsAppButton 
        message="Hola! Me interesa la web. Charlamos?"
      />
    </div>
  );
}
