import { ArrowRight, Eye, Check, Zap, Star, Crown, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface Ejemplo {
  nombre: string;
  profesion: string;
  descripcion: string;
  color: string;
  route: string;
  imagen: string;
  caracteristicas: string[];
  plan: 'Inicio' | 'Profesional' | 'Premium';
  precio: string;
}

const ejemplos: Ejemplo[] = [
  {
    nombre: 'Lic. María González',
    profesion: 'Psicóloga Clínica',
    descripcion: 'Web para profesional de salud mental con servicios, testimonios y contacto.',
    color: 'blue',
    route: '/ejemplo/psicologa',
    imagen: '/ejemplo-psicologa.jpg',
    caracteristicas: ['Servicios', 'Testimonios', 'Sobre mí', 'Contacto'],
    plan: 'Profesional',
    precio: 'ARS 150.000'
  },
  {
    nombre: 'Dr. Martín López',
    profesion: 'Nutricionista',
    descripcion: 'Web para nutricionista deportivo con planes personalizados y seguimiento.',
    color: 'green',
    route: '/ejemplo/nutricionista',
    imagen: '/ejemplo-nutricionista.jpg',
    caracteristicas: ['Planes', 'Testimonios', 'Sobre mí', 'Contacto'],
    plan: 'Profesional',
    precio: 'ARS 150.000'
  },
  {
    nombre: 'Estudio Jurídico Pérez',
    profesion: 'Abogado',
    descripcion: 'Web para estudio de abogados con especialidades y áreas de práctica.',
    color: 'slate',
    route: '/ejemplo/abogado',
    imagen: '/ejemplo-abogado.jpg',
    caracteristicas: ['Especialidades', 'Equipo', 'Casos', 'Contacto'],
    plan: 'Inicio',
    precio: 'ARS 50.000'
  },
  {
    nombre: 'Dra. Carolina Ruiz',
    profesion: 'Dermatóloga',
    descripcion: 'Web para médico especialista con tratamientos y turnos online.',
    color: 'pink',
    route: '/ejemplo/dermatologa',
    imagen: '/ejemplo-dermatologa.jpg',
    caracteristicas: ['Tratamientos', 'Turnos', 'Sobre mí', 'Contacto'],
    plan: 'Premium',
    precio: 'ARS 300.000'
  },
  {
    nombre: 'Contador Sergio Díaz',
    profesion: 'Contador Público',
    descripcion: 'Web para contador con servicios para empresas y particulares.',
    color: 'indigo',
    route: '/ejemplo/contador',
    imagen: '/ejemplo-contador.jpg',
    caracteristicas: ['Servicios', 'Clientes', 'Sobre mí', 'Contacto'],
    plan: 'Inicio',
    precio: 'ARS 50.000'
  },
  {
    nombre: 'Coach Ana Martínez',
    profesion: 'Coach de Vida',
    descripcion: 'Web para coach con programas, testimonios y agenda de sesiones.',
    color: 'purple',
    route: '/ejemplo/coach',
    imagen: '/ejemplo-coach.jpg',
    caracteristicas: ['Programas', 'Testimonios', 'Sobre mí', 'Contacto'],
    plan: 'Premium',
    precio: 'ARS 300.000'
  }
];

const colorClasses: Record<string, { bg: string; text: string; border: string; accent: string }> = {
  blue:   { bg: 'bg-blue-50',   text: 'text-blue-600',   border: 'border-blue-200',   accent: 'bg-blue-600'   },
  green:  { bg: 'bg-green-50',  text: 'text-green-600',  border: 'border-green-200',  accent: 'bg-green-600'  },
  slate:  { bg: 'bg-slate-100', text: 'text-slate-600',  border: 'border-slate-200',  accent: 'bg-slate-700'  },
  pink:   { bg: 'bg-pink-50',   text: 'text-pink-600',   border: 'border-pink-200',   accent: 'bg-pink-600'   },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200', accent: 'bg-indigo-600' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', accent: 'bg-purple-600' }
};

const planConfig = {
  Inicio:      { icon: <Zap className="w-3 h-3" />,   color: 'bg-slate-700 text-white'  },
  Profesional: { icon: <Star className="w-3 h-3" />,  color: 'bg-blue-600 text-white'   },
  Premium:     { icon: <Crown className="w-3 h-3" />, color: 'bg-amber-500 text-white'  }
};

export default function EjemplosPage() {
  const whatsappUrl = 'https://wa.me/542236202061?text=Hola!%20Vi%20los%20ejemplos%20y%20me%20interesa%20una%20web%20similar.';

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
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Quiero mi web
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-5">
            <Eye className="w-4 h-4" />
            Ejemplos de webs reales
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            Mirá cómo quedan las webs
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto mb-6">
            Ejemplos de webs para distintos rubros. Hacé click en cada una para verla completa.
          </p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
              Quiero una como estas
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </section>

      {/* Grid de ejemplos */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Mobile: lista compacta con imagen + precio visible */}
          <div className="lg:hidden space-y-4">
            {ejemplos.map((ejemplo, index) => {
              const colors = colorClasses[ejemplo.color];
              const plan = planConfig[ejemplo.plan];
              const waMsg = `https://wa.me/542236202061?text=${encodeURIComponent(`Hola! Vi el ejemplo de ${ejemplo.profesion} y me interesa algo así. Charlamos?`)}`;

              return (
                <div
                  key={index}
                  className={`relative rounded-2xl border ${colors.border} bg-white overflow-hidden shadow-sm active:scale-[0.99] transition-transform`}
                >
                  {/* Link que cubre toda la card */}
                  <Link to={ejemplo.route} className="absolute inset-0 z-10" aria-label={`Ver ejemplo ${ejemplo.profesion}`} />

                  {/* Imagen */}
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={ejemplo.imagen}
                      alt={ejemplo.profesion}
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Badge plan superpuesto */}
                    <div className="absolute top-2 left-2">
                      <span className={`inline-flex items-center gap-1 ${plan.color} text-xs font-bold px-2 py-1 rounded-full`}>
                        {plan.icon}
                        {ejemplo.plan}
                      </span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className={`${colors.text} text-xs font-semibold uppercase tracking-wide`}>{ejemplo.profesion}</p>
                        <h3 className="font-bold text-slate-900 text-base leading-tight">{ejemplo.nombre}</h3>
                      </div>
                      {/* Precio */}
                      <div className="text-right flex-shrink-0 ml-3">
                        <div className="text-xs text-slate-400">desde</div>
                        <div className="font-extrabold text-slate-900 text-base">{ejemplo.precio}</div>
                      </div>
                    </div>

                    {/* Features chips */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {ejemplo.caracteristicas.map((c, i) => (
                        <span
                          key={i}
                          className={`inline-flex items-center gap-1 text-xs ${colors.text} bg-white px-2 py-0.5 rounded-full border ${colors.border}`}
                        >
                          <Check className="w-2.5 h-2.5" />
                          {c}
                        </span>
                      ))}
                    </div>

                    {/* CTA "Lo quiero" con z-20 para que capture el tap por encima del link de la card */}
                    <a
                      href={waMsg}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-20 block"
                    >
                      <Button className={`w-full text-sm py-2 ${colors.accent} text-white hover:opacity-90`}>
                        <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                        Lo quiero · {ejemplo.precio}
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
              const plan = planConfig[ejemplo.plan];
              const waMsg = `https://wa.me/542236202061?text=${encodeURIComponent(`Hola! Vi el ejemplo de ${ejemplo.profesion} y me interesa algo así. Charlamos?`)}`;

              return (
                <div
                  key={index}
                  className={`relative ${colors.bg} rounded-3xl overflow-hidden border ${colors.border} hover:shadow-xl transition-shadow cursor-pointer`}
                >
                  {/* Link que cubre toda la card */}
                  <Link to={ejemplo.route} className="absolute inset-0 z-10" aria-label={`Ver ejemplo ${ejemplo.profesion}`} />

                  {/* Imagen */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={ejemplo.imagen}
                      alt={ejemplo.profesion}
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Plan badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`inline-flex items-center gap-1.5 ${plan.color} text-xs font-bold px-3 py-1.5 rounded-full shadow`}>
                        {plan.icon}
                        {ejemplo.plan} · {ejemplo.precio}
                      </span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`${colors.text} text-sm font-medium`}>{ejemplo.profesion}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{ejemplo.nombre}</h3>
                    <p className="text-slate-600 text-sm mb-4">{ejemplo.descripcion}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {ejemplo.caracteristicas.map((caract, i) => (
                        <span
                          key={i}
                          className={`inline-flex items-center gap-1 text-xs ${colors.text} bg-white px-2 py-1 rounded-full border ${colors.border}`}
                        >
                          <Check className="w-3 h-3" />
                          {caract}
                        </span>
                      ))}
                    </div>
                    <div className="relative z-20 flex gap-3">
                      <div className="flex-1 flex items-center gap-2 text-sm font-medium text-slate-500">
                        <Eye className="w-4 h-4" />
                        Clickeá para ver el ejemplo
                      </div>
                      <a href={waMsg} target="_blank" rel="noopener noreferrer">
                        <Button className={`${colors.accent} text-white hover:opacity-90`}>
                          <MessageCircle className="w-4 h-4" />
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

      {/* CTA Final */}
      <section className="bg-blue-600 py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            ¿Te gustó algún ejemplo?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Charlamos y te armo una web similar adaptada a tu profesión.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
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
          <p className="text-sm">WebExpress - Webs profesionales para profesionales</p>
        </div>
      </footer>
    </div>
  );
}
