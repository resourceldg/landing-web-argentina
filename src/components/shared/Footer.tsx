import { Mail, MapPin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">W</span>
              </div>
              <span className="font-bold text-xl text-white">WebExpress</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              Webs profesionales para profesionales independientes en Argentina.
              Simple, rápido y accesible. Tu presencia online lista en 72 horas.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/clararottman?igsh=MXVnazE3MW8wdmplcQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Enlaces</h4>
            <ul className="space-y-3">
              <li><Link to="/"                  className="hover:text-blue-400 transition-colors">Inicio</Link></li>
              <li><Link to="/profesionales"      className="hover:text-blue-400 transition-colors">Para Profesionales</Link></li>
              <li><Link to="/regalo"             className="hover:text-blue-400 transition-colors">Regalá una Web</Link></li>
              <li><Link to="/whatsapp"           className="hover:text-blue-400 transition-colors">Web + WhatsApp</Link></li>
              <li><Link to="/web-50k"            className="hover:text-blue-400 transition-colors">Precio</Link></li>
              <li><Link to="/ejemplos"           className="hover:text-blue-400 transition-colors">Ejemplos</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a
                  href="mailto:clararott@yahoo.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  clararott@yahoo.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} WebExpress. Todos los derechos reservados.
          </p>
          <p className="text-sm text-slate-500">
            Hecho con ❤️ en Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
