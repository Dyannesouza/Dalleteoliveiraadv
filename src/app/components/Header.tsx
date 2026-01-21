import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#6c2c24] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="https://i.imgur.com/6WdGrEB.jpeg"
              alt="Dállete Oliveira Advocacia" 
              className="h-12 w-auto cursor-pointer"
              onClick={() => scrollToSection('home')}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-[#E8D7C8] hover:text-white transition-colors px-3 py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('especialidades')}
              className="text-[#E8D7C8] hover:text-white transition-colors px-3 py-2"
            >
              Especialidades
            </button>
            <button
              onClick={() => scrollToSection('quem-sou')}
              className="text-[#E8D7C8] hover:text-white transition-colors px-3 py-2"
            >
              Sobre mim
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-[#E8D7C8] hover:text-white transition-colors px-3 py-2"
            >
              Fale conosco
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#E8D7C8] hover:text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-[#E8D7C8] hover:text-white transition-colors px-3 py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('especialidades')}
              className="block w-full text-left text-[#E8D7C8] hover:text-white transition-colors px-3 py-2"
            >
              Especialidades
            </button>
            <button
              onClick={() => scrollToSection('quem-sou')}
              className="block w-full text-left text-[#E8D7C8] hover:text-white transition-colors px-3 py-2"
            >
              Sobre mim
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="block w-full text-left text-[#E8D7C8] hover:text-white transition-colors px-3 py-2"
            >
              Fale conosco
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}