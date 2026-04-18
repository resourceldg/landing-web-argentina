import { Play, Check, MessageCircle, Clock, Sparkles, Zap, Star, Shield, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { trackWhatsAppClick, buildWhatsAppUrl } from '@/lib/analytics';

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

const WA_PHONE = '542236202061';

export default function HeroSection({
  badge,
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta = 'Ver planes',
  showCheckmarks = true,
  checkmarks = ['En el día', 'Sin vueltas', 'Lista para compartir'],
  variant = 'default',
  whatsappMessage = 'Hola! Vi tu anuncio y quiero saber más sobre la web. ¿Cuánto sale y qué incluye?',
  showSimpleFormula = false,
}: HeroSectionProps) {
  const scrollToPrecio = () => {
    const element = document.getElementById('precio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Construye la URL al momento del click (no al render) para incluir UTMs capturados
  const openWhatsApp = (source: 'hero_cta_desktop' | 'hero_cta_mobile') => {
    const url = buildWhatsAppUrl(WA_PHONE, whatsappMessage);
    trackWhatsAppClick(source, whatsappMessage, primaryCta);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden lg:bg-gradient-hero">

      {/* ── MOBILE: fondo degradé sólido, sin imagen (el creativo tiene texto propio que choca) ── */}
      <div className="absolute inset-0 lg:hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950" />

      {/* ── DESKTOP: decoraciones de fondo ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-100/50 to-transparent rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${variant === 'centered' ? 'text-center' : ''}`}>

          {/* Content */}
          <div className={`space-y-5 lg:space-y-8 animate-slide-up ${variant === 'centered' ? 'mx-auto max-w-3xl' : ''}`}>

            {/* ── MOBILE ONLY: card de oferta con CTA principal ── */}
            <div className="lg:hidden">
              {/* Badge de oferta */}
              <div className="inline-flex items-center gap-2 bg-amber-400 text-amber-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                <Zap className="w-3.5 h-3.5" />
                {badge ?? 'Precio especial de lanzamiento'}
              </div>

              {/* Bloque precio */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 mb-2">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-white/70 text-xs font-medium uppercase tracking-wider mb-1">Tu web profesional desde</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-extrabold text-white">$50.000</span>
                      <span className="text-white/60 text-sm line-through">$100.000</span>
                    </div>
                    <p className="text-amber-300 text-sm font-semibold mt-1">Pago único · Sin cuotas mensuales</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-lg mb-1">-50% OFF</div>
                    <div className="flex">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA principal mobile — botón WhatsApp verde grande */}
                {/* Abre WA al momento del click para incluir UTMs capturados post-mount */}
                <button
                  className="block w-full"
                  onClick={() => openWhatsApp('hero_cta_mobile')}
                >
                  <div className="w-full bg-green-500 hover:bg-green-400 active:scale-95 transition-all text-white font-bold py-4 rounded-xl text-lg flex items-center justify-center gap-2 shadow-lg shadow-green-900/40">
                    {/* WhatsApp icon */}
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.852L.057 23.5a.5.5 0 00.61.61l5.648-1.471A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.878 9.878 0 01-5.034-1.376l-.36-.214-3.733.972.997-3.648-.235-.374A9.861 9.861 0 012.1 12C2.1 6.533 6.533 2.1 12 2.1S21.9 6.533 21.9 12 17.467 21.9 12 21.9z"/>
                    </svg>
                    {primaryCta}
                  </div>
                </button>
              </div>

              {/* Trust indicator mobile — sin avatares falsos */}
              <div className="flex items-center gap-2 text-white/80 text-xs">
                <Shield className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>Garantía de satisfacción · Si no te gusta, te devolvemos el dinero</span>
              </div>
            </div>
            {/* ── FIN MOBILE ONLY ── */}

            {/* Badge (desktop) */}
            {badge && (
              <div className="hidden lg:inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                {badge}
              </div>
            )}

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white lg:text-slate-900">
                {title}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-amber-300 lg:text-blue-600">
                {subtitle}
              </p>
              {description && (
                <p className="text-base lg:text-lg text-white/80 lg:text-slate-600 max-w-xl">
                  {description}
                </p>
              )}
            </div>

            {/* Simple promise block — solo si se habilita explícitamente */}
            {showSimpleFormula && (
              <div className="bg-white/10 lg:bg-white backdrop-blur-sm rounded-2xl p-5 lg:p-6 shadow-lg border border-white/20 lg:border-blue-100">
                <p className="text-sm text-white/60 lg:text-slate-500 mb-4 text-center">Así de simple:</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/30 lg:bg-blue-100 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-blue-300 lg:text-blue-600" />
                    </div>
                    <span className="font-medium text-white lg:text-slate-700">Charlamos</span>
                  </div>
                  <div className="text-white/30 lg:text-slate-300 text-xl font-light">→</div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/30 lg:bg-blue-100 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-blue-300 lg:text-blue-600" />
                    </div>
                    <span className="font-medium text-white lg:text-slate-700">Me contás qué hacés</span>
                  </div>
                  <div className="text-white/30 lg:text-slate-300 text-xl font-light">→</div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/30 lg:bg-green-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-green-300 lg:text-green-600" />
                    </div>
                    <span className="font-bold text-white lg:text-slate-900">Tu web lista</span>
                  </div>
                </div>
              </div>
            )}

            {/* Checkmarks */}
            {showCheckmarks && (
              <div className="flex flex-wrap gap-3 lg:gap-4">
                {checkmarks.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-white/90 lg:text-slate-700">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            )}

            {/* CTAs desktop — solo 2: WhatsApp (principal) + Ver planes (secundario) */}
            <div className={`hidden lg:flex flex-col sm:flex-row gap-4 ${variant === 'centered' ? 'justify-center' : ''}`}>
              {/* CTA principal: WhatsApp — URL construida al click para incluir UTMs */}
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 w-full sm:w-auto gap-2"
                onClick={() => openWhatsApp('hero_cta_desktop')}
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.852L.057 23.5a.5.5 0 00.61.61l5.648-1.471A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.878 9.878 0 01-5.034-1.376l-.36-.214-3.733.972.997-3.648-.235-.374A9.861 9.861 0 012.1 12C2.1 6.533 6.533 2.1 12 2.1S21.9 6.533 21.9 12 17.467 21.9 12 21.9z"/>
                </svg>
                {primaryCta}
              </Button>

              {/* CTA secundario: Ver planes */}
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

              {/* CTA terciario: Ver ejemplos */}
              <Link to="/ejemplos">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-slate-200 text-slate-500 hover:border-slate-400 hover:text-slate-700 px-8 py-6 text-lg rounded-xl w-full sm:w-auto"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Ver ejemplos
                </Button>
              </Link>
            </div>

            {/* Trust indicators desktop — sin avatares falsos */}
            <div className="hidden lg:flex items-center gap-3 text-sm text-slate-500">
              <Shield className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span>Garantía de satisfacción · +50 profesionales con su web</span>
            </div>

            {/* CTAs secundarios mobile */}
            <div className="flex lg:hidden gap-3">
              <button onClick={scrollToPrecio} className="flex-1">
                <Button
                  size="lg"
                  className="w-full border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-4 py-4 text-sm rounded-xl"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {secondaryCta}
                </Button>
              </button>
              <Link to="/ejemplos" className="flex-1">
                <Button
                  size="lg"
                  className="w-full border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-4 py-4 text-sm rounded-xl"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Ejemplos
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual desktop */}
          <div className="relative hidden lg:block">
            <div className="relative animate-float">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/clara hero.png"
                  alt="Profesional mostrando su web personal"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>

              {/* Floating badge — nueva consulta */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-slate-100 animate-pulse-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">¡Nueva consulta!</div>
                    <div className="text-xs text-slate-500">Desde tu web</div>
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
