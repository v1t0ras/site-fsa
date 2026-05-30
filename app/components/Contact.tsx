export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Vamos Começar um Projeto Juntos?
        </h2>
        <p className="text-lg mb-4 opacity-90">
          Estamos prontos para ajudar sua startup, empresa ou projeto a decolar com soluções tecnológicas inovadoras.
        </p>
        <p className="text-base mb-12 opacity-85 max-w-2xl mx-auto">
          Entre em contato conosco através de um dos canais abaixo e vamos conversar sobre suas necessidades e como podemos colaborar no seu projeto.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="https://wa.me/?text=Olá! Gostaria de conhecer mais sobre os serviços de desenvolvimento da Fábrica de Software Acadêmica."
            className="bg-white text-primary font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition flex items-center justify-center gap-3"
          >
            <span className="text-2xl">📱</span>
            WhatsApp
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition flex items-center justify-center gap-3"
          >
            <span className="text-2xl">💼</span>
            LinkedIn
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-white/30">
          <p className="text-sm opacity-75">
            IFRS Campus Osório | Fábrica de Software Acadêmica
          </p>
        </div>
      </div>
    </section>
  );
}
