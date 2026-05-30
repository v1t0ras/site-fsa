export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Desenvolvimento de MVP',
      description: 'Transforme sua ideia em um produto mínimo viável em tempo recorde',
      icon: '🚀',
    },
    {
      id: 2,
      title: 'Aplicações Web',
      description: 'Soluções web modernas, escaláveis e responsivas',
      icon: '🌐',
    },
    {
      id: 3,
      title: 'Aplicações Mobile',
      description: 'Apps iOS e Android desenvolvidos com as melhores práticas',
      icon: '📱',
    },
    {
      id: 4,
      title: 'Consultoria Técnica',
      description: 'Orientação arquitetural e análise de soluções técnicas',
      icon: '💡',
    },
    {
      id: 5,
      title: 'Prototipagem Rápida',
      description: 'Validação de conceitos e ideias através de protótipos funcionais',
      icon: '⚙️',
    },
    {
      id: 6,
      title: 'Pesquisa e Inovação',
      description: 'Projetos de pesquisa aplicada com foco em soluções inovadoras',
      icon: '🔬',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          Nossos Serviços
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Oferecemos soluções completas de desenvolvimento de software para startups, empresas e projetos acadêmicos
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
