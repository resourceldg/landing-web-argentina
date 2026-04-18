import { ArrowLeft, ArrowRight, Home, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ExamplesNavProps {
  currentExample: string;
  prevRoute?: string;
  nextRoute?: string;
  prevLabel?: string;
  nextLabel?: string;
}

const examples = [
  { id: 'psicologa',     label: 'Psicóloga'    },
  { id: 'nutricionista', label: 'Nutricionista' },
  { id: 'abogado',       label: 'Abogado'       },
  { id: 'dermatologa',   label: 'Dermatóloga'   },
  { id: 'contador',      label: 'Contador'      },
  { id: 'coach',         label: 'Coach'         }
];

export default function ExamplesNav({
  currentExample,
  prevRoute,
  nextRoute,
  prevLabel,
  nextLabel
}: ExamplesNavProps) {
  const whatsappUrl =
    'https://wa.me/542236202061?text=Hola!%20Vi%20el%20ejemplo%20de%20' +
    currentExample +
    '%20y%20me%20interesa%20una%20similar.';

  return (
    <>
      {/* Banner superior — deja claro que es un demo, con precio unificado */}
      <div className="bg-slate-900 text-white text-center py-2 text-sm">
        <span className="opacity-75">Ejemplo de web · Todas desde ARS 50.000 — </span>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold hover:text-blue-300"
        >
          Quiero la mía
        </a>
      </div>

      {/* Header de navegación */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Izquierda — Volver */}
            <div className="flex items-center gap-4">
              <Link
                to="/ejemplos"
                className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline font-medium">Ver todos los ejemplos</span>
                <span className="sm:hidden font-medium">Ejemplos</span>
              </Link>
            </div>

            {/* Centro — Navegación entre ejemplos (desktop) */}
            <div className="hidden md:flex items-center gap-2">
              {prevRoute && (
                <Link
                  to={prevRoute}
                  className="flex items-center gap-1 px-3 py-2 text-sm text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  {prevLabel || 'Anterior'}
                </Link>
              )}

              <span className="text-slate-300">|</span>

              <span className="text-sm font-medium text-slate-700 px-3">
                {examples.find(e => e.id === currentExample)?.label || 'Ejemplo'}
              </span>

              <span className="text-slate-300">|</span>

              {nextRoute && (
                <Link
                  to={nextRoute}
                  className="flex items-center gap-1 px-3 py-2 text-sm text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  {nextLabel || 'Siguiente'}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>

            {/* Derecha — CTA */}
            <div className="flex items-center gap-3">
              <Link to="/" className="hidden sm:flex items-center gap-2 text-slate-500 hover:text-slate-700 transition-colors">
                <Home className="w-5 h-5" />
              </Link>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Quiero una como esta</span>
                  <span className="sm:hidden">Quiero la mía</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Navegación móvil — barra inferior flotante */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
        <div className="bg-white rounded-full shadow-lg border border-slate-200 p-2 flex items-center justify-between">
          {prevRoute ? (
            <Link
              to={prevRoute}
              className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">Ant.</span>
            </Link>
          ) : (
            <div className="w-20" />
          )}

          <span className="text-sm font-medium text-slate-700">
            {examples.find(e => e.id === currentExample)?.label}
          </span>

          {nextRoute ? (
            <Link
              to={nextRoute}
              className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
            >
              <span className="text-sm">Sig.</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          ) : (
            <div className="w-20" />
          )}
        </div>
      </div>
    </>
  );
}
