export default function TechStack() {
  const categories = [
    {
      name: 'Frontend',
      tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
    },
    {
      name: 'Backend',
      tech: ['Node.js', 'Python', 'Go', 'Java', 'PostgreSQL'],
    },
    {
      name: 'Mobile',
      tech: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    },
    {
      name: 'Cloud & DevOps',
      tech: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD'],
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Stack Tecnológico
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Desenvolvemos com as tecnologias mais modernas e confiáveis do mercado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-secondary to-accent rounded-full"></div>
                {category.name}
              </h3>
              <ul className="space-y-3">
                {category.tech.map((item) => (
                  <li
                    key={item}
                    className="text-gray-700 font-medium text-sm flex items-center gap-2 hover:text-secondary transition-colors"
                  >
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-gray-200">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">99.9%</div>
              <p className="text-gray-600">Uptime em Produção</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">5</div>
              <p className="text-gray-600">Anos de Experiência</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">ISO 27001</div>
              <p className="text-gray-600">Certificação de Segurança</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
