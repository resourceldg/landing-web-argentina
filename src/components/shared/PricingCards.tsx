import { Check, Star, Zap, Crown, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  whatsappMessage: string;
  badge?: string;
  highlighted?: boolean;
  icon: React.ReactNode;
}

interface PricingCardsProps {
  title?: string;
  subtitle?: string;
  showSimpleBadge?: boolean;
}

const defaultPlans: Plan[] = [
  {
    name: 'Inicio',
    price: 'ARS 50.000',
    description: 'Tu web personal simple, prolija y lista en el día.',
    features: [
      '1 landing page simple',
      'Diseño responsive',
      'Botón a WhatsApp',
      'Datos de contacto visibles',
      'Link listo para compartir',
      'Entrega en el día'
    ],
    cta: 'Me interesa este plan',
    whatsappMessage: 'Hola! Me interesa el plan Inicio de $50.000. Charlamos?',
    icon: <Zap className="w-6 h-6" />
  },
  {
    name: 'Profesional',
    price: 'ARS 150.000',
    description: 'Una web más completa para mostrar mejor tus servicios y generar más consultas.',
    features: [
      'Todo lo del plan Inicio',
      'Hasta 5 secciones',
      'Sección de servicios',
      'Perfil profesional',
      'Testimonios de clientes',
      'Preguntas frecuentes',
      'Formulario de contacto'
    ],
    cta: 'Quiero este plan',
    whatsappMessage: 'Hola! Me interesa el plan Profesional de $150.000. Charlamos?',
    badge: 'Más elegido',
    highlighted: true,
    icon: <Star className="w-6 h-6" />
  },
  {
    name: 'Premium',
    price: 'ARS 300.000',
    description: 'Una presencia online más fuerte, más personalizada y más vendedora.',
    features: [
      'Todo lo del plan Profesional',
      'Diseño premium personalizado',
      'Copy orientado a conversión',
      'Estructura avanzada',
      'Múltiples llamadas a la acción',
      'Prioridad de entrega',
      'Ajustes extra incluidos'
    ],
    cta: 'Quiero el plan premium',
    whatsappMessage: 'Hola! Me interesa el plan Premium de $300.000. Charlamos?',
    icon: <Crown className="w-6 h-6" />
  }
];

export default function PricingCards({
  title = 'Elegí el plan que mejor va con tu momento',
  subtitle = 'Charlamos unos minutos, me contás qué hacés, y en el día tenés tu web.',
  showSimpleBadge = true
}: PricingCardsProps) {
  return (
    <section id="precio" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {showSimpleBadge && (
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              Sin vueltas
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Simple promise block - NUEVO ENFOQUE */}
        <div className="bg-blue-600 rounded-2xl p-8 mb-12 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">Charlamos</div>
              </div>
            </div>
            <div className="hidden sm:block text-white/50 text-2xl">→</div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">Me contás qué hacés</div>
              </div>
            </div>
            <div className="hidden sm:block text-white/50 text-2xl">→</div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <Check className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-left">
                <div className="text-white font-bold">Tu web lista</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {defaultPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 ${
                plan.highlighted
                  ? 'bg-slate-900 text-white shadow-2xl scale-105 lg:scale-110 z-10'
                  : 'bg-white text-slate-900 shadow-soft'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-blue-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Icon & Name */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  plan.highlighted ? 'bg-blue-500' : 'bg-blue-100 text-blue-600'
                }`}>
                  {plan.icon}
                </div>
                <div>
                  <h3 className="font-bold text-xl">{plan.name}</h3>
                </div>
              </div>

              {/* Price */}
              <div className="mb-4">
                <div className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                  {plan.price}
                </div>
                <div className={`text-sm ${plan.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>
                  Pago único
                </div>
              </div>

              {/* Description */}
              <p className={`mb-6 ${plan.highlighted ? 'text-slate-300' : 'text-slate-600'}`}>
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? 'bg-blue-500' : 'bg-green-100'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.highlighted ? 'text-white' : 'text-green-600'}`} />
                    </div>
                    <span className={`text-sm ${plan.highlighted ? 'text-slate-300' : 'text-slate-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a 
                href={`https://wa.me/542236202061?text=${encodeURIComponent(plan.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button 
                  className={`w-full py-6 rounded-xl font-semibold ${
                    plan.highlighted
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            No necesitás saber de tecnología. No necesitás perder tiempo.{' '}
            <span className="font-semibold text-slate-700">Charlamos y yo me encargo del resto.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
