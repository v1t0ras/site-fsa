'use client';

import React from 'react';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Plataforma de e-commerce escalável com 10M+ transações/ano',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
      image: '🛍️',
      metrics: '2M+ usuários',
    },
    {
      id: 2,
      title: 'Healthcare App',
      description: 'App móvel para telemedicina com integração IA',
      tech: ['React Native', 'Node.js', 'MongoDB'],
      image: '🏥',
      metrics: '500K+ consultas',
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Dashboard analítico em tempo real com ML predictions',
      tech: ['React', 'D3.js', 'Python'],
      image: '📊',
      metrics: '100+ clientes',
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Portfólio de Projetos
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Projetos de impacto que transformaram ideias em soluções reais de mercado
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-primary to-accent p-12 flex items-center justify-center h-40 text-6xl">
                {project.image}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block px-3 py-1 bg-blue-50 text-secondary rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-semibold text-accent">
                    📈 {project.metrics}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-gradient-to-r from-secondary to-accent text-white font-bold py-4 px-8 rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105">
            Ver Mais Projetos
          </button>
        </div>
      </div>
    </section>
  );
}
