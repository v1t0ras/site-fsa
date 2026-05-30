export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Sobre a Fábrica de Software Acadêmica
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Um Habitat de Conhecimento
            </h3>
            <p className="text-gray-600 mb-4">
              A Fábrica de Software Acadêmica é uma incubadora única que combina a excelência do ensino acadêmico com a experiência prática de profissionais que trabalharam em grandes empresas de tecnologia.
            </p>
            <p className="text-gray-600 mb-4">
              Oferecemos um ambiente propício para o desenvolvimento de soluções tecnológicas inovadoras, onde estudantes, pesquisadores e profissionais colaboram para transformar ideias em produtos reais.
            </p>
            <p className="text-gray-600">
              Nossa missão é criar ecossistema de inovação que prepare profissionais competentes e gere valor para a sociedade através da tecnologia.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-bold text-primary mb-2">📚 Cursos</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Análise e Desenvolvimento de Sistemas</li>
                <li>• Técnico em Informática</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-bold text-secondary mb-2">🏫 Instituição</h4>
              <p className="text-gray-600">IFRS Campus Osório</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-bold text-primary mb-2">👥 Equipe</h4>
              <p className="text-gray-600">Professores doutores e pesquisadores com experiência em empresas de tecnologia de renome</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
