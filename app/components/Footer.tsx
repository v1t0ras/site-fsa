import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">Fábrica de Software</h3>
            <p className="text-sm">
              Incubadora de software acadêmica do IFRS Campus Osório
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="hover:text-white transition">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#team" className="hover:text-white transition">
                  Time
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Redes Sociais</h4>
            <div className="space-y-2 text-sm">
              <p>LinkedIn • WhatsApp</p>
              <p>GitHub • Twitter</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>
            © 2024 Fábrica de Software Acadêmica - IFRS Campus Osório. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
