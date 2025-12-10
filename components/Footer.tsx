import React from 'react';
import { Hexagon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-950 py-12 border-t border-dark-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <Hexagon size={24} className="text-brand-600" />
            <span className="text-xl font-bold text-white tracking-tighter">andy<span className="text-brand-600">.</span></span>
          </div>

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Andy UI Design. Todos os direitos reservados.
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Termos</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;