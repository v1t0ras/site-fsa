export default function Team() {
  const team = [
    {
      id: 1,
      name: 'Prof. Dr. [Nome]',
      title: 'Especialista em Backend',
      bio: 'Doutorando | Ex-Google',
      image: '👨‍💼',
    },
    {
      id: 2,
      name: 'Prof. Dra. [Nome]',
      title: 'Especialista em Frontend',
      bio: 'Doutora | Ex-Meta',
      image: '👩‍💼',
    },
    {
      id: 3,
      name: 'Prof. Dr. [Nome]',
      title: 'Arquiteto de Sistemas',
      bio: 'Doutor | Ex-Amazon',
      image: '👨‍💼',
    },
    {
      id: 4,
      name: 'Prof. Dr. [Nome]',
      title: 'Pesquisador em IA',
      bio: 'Doutor | Ex-Microsoft',
      image: '👨‍💼',
    },
  ];

  return (
    <section id="team" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          Nosso Time de Especialistas
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Doutores, pesquisadores e profissionais com experiência comprovada em grandes empresas de tecnologia
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-lg text-center hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{member.image}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {member.name}
              </h3>
              <p className="text-secondary font-semibold mb-2">
                {member.title}
              </p>
              <p className="text-gray-600 text-sm">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-12 text-sm italic">
          *Os dados dos professores serão adicionados em breve. Cada membro da equipe traz expertise e experiência profissional únicos ao projeto.
        </p>
      </div>
    </section>
  );
}
