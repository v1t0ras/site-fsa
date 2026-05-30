import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FS</span>
              </div>
              <h3 className="text-white font-bold text-lg">FSA</h3>
            </div>
            <p className="text-sm text-gray-400">
              Incubadora de software acadêmica transformando ideias em soluções de impacto
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-secondary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-secondary transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-gray-400 hover:text-secondary transition-colors">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-secondary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Serviços</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400 hover:text-secondary transition-colors cursor-pointer">MVP Development</li>
              <li className="text-gray-400 hover:text-secondary transition-colors cursor-pointer">Web Apps</li>
              <li className="text-gray-400 hover:text-secondary transition-colors cursor-pointer">Mobile Apps</li>
              <li className="text-gray-400 hover:text-secondary transition-colors cursor-pointer">Consultoria</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Redes Sociais</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors text-lg">
                💼
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors text-lg">
                🐙
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors text-lg">
                🐦
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 Fábrica de Software Acadêmica - IFRS Campus Osório. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">Termos</a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
