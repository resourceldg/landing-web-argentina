import { ClipboardList, Palette, CheckCircle, Rocket } from 'lucide-react';

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  title?: string;
  subtitle?: string;
  steps?: Step[];
}

const defaultSteps: Step[] = [
  {
    number: '01',
    icon: <ClipboardList className="w-6 h-6" />,
    title: 'Nos pasás tu info',
    description: 'Nos contás sobre tu servicio, subís tus fotos y nos decís qué necesitás.'
  },
  {
    number: '02',
    icon: <Palette className="w-6 h-6" />,
    title: 'Armamos el diseño',
    description: 'Creamos tu landing profesional con toda tu información organizada.'
  },
  {
    number: '03',
    icon: <CheckCircle className="w-6 h-6" />,
    title: 'Revisás y aprobás',
    description: 'Ves el resultado, pedís los ajustes que quieras y nos das el OK.'
  },
  {
    number: '04',
    icon: <Rocket className="w-6 h-6" />,
    title: 'La publicamos',
    description: 'Tu web queda online y lista para que empieces a compartirla.'
  }
];

export default function ProcessSection({
  title = 'Así de simple:',
  subtitle = 'Cuatro pasos y tu web está lista',
  steps = defaultSteps
}: ProcessSectionProps) {
  return (
    <section id="proceso" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Rocket className="w-4 h-4" />
            El proceso
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-slate-600">{subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent"></div>
              )}
              
              <div className="bg-slate-50 rounded-2xl p-6 h-full hover:bg-blue-50 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-4xl font-bold text-blue-200">{step.number}</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline mobile */}
        <div className="lg:hidden mt-8">
          <div className="flex justify-center">
            <div className="flex gap-2">
              {steps.map((_, index) => (
                <div 
                  key={index} 
                  className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-blue-600' : 'bg-blue-200'}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
