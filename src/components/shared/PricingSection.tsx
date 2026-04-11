import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingItem {
  text: string;
  included: boolean;
}

interface PricingSectionProps {
  title?: string;
  subtitle?: string;
  price?: string;
  priceLabel?: string;
  ctaText?: string;
  whatsappMessage?: string;
  items?: PricingItem[];
  badge?: string;
  guarantee?: string;
}

const defaultItems: PricingItem[] = [
  { text: 'Diseño de landing page profesional', included: true },
  { text: 'Adaptación perfecta a celular', included: true },
  { text: 'Textos base para tu servicio', included: true },
  { text: 'Botón directo a WhatsApp', included: true },
  { text: 'Formulario de contacto', included: true },
  { text: 'Hasta 5 secciones', included: true },
  { text: 'Publicación online incluida', included: true },
  { text: 'Entrega en 72 horas', included: true },
  { text: 'Cambios y ajustes', included: true },
  { text: 'Soporte por 30 días', included: true }
];

export default function PricingSection({
  title = 'Inversión única',
  subtitle = 'Sin costos mensuales ocultos',
  price = 'ARS 50.000',
  priceLabel = 'Pago único',
  ctaText = 'Quiero mi web ahora',
  whatsappMessage = 'Hola! Quiero contratar la web por $50.000',
  items = defaultItems,
  badge = 'Oferta especial',
  guarantee = 'Garantía de satisfacción: si no te gusta, te devolvemos tu dinero'
}: PricingSectionProps) {
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/542236202061?text=${encodedMessage}`;

  return (
    <section id="precio" className="py-20 lg:py-28 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {badge && (
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              {badge}
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-blue-100">{subtitle}</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8 lg:p-12">
            {/* Price */}
            <div className="text-center mb-8">
              <div className="text-sm text-slate-500 font-medium mb-2">{priceLabel}</div>
              <div className="text-5xl lg:text-6xl font-bold text-slate-900 mb-2">
                {price}
              </div>
              <div className="text-slate-500">Pesos argentinos</div>
            </div>

            {/* CTA */}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block mb-8">
              <Button 
                size="lg" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                {ctaText}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>

            {/* Items */}
            <div className="grid sm:grid-cols-2 gap-4">
              {items.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${item.included ? 'bg-green-100' : 'bg-slate-100'}`}>
                    <Check className={`w-3 h-3 ${item.included ? 'text-green-600' : 'text-slate-400'}`} />
                  </div>
                  <span className={`text-sm ${item.included ? 'text-slate-700' : 'text-slate-400 line-through'}`}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee */}
          {guarantee && (
            <div className="bg-slate-50 px-8 py-6 border-t border-slate-100">
              <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                {guarantee}
              </div>
            </div>
          )}
        </div>

        {/* Payment methods */}
        <div className="mt-8 text-center">
          <p className="text-blue-200 text-sm mb-3">Métodos de pago aceptados</p>
          <div className="flex justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-white text-sm">
              Transferencia
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-white text-sm">
              MercadoPago
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-white text-sm">
              Efectivo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
