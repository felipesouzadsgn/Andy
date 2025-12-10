import React, { useState } from 'react';
import Button from './Button';
import { Mail, MapPin, Instagram, Linkedin, Dribbble, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'app',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', projectType: 'app', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Vamos criar algo incrível?</h2>
            <p className="text-gray-400 text-lg mb-10">
              Estou pronto para levar seu projeto para o próximo nível. Me chame no WhatsApp ou preencha o formulário.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-dark-700 flex items-center justify-center text-brand-500">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">WhatsApp</p>
                  <a href="https://wa.me/5513997798645" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-lg font-medium">
                    (13) 99779-8645
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-dark-700 flex items-center justify-center text-brand-500">
                  <Instagram size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Instagram</p>
                  <a href="https://www.instagram.com/aniiebeck/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    @aniiebeck
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-dark-700 flex items-center justify-center text-brand-500">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Email</p>
                  <a href="mailto:contato@andy.ui" className="hover:text-white transition-colors">contato@andy.ui</a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-gray-500 text-sm font-medium mb-4">SIGA MEU TRABALHO</p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/aniiebeck/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-dark-700 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-dark-700 flex items-center justify-center text-gray-400 hover:bg-brand-500 hover:text-white transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-dark-700 flex items-center justify-center text-gray-400 hover:bg-pink-500 hover:text-white transition-all">
                  <Dribbble size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-dark-900 p-8 rounded-2xl border border-dark-700 shadow-2xl shadow-black/20">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <Check size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Mensagem Enviada!</h3>
                <p className="text-gray-400">Obrigado pelo contato. Responderei em até 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Seu Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-dark-800 border border-dark-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                    placeholder="João Silva"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Profissional</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-dark-800 border border-dark-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                    placeholder="joao@empresa.com"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-400 mb-2">Interesse</label>
                  <div className="relative">
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full bg-dark-800 border border-dark-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none appearance-none cursor-pointer"
                    >
                      <option value="landing">Landing Page</option>
                      <option value="app">App Mobile</option>
                      <option value="system">Design System</option>
                      <option value="consulting">Consultoria / Outro</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Detalhes do Projeto</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-dark-800 border border-dark-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Conte um pouco sobre seus objetivos..."
                  />
                </div>

                <Button type="submit" fullWidth disabled={isSubmitting}>
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Simple Icon for success state
const Check = ({ size = 24, ...props }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default Contact;