'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Meu nome é ${formData.name} da ${formData.company}. Gostaria de conversar sobre: ${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/5551998737869?text=${encodedMessage}`);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Pronto para Começar?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Vamos converter sua ideia em realidade. Entre em contato e discutimos como podemos ajudá-lo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Conecte Conosco</h3>

            <div className="space-y-6">
              <a
                href="https://wa.me/5551998737869?text=Olá! Gostaria de conhecer mais sobre os serviços da Fábrica de Software Acadêmica."
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="w-14 h-14 bg-green-500 rounded-lg flex items-center justify-center text-2xl">
                  📱
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-900">WhatsApp</h4>
                  <p className="text-gray-600 text-sm">Resposta rápida</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center text-2xl">
                  💼
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-900">LinkedIn</h4>
                  <p className="text-gray-600 text-sm">Conecte profissionalmente</p>
                </div>
              </a>

              <a
                href="mailto:contato@fsa.com"
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="w-14 h-14 bg-purple-500 rounded-lg flex items-center justify-center text-2xl">
                  ✉️
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <p className="text-gray-600 text-sm">contato@fsa.com</p>
                </div>
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-4">
                <strong>Localização:</strong> IFRS Campus Osório, RS
              </p>
              <p className="text-sm text-gray-600">
                Disponível para projetos em todo Brasil
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  Empresa/Projeto
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition"
                  placeholder="Nome da sua empresa"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  Conte-nos sobre seu projeto
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition resize-none"
                  placeholder="Descreva brevemente seu projeto..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-secondary to-accent text-white font-bold py-4 rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
