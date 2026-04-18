import { ArrowRight, Eye, Check, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { trackWhatsAppClick } from '@/lib/analytics';

interface Ejemplo {
  rubro: string;
  descripcion: string;
  color: string;
  route: string;
  imagen: string;
  secciones: string[];
}

// Los ejemplos muestran rubros y estilos — no planes ni precios.
// Todas las webs se hacen desde ARS 50.000, independientemente del rubro.
const ejemplos: Ejemplo[] = [
  {
    rubro: 'Psicóloga',
    descripcion: 'Servicios, sobre mí, testimonios y contacto directo por WhatsApp.',
    color: 'blue',
    route: '/ejemplo/psicologa',
    imagen: '/ejemplo-psicologa.jpg',
    secciones: ['Servicios', 'Testimonios', 'Sobre mí', 'Contacto'],
  },
  {
    rubro: 'Nutricionista',
    descripcion: 'Planes nutricionales, perfil profesional y agenda de turnos.',
    color: 'green',
    route: '/ejemplo/nutricionista',
    imagen: '/ejemplo-nutricionista.jpg',
    secciones: ['Planes', 'Testimonios', 'Sobre mí', 'Contacto'],
  },
  {
    rubro: 'Abogado',
    descripcion: 'Especialidades, perfil del estudio y consulta directa.',
    color: 'slate',
    route: '/ejemplo/abogado',
    imagen: '/ejemplo-abogado.jpg',
    secciones: ['Especialidades', 'Equipo', 'Sobre mí', 'Contacto'],
  },
  {
    rubro: 'Dermatóloga',
    descripcion: 'Tratamientos, turnos online y presentación médica profesional.',
    color: 'pink',
    route: '/ejemplo/dermatologa',
    imagen: '/ejemplo-dermatologa.jpg',
    secciones: ['Tratamientos', 'Turnos', 'Sobre mí', 'Contacto'],
  },
  {
    rubro: 'Contador',
    descripcion: 'Servicios contables para empresas y particulares, con contacto claro.',
    color: 'indigo',
    route: '/ejemplo/contador',
    imagen: '/ejemplo-contador.jpg',
    secciones: ['Servicios', 'Clientes', 'Sobre mí', 'Contacto'],
  },
  {
    rubro: 'Coach',
    descripcion: 'Programas de coaching, testimonios y agenda de sesiones.',
    color: 'purple',
    route: '/ejemplo/coach',
    imagen: '/ejemplo-coach.jpg',
    secciones: ['Programas', 'Testimonios', 'Sobre mí', 'Contacto'],
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string; tag: string }> = {
  blue:   { bg: 'bg-blue-50',   text: 'text-blue-700',   border: 'border-blue-200',   tag: 'bg-blue-100 text-blue-700'    },
  green:  { bg: 'bg-green-50',  text: 'text-green-700',  border: 'border-green-200',  tag: 'bg-green-100 text-green-700'  },
  slate:  { bg: 'bg-slate-100', text: 'text-slate-700',  border: 'border-slate-200',  tag: 'bg-slate-200 text-slate-700'  },
  pink:   { bg: 'bg-pink-50',   text: 'text-pink-700',   border: 'border-pink-200',   tag: 'bg-pink-100 text-pink-700'    },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200', tag: 'bg-indigo-100 text-indigo-700'},
  purple: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', tag: 'bg-purple-100 text-purple-700'},
};

const WA_PHONE = '542236202061';
const WA_BASE  = 'Hola! Vi los ejemplos y me interesa una web similar. ¿Charlamos?';

export default function EjemplosPage() {
  const whatsappUrl = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(WA_BASE)}`;

  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="font-bold text-lg text-slate-900">WebExpress</span>
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('ejemplos_header', WA_BASE, 'Quiero mi web')}
            >
              <Button className="bg-blue-600 hover:bg-blue-700">
                Quiero mi web
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero de la galería */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-5">
            <Eye className="w-4 h-4" />
            Ejemplos de webs
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            Así queda tu web
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 max-w-xl mx-auto mb-3">
            Diseños para distintos rubros. Hacé click en cada uno para verlo completo.
          </p>
          {/* Precio unificado — claro y en un solo lugar */}
          <p className="text-base text-slate-500 mb-8">
            Todas las webs desde{' '}
            <span className="font-bold text-slate-800">ARS 50.000</span>
            {' '}· Pago único · Sin cuotas mensuales
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('ejemplos_hero_cta', WA_BASE, 'Quiero una como estas')}
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
              Quiero una como estas
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </section>

      {/* Galería */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Mobile: lista compacta */}
          <div className="lg:hidden space-y-4">
            {ejemplos.map((ejemplo, index) => {
              const colors = colorClasses[ejemplo.color];
              const waMsg = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(
                `Hola! Vi el ejemplo de web para ${ejemplo.rubro} y me interesa algo así. ¿Charlamos?`
              )}`;

              return (
                <div
                  key={index}
                  className={`relative rounded-2xl border ${colors.border} bg-white overflow-hidden shadow-sm active:scale-[0.99] transition-transform`}
                >
                  {/* Link que cubre la card */}
                  <Link to={ejemplo.route} className="absolute inset-0 z-10" aria-label={`Ver ejemplo para ${ejemplo.rubro}`} />

                  {/* Imagen */}
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={ejemplo.imagen}
                      alt={`Ejemplo de web para ${ejemplo.rubro}`}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>

                  {/* Contenido */}
                  <div className="p-4">
                    <p className={`${colors.text} text-xs font-semibold uppercase tracking-wide mb-1`}>{ejemplo.rubro}</p>
                    <p className="text-slate-600 text-sm mb-3">{ejemplo.descripcion}</p>

                    {/* Secciones incluidas */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {ejemplo.secciones.map((s, i) => (
                        <span key={i} className={`inline-flex items-center gap-1 text-xs ${colors.tag} px-2 py-0.5 rounded-full`}>
                          <Check className="w-2.5 h-2.5" />
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* CTA — z-20 para capturar tap sobre el link de la card */}
                    <a
                      href={waMsg}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-20 block"
                      onClick={() => trackWhatsAppClick('ejemplos_card_cta_mobile', `Interés en rubro: ${ejemplo.rubro}`, 'Quiero una así')}
                    >
                      <Button className="w-full text-sm py-2 bg-slate-900 hover:bg-slate-800 text-white">
                        <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                        Quiero una así
                      </Button>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop: grid de 3 columnas */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {ejemplos.map((ejemplo, index) => {
              const colors = colorClasses[ejemplo.color];
              const waMsg = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(
                `Hola! Vi el ejemplo de web para ${ejemplo.rubro} y me interesa algo así. ¿Charlamos?`
              )}`;

              return (
                <div
                  key={index}
                  className={`relative ${colors.bg} rounded-3xl overflow-hidden border ${colors.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
                >
                  {/* Link que cubre la card */}
                  <Link to={ejemplo.route} className="absolute inset-0 z-10" aria-label={`Ver ejemplo para ${ejemplo.rubro}`} />

                  {/* Imagen */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={ejemplo.imagen}
                      alt={`Ejemplo de web para ${ejemplo.rubro}`}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                    {/* Solo muestra el rubro — sin precio ni plan */}
                    <div className="absolute top-3 left-3">
                      <span className={`inline-flex items-center gap-1.5 ${colors.tag} text-xs font-bold px-3 py-1.5 rounded-full shadow-sm`}>
                        {ejemplo.rubro}
                      </span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6">
                    <p className="text-slate-600 text-sm mb-4">{ejemplo.descripcion}</p>

                    {/* Secciones */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {ejemplo.secciones.map((s, i) => (
                        <span key={i} className={`inline-flex items-center gap-1 text-xs ${colors.tag} px-2 py-1 rounded-full`}>
                          <Check className="w-3 h-3" />
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Acciones */}
                    <div className="relative z-20 flex gap-3 items-center">
                      <div className="flex-1 flex items-center gap-2 text-sm text-slate-400">
                        <Eye className="w-4 h-4" />
                        Click para ver completa
                      </div>
                      <a
                        href={waMsg}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackWhatsAppClick('ejemplos_card_cta_desktop', `Interés en rubro: ${ejemplo.rubro}`, 'Quiero una así')}
                      >
                        <Button
                          size="sm"
                          className="bg-slate-900 hover:bg-slate-800 text-white gap-1.5"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Quiero una así
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-blue-600 py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            ¿Te gustó algún ejemplo?
          </h2>
          <p className="text-lg text-blue-100 mb-2">
            Charlamos y te armo una web adaptada a tu profesión.
          </p>
          <p className="text-sm text-blue-200 mb-8">
            Todas las webs desde ARS 50.000 · Pago único
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('ejemplos_footer_cta', WA_BASE, 'Quiero mi web')}
            >
              <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 px-8">
                Quiero mi web
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <Link to="/">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                Volver al inicio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">WebExpress · Webs profesionales para profesionales independientes</p>
        </div>
      </footer>
    </div>
  );
}
