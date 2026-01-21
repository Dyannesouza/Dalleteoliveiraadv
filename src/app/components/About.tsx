import { Scale, Heart, Award } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function About() {
  return (
    <section id="quem-sou" className="p-[0px] bg-white">
      <div className="max-w-7xl mx-auto px-[32px] sm:px-6 lg:px-8 py-[20px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-[rgb(117,50,44)] mb-4">
            Sobre mim
          </h2>
          <div className="w-20 h-1 bg-[rgb(117,50,44)] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 max-w-5xl mx-auto">
          <div className="flex justify-center">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" 
              alt="Dállete Oliveira - Advogada Previdenciária" 
              className="w-64 h-auto object-contain rounded-2xl shadow-xl"
            />
          </div>

          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-justify">
              Me chamo <span className="text-[rgb(117,50,44)]">Dállete Oliveira</span>, advogada inscrita na OAB/PE sob o 
              número 69.242. Sou Bacharel em Direito pela Universidade de Pernambuco (UPE), com pós-graduação em Direito Civil e Processo Civil.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify">
              Minha missão é garantir que você tenha acesso aos direitos previdenciários que conquistou 
              ao longo da sua vida. Agindo com dedicação e comprometimento, trabalho para que cada 
              cliente receba o melhor atendimento possível.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify">
              Acredito em um atendimento humanizado, onde cada caso é tratado com a atenção e o cuidado 
              que merece. Estou aqui para orientar, esclarecer dúvidas e lutar pelos seus direitos.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[rgb(117,50,44)] rounded-lg flex items-center justify-center">
              <Scale className="text-[#E8D7C8]" size={24} />
            </div>
            <div>
              <h3 className="text-[rgb(117,50,44)] mb-2">Expertise Jurídica</h3>
              <p className="text-gray-600 text-sm">
                Amplo conhecimento em legislação previdenciária e atualização constante
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[rgb(117,50,44)] rounded-lg flex items-center justify-center">
              <Heart className="text-[#E8D7C8]" size={24} />
            </div>
            <div>
              <h3 className="text-[rgb(117,50,44)] mb-2">Atendimento Humanizado</h3>
              <p className="text-gray-600 text-sm">
                Cada cliente é único e recebe atenção personalizada
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[rgb(117,50,44)] rounded-lg flex items-center justify-center">
              <Award className="text-[#E8D7C8]" size={24} />
            </div>
            <div>
              <h3 className="text-[rgb(117,50,44)] mb-2">Comprometimento</h3>
              <p className="text-gray-600 text-sm">
                Dedicação total para conquistar o melhor resultado para você
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}