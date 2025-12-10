import React from 'react';
import { Project } from '../types';
import { ExternalLink } from 'lucide-react';

const projects: Project[] = [
  {
    id: '1',
    title: 'FinTech Dashboard',
    category: 'Web App',
    description: 'Interface de gestão financeira para startups com foco em visualização de dados.',
    imageUrl: 'https://picsum.photos/seed/finance/800/600',
  },
  {
    id: '2',
    title: 'HealthTrack Mobile',
    category: 'Mobile App',
    description: 'Aplicativo de monitoramento de saúde e bem-estar com modo escuro nativo.',
    imageUrl: 'https://picsum.photos/seed/health/800/600',
  },
  {
    id: '3',
    title: 'E-commerce Redesign',
    category: 'Web Design',
    description: 'Redesign completo da experiência de compra para uma marca de moda luxo.',
    imageUrl: 'https://picsum.photos/seed/fashion/800/600',
  },
  {
    id: '4',
    title: 'SaaS Analytics',
    category: 'Dashboard',
    description: 'Sistema de análise preditiva para empresas de logística.',
    imageUrl: 'https://picsum.photos/seed/tech/800/600',
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-dark-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trabalhos Selecionados</h2>
            <p className="text-gray-400">
              Uma coleção de projetos onde design, funcionalidade e estratégia se encontram.
            </p>
          </div>
          <a href="#" className="text-brand-400 font-medium hover:text-brand-300 transition-colors flex items-center gap-2">
            Ver Dribbble <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative rounded-2xl overflow-hidden bg-dark-800 border border-dark-700 hover:border-brand-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-500/10 hover:-translate-y-1">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <span className="text-brand-400 text-sm font-semibold uppercase tracking-wider">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{project.description}</p>
                <button className="text-white font-medium inline-flex items-center gap-2 hover:text-brand-400 transition-colors">
                  Ver Case Study <ArrowRightIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default Portfolio;