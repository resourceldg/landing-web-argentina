import { Phone, Mail, MapPin, Instagram, Linkedin } from 'lucide-react';

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
                href="#" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Enlaces</h4>
            <ul className="space-y-3">
              <li>
                <a href="#/" className="hover:text-blue-400 transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#/profesionales" className="hover:text-blue-400 transition-colors">Para Profesionales</a>
              </li>
              <li>
                <a href="#/regalo" className="hover:text-blue-400 transition-colors">Regalá una Web</a>
              </li>
              <li>
                <a href="#/whatsapp" className="hover:text-blue-400 transition-colors">Web + WhatsApp</a>
              </li>
              <li>
                <a href="#/web-50k" className="hover:text-blue-400 transition-colors">Precio</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <a 
                  href="https://wa.me/542236202061"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  +54 223 620-2061
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <a 
                  href="mailto:hola@webexpress.ar"
                  className="hover:text-blue-400 transition-colors"
                >
                  hola@webexpress.ar
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5" />
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
