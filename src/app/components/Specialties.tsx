import { 
  Heart, 
  ShieldAlert, 
  Thermometer, 
  Lock, 
  Baby, 
  ClipboardCheck, 
  ShieldCheck, 
  Calendar, 
  Activity, 
  Clock, 
  HandHeart, 
  Users 
} from 'lucide-react';

const specialtiesData = [
  {
    title: 'Pensão por morte',
    description: 'A Pensão Por Morte é um benefício previdenciário pago mensalmente aos dependentes do falecido, fosse ele aposentado ou não na hora do óbito. Funciona como uma substituição do valor que o finado recebia a título de aposentadoria ou de salário.',
    icon: Heart,
  },
  {
    title: 'Auxílio-acidente',
    description: 'O auxílio-acidente será devido aos segurados que sofrerem qualquer categoria de acidente que resulte em sequelas ou, então, que diminua a capacidade laborativa do trabalhador. As sequelas devem ser permanentes e, também, deverá haver prejuízo na vida profissional do trabalhador.',
    icon: ShieldAlert,
  },
  {
    title: 'Auxílio-doença',
    description: 'Benefício garantido ao segurado que estiver temporariamente incapacitado para o exercício do trabalho.',
    icon: Thermometer,
  },
  {
    title: 'Auxílio-reclusão',
    description: 'O benefício de um salário-mínimo, aos dependentes do preso, que contribuía antes da reclusão, independentemente de quando ocorreu a prisão ou o requerimento administrativo. Atenção: não é um salário-mínimo devido para cada',
    icon: Lock,
  },
  {
    title: 'Salário-maternidade',
    description: 'O salário-maternidade é um benefício previdenciário devido às pessoas que se afastam do trabalho por conta de: nascimento de filho, aborto não criminoso ou em casos previstos em lei (estupro ou risco de vida para a mãe), fetos natimortos',
    icon: Baby,
  },
  {
    title: 'Planejamento previdenciário',
    description: 'É um serviço de organização e de preparação pré-aposentadoria que visa garantir que o trabalhador se aposente da forma mais rápida e recebendo o melhor benefício possível. Como o processo de',
    icon: ClipboardCheck,
  },
  {
    title: 'Aposentadoria especial',
    description: 'Concedida conforme as condições especiais de trabalho.',
    icon: ShieldCheck,
  },
  {
    title: 'Aposentadoria por idade',
    description: 'Benefício concedido àquele que tiver alcançado a idade mínima para aposentadoria.',
    icon: Calendar,
  },
  {
    title: 'Aposentadoria por invalidez',
    description: 'O segurado que não tenha mais condições para o exercício do trabalho tem direito ao benefício.',
    icon: Activity,
  },
  {
    title: 'Aposentadoria por tempo de contribuição',
    description: 'Benefício garantido ao trabalhador que contribuiu pelo período mínimo estipulado na legislação.',
    icon: Clock,
  },
  {
    title: 'BPC/LOAS',
    description: 'Aplica-se à pessoa idosa com mais de 65 anos ou a pessoa com deficiência física ou mental, cuja renda per capita familiar seja de até 1/4 do salário mínimo.',
    icon: HandHeart,
  },
  {
    title: 'Aposentadoria do deficiente',
    description: 'A pessoa com deficiência (leve, moderada ou grave) obtém a sua aposentadoria, com redução de sua idade ou redução do tempo de contribuição.',
    icon: Users,
  },
];

export function Specialties() {
  return (
    <section id="especialidades" className="py-[20px] bg-[#75322c] px-[0px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Serviços especializados em Direito Previdenciário para garantir seus direitos
          </p>
        </div>

        {/* Grid of all specialties */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialtiesData.map((specialty, index) => {
            const Icon = specialty.icon;
            return (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-[#7D4A4A]"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#6c2c24] rounded-xl flex items-center justify-center">
                    <Icon className="text-[#E8D7C8]" size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[#7D4A4A] flex-1 pt-2">
                    {specialty.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  {specialty.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}