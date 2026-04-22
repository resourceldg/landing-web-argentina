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
import { MessageCircle, Phone, Users, TrendingUp, Clock, Star, Calendar, CheckCircle } from 'lucide-react';

const whatsappPainPoints = [
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: 'Pocas consultas por día',
    description: 'Tu teléfono no suena tanto como te gustaría.'
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Clientes preguntan lo mismo',
    description: 'Perdés tiempo respondiendo precios y servicios una y otra vez.'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'No llegás a más gente',
    description: 'Tus clientes actuales no te recomiendan con un link claro.'
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Difícil cerrar ventas',
    description: 'Sin una web que respalde, cuesta más convertir interesados en clientes.'
  }
];

const whatsappBenefits = [
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: 'Botón directo a WhatsApp',
    description: 'Tus clientes te escriben con un solo toque, sin buscar tu número.'
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: 'Info clara antes de escribir',
    description: 'Tus servicios y precios están claros, llegan consultas más calificadas.'
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Testimonios que convencen',
    description: 'Mostrá opiniones de clientes satisfechos que generan confianza.'
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Horarios y ubicación',
    description: 'Toda la info básica para que contacten en el momento indicado.'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Ahorrás tiempo',
    description: 'La web responde lo básico, vos atendés consultas más concretas.'
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Más consultas diarias',
    description: 'Una web bien hecha convierte visitas en mensajes de WhatsApp.'
  }
];

const whatsappFAQ = [
  {
    question: '¿Cómo funciona el botón a WhatsApp?',
    answer: 'Es muy simple. En tu web hay botones que, al tocarlos, abren directamente WhatsApp con tu número y un mensaje predefinido. El cliente solo tiene que apretar "enviar". Funciona tanto en celular como en computadora. Esto está incluido en todos los planes.'
  },
  {
    question: '¿Puedo recibir consultas sin mostrar mi número?',
    answer: 'El botón de WhatsApp lleva a tu número, pero en los planes Profesional ($150.000) y Premium ($300.000) podemos agregar también un formulario de contacto donde la persona deja su mensaje y vos respondés cuando puedas. Así tenés ambas opciones.'
  },
  {
    question: '¿La web realmente trae más consultas?',
    answer: 'Sí. Una web profesional genera confianza, organiza tu información y hace que sea muy fácil contactarte. Muchos clientes potenciales no escriben porque no encuentran la info o no se sienten seguros. La web resuelve eso. El plan Profesional ($150.000) está diseñado específicamente para maximizar conversiones.'
  },
  {
    question: '¿Puedo tener varios botones de WhatsApp?',
    answer: 'Sí, en el plan Profesional y Premium podemos poner botones en diferentes secciones: uno general, otro para turnos, otro para consultas específicas. Cada uno puede tener un mensaje predefinido diferente.'
  },
  {
    question: '¿Funciona con WhatsApp Business?',
    answer: 'Perfectamente. De hecho, recomendamos usar WhatsApp Business porque permite respuestas rápidas, catálogos y mensajes automáticos que complementan muy bien con la web. Todos los planes son compatibles.'
  },
  {
    question: '¿Cuál plan me recomendás para más consultas?',
    answer: 'Para maximizar consultas recomendamos el plan Profesional ($150.000). Incluye testimonios, preguntas frecuentes, formulario de contacto y hasta 5 secciones optimizadas para convertir visitantes en mensajes de WhatsApp.'
  }
];

export default function WhatsAppLanding() {
  return (
    <div className="min-h-screen">
      {/* SEO */}
      <title>Web + WhatsApp = Más Consultas | Planes desde $50.000</title>
      <meta name="description" content="Una web simple para que te escriban más por WhatsApp. Ideal para nutricionistas, coaches, kinesiólogos. Charlamos, me contás qué hacés, y en el día tenés tu web." />
      
      <Header ctaText="Charlemos" ctaLink="#/whatsapp" />
      
      <main>
        {/* Hero - Enfoque WhatsApp */}
        <HeroSection
          badge="Optimizada para WhatsApp"
          title="Tu número de WhatsApp no es tu presencia digital."
          subtitle="Con una web, tus clientes te encuentran, te conocen y te escriben."
          description="Mostrá quién sos, qué hacés y cómo trabajás en una sola página que convierta visitas en consultas. Ideal para nutricionistas, coaches, kinesiólogos, esteticistas, odontólogos."
          primaryCta="Charlemos"
          secondaryCta="Ver planes"
          showCheckmarks={true}
          checkmarks={['Botón directo a WhatsApp', 'Info clara de servicios', 'Testimonios destacados']}
          whatsappMessage="Hola! Quiero una web para recibir más consultas por WhatsApp. Charlamos?"
          showSimpleFormula={true}
        />

        {/* Pain Points - Pocas consultas */}
        <PainPointsSection 
          title="¿Te cuesta conseguir consultas?"
          subtitle="Estos son los problemas que resuelve una web optimizada para WhatsApp"
          painPoints={whatsappPainPoints}
        />

        {/* Benefits - Más consultas */}
        <BenefitsSection 
          title="Con una web + WhatsApp tenés:"
          subtitle="Todo diseñado para convertir visitantes en mensajes de consulta"
          benefits={whatsappBenefits}
        />

        {/* Pricing Cards - Los 3 planes */}
        <PricingCards 
          title="Elegí el plan para más consultas"
          subtitle="Charlamos unos minutos, me contás qué hacés, y en el día tenés tu web personal."
        />

        {/* FAQ - Específico para WhatsApp */}
        <FAQSection 
          title="Preguntas sobre web + WhatsApp"
          items={whatsappFAQ}
        />

        {/* Final CTA */}
        <CTASection 
          variant="gradient"
          title="Convertí tu WhatsApp en una herramienta de ventas"
          subtitle="Una web que trabaja 24/7 trayéndote consultas calificadas."
          ctaText="Charlemos"
          whatsappMessage="Hola! Quiero una web para recibir más consultas. Charlamos?"
        />
      </main>

      <Footer />
      <WhatsAppButton 
        message="Hola! Quiero una web para recibir más consultas. Charlamos?"
      />
    </div>
  );
}
