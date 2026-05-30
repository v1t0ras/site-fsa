export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'João Silva',
      role: 'CEO, TechStartup Co.',
      text: 'Entregaram nosso MVP em 6 semanas. Qualidade de código impeccável e comunicação excelente.',
      avatar: '👨‍💼',
    },
    {
      id: 2,
      name: 'Maria Santos',
      role: 'Product Manager, FinTech Inc.',
      text: 'O time é altamente qualificado. Superaram expectativas em scalability e performance.',
      avatar: '👩‍💼',
    },
    {
      id: 3,
      name: 'Carlos Oliveira',
      role: 'CTO, E-commerce Plus',
      text: 'Excelentes profissionais. Documentação clara e arquitetura bem pensada. Recomendo!',
      avatar: '👨‍💻',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary via-blue-900 to-accent text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Histórias de Sucesso
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Confira o que nossos clientes têm a dizer sobre suas experiências
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">{testimonial.avatar}</div>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-white/70 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-white/90 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="mt-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
