import React from 'react';
import { ArrowRight, Layers, Palette, Smartphone } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dark-900">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-500/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-violet-600/5 blur-[100px] rounded-full -translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-800 border border-dark-700 text-brand-400 text-sm mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            Disponível para novos projetos
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight animate-slide-up">
            Transformando complexidade em <span className="text-brand-400">interfaces memoráveis</span>.
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            UI Design estratégico para produtos digitais. Crio experiências visuais que engajam usuários e impulsionam o crescimento do seu negócio.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <a href="#projects">
              <Button variant="primary" size="lg">
                Ver Portfólio <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="secondary" size="lg">
                Solicitar Orçamento
              </Button>
            </a>
          </div>

          {/* Stats / Tech Stack */}
          <div className="mt-20 pt-10 border-t border-dark-800 flex flex-wrap justify-center gap-8 md:gap-16 text-gray-500 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3">
              <Layers className="w-6 h-6 text-brand-500" />
              <span className="font-medium">Design Systems</span>
            </div>
            <div className="flex items-center gap-3">
              <Smartphone className="w-6 h-6 text-brand-500" />
              <span className="font-medium">Mobile Apps</span>
            </div>
            <div className="flex items-center gap-3">
              <Palette className="w-6 h-6 text-brand-500" />
              <span className="font-medium">Web Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;