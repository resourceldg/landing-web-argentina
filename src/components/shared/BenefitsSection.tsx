import { Check, Sparkles, Zap, Shield, TrendingUp, Smartphone, Award } from 'lucide-react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  title?: string;
  subtitle?: string;
  benefits?: Benefit[];
  showFeatures?: boolean;
  features?: string[];
}

const defaultBenefits: Benefit[] = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Presentación profesional',
    description: 'La primera impresión genera confianza: el visitante decide quedarse en vez de cerrar y buscar otro profesional.'
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Botón directo a WhatsApp',
    description: 'Tus clientes te escriben en el momento que deciden, sin tener que buscar tu número y perder el impulso.'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Testimonios destacados',
    description: 'Las opiniones de tus pacientes o clientes convencen a los indecisos mejor que cualquier argumento propio.'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Preguntas frecuentes',
    description: 'El cliente llega convencido: las objeciones típicas están respondidas antes de que lleguen al botón de contacto.'
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Ubicación y contacto',
    description: 'Nadie te llama para preguntar dónde quedás: toda la info que necesitan está a la vista antes de decidir.'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Imagen más confiable',
    description: 'Con web propia te separás de los que solo tienen Instagram — y eso se refleja en la calidad de consultas que recibís.'
  }
];

const defaultFeatures = [
  'Diseño de una landing page',
  'Adaptación a celular',
  'Textos base incluidos',
  'Integración con WhatsApp',
  'Formulario de contacto',
  'Hasta 5 secciones',
  'Publicación online'
];

export default function BenefitsSection({
  title = 'Con una landing profesional tenés:',
  subtitle = 'Todo lo que necesitás en una sola página',
  benefits = defaultBenefits,
  showFeatures = true,
  features = defaultFeatures
}: BenefitsSectionProps) {
  return (
    <section id="beneficios" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Check className="w-4 h-4" />
            La solución
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-slate-600">{subtitle}</p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {benefit.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{benefit.title}</h3>
              <p className="text-slate-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Features List */}
        {showFeatures && (
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                  Todo incluido en tu web
                </h3>
                <p className="text-slate-600 mb-6">
                  No tenés que preocuparte por nada. Nosotros nos encargamos de todo el proceso, 
                  desde el diseño hasta la publicación online.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div 
                        key={i} 
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-white text-sm font-bold"
                      >
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-slate-600">
                    <span className="font-bold text-slate-900">72 horas</span> de entrega
                  </span>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
