import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-blue-900 to-accent text-white overflow-hidden flex items-center">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-20 text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium">
          ✨ Transformando ideias em soluções de impacto
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slideIn">
          Fábrica de Software <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Acadêmica</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto animate-slideIn" style={{animationDelay: '0.2s'}}>
          Reunindo excelência acadêmica com expertise profissional. Desenvolvemos soluções de software de alta qualidade para startups, empresas e projetos inovadores.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slideIn" style={{animationDelay: '0.4s'}}>
          <Link
            href="#contact"
            className="bg-gradient-to-r from-secondary to-accent text-white font-bold py-4 px-8 rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105"
          >
            Começar Projeto
          </Link>
          <Link
            href="#portfolio"
            className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            Ver Portfólio
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
          <div>
            <div className="text-4xl font-bold text-secondary mb-2">15+</div>
            <p className="text-white/70">Projetos Entregues</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">50+</div>
            <p className="text-white/70">Profissionais</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-secondary mb-2">10M+</div>
            <p className="text-white/70">Linhas de Código</p>
          </div>
        </div>
      </div>
    </section>
  );
}
