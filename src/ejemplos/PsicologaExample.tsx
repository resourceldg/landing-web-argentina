import { Phone, MapPin, Mail, Check, Star, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ExamplesNav from './ExamplesNav';

export default function PsicologaExample() {
  const whatsappUrl = 'https://wa.me/542236202061?text=Hola!%20Vi%20el%20ejemplo%20de%20la%20web%20de%20psicóloga%20y%20me%20interesa%20una%20similar.';

  return (
    <div className="min-h-screen bg-white">
      {/* Navegación de ejemplos */}
      <ExamplesNav
        currentExample="psicologa"
        prevRoute="/ejemplo/coach"
        prevLabel="Coach"
        nextRoute="/ejemplo/nutricionista"
        nextLabel="Nutricionista"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4" />
                Psicóloga Clínica - MP 24567
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Lic. María González
              </h1>
              <p className="text-xl text-blue-600 font-medium">
                Psicóloga Clínica - Atención Online y Presencial
              </p>
              <p className="text-lg text-slate-600">
                Te acompaño en tu proceso de crecimiento personal. Un espacio seguro 
                para hablar, escucharte y encontrar nuevas formas de enfrentar tus desafíos.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Agendar por WhatsApp
                  </Button>
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Atención online
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Consulta presencial
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Obras sociales
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/ejemplo-psicologa.jpg" 
                  alt="Lic. María González - Psicóloga Clínica" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Servicios
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Atención personalizada para diferentes necesidades
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Terapia Individual',
                description: 'Sesiones personalizadas para adultos. Un espacio para trabajar en tu bienestar emocional.',
                price: 'Desde $45.000'
              },
              {
                title: 'Terapia de Pareja',
                description: 'Acompañamiento para mejorar la comunicación y resolver conflictos en la relación.',
                price: 'Desde $65.000'
              },
              {
                title: 'Terapia Online',
                description: 'Sesiones virtuales desde la comodidad de tu hogar. Misma calidad, más flexibilidad.',
                price: 'Desde $40.000'
              }
            ].map((servicio, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{servicio.title}</h3>
                <p className="text-slate-600 mb-4">{servicio.description}</p>
                <p className="text-blue-600 font-semibold">{servicio.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Sobre mí
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Soy Licenciada en Psicología con más de 10 años de experiencia 
                  acompañando personas en su proceso de crecimiento personal.
                </p>
                <p>
                  Me especializo en terapia cognitivo-conductual y terapia 
                  sistémica, con un enfoque humanista y empático.
                </p>
                <p>
                  Creo firmemente que cada persona tiene los recursos necesarios 
                  para superar sus dificultades, y mi rol es ayudarte a descubrirlos.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="font-bold text-slate-900 mb-4">Formación</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    Licenciatura en Psicología - UBA
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    Especialización en Terapia Cognitivo-Conductual
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    Miembro de la Federación Argentina de Psicólogos
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
                ¿Por qué elegirme?
              </h3>
              <div className="space-y-4">
                {[
                  'Más de 10 años de experiencia',
                  'Atención online y presencial',
                  'Trabajo con obras sociales',
                  'Espacio seguro y confidencial',
                  'Horarios flexibles'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Lo que dicen mis pacientes
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: 'María me ayudó muchísimo en un momento difícil. Su escucha y profesionalismo hicieron toda la diferencia.',
                author: 'Ana R.',
                role: 'Paciente'
              },
              {
                text: 'La terapia online me permitió continuar mi tratamiento aunque viajo mucho por trabajo. Muy recomendable.',
                author: 'Carlos M.',
                role: 'Paciente'
              },
              {
                text: 'Después de años de terapia, finalmente encontré a alguien que realmente me entendió.',
                author: 'Laura P.',
                role: 'Paciente'
              }
            ].map((testimonio, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4 italic">"{testimonio.text}"</p>
                <div>
                  <p className="font-semibold text-slate-900">{testimonio.author}</p>
                  <p className="text-sm text-slate-500">{testimonio.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-16 lg:py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            ¿Listo para comenzar?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Agendá tu primera consulta. Estoy acá para acompañarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8">
                <MessageCircle className="w-5 h-5 mr-2" />
                Escribir por WhatsApp
              </Button>
            </a>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 text-blue-100">
            <div className="flex flex-col items-center gap-2">
              <Phone className="w-6 h-6" />
              <span>+54 223 620-2061</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail className="w-6 h-6" />
              <span>contacto@psicologa-ejemplo.com</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-6 h-6" />
              <span>Mar del Plata, Argentina</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            Este es un ejemplo de web creada con WebExpress -{' '}
            <Link to="/" className="text-blue-400 hover:text-blue-300">Quiero una como esta</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
