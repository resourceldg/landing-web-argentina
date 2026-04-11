import { Phone, MapPin, Mail, Check, Star, MessageCircle, Target, Users, Lightbulb, TrendingUp, Calendar, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExamplesNav from './ExamplesNav';

export default function CoachExample() {
  const whatsappUrl = 'https://wa.me/542236202061?text=Hola!%20Vi%20el%20ejemplo%20de%20la%20web%20de%20coach%20y%20me%20interesa%20una%20similar.';

  return (
    <div className="min-h-screen bg-white">
      <ExamplesNav 
        currentExample="coach"
        prevExample="#/ejemplo/contador"
        prevLabel="Contador"
        nextExample="#/ejemplo/psicologa"
        nextLabel="Psicóloga"
      />

      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                <Award className="w-4 h-4" />
                Coach Profesional Certificada
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Ana Martínez
              </h1>
              <p className="text-xl text-purple-600 font-medium">
                Coach de Vida y Desarrollo Personal
              </p>
              <p className="text-lg text-slate-600">
                Te ayudo a descubrir tu potencial, superar obstáculos y crear la vida que realmente querés. 
                Juntos vamos a trabajar para que alcances tus metas personales y profesionales.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Agendar sesión
                  </Button>
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-500" />
                  Sesiones online
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-500" />
                  Plan personalizado
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-500" />
                  500+ personas acompañadas
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-purple-100 flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="w-32 h-32 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-purple-600 text-lg">Coaching Transformacional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Programas de Coaching</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Diseñados para acompañarte en diferentes etapas de tu vida
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <Target className="w-10 h-10 text-purple-500" />, 
                title: 'Coaching de Vida', 
                desc: 'Encuentra claridad en tus objetivos personales y crea un plan de acción concreto.',
                sessions: '6 sesiones'
              },
              { 
                icon: <TrendingUp className="w-10 h-10 text-purple-500" />, 
                title: 'Coaching Ejecutivo', 
                desc: 'Desarrolla habilidades de liderazgo y mejora tu desempeño profesional.',
                sessions: '8 sesiones'
              },
              { 
                icon: <Lightbulb className="w-10 h-10 text-purple-500" />, 
                title: 'Coaching de Carrera', 
                desc: 'Descubre tu propósito profesional y da el siguiente paso en tu carrera.',
                sessions: '5 sesiones'
              },
              { 
                icon: <Users className="w-10 h-10 text-purple-500" />, 
                title: 'Coaching de Relaciones', 
                desc: 'Mejora tus relaciones personales y desarrolla habilidades de comunicación.',
                sessions: '6 sesiones'
              },
              { 
                icon: <Calendar className="w-10 h-10 text-purple-500" />, 
                title: 'Coaching de Hábitos', 
                desc: 'Construye hábitos positivos que transformen tu día a día.',
                sessions: '4 sesiones'
              },
              { 
                icon: <Award className="w-10 h-10 text-purple-500" />, 
                title: 'Mentoría Premium', 
                desc: 'Acompañamiento intensivo personalizado para resultados extraordinarios.',
                sessions: '12 sesiones'
              }
            ].map((prog, index) => (
              <div key={index} className="bg-purple-50 rounded-2xl p-6 hover:shadow-lg transition-shadow text-center">
                <div className="flex justify-center mb-4">{prog.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{prog.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{prog.desc}</p>
                <span className="inline-block bg-purple-200 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">
                  {prog.sessions}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Sobre mí
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Soy Ana Martínez, Coach Profesional certificada con más de 8 años de experiencia 
                  acompañando personas en su proceso de transformación personal y profesional.
                </p>
                <p>
                  Mi enfoque combina técnicas de coaching ontológico, PNL y inteligencia emocional 
                  para crear un proceso de acompañamiento integral y efectivo.
                </p>
                <p>
                  Creo firmemente que cada persona tiene el potencial de crear la vida que desea. 
                  Mi misión es ayudarte a descubrirlo y acompañarte en el camino.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="font-bold text-slate-900 mb-4">Certificaciones</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    Coach Profesional - ICC (International Coaching Community)
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    Practitioner en PNL - AUNLP
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    Especialista en Inteligencia Emocional
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
                ¿Cómo funciona el proceso?
              </h3>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Primera sesión gratuita', desc: 'Nos conocemos y conversamos sobre tus objetivos' },
                  { step: '2', title: 'Diseño del plan', desc: 'Creamos un programa personalizado para vos' },
                  { step: '3', title: 'Acompañamiento', desc: 'Sesiones semanales con seguimiento continuo' },
                  { step: '4', title: 'Resultados', desc: 'Evaluamos el progreso y celebramos tus logros' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Historias de transformación</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: 'Ana me ayudó a tomar la decisión de cambiar de carrera. Hoy estoy viviendo mi propósito.', author: 'María L.', rol: 'Coach de Vida' },
              { text: 'Las sesiones con Ana transformaron mi relación con mi familia. Eternamente agradecida.', author: 'Lucía R.', rol: 'Emprendedora' },
              { text: 'Gracias al coaching pude superar el miedo a hablar en público y crecer profesionalmente.', author: 'Diego M.', rol: 'Gerente' },
              { text: 'Encontré claridad sobre lo que realmente quería en mi vida. Un antes y un después.', author: 'Sofía P.', rol: 'Profesional' },
              { text: 'Ana tiene una forma única de escuchar y hacerte las preguntas correctas.', author: 'Juan C.', rol: 'Empresario' },
              { text: 'Logré equilibrar mi vida personal y profesional. Recomiendo 100%.', author: 'Valentina G.', rol: 'Mamá y profesional' }
            ].map((test, index) => (
              <div key={index} className="bg-purple-50 rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-slate-600 mb-4 italic">"{test.text}"</p>
                <p className="font-semibold text-slate-900">{test.author}</p>
                <p className="text-sm text-slate-500">{test.rol}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">¿Listo para transformar tu vida?</h2>
          <p className="text-xl text-purple-100 mb-8">La primera sesión es gratuita. Sin compromiso.</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 rounded-full px-8">
              <MessageCircle className="w-5 h-5 mr-2" />
              Agendar sesión gratuita
            </Button>
          </a>
          <div className="grid sm:grid-cols-3 gap-6 text-purple-100 mt-8">
            <div className="flex flex-col items-center gap-2">
              <Phone className="w-6 h-6" />
              <span>+54 223 620-2061</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail className="w-6 h-6" />
              <span>contacto@coach-ejemplo.com</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-6 h-6" />
              <span>Sesiones Online</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">Este es un ejemplo de web creada con WebExpress - <a href="#/" className="text-purple-400 hover:text-purple-300">Quiero una como esta</a></p>
        </div>
      </footer>
    </div>
  );
}
