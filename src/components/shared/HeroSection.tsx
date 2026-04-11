import { ArrowRight, Play, Check, MessageCircle, Clock, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  badge?: string;
  title: string;
  subtitle: string;
  description?: string;
  primaryCta: string;
  secondaryCta?: string;
  showCheckmarks?: boolean;
  checkmarks?: string[];
  variant?: 'default' | 'centered' | 'split';
  whatsappMessage?: string;
  showSimpleFormula?: boolean;
}

export default function HeroSection({
  badge,
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta = 'Ver cómo funciona',
  showCheckmarks = true,
  checkmarks = ['En el día', 'Sin vueltas', 'Lista para compartir'],
  variant = 'default',
  whatsappMessage = 'Hola! Quiero mi web personal. Me contás cómo funciona?',
  showSimpleFormula = true
}: HeroSectionProps) {
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/542236202061?text=${encodedMessage}`;

  const scrollToPrecio = () => {
    const element = document.getElementById('precio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-gradient-hero">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-100/50 to-transparent rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${variant === 'centered' ? 'text-center' : ''}`}>
          {/* Content */}
          <div className={`space-y-6 lg:space-y-8 animate-slide-up ${variant === 'centered' ? 'mx-auto max-w-3xl' : ''}`}>
            {badge && (
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                {badge}
              </div>
            )}
            
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                {title}
              </h1>
              <p className="text-xl sm:text-2xl text-blue-600 font-semibold">
                {subtitle}
              </p>
              {description && (
                <p className="text-lg text-slate-600 max-w-xl">
                  {description}
                </p>
              )}
            </div>

            {/* Simple promise block - NUEVO ENFOQUE */}
            {showSimpleFormula && (
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
                <p className="text-sm text-slate-500 mb-4 text-center">Así de simple:</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-medium text-slate-700">Charlamos</span>
                  </div>
                  <div className="text-slate-300 text-xl font-light">→</div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-medium text-slate-700">Me contás qué hacés</span>
                  </div>
                  <div className="text-slate-300 text-xl font-light">→</div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="font-bold text-slate-900">Tu web lista</span>
                  </div>
                </div>
              </div>
            )}

            {/* Checkmarks */}
            {showCheckmarks && (
              <div className="flex flex-wrap gap-4">
                {checkmarks.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-slate-700">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            )}

            {/* CTAs */}
            <div className={`flex flex-col sm:flex-row gap-4 ${variant === 'centered' ? 'justify-center' : ''}`}>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 w-full sm:w-auto">
                  {primaryCta}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <button onClick={scrollToPrecio}>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-slate-300 hover:border-blue-500 hover:text-blue-600 px-8 py-6 text-lg rounded-xl w-full sm:w-auto"
                >
                  <Play className="w-5 h-5 mr-2" />
                  {secondaryCta}
                </Button>
              </button>
              <a href="#/ejemplos">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-slate-300 hover:border-purple-500 hover:text-purple-600 px-8 py-6 text-lg rounded-xl w-full sm:w-auto"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Ver ejemplos
                </Button>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span>+50 profesionales ya tienen su web</span>
            </div>

            {/* Ejemplos */}
            <div className="pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-500 mb-3">Ver ejemplos de webs:</p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="#/ejemplo/psicologa" 
                  className="inline-flex items-center gap-2 bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-700 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Psicóloga
                </a>
                <a 
                  href="#/ejemplo/nutricionista" 
                  className="inline-flex items-center gap-2 bg-slate-100 hover:bg-green-100 text-slate-700 hover:text-green-700 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Nutricionista
                </a>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block">
            <div className="relative animate-float">
              {/* Professional image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/profesional-web.jpg" 
                  alt="Profesional mostrando su web personal" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating badge - Nueva consulta */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-slate-100 animate-pulse-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">¡Nueva consulta!</div>
                    <div className="text-sm text-slate-500">Desde tu web</div>
                  </div>
                </div>
              </div>

              {/* Price badge */}
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white rounded-xl shadow-lg p-4 animate-bounce">
                <div className="text-center">
                  <div className="text-xs opacity-80">Desde</div>
                  <div className="font-bold text-xl">$50.000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
