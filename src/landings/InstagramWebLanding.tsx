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
import { Instagram, Link, Share2, Smartphone, Globe, Layout } from 'lucide-react';

const instagramPainPoints = [
  {
    icon: <Instagram className="w-6 h-6" />,
    title: 'Info dispersa en historias',
    description: 'Tus servicios, precios y horarios están desperdigados en destacadas.'
  },
  {
    icon: <Link className="w-6 h-6" />,
    title: 'Link en bio limitado',
    description: 'Solo podés poner un link y no alcanza para mostrar todo lo que hacés.'
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: 'Difícil de compartir',
    description: 'Mandar tu Instagram no es tan profesional como mandar una web.'
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Algoritmo impredecible',
    description: 'A veces tus posts no llegan ni a tus propios seguidores.'
  }
];

const instagramBenefits = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Todo en un solo lugar',
    description: 'Servicios, precios, contacto y más en una página clara.'
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: 'Información organizada',
    description: 'Secciones claras donde tus clientes encuentran todo rápido.'
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: 'Link serio para compartir',
    description: 'Tuweb.com.ar se ve mucho más profesional que tu Instagram.'
  },
  {
    icon: <Instagram className="w-6 h-6" />,
    title: 'Complementa tus redes',
    description: 'Tu web y tu Instagram trabajan juntos, no compiten.'
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Botón a WhatsApp',
    description: 'Tus clientes te escriben directo desde la web.'
  },
  {
    icon: <Link className="w-6 h-6" />,
    title: 'Link en bio perfecto',
    description: 'Poné tu web en el link de bio y mostrá todo lo que hacés.'
  }
];

const instagramFAQ = [
  {
    question: '¿Por qué necesito una web si ya tengo Instagram?',
    answer: 'Instagram es excelente para mostrar tu día a día y conectar, pero una web te da autoridad profesional, organiza tu información de forma clara y te permite convertir visitantes en clientes de manera más efectiva. Son complementarios: Instagram atrae, tu web convierte. Con el plan Inicio ($50.000) tenés tu web lista en el día solo con tu Gmail y teléfono.'
  },
  {
    question: '¿La web reemplaza mi Instagram?',
    answer: 'No, las dos herramientas trabajan juntas. Seguís usando Instagram para contenido y engagement, y usás la web como tu tarjeta de presentación profesional donde está toda tu info organizada. El link de tu web va en la bio de Instagram.'
  },
  {
    question: '¿Puedo linkear mi Instagram en la web?',
    answer: 'Sí, incluimos botones a todas tus redes sociales: Instagram, Facebook, LinkedIn, y cualquier otra que uses. Tu web centraliza todo tu ecosistema digital. Esto está incluido en todos los planes.'
  },
  {
    question: '¿Qué pongo en el link de bio de Instagram?',
    answer: 'Tu web. Así cuando alguien clickea "link in bio" llega a una página profesional con toda tu información organizada, no a un link externo genérico. El plan Inicio ($50.000) es perfecto para empezar.'
  },
  {
    question: '¿La web se ve bien en celular?',
    answer: 'Absolutamente. Todas nuestras webs son 100% responsive, se ven perfecto en cualquier dispositivo. De hecho, la mayoría de tus visitas van a ser desde celular. Todos los planes incluyen diseño responsive.'
  },
  {
    question: '¿Puedo empezar con el plan Inicio y después mejorar?',
    answer: 'Sí, podés empezar con el plan Inicio ($50.000) para tener tu web rápido, y después upgrade al Profesional ($150.000) o Premium ($300.000) cuando quieras agregar más secciones y funcionalidades.'
  }
];

export default function InstagramWebLanding() {
  return (
    <div className="min-h-screen">
      {/* SEO */}
      <title>Tenés Instagram. Ahora te falta una web. | Planes desde $50.000</title>
      <meta name="description" content="Convertí tu información de Instagram en una landing page clara y profesional. Charlamos, me contás qué hacés, y en el día tenés tu web. Planes desde $50.000." />
      
      <Header ctaText="Charlemos" ctaLink="#/instagram-a-web" />
      
      <main>
        {/* Hero - De Instagram a Web */}
        <HeroSection
          badge="De Instagram a Web"
          title="Tu Instagram no reemplaza una web. Arreglemos eso hoy."
          subtitle="En el día. Desde $50.000. Sin vueltas."
          description="Convertí toda tu información en una página clara, seria y lista para compartir. Tu Instagram atrae, tu web convierte. En horas tenés tu web online."
          primaryCta="Charlemos"
          secondaryCta="Ver planes"
          showCheckmarks={true}
          checkmarks={['Info organizada', 'Link profesional', 'Botón a WhatsApp']}
          whatsappMessage="Hola! Tengo Instagram y quiero sumar una web. Charlamos?"
          showSimpleFormula={true}
        />

        {/* Pain Points - Problemas de solo tener Instagram */}
        <PainPointsSection 
          title="Solo tener Instagram tiene estos problemas:"
          subtitle="Y estás perdiendo clientes por no tener una web"
          painPoints={instagramPainPoints}
        />

        {/* Benefits - Ventajas de sumar web */}
        <BenefitsSection 
          title="Con una web complementás tu Instagram:"
          subtitle="Las dos herramientas trabajan juntas para conseguirte más clientes"
          benefits={instagramBenefits}
        />

        {/* Pricing Cards - Los 3 planes */}
        <PricingCards 
          title="Elegí el plan para tu web"
          subtitle="Charlamos unos minutos, me contás qué hacés, y en el día tenés tu web personal."
        />

        {/* FAQ - Específico para Instagram */}
        <FAQSection 
          title="Preguntas sobre web + Instagram"
          items={instagramFAQ}
        />

        {/* Final CTA */}
        <CTASection
          variant="default"
          title="Sos profesional. Mostrate como tal."
          subtitle="Tené tu web ahora y dejá de compartir solo tu Instagram."
          ctaText="Charlemos"
          whatsappMessage="Hola! Tengo Instagram y quiero sumar una web. Charlamos?"
        />
      </main>

      <Footer />
      <WhatsAppButton 
        message="Hola! Tengo Instagram y quiero sumar una web. Charlamos?"
      />
    </div>
  );
}
