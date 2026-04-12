import { Phone, MapPin, Mail, Check, Star, MessageCircle, Calculator, TrendingUp, FileText, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ExamplesNav from './ExamplesNav';

export default function ContadorExample() {
  const whatsappUrl = 'https://wa.me/542236202061?text=Hola!%20Vi%20el%20ejemplo%20de%20la%20web%20de%20contador%20y%20me%20interesa%20una%20similar.';

  return (
    <div className="min-h-screen bg-white">
      <ExamplesNav
        currentExample="contador"
        prevRoute="/ejemplo/dermatologa"
        prevLabel="Dermatóloga"
        nextRoute="/ejemplo/coach"
        nextLabel="Coach"
      />

      <section className="bg-gradient-to-br from-indigo-50 to-blue-50 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
                <Calculator className="w-4 h-4" />
                Contador Público - MP 67890
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Contador Sergio Díaz
              </h1>
              <p className="text-xl text-indigo-600 font-medium">
                Servicios contables para empresas y particulares
              </p>
              <p className="text-lg text-slate-600">
                Más de 20 años de experiencia brindando soluciones contables integrales. 
                Asesoramiento personalizado para que tu negocio crezca.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Consultar
                  </Button>
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-500" />
                  Empresas y particulares
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-500" />
                  Atención online
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-500" />
                  20+ años de experiencia
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/ejemplo-contador.jpg"
                  alt="Contador Sergio Díaz"
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Servicios</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Building2 className="w-10 h-10 text-indigo-500" />, title: 'Empresas', desc: 'Liquidación de sueldos, IVA, Ganancias, Balance' },
              { icon: <FileText className="w-10 h-10 text-indigo-500" />, title: 'Monotributo', desc: 'Inscripción, recategorización, facturación' },
              { icon: <TrendingUp className="w-10 h-10 text-indigo-500" />, title: 'Asesoramiento', desc: 'Planeamiento fiscal, inversiones, finanzas' },
              { icon: <Calculator className="w-10 h-10 text-indigo-500" />, title: 'Autónomos', desc: 'Altas, bajas, aportes, facturación' },
              { icon: <FileText className="w-10 h-10 text-indigo-500" />, title: 'Impuestos', desc: 'Ganancias, Bienes Personales, IVA' },
              { icon: <Building2 className="w-10 h-10 text-indigo-500" />, title: 'Sociedades', desc: 'Constitución, modificación, disolución' }
            ].map((serv, index) => (
              <div key={index} className="bg-indigo-50 rounded-2xl p-6 hover:shadow-lg transition-shadow text-center">
                <div className="flex justify-center mb-4">{serv.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{serv.title}</h3>
                <p className="text-slate-600 text-sm">{serv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Clientes que confían</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: 'Sergio nos ayudó a ordenar toda la contabilidad de nuestra empresa. Muy profesional.', author: 'Martín G.', rol: 'Empresario' },
              { text: 'Excelente atención y siempre disponible para resolver dudas. Lo recomiendo.', author: 'Laura M.', rol: 'Autónoma' },
              { text: 'Gracias a su asesoramiento pudimos optimizar nuestra carga impositiva.', author: 'Carlos R.', rol: 'Pyme' }
            ].map((test, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
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

      <section className="py-16 lg:py-24 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">¿Necesitas un contador?</h2>
          <p className="text-xl text-indigo-100 mb-8">Charlamos y vemos cómo puedo ayudarte.</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 rounded-full px-8">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contactar
            </Button>
          </a>
          <div className="grid sm:grid-cols-3 gap-6 text-indigo-100 mt-8">
            <div className="flex flex-col items-center gap-2">
              <Phone className="w-6 h-6" />
              <span>+54 223 620-2061</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail className="w-6 h-6" />
              <span>contacto@contador-ejemplo.com</span>
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
          <p className="text-sm">Este es un ejemplo de web creada con WebExpress - <Link to="/" className="text-indigo-400 hover:text-indigo-300">Quiero una como esta</Link></p>
        </div>
      </footer>
    </div>
  );
}
