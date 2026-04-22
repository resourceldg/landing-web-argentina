import { Clock, Shield, RefreshCw, MessageCircle, ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackWhatsAppClick } from '@/lib/analytics';

// ── REEMPLAZÁ estos placeholders con testimonios reales de clientes ──
const testimonials: { name: string; role: string; city: string; text: string; result: string }[] = [
  {
    name: 'Valeria Torres',
    role: 'Psicóloga',
    city: 'Buenos Aires',
    text: 'Tenía todo en Instagram y mis pacientes me pedían por dónde agendar. En el día me armaron la web y ya la tengo en mi firma de mail.',
    result: '3 consultas nuevas en la primera semana',
  },
  {
    name: 'Marcos Ibáñez',
    role: 'Contador público',
    city: 'Córdoba',
    text: 'Pensé que iba a ser un proceso largo y complicado. Me sorprendió lo rápido que fue. Mandé el logo y me explicaron qué hacía, y al otro día ya estaba online.',
    result: 'Web lista en menos de 24 horas',
  },
  {
    name: 'Lucía Fernández',
    role: 'Nutricionista',
    city: 'Rosario',
    text: 'Lo que más me gustó es que el botón de WhatsApp funciona perfecto. Mis clientes me escriben directo sin tener que buscar mi número en ningún lado.',
    result: '+40% de consultas por WhatsApp desde la web',
  },
];

// Confianza basada en proceso y garantías reales
const trustPoints = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Entrega en el día',
    description: 'Plan Inicio listo en horas. Sin esperar semanas.',
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: 'Revisiones incluidas',
    description: 'Pedís los cambios que quieras hasta quedar 100% conforme.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Garantía de satisfacción',
    description: 'Si no te convence el resultado, te devolvemos el dinero. Sin letra chica.',
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: 'Atención directa',
    description: 'Hablás con quien te hace la web, no con un intermediario.',
  },
];

// Perfiles típicos — sin claims inventados
const idealPara = [
  'Psicólogos y terapeutas',
  'Coaches y consultores',
  'Nutricionistas',
  'Abogados y estudios',
  'Contadores',
  'Médicos y profesionales de la salud',
  'Arquitectos y diseñadores',
  'Trainers y profesores',
];

const WA_PHONE = '542236202061';
const WA_MESSAGE = 'Hola! Vi tu anuncio y quiero consultar sobre la web. ¿Qué opciones tienen?';

export default function SocialProofSection() {
  const whatsappUrl = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(WA_MESSAGE)}`;

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Por qué elegirnos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Rápido, simple y con garantía real
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Sin sorpresas, sin reuniones eternas, sin tecnicismos. Vos te enfocás en tu trabajo.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-50 rounded-2xl p-6 flex flex-col gap-4 border border-slate-100">
              <Quote className="w-6 h-6 text-blue-300 flex-shrink-0" />
              <p className="text-slate-700 text-sm leading-relaxed flex-1">"{t.text}"</p>
              <div className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-lg self-start">
                ✓ {t.result}
              </div>
              <div className="flex items-center gap-3 pt-2 border-t border-slate-200">
                <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role} · {t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust points grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-6 hover:bg-blue-50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                {point.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{point.title}</h3>
              <p className="text-slate-600 text-sm">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Ideal para */}
        <div className="bg-slate-50 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                Ideal para profesionales independientes
              </h3>
              <p className="text-slate-600 mb-6">
                Si ofrecés un servicio personal y necesitás que tus clientes te encuentren,
                te contacten y te contraten — esto es para vos.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('social_proof_cta', WA_MESSAGE, 'Consultá ahora')}
              >
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 rounded-xl gap-2">
                  Consultá ahora
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              {idealPara.map((perfil, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-700"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                  {perfil}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
