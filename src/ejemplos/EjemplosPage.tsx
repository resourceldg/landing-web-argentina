import { ArrowRight, Eye, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ejemplos = [
  {
    nombre: 'Lic. María González',
    profesion: 'Psicóloga Clínica',
    descripcion: 'Web para profesional de salud mental con servicios, testimonios y contacto.',
    color: 'blue',
    url: '#/ejemplo/psicologa',
    imagen: '/ejemplo-psicologa.jpg',
    caracteristicas: ['Servicios', 'Testimonios', 'Sobre mí', 'Contacto']
  },
  {
    nombre: 'Dr. Martín López',
    profesion: 'Nutricionista',
    descripcion: 'Web para nutricionista deportivo con planes personalizados y seguimiento.',
    color: 'green',
    url: '#/ejemplo/nutricionista',
    imagen: '/ejemplo-nutricionista.jpg',
    caracteristicas: ['Planes', 'Testimonios', 'Sobre mí', 'Contacto']
  },
  {
    nombre: 'Estudio Jurídico Pérez',
    profesion: 'Abogado',
    descripcion: 'Web para estudio de abogados con especialidades y áreas de práctica.',
    color: 'slate',
    url: '#/ejemplo/abogado',
    imagen: '/ejemplo-abogado.jpg',
    caracteristicas: ['Especialidades', 'Equipo', 'Casos', 'Contacto']
  },
  {
    nombre: 'Dra. Carolina Ruiz',
    profesion: 'Dermatóloga',
    descripcion: 'Web para médico especialista con tratamientos y turnos online.',
    color: 'pink',
    url: '#/ejemplo/dermatologa',
    imagen: '/ejemplo-dermatologa.jpg',
    caracteristicas: ['Tratamientos', 'Turnos', 'Sobre mí', 'Contacto']
  },
  {
    nombre: 'Contador Sergio Díaz',
    profesion: 'Contador Público',
    descripcion: 'Web para contador con servicios para empresas y particulares.',
    color: 'indigo',
    url: '#/ejemplo/contador',
    imagen: '/ejemplo-contador.jpg',
    caracteristicas: ['Servicios', 'Clientes', 'Sobre mí', 'Contacto']
  },
  {
    nombre: 'Coach Ana Martínez',
    profesion: 'Coach de Vida',
    descripcion: 'Web para coach con programas, testimonios y agenda de sesiones.',
    color: 'purple',
    url: '#/ejemplo/coach',
    imagen: '/ejemplo-coach.jpg',
    caracteristicas: ['Programas', 'Testimonios', 'Sobre mí', 'Contacto']
  }
];

const colorClasses: Record<string, { bg: string; text: string; border: string; button: string }> = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', button: 'bg-blue-600 hover:bg-blue-700' },
  green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200', button: 'bg-green-600 hover:bg-green-700' },
  slate: { bg: 'bg-slate-50', text: 'text-slate-600', border: 'border-slate-200', button: 'bg-slate-700 hover:bg-slate-800' },
  pink: { bg: 'bg-pink-50', text: 'text-pink-600', border: 'border-pink-200', button: 'bg-pink-600 hover:bg-pink-700' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200', button: 'bg-indigo-600 hover:bg-indigo-700' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', button: 'bg-purple-600 hover:bg-purple-700' }
};

export default function EjemplosPage() {
  const whatsappUrl = 'https://wa.me/542236202061?text=Hola!%20Vi%20los%20ejemplos%20y%20me%20interesa%20una%20web%20similar.';

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="font-bold text-lg text-slate-900">WebExpress</span>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Quiero mi web
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Eye className="w-4 h-4" />
            Ejemplos de webs
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Mirá cómo quedan las webs
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Estos son ejemplos de webs que creamos para profesionales de diferentes rubros. 
            Clickeá en "Ver ejemplo" para ver la web completa.
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
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ejemplos.map((ejemplo, index) => {
              const colors = colorClasses[ejemplo.color];
              return (
                <div 
                  key={index} 
                  className={`${colors.bg} rounded-3xl overflow-hidden border ${colors.border} hover:shadow-xl transition-shadow`}
                >
                  {/* Imagen */}
                  <div className="aspect-[4/3] bg-slate-200 relative">
                    <div className={`absolute inset-0 ${colors.bg} flex items-center justify-center`}>
                      <div className="text-center p-8">
                        <div className={`w-20 h-20 ${colors.button} rounded-full flex items-center justify-center mx-auto mb-4`}>
                          <span className="text-white text-2xl font-bold">
                            {ejemplo.nombre.charAt(0)}
                          </span>
                        </div>
                        <p className={`${colors.text} font-semibold`}>{ejemplo.profesion}</p>
                      </div>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`${colors.text} text-sm font-medium`}>{ejemplo.profesion}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {ejemplo.nombre}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">
                      {ejemplo.descripcion}
                    </p>

                    {/* Características */}
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

                    {/* CTA */}
                    <a href={ejemplo.url}>
                      <Button 
                        variant="outline" 
                        className={`w-full ${colors.border} ${colors.text} hover:${colors.bg}`}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Ver ejemplo
                      </Button>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-blue-600 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            ¿Te gustó algún ejemplo?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Charlamos y te armo una web similar adaptada a tu profesión.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 px-8">
                Quiero mi web
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <a href="#/">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                Volver al inicio
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            WebExpress - Webs profesionales para profesionales
          </p>
        </div>
      </footer>
    </div>
  );
}
