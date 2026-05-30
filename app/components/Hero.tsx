import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Berço do Conhecimento em Desenvolvimento de Software
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Transformando ideias em produtos tecnológicos inovadores
        </p>
        <p className="text-base md:text-lg mb-12 max-w-3xl mx-auto opacity-85">
          Localizada no <strong>IFRS Campus Osório</strong>, a Fábrica de Software Acadêmica reúne doutores, pesquisadores e profissionais experientes que já trabalharam em grandes empresas de tecnologia. Somos o ponto de encontro entre a excelência acadêmica e a prática profissional.
        </p>
        <Link
          href="#contact"
          className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
        >
          Vamos Conversar
        </Link>
      </div>
    </section>
  );
}
