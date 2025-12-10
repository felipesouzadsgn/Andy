import React from 'react';
import { Search, PenTool, Layout, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Descoberta',
    desc: 'Imersão no seu negócio para entender objetivos, público-alvo e desafios.'
  },
  {
    icon: PenTool,
    title: 'Wireframing',
    desc: 'Estruturação da arquitetura da informação e fluxos sem distrações visuais.'
  },
  {
    icon: Layout,
    title: 'Visual Design',
    desc: 'Criação da interface de alta fidelidade com foco em estética e usabilidade.'
  },
  {
    icon: Rocket,
    title: 'Entrega',
    desc: 'Organização dos arquivos, protótipos e suporte para a equipe de desenvolvimento.'
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-24 bg-dark-900 border-t border-dark-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Como eu trabalho</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Não é apenas sobre deixar bonito. Meu processo é baseado em dados, testes e alinhamento constante com as metas do negócio para garantir resultados reais.
            </p>
            <div className="p-6 bg-dark-800 rounded-xl border-l-4 border-brand-500">
              <p className="text-gray-300 italic">
                "Design é a inteligência tornada visível."
              </p>
              <p className="text-brand-400 mt-2 font-medium">— Alina Wheeler</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-dark-800 p-6 rounded-xl border border-dark-700 hover:border-brand-500/30 transition-colors">
                <div className="w-12 h-12 bg-dark-700 rounded-lg flex items-center justify-center mb-4 text-brand-400">
                  <step.icon size={24} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;