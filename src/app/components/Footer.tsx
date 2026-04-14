import { Scale, Instagram } from 'lucide-react';
import { useEffect } from 'react';
import logo from '../../imports/ffdfdd.png';

export function Footer() {
  useEffect(() => {
    // Carrega o script do Elfsight dinamicamente
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove o script quando o componente desmontar
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <footer className="bg-[rgb(117,50,44)] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Instagram Feed Section */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <h4 className="text-[#E8D7C8] mb-2 flex items-center justify-center gap-2">
              <Instagram size={24} />
              Siga no Instagram
            </h4>
            <a 
              href="https://www.instagram.com/dalleteoliveira.adv?igsh=bW54a3JmN3J2azQ4&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E8D7C8]/80 hover:text-white transition-colors text-sm"
            >
              @dalleteoliveira.adv
            </a>
          </div>
          
          {/* Instagram Embed Widget */}
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="elfsight-app-a873eef6-d9ce-4f9f-a185-93ccc8d4ef85" data-elfsight-app-lazy></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Scale size={32} className="text-[#E8D7C8]" />
              <div>
                <h3 className="text-[#E8D7C8]">Dállete Oliveira</h3>
                <p className="text-sm text-[#E8D7C8]/80">Advocacia e Consultoria Jurídica</p>
              </div>
            </div>
            <p className="text-[#E8D7C8]/80 text-sm">
              Trabalhando com dedicação para garantir seus direitos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#E8D7C8] mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-[#E8D7C8]/80 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#especialidades" className="text-[#E8D7C8]/80 hover:text-white transition-colors">
                  Especialidades
                </a>
              </li>
              <li>
                <a href="#quem-sou" className="text-[#E8D7C8]/80 hover:text-white transition-colors">
                  Sobre mim
                </a>
              </li>
              <li>
                <a href="#contato" className="text-[#E8D7C8]/80 hover:text-white transition-colors">
                  Fale conosco
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#E8D7C8] mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-[#E8D7C8]/80">
              <li>OAB/PE 69.242</li>
              <li>(81) 99160-1838</li>
              <li>adv.dalleteoliveira@gmail.com</li>
              <li>
                <a 
                  href="https://www.instagram.com/dalleteoliveira.adv?igsh=bW54a3JmN3J2azQ4&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @dalleteoliveira.adv
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#E8D7C8]/20 pt-8 text-center">
          <p className="text-[#E8D7C8]/80 text-sm">
            © {new Date().getFullYear()} Dállete Oliveira - Advocacia e Consultoria Jurídica.
            Todos os direitos reservados.
          </p>
          <div className="mt-4 flex justify-center">
            <a
              href="https://byte4team.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity"
            >
              <img
                src={logo}
                alt="Dállete Oliveira Logo"
                className="h-16 w-auto opacity-80 rounded-[8px]"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}