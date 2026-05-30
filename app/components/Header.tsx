'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            FSA
          </Link>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={`absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent flex flex-col md:flex-row gap-6 p-4 md:p-0 ${menuOpen ? 'block' : 'hidden md:flex'}`}>
          <Link href="#about" className="text-gray-700 hover:text-primary">
            Sobre
          </Link>
          <Link href="#team" className="text-gray-700 hover:text-primary">
            Time
          </Link>
          <Link href="#services" className="text-gray-700 hover:text-primary">
            Serviços
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-primary">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
