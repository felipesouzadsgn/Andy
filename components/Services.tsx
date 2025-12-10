import React from 'react';
import { ServicePackage } from '../types';
import { Check, Zap } from 'lucide-react';
import Button from './Button';

const services: ServicePackage[] = [
  {
    id: 'landing',
    title: 'Landing Page',
    price: 'A partir de R$ 2.500',
    description: 'Perfeito para lançamentos de produtos e captura de leads com alta conversão.',
    features: [
      'Design Exclusivo (Desktop & Mobile)',
      'Copywriting Estratégico',
      'Otimização para Conversão',
      'Assets prontos para dev',
      'Entrega em 5 dias úteis'
    ]
  },
  {
    id: 'app',
    title: 'App Design',
    price: 'A partir de R$ 5.000',
    description: 'Interface de aplicativo completa, do wireframe ao protótipo navegável.',
    recommended: true,
    features: [
      'Fluxo de Usuário (User Flow)',
      'Design System Básico',
      'Prototipagem Interativa',
      'Até 15 Telas',
      'Suporte aos Desenvolvedores'
    ]
  },
  {
    id: 'system',
    title: 'Design System',
    price: 'A partir de R$ 10.000',
    description: 'Padronização visual completa para escalar seu produto com consistência.',
    features: [
      'Biblioteca de Componentes (Figma)',
      'Documentação Completa',
      'Tokens de Design',
      'Ícones e Ilustrações Custom',
      'Treinamento da Equipe'
    ]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-dark-800 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Investimento & Pacotes</h2>
          <p className="text-gray-400">
            Soluções flexíveis adaptadas ao estágio do seu negócio. Todos os pacotes incluem suporte inicial e arquivos fonte abertos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`relative rounded-2xl p-8 flex flex-col h-full border ${
                service.recommended 
                  ? 'bg-dark-900 border-brand-500 shadow-2xl shadow-brand-500/10' 
                  : 'bg-dark-900 border-dark-700'
              }`}
            >
              {service.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-brand-600 to-brand-400 text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                  <Zap size={12} fill="currentColor" /> MAIS POPULAR
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <div className="text-3xl font-bold text-brand-400 mb-4">{service.price}</div>
              <p className="text-gray-400 text-sm mb-8 border-b border-dark-700 pb-6">
                {service.description}
              </p>

              <ul className="space-y-4 mb-8 flex-1">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="text-brand-500 shrink-0 mt-0.5" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                variant={service.recommended ? 'primary' : 'outline'} 
                fullWidth
                onClick={() => window.location.hash = '#contact'}
              >
                Selecionar Pacote
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;