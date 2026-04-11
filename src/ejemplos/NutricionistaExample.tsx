import { Phone, MapPin, Mail, Check, Star, MessageCircle, Apple, Heart, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExamplesNav from './ExamplesNav';

export default function NutricionistaExample() {
  const whatsappUrl = 'https://wa.me/542236202061?text=Hola!%20Vi%20el%20ejemplo%20de%20la%20web%20de%20nutricionista%20y%20me%20interesa%20una%20similar.';

  return (
    <div className="min-h-screen bg-white">
      {/* Navegación de ejemplos */}
      <ExamplesNav 
        currentExample="nutricionista"
        prevExample="#/ejemplo/psicologa"
        prevLabel="Psicóloga"
        nextExample="#/ejemplo/abogado"
        nextLabel="Abogado"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                <Apple className="w-4 h-4" />
                Nutricionista - MP 32145
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Dr. Martín López
              </h1>
              <p className="text-xl text-green-600 font-medium">
                Nutricionista Deportivo y Clínico
              </p>
              <p className="text-lg text-slate-600">
                Te ayudo a alcanzar tus objetivos de salud a través de una alimentación 
                personalizada, sin dietas extremas ni restricciones innecesarias.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Consultar por WhatsApp
                  </Button>
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Planes personalizados
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Seguimiento online
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
                  src="/ejemplo-nutricionista.jpg" 
                  alt="Dr. Martín López - Nutricionista" 
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
              Planes de alimentación adaptados a tus necesidades
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8 text-red-500" />,
                title: 'Nutrición Clínica',
                description: 'Planes para diabetes, hipertensión, colesterol alto, y otras condiciones de salud.',
                price: 'Consulta $12.000'
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
                title: 'Nutrición Deportiva',
                description: 'Optimizá tu rendimiento con un plan diseñado para tu deporte y objetivos.',
                price: 'Consulta $15.000'
              },
              {
                icon: <Apple className="w-8 h-8 text-green-500" />,
                title: 'Control de Peso',
                description: 'Perdé peso de forma saludable y sostenible, sin dietas restrictivas.',
                price: 'Consulta $12.000'
              }
            ].map((servicio, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-shadow text-center">
                <div className="flex justify-center mb-4">
                  {servicio.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{servicio.title}</h3>
                <p className="text-slate-600 mb-4">{servicio.description}</p>
                <p className="text-green-600 font-semibold">{servicio.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <section className="py-16 lg:py-24 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
                Mi enfoque
              </h3>
              <div className="space-y-4">
                {[
                  'Alimentación realista y sostenible',
                  'Sin dietas restrictivas ni extremas',
                  'Educación nutricional personalizada',
                  'Seguimiento continuo y ajustes',
                  'Respeto por tus gustos y rutina'
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
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Sobre mí
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Soy Licenciado en Nutrición con especialización en nutrición deportiva 
                  y clínica. Mi objetivo es ayudarte a mejorar tu relación con la comida 
                  y alcanzar tus metas de salud.
                </p>
                <p>
                  No creo en las dietas milagro ni en las restricciones extremas. 
                  Mi trabajo se basa en crear hábitos saludables que puedas mantener 
                  toda la vida.
                </p>
                <p>
                  Trabajo con deportistas de todos los niveles, personas que quieren 
                  mejorar su salud, y quienes buscan perder peso de forma sostenible.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="font-bold text-slate-900 mb-4">Formación</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    Licenciado en Nutrición - UNLP
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    Especialista en Nutrición Deportiva - ISAK
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    Antropometrista ISAK Nivel 2
                  </li>
                </ul>
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
              Resultados de mis pacientes
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: 'Con Martín aprendí a comer sin culpa. Bajé 12 kilos en 6 meses y nunca me sentí tan bien.',
                author: 'Sofía G.',
                role: 'Paciente'
              },
              {
                text: 'Mi rendimiento en el gimnasio mejoró un montón desde que empecé a trabajar con él.',
                author: 'Diego R.',
                role: 'Paciente'
              },
              {
                text: 'Por fin entendí que no se trata de dejar de comer, sino de comer mejor.',
                author: 'Mariana P.',
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
      <section className="py-16 lg:py-24 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Empezá tu cambio hoy
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Agendá tu primera consulta y descubrí cómo la nutrición puede cambiar tu vida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 rounded-full px-8">
                <MessageCircle className="w-5 h-5 mr-2" />
                Escribir por WhatsApp
              </Button>
            </a>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 text-green-100">
            <div className="flex flex-col items-center gap-2">
              <Phone className="w-6 h-6" />
              <span>+54 223 620-2061</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail className="w-6 h-6" />
              <span>contacto@nutricion-ejemplo.com</span>
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
            <a href="#/" className="text-green-400 hover:text-green-300">Quiero una como esta</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
