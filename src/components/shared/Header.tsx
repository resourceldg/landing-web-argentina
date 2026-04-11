import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  variant?: 'light' | 'dark';
  ctaText?: string;
  ctaLink?: string;
}

export default function Header({ 
  variant = 'light', 
  ctaText = 'Charlemos',
  ctaLink = '#/whatsapp'
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = variant === 'dark';
  const bgClass = isScrolled 
    ? (isDark ? 'bg-slate-900/95' : 'bg-white/95') + ' backdrop-blur-md shadow-sm'
    : isDark ? 'bg-transparent' : 'bg-transparent';
  
  const textClass = isDark || isScrolled ? 'text-slate-900' : 'text-slate-900';

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const whatsappUrl = 'https://wa.me/542236202061?text=Hola!%20Quiero%20mi%20web%20personal.';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - Link a home */}
          <a href="#/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className={`font-bold text-lg ${textClass}`}>WebExpress</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection('beneficios')} className={`text-sm font-medium hover:text-blue-600 transition-colors ${textClass}`}>
              Beneficios
            </button>
            <button onClick={() => scrollToSection('precio')} className={`text-sm font-medium hover:text-blue-600 transition-colors ${textClass}`}>
              Precios
            </button>
            <button onClick={() => scrollToSection('faq')} className={`text-sm font-medium hover:text-blue-600 transition-colors ${textClass}`}>
              FAQ
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="sm" className="gap-2">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </a>
            <a href={ctaLink}>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                {ctaText}
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${textClass}`} />
            ) : (
              <Menu className={`w-6 h-6 ${textClass}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white rounded-2xl shadow-xl mt-2 p-4 animate-scale-in">
            <nav className="flex flex-col gap-2">
              <button onClick={() => scrollToSection('beneficios')} className="text-left px-4 py-3 rounded-lg hover:bg-slate-100 text-slate-700 font-medium">
                Beneficios
              </button>
              <button onClick={() => scrollToSection('precio')} className="text-left px-4 py-3 rounded-lg hover:bg-slate-100 text-slate-700 font-medium">
                Precios
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-left px-4 py-3 rounded-lg hover:bg-slate-100 text-slate-700 font-medium">
                FAQ
              </button>
              <hr className="my-2" />
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-slate-100 text-slate-700 font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a href={ctaLink}>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-2">
                  {ctaText}
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
