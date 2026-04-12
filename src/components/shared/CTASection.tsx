import { ArrowRight, MessageCircle } from 'lucide-react';
import { trackWhatsAppClick } from '@/lib/analytics';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  secondaryCta?: string;
  whatsappMessage?: string;
  variant?: 'default' | 'dark' | 'gradient';
}

export default function CTASection({
  title = 'Dejá de mandar solo tu Instagram',
  subtitle = 'Tené una web profesional que hable bien de vos y convierta visitas en consultas.',
  ctaText = 'Charlemos',
  secondaryCta = 'Consultar por WhatsApp',
  whatsappMessage = 'Hola! Quiero mi web personal. Charlamos?',
  variant = 'default'
}: CTASectionProps) {
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/542236202061?text=${encodedMessage}`;

  const bgClass = {
    default: 'bg-white',
    dark: 'bg-slate-900',
    gradient: 'bg-gradient-to-r from-blue-600 to-blue-800'
  }[variant];

  const textClass = {
    default: 'text-slate-900',
    dark: 'text-white',
    gradient: 'text-white'
  }[variant];

  const subtextClass = {
    default: 'text-slate-600',
    dark: 'text-slate-300',
    gradient: 'text-blue-100'
  }[variant];

  return (
    <section id="contacto" className={`py-20 lg:py-28 ${bgClass}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${textClass} mb-6`}>
          {title}
        </h2>
        <p className={`text-xl ${subtextClass} mb-10 max-w-2xl mx-auto`}>
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('cta_primary', whatsappMessage, ctaText)}
          >
            <Button 
              size="lg" 
              className={`px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 ${
                variant === 'gradient' 
                  ? 'bg-white text-blue-600 hover:bg-slate-100' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {ctaText}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
          
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('cta_secondary', whatsappMessage, secondaryCta)}
          >
            <Button 
              size="lg" 
              variant={variant === 'default' ? 'outline' : 'ghost'}
              className={`px-8 py-6 text-lg rounded-xl ${
                variant === 'default' 
                  ? 'border-2 border-slate-300 hover:border-blue-500' 
                  : 'text-white border-2 border-white/30 hover:bg-white/10'
              }`}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {secondaryCta}
            </Button>
          </a>
        </div>

        {/* Trust badges */}
        <div className={`mt-12 flex flex-wrap justify-center gap-6 text-sm ${subtextClass}`}>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            En el día
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Garantía de satisfacción
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            +50 profesionales confían
          </div>
        </div>
      </div>
    </section>
  );
}
