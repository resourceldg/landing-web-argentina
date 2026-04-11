import { X, Instagram, MessageSquare, Link2, Frown } from 'lucide-react';

interface PainPoint {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface PainPointsSectionProps {
  title?: string;
  subtitle?: string;
  painPoints?: PainPoint[];
}

const defaultPainPoints: PainPoint[] = [
  {
    icon: <Instagram className="w-6 h-6" />,
    title: 'Perfil de Instagram incompleto',
    description: 'Tu información está dispersa y desordenada en historias destacadas.'
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: 'Mensajes repetidos por WhatsApp',
    description: 'Respondés lo mismo una y otra vez porque no tenés la info clara.'
  },
  {
    icon: <Link2 className="w-6 h-6" />,
    title: 'Links rotos y desactualizados',
    description: 'Tus clientes encuentran info vieja o links que no funcionan.'
  },
  {
    icon: <Frown className="w-6 h-6" />,
    title: 'Cero presencia profesional',
    description: 'Al compartir tu contacto, no transmitís la confianza que merecés.'
  }
];

export default function PainPointsSection({
  title = 'Hoy muchos profesionales venden así:',
  subtitle = 'Y pierden clientes todos los días',
  painPoints = defaultPainPoints
}: PainPointsSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <X className="w-4 h-4" />
            El problema
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-slate-600">{subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="group bg-slate-50 rounded-2xl p-6 hover:bg-red-50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                {point.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{point.title}</h3>
              <p className="text-slate-600 text-sm">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
