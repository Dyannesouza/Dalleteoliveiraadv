import { useState } from 'react';
import { Phone, Mail, Instagram, MapPin, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Olá! Meu nome é ${formData.name}.%0A%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0A%0AMensagem: ${formData.message}`;
    const whatsappUrl = `https://wa.me/5581991601838?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contato" className="py-[50px] bg-[rgb(255,255,255)] px-[0px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-[rgb(117,50,44)] mb-4">
            Fale Conosco
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Entre em contato para agendar uma consulta ou esclarecer suas dúvidas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-[#7D4A4A] mb-6">Informações de Contato</h3>
              
              <div className="space-y-4">
                <a 
                  href="https://wa.me/5581991601838"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-700 hover:text-[#7D4A4A] transition-colors group"
                >
                  <div className="w-12 h-12 bg-[rgb(117,50,44)] rounded-lg flex items-center justify-center group-hover:bg-[#9B6B6B] transition-colors">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">WhatsApp</p>
                    <p>(81) 99160-1838</p>
                  </div>
                </a>

                <a 
                  href="mailto:adv.dalleteoliveira@gmail.com"
                  className="flex items-center space-x-4 text-gray-700 hover:text-[#7D4A4A] transition-colors group"
                >
                  <div className="w-12 h-12 bg-[rgb(117,50,44)] rounded-lg flex items-center justify-center group-hover:bg-[#9B6B6B] transition-colors">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p>adv.dalleteoliveira@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="https://www.instagram.com/dalleteoliveira.adv?igsh=bW54a3JmN3J2azQ4&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-700 hover:text-[#7D4A4A] transition-colors group"
                >
                  <div className="w-12 h-12 bg-[rgb(117,50,44)] rounded-lg flex items-center justify-center group-hover:bg-[#9B6B6B] transition-colors">
                    <Instagram className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Instagram</p>
                    <p>@dalleteoliveira.adv</p>
                  </div>
                </a>

                <div className="flex items-center space-x-4 text-gray-700">
                  <div className="w-12 h-12 bg-[rgb(117,50,44)] rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">OAB</p>
                    <p>OAB/PE 69.242</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#75322c] text-white rounded-lg p-6">
              <h4 className="mb-4">Horário de Atendimento</h4>
              <p className="text-[#E8D7C8] mb-2">Segunda a Sexta: 8h às 18h</p>
              <p className="text-[#E8D7C8] mb-2">Sábado: 8h à 12h</p>
              <p className="text-[#E8D7C8] text-sm">
                Atendimento personalizado mediante agendamento
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[rgb(255,255,255)] rounded-lg shadow-lg p-8">
            <h3 className="text-[rgb(117,50,44)] mb-6">Envie sua mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Nome completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7D4A4A] focus:border-transparent bg-white"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7D4A4A] focus:border-transparent bg-white"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7D4A4A] focus:border-transparent bg-white"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7D4A4A] focus:border-transparent resize-none bg-white"
                  placeholder="Descreva brevemente sua situação..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[rgb(117,50,44)] text-white px-6 py-3 rounded-lg hover:bg-[#9B6B6B] transition-colors flex items-center justify-center space-x-2 shadow-lg"
              >
                <Send size={20} />
                <span>Enviar via WhatsApp</span>
              </button>

              <p className="text-sm text-gray-500 text-center">
                Ao enviar, você será redirecionado ao WhatsApp
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}