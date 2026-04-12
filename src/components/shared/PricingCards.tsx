import { useState } from 'react';
import { Check, Star, Zap, Crown, ArrowRight, MessageCircle, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackPlanClick } from '@/lib/analytics';

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
    icon: <Zap className="w-5 h-5" />
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
    icon: <Star className="w-5 h-5" />
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
    icon: <Crown className="w-5 h-5" />
  }
];

export default function PricingCards({
  title = 'Elegí el plan que mejor va con tu momento',
  subtitle = 'Charlamos unos minutos, me contás qué hacés, y en el día tenés tu web.',
  showSimpleBadge = true
}: PricingCardsProps) {
  // En mobile el plan "Profesional" (índice 1) aparece expandido por defecto
  const [expandedIndex, setExpandedIndex] = useState<number>(1);

  const toggle = (index: number) => {
    setExpandedIndex(prev => (prev === index ? -1 : index));
  };

  return (
    <section id="precio" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 lg:mb-16">
          {showSimpleBadge && (
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              Sin vueltas
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Simple promise block */}
        <div className="bg-blue-600 rounded-2xl p-6 lg:p-8 mb-10 lg:mb-12 text-center">
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

        {/* ── MOBILE: acordeón de planes ── */}
        <div className="lg:hidden space-y-3">
          {defaultPlans.map((plan, index) => {
            const isOpen = expandedIndex === index;
            const waUrl = `https://wa.me/542236202061?text=${encodeURIComponent(plan.whatsappMessage)}`;

            return (
              <div
                key={index}
                className={`rounded-2xl border-2 overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? plan.highlighted
                      ? 'border-blue-500 bg-slate-900 shadow-xl'
                      : 'border-blue-300 bg-white shadow-lg'
                    : 'border-slate-200 bg-white'
                }`}
              >
                {/* Fila siempre visible — tap para expandir */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isOpen && plan.highlighted
                        ? 'bg-blue-500 text-white'
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      {plan.icon}
                    </div>
                    <div>
                      <div className={`font-bold text-base leading-tight ${isOpen && plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                        {plan.name}
                      </div>
                      <div className={`text-xs ${isOpen && plan.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>
                        Pago único
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {plan.badge && (
                      <span className="bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded-full hidden sm:inline">
                        {plan.badge}
                      </span>
                    )}
                    <div className="text-right">
                      <div className={`font-extrabold text-lg leading-tight ${isOpen && plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                        {plan.price}
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    } ${isOpen && plan.highlighted ? 'text-white' : 'text-slate-400'}`} />
                  </div>
                </button>

                {/* Contenido expandido */}
                {isOpen && (
                  <div className="px-4 pb-5 border-t border-white/10">
                    {plan.badge && (
                      <div className="pt-3 mb-2">
                        <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                          {plan.badge}
                        </span>
                      </div>
                    )}
                    <p className={`text-sm mt-3 mb-4 ${plan.highlighted ? 'text-slate-300' : 'text-slate-600'}`}>
                      {plan.description}
                    </p>
                    <ul className="space-y-2 mb-5">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            plan.highlighted ? 'bg-blue-500' : 'bg-green-100'
                          }`}>
                            <Check className={`w-2.5 h-2.5 ${plan.highlighted ? 'text-white' : 'text-green-600'}`} />
                          </div>
                          <span className={`text-sm ${plan.highlighted ? 'text-slate-300' : 'text-slate-600'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <a href={waUrl} target="_blank" rel="noopener noreferrer" className="block"
                      onClick={() => trackPlanClick(plan.name, plan.price, 'unico')}
                    >
                      <Button
                        className={`w-full py-5 rounded-xl font-semibold ${
                          plan.highlighted
                            ? 'bg-blue-500 hover:bg-blue-400 text-white'
                            : 'bg-slate-900 hover:bg-slate-800 text-white'
                        }`}
                      >
                        {plan.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── DESKTOP: grid de 3 columnas (sin cambios) ── */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {defaultPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 ${
                plan.highlighted
                  ? 'bg-slate-900 text-white shadow-2xl scale-105 lg:scale-110 z-10'
                  : 'bg-white text-slate-900 shadow-soft'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-blue-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                    {plan.badge}
                  </div>
                </div>
              )}
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
              <div className="mb-4">
                <div className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                  {plan.price}
                </div>
                <div className={`text-sm ${plan.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>
                  Pago único
                </div>
              </div>
              <p className={`mb-6 ${plan.highlighted ? 'text-slate-300' : 'text-slate-600'}`}>
                {plan.description}
              </p>
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
              <a
                href={`https://wa.me/542236202061?text=${encodeURIComponent(plan.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                onClick={() => trackPlanClick(plan.name, plan.price, 'unico')}
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
        <div className="mt-10 lg:mt-12 text-center">
          <p className="text-slate-500 text-sm">
            No necesitás saber de tecnología. No necesitás perder tiempo.{' '}
            <span className="font-semibold text-slate-700">Charlamos y yo me encargo del resto.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
