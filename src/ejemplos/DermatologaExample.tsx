import { Phone, MapPin, Mail, Check, Sparkles, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ExamplesNav from './ExamplesNav';

export default function DermatologaExample() {
  const whatsappUrl = 'https://wa.me/542236202061?text=Hola!%20Vi%20el%20ejemplo%20de%20la%20web%20de%20dermatóloga%20y%20me%20interesa%20una%20similar.';

  return (
    <div className="min-h-screen bg-white">
      <ExamplesNav
        currentExample="dermatologa"
        prevRoute="/ejemplo/abogado"
        prevLabel="Abogado"
        nextRoute="/ejemplo/contador"
        nextLabel="Contador"
      />

      <section className="bg-gradient-to-br from-pink-50 to-rose-50 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Dermatología - MP 56789
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Dra. Carolina Ruiz
              </h1>
              <p className="text-xl text-pink-600 font-medium">
                Dermatología Clínica y Estética
              </p>
              <p className="text-lg text-slate-600">
                Cuidado integral de tu piel. Tratamientos personalizados con la última 
                tecnología para que luzcas una piel saludable y radiante.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-8">
                    <Calendar className="w-5 h-5 mr-2" />
                    Agendar turno
                  </Button>
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-pink-500" />
                  Turnos online
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-pink-500" />
                  Obras sociales
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-pink-500" />
                  Tecnología de punta
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/ejemplo-dermatologa.jpg"
                  alt="Dra. Carolina Ruiz - Dermatóloga"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Tratamientos</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Dermatología Clínica', desc: 'Acné, psoriasis, dermatitis, cáncer de piel' },
              { title: 'Dermatología Estética', desc: 'Rejuvenecimiento, manchas, arrugas' },
              { title: 'Cirugía Dermatológica', desc: 'Extirpación de lunares, quistes, verrugas' },
              { title: 'Tratamientos Láser', desc: 'Depilación, manchas, cicatrices' },
              { title: 'Peelings', desc: 'Químicos, mecánicos, para todo tipo de piel' },
              { title: 'Mesoterapia', desc: 'Rejuvenecimiento facial y corporal' }
            ].map((trat, index) => (
              <div key={index} className="bg-pink-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{trat.title}</h3>
                <p className="text-slate-600 text-sm">{trat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Sobre mí</h2>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm max-w-3xl mx-auto">
            <p className="text-slate-600 mb-4">
              Soy Médica Especialista en Dermatología con más de 12 años de experiencia. 
              Mi enfoque combina la medicina basada en evidencia con los últimos avances 
              en tecnología dermatológica.
            </p>
            <p className="text-slate-600 mb-4">
              Me especializo en el diagnóstico y tratamiento de enfermedades de la piel, 
              así como en procedimientos estéticos para mejorar la apariencia y salud de tu piel.
            </p>
            <div className="mt-6 pt-6 border-t border-slate-100">
              <h3 className="font-bold text-slate-900 mb-3">Formación</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
                  Médica - Universidad de Buenos Aires
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
                  Especialista en Dermatología - Hospital Alemán
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
                  Miembro de la Sociedad Argentina de Dermatología
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-pink-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Tu piel merece lo mejor</h2>
          <p className="text-xl text-pink-100 mb-8">Agendá tu consulta y empezá a cuidar tu piel.</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-pink-500 hover:bg-pink-50 rounded-full px-8">
              <Calendar className="w-5 h-5 mr-2" />
              Agendar turno
            </Button>
          </a>
          <div className="grid sm:grid-cols-3 gap-6 text-pink-100 mt-8">
            <div className="flex flex-col items-center gap-2">
              <Phone className="w-6 h-6" />
              <span>+54 223 620-2061</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail className="w-6 h-6" />
              <span>contacto@derma-ejemplo.com</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-6 h-6" />
              <span>Mar del Plata</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">Este es un ejemplo de web creada con WebExpress - <Link to="/" className="text-pink-400 hover:text-pink-300">Quiero una como esta</Link></p>
        </div>
      </footer>
    </div>
  );
}
