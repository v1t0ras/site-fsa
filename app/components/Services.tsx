'use client';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'MVP Development',
      description: 'Transforme sua ideia em um produto mínimo viável pronto para mercado',
      icon: '🚀',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      title: 'Web Applications',
      description: 'Aplicações web escaláveis, modernas e responsivas com tecnologias cutting-edge',
      icon: '🌐',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 3,
      title: 'Mobile Apps',
      description: 'Apps iOS e Android com as melhores práticas de UX/UI e performance',
      icon: '📱',
      color: 'from-pink-500 to-pink-600',
    },
    {
      id: 4,
      title: 'Technical Consulting',
      description: 'Orientação arquitetural, code review e análise estratégica de soluções técnicas',
      icon: '💡',
      color: 'from-green-500 to-green-600',
    },
    {
      id: 5,
      title: 'Rapid Prototyping',
      description: 'Validação rápida de conceitos através de protótipos funcionais e iterativos',
      icon: '⚙️',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      id: 6,
      title: 'R&D Projects',
      description: 'Pesquisa aplicada e inovação com foco em soluções de impacto',
      icon: '🔬',
      color: 'from-red-500 to-red-600',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Oferecemos soluções completas de desenvolvimento de software com expertise em tecnologias modernas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <div className={`h-1 w-12 bg-gradient-to-r ${service.color} mt-6 rounded-full group-hover:w-full transition-all duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
