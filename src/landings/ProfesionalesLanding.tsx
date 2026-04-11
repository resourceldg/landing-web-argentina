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
import { Scale, Brain, Stethoscope, Calculator, Building2, Briefcase } from 'lucide-react';

const profesionalPainPoints = [
  {
    icon: <Scale className="w-6 h-6" />,
    title: 'Estudio sin presencia online',
    description: 'Tus clientes no te encuentran cuando buscan servicios profesionales.'
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: 'Imagen poco profesional',
    description: 'Compartir solo redes sociales resta autoridad y confianza.'
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: 'Info desordenada',
    description: 'Especialidades, horarios y contactos dispersos en diferentes lugares.'
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: 'Pierden consultas',
    description: 'Sin una web clara, los potenciales clientes eligen a la competencia.'
  }
];

const profesionalBenefits = [
  {
    icon: <Scale className="w-6 h-6" />,
    title: 'Presencia seria y ordenada',
    description: 'Tu estudio se ve profesional desde el primer clic.'
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Especialidades destacadas',
    description: 'Mostrá claramente tus áreas de expertise.'
  },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: 'Turnos más fáciles',
    description: 'Botón directo a WhatsApp para agendar consultas.'
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: 'Ubicación clara',
    description: 'Dirección, mapa y cómo llegar sin confusiones.'
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: 'Mayor autoridad',
    description: 'Transmití confianza y experiencia profesional.'
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: 'Más clientes',
    description: 'Convertí visitas en consultas de forma efectiva.'
  }
];

const profesionalFAQ = [
  {
    question: '¿Esta web sirve para un estudio profesional?',
    answer: 'Absolutamente. Nuestros planes están diseñados específicamente para profesionales independientes y estudios. El plan Profesional ($150.000) incluye hasta 5 secciones perfectas para mostrar especialidades, experiencia, ubicación y medios de contacto.'
  },
  {
    question: '¿Puedo mostrar mis títulos y certificaciones?',
    answer: 'Sí, el plan Profesional y Premium incluyen una sección "Sobre mí" donde podés destacar tu formación académica, títulos, certificaciones y membresías en colegios profesionales. Todo lo que refuerce tu credibilidad.'
  },
  {
    question: '¿Cómo llegan los clientes a mi consultorio?',
    answer: 'La web incluye tu dirección completa, un mapa interactivo y fotos de la fachada si querés. También podés agregar instrucciones especiales (piso, departamento, referencias). Todo esto está incluido en el plan Profesional.'
  },
  {
    question: '¿Puedo empezar con el plan Inicio y después upgrade?',
    answer: 'Sí, podés empezar con el plan Inicio ($50.000) para tener presencia online rápido, y después pasar al Profesional o Premium pagando solo la diferencia. Tu web crece con tu estudio.'
  },
  {
    question: '¿Es adecuada para profesionales de la salud?',
    answer: 'Sí, muchos psicólogos, médicos, nutricionistas y otros profesionales de la salud ya usan nuestras webs. El plan Profesional incluye secciones para especialidades, obras sociales y formas de contacto respetuosas de la privacidad.'
  },
  {
    question: '¿Puedo vincular mi colegio profesional?',
    answer: 'Por supuesto. En el plan Profesional y Premium podemos incluir links a tu matrícula en el colegio profesional, lo cual aumenta mucho la confianza de potenciales clientes.'
  }
];

export default function ProfesionalesLanding() {
  return (
    <div className="min-h-screen">
      {/* SEO */}
      <title>Tu Profesión Merece una Web Profesional | Planes desde $50.000</title>
      <meta name="description" content="Webs profesionales para abogados, psicólogos, médicos, contadores, arquitectos. Charlamos, me contás qué hacés, y en el día tenés tu web. Planes desde $50.000." />
      
      <Header ctaText="Charlemos" ctaLink="#/profesionales" />
      
      <main>
        {/* Hero - Autoridad y confianza */}
        <HeroSection
          badge="Para Profesionales"
          title="Tu profesión merece una web profesional"
          subtitle="Charlamos, me contás qué hacés, y en el día tenés tu web."
          description="Si atendés pacientes, clientes o consultas, una web clara genera más confianza que solo Instagram. Elegís tu plan, charlamos unos minutos, y en horas tenés tu web online."
          primaryCta="Charlemos"
          secondaryCta="Ver planes"
          showCheckmarks={true}
          checkmarks={['Web en el día', 'Diseño serio y elegante', 'Botón a WhatsApp']}
          whatsappMessage="Hola! Soy profesional y quiero una web para mi estudio. Charlamos?"
          showSimpleFormula={true}
        />

        {/* Pain Points - Específicos para profesionales */}
        <PainPointsSection 
          title="Hoy muchos profesionales pierden clientes así:"
          subtitle="Sin una presencia online profesional, la competencia se lleva tus consultas"
          painPoints={profesionalPainPoints}
        />

        {/* Benefits - Enfoque en autoridad */}
        <BenefitsSection 
          title="Con una web profesional tenés:"
          subtitle="Todo lo que necesita tu estudio o consultorio en una sola página"
          benefits={profesionalBenefits}
        />

        {/* Pricing Cards - Los 3 planes */}
        <PricingCards 
          title="Elegí el plan para tu estudio"
          subtitle="Charlamos unos minutos, me contás qué hacés, y en el día tenés tu web profesional."
        />

        {/* FAQ - Específico para profesionales */}
        <FAQSection 
          title="Preguntas frecuentes para profesionales"
          items={profesionalFAQ}
        />

        {/* Final CTA */}
        <CTASection 
          variant="dark"
          title="Tu estudio necesita una presencia seria"
          subtitle="Mostrá especialidades, ubicación y vías de contacto en una sola página profesional."
          ctaText="Charlemos"
          whatsappMessage="Hola! Soy profesional y quiero una web para mi estudio. Charlamos?"
        />
      </main>

      <Footer />
      <WhatsAppButton 
        message="Hola! Soy profesional y quiero una web para mi estudio. Charlamos?"
      />
    </div>
  );
}
