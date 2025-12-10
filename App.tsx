import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-gray-100 selection:bg-brand-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
}

export default App;