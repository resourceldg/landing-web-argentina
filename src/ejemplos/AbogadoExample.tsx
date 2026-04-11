import { Phone, MapPin, Mail, Check, MessageCircle, Scale, FileText, Users, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExamplesNav from './ExamplesNav';

export default function AbogadoExample() {
  const whatsappUrl = 'https://wa.me/542236202061?text=Hola!%20Vi%20el%20ejemplo%20de%20la%20web%20de%20abogado%20y%20me%20interesa%20una%20similar.';

  return (
    <div className="min-h-screen bg-white">
      <ExamplesNav 
        currentExample="abogado"
        prevExample="#/ejemplo/nutricionista"
        prevLabel="Nutricionista"
        nextExample="#/ejemplo/dermatologa"
        nextLabel="Dermatóloga"
      />

      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">
                <Scale className="w-4 h-4" />
                Estudio Jurídico - MP 45678
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Estudio Jurídico Pérez & Asoc.
              </h1>
              <p className="text-xl text-slate-600 font-medium">
                Abogados especialistas en Derecho Civil, Laboral y Familia
              </p>
              <p className="text-lg text-slate-600">
                Más de 15 años de experiencia defendiendo los derechos de nuestros clientes. 
                Asesoramiento integral y representación legal de excelencia.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-slate-700 hover:bg-slate-800 text-white rounded-full px-8">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Consulta gratuita
                  </Button>
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Primera consulta gratis
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Atención personalizada
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  15+ años de experiencia
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-slate-200 flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="w-32 h-32 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Scale className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-slate-500 text-lg">Estudio Jurídico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Áreas de práctica</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Users className="w-10 h-10 text-slate-600" />, title: 'Derecho de Familia', desc: 'Divorcios, custodia, alimentos' },
              { icon: <Building className="w-10 h-10 text-slate-600" />, title: 'Derecho Laboral', desc: 'Despidos, accidentes, reclamos' },
              { icon: <FileText className="w-10 h-10 text-slate-600" />, title: 'Derecho Civil', desc: 'Contratos, sucesiones, daños' },
              { icon: <Scale className="w-10 h-10 text-slate-600" />, title: 'Derecho Comercial', desc: 'Sociedades, contratos, quiebras' }
            ].map((area, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{area.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{area.title}</h3>
                <p className="text-slate-600 text-sm">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Nuestro equipo</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { nombre: 'Dr. Juan Pérez', rol: 'Socio Fundador', esp: 'Derecho Civil y Comercial' },
              { nombre: 'Dra. Ana López', rol: 'Socia', esp: 'Derecho de Familia' },
              { nombre: 'Dr. Carlos Ruiz', rol: 'Asociado', esp: 'Derecho Laboral' }
            ].map((abogado, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-slate-500">{abogado.nombre.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{abogado.nombre}</h3>
                <p className="text-slate-500 text-sm mb-2">{abogado.rol}</p>
                <p className="text-slate-600 text-sm">{abogado.esp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">¿Necesitas asesoramiento legal?</h2>
          <p className="text-xl text-slate-300 mb-8">Agendá tu primera consulta gratuita. Estamos para ayudarte.</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-slate-700 hover:bg-slate-100 rounded-full px-8">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contactar
            </Button>
          </a>
          <div className="grid sm:grid-cols-3 gap-6 text-slate-300 mt-8">
            <div className="flex flex-col items-center gap-2">
              <Phone className="w-6 h-6" />
              <span>+54 223 620-2061</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail className="w-6 h-6" />
              <span>contacto@estudio-ejemplo.com</span>
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
          <p className="text-sm">Este es un ejemplo de web creada con WebExpress - <a href="#/" className="text-slate-300 hover:text-white">Quiero una como esta</a></p>
        </div>
      </footer>
    </div>
  );
}
