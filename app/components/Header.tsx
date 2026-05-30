'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">FS</span>
          </div>
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            FSA
          </Link>
        </div>

        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={`absolute md:static top-full left-0 w-full md:w-auto bg-white/10 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none border-t md:border-0 border-white/20 md:border-white/0 flex flex-col md:flex-row gap-6 p-4 md:p-0 ${menuOpen ? 'block' : 'hidden md:flex'}`}>
          <Link href="#about" className="text-gray-700 hover:text-secondary font-medium transition-colors">
            Sobre
          </Link>
          <Link href="#team" className="text-gray-700 hover:text-secondary font-medium transition-colors">
            Time
          </Link>
          <Link href="#services" className="text-gray-700 hover:text-secondary font-medium transition-colors">
            Serviços
          </Link>
          <Link href="#portfolio" className="text-gray-700 hover:text-secondary font-medium transition-colors">
            Portfólio
          </Link>
          <Link href="#contact" className="bg-gradient-to-r from-secondary to-accent text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-shadow">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
