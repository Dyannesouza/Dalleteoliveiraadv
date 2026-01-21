import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#7D4A4A] to-[#9B6B6B] pt-20"
    >
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=1080&fit=crop" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl md:text-6xl text-[#E8D7C8] mb-6">
          Dállete Oliveira
        </h1>
        <p className="text-xl md:text-2xl text-[#E8D7C8] mb-4">
          Advocacia e Consultoria Jurídica
        </p>
        <p className="text-lg md:text-xl text-[#E8D7C8]/90 mb-8 max-w-2xl mx-auto">
          Especializada em Direito Previdenciário
        </p>
        <p className="text-base md:text-lg text-[#E8D7C8]/80 mb-12 max-w-3xl mx-auto">
          Dedicada a garantir os direitos previdenciários com responsabilidade e excelência.
        </p>
        <button
          onClick={scrollToContact}
          className="bg-[#E8D7C8] text-[rgb(117,50,44)] px-8 py-3 rounded-lg hover:bg-white transition-colors shadow-lg"
        >
          Entre em contato
        </button>
      </div>
    </section>
  );
}