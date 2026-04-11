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
import { Gift, Heart, Calendar, User, Star, PartyPopper } from 'lucide-react';

const regaloPainPoints = [
  {
    icon: <Gift className="w-6 h-6" />,
    title: 'Regalos sin sentido',
    description: 'Siempre le regalás lo mismo y nada que realmente le sirva para trabajar.'
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Querés algo útil',
    description: 'Buscás un regalo que realmente le ayude en su profesión.'
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Fechas especiales',
    description: 'Cumpleaños, día del padre/madre, graduación o aniversario del estudio.'
  },
  {
    icon: <User className="w-6 h-6" />,
    title: 'No sabe de tecnología',
    description: 'Ese profesional que admirás necesita ayuda con su presencia online.'
  }
];

const regaloBenefits = [
  {
    icon: <Gift className="w-6 h-6" />,
    title: 'Regalo único y original',
    description: 'Algo que no se espera y que realmente le va a servir.'
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Mostrás que te importa',
    description: 'Un regalo que demuestra que valorás su trabajo.'
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Le ayuda a crecer',
    description: 'Más consultas, más clientes, más profesionalismo.'
  },
  {
    icon: <PartyPopper className="w-6 h-6" />,
    title: 'Gift card disponible',
    description: 'Voucher digital elegante para regalar en cualquier fecha.'
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Perfecto para cualquier ocasión',
    description: 'Cumpleaños, graduación, aniversario o día especial.'
  },
  {
    icon: <User className="w-6 h-6" />,
    title: 'Para cualquier profesional',
    description: 'Psicólogos, abogados, médicos, contadores, coaches y más.'
  }
];

const regaloFAQ = [
  {
    question: '¿Cómo funciona el regalo?',
    answer: 'Es muy simple. Vos comprás el voucher de regalo y se lo enviamos a la persona que querés sorprender. Ella elige el plan que más le guste (Inicio $50k, Profesional $150k o Premium $300k) y se contacta con nosotros para canjearlo. Incluye gift card digital descargable.'
  },
  {
    question: '¿Puedo personalizar el mensaje del regalo?',
    answer: '¡Por supuesto! La gift card incluye un espacio para tu mensaje personal. Podés escribir lo que quieras y lo incluimos en el diseño del voucher.'
  },
  {
    question: '¿La persona puede elegir el plan?',
    answer: 'Sí, cuando recibe el voucher puede elegir cualquiera de los 3 planes. Si elige uno de mayor valor, simplemente paga la diferencia. Así le das libertad para elegir lo que más le convenga.'
  },
  {
    question: '¿Tiene fecha de vencimiento el voucher?',
    answer: 'El voucher es válido por 12 meses desde la compra. La persona tiene un año para canjearlo cuando le resulte más conveniente.'
  },
  {
    question: '¿Puedo regalarlo sin saber qué profesión tiene?',
    answer: 'El voucher es genérico y dice "Web Profesional". Cuando la persona lo canjee, adaptamos el diseño a su rubro específico, sea el que sea. Solo necesita pasar su Gmail y teléfono.'
  },
  {
    question: '¿Incluye envoltorio o presentación especial?',
    answer: 'Te enviamos la gift card en formato digital de alta calidad, lista para imprimir o enviar por WhatsApp/email. Si querés algo físico, podés imprimirla en cualquier gráfica.'
  }
];

export default function RegaloLanding() {
  return (
    <div className="min-h-screen">
      {/* SEO */}
      <title>Regalá una Web Profesional | Gift Card Disponible</title>
      <meta name="description" content="Regalá una web profesional. El regalo más útil y original. Gift card digital. Planes desde $50.000. Charlamos y listo." />
      
      <Header ctaText="Consultar por regalo" ctaLink="#/regalo" />
      
      <main>
        {/* Hero - Enfoque regalo */}
        <HeroSection
          badge="Gift Card Disponible"
          title="Regalale a tu profesional una web"
          subtitle="Un regalo útil, elegante y que realmente le sirve."
          description="Ese abogado, psicóloga, nutricionista, contador o médico que admirás puede tener una presencia online mucho más profesional. Y vos podés regalársela."
          primaryCta="Consultar por regalo"
          secondaryCta="Ver planes"
          showCheckmarks={true}
          checkmarks={['Gift card digital', 'Válido 12 meses', 'Mensaje personalizado']}
          whatsappMessage="Hola! Quiero regalar una web a un profesional. Me interesa la gift card."
          showSimpleFormula={false}
        />

        {/* Pain Points - Problema de regalos */}
        <PainPointsSection 
          title="¿Cansado de regalar lo mismo?"
          subtitle="Este año regalá algo que realmente le sirva"
          painPoints={regaloPainPoints}
        />

        {/* Benefits - Por qué es buen regalo */}
        <BenefitsSection 
          title="Un regalo que realmente importa:"
          subtitle="Porque los mejores regalos son los que ayudan a crecer"
          benefits={regaloBenefits}
        />

        {/* Pricing Cards - Los 3 planes para regalar */}
        <PricingCards 
          title="Elegí el plan de regalo"
          subtitle="La persona puede elegir cualquier plan con el voucher. Vos elegís el valor del regalo."
        />

        {/* FAQ - Específico para regalos */}
        <FAQSection 
          title="Preguntas sobre el regalo"
          items={regaloFAQ}
        />

        {/* Final CTA */}
        <CTASection 
          variant="gradient"
          title="Hay regalos lindos. Y hay regalos que además ayudan a trabajar mejor."
          subtitle="Sorprendé a ese profesional con una web que le cambie el día a día."
          ctaText="Consultar por regalo"
          secondaryCta="Charlemos"
          whatsappMessage="Hola! Quiero regalar una web a un profesional"
        />
      </main>

      <Footer />
      <WhatsAppButton 
        message="Hola! Quiero regalar una web a un profesional"
      />
    </div>
  );
}
