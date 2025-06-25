import { motion } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 py-4 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex justify-end items-center">

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-slate-600 hover:text-slate-800 transition-colors relative group py-2 font-lato font-light">
              Inicio
              <div className="absolute bottom-0 right-0 w-0 h-[1.5px] bg-slate-800 transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button onClick={() => scrollToSection('elegir')} className="text-slate-600 hover:text-slate-800 transition-colors relative group py-2 font-lato font-light">
              Por qué elegir
              <div className="absolute bottom-0 right-0 w-0 h-[1.5px] bg-slate-800 transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-slate-600 hover:text-slate-800 transition-colors relative group py-2 font-lato font-light">
              Sobre Nosotros
              <div className="absolute bottom-0 right-0 w-0 h-[1.5px] bg-slate-800 transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button onClick={() => scrollToSection('sistema')} className="text-slate-600 hover:text-slate-800 transition-colors relative group py-2 font-lato font-light">
              Sistema
              <div className="absolute bottom-0 right-0 w-0 h-[1.5px] bg-slate-800 transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button onClick={() => scrollToSection('estilo')} className="text-slate-600 hover:text-slate-800 transition-colors relative group py-2 font-lato font-light">
              Estilo de Vida
              <div className="absolute bottom-0 right-0 w-0 h-[1.5px] bg-slate-800 transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button onClick={() => scrollToSection('sustentabilidade')} className="text-slate-600 hover:text-slate-800 transition-colors relative group py-2 font-lato font-light">
              Sostenibilidad
              <div className="absolute bottom-0 right-0 w-0 h-[1.5px] bg-slate-800 transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-slate-600 hover:text-slate-800 transition-colors relative group py-2 font-lato font-light">
              Portafolio
              <div className="absolute bottom-0 right-0 w-0 h-[1.5px] bg-slate-800 transition-all duration-300 group-hover:w-full"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-800 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Modal */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-white z-[60] md:hidden"
        >
          <div className="flex flex-col h-full">
            {/* Header do Modal */}
            <div className="flex justify-between items-center p-6 border-b border-slate-200">
              <h2 className="text-xl font-bold text-slate-800">DREAMS HOUSE</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-slate-600 hover:text-slate-800 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 flex flex-col justify-center px-6">
              <div className="space-y-8">
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  onClick={() => { scrollToSection('hero'); setIsMobileMenuOpen(false); }}
                  className="block w-full text-left text-2xl font-light text-slate-800 hover:text-slate-600 transition-colors py-3 border-b border-slate-100"
                >
                  Inicio
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                  onClick={() => { scrollToSection('elegir'); setIsMobileMenuOpen(false); }}
                  className="block w-full text-left text-2xl font-light text-slate-800 hover:text-slate-600 transition-colors py-3 border-b border-slate-100"
                >
                  Por qué elegir
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  onClick={() => { scrollToSection('sobre'); setIsMobileMenuOpen(false); }}
                  className="block w-full text-left text-2xl font-light text-slate-800 hover:text-slate-600 transition-colors py-3 border-b border-slate-100"
                >
                  Sobre Nosotros
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => { scrollToSection('sistema'); setIsMobileMenuOpen(false); }}
                  className="block w-full text-left text-2xl font-light text-slate-800 hover:text-slate-600 transition-colors py-3 border-b border-slate-100"
                >
                  Sistema
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => { scrollToSection('estilo'); setIsMobileMenuOpen(false); }}
                  className="block w-full text-left text-2xl font-light text-slate-800 hover:text-slate-600 transition-colors py-3 border-b border-slate-100"
                >
                  Estilo de Vida
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => { scrollToSection('sustentabilidade'); setIsMobileMenuOpen(false); }}
                  className="block w-full text-left text-2xl font-light text-slate-800 hover:text-slate-600 transition-colors py-3 border-b border-slate-100"
                >
                  Sostenibilidad
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  onClick={() => { scrollToSection('portfolio'); setIsMobileMenuOpen(false); }}
                  className="block w-full text-left text-2xl font-light text-slate-800 hover:text-slate-600 transition-colors py-3 border-b border-slate-100"
                >
                  Portafolio
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  onClick={() => { scrollToSection('contato'); setIsMobileMenuOpen(false); }}
                  className="block w-full text-left text-2xl font-light text-slate-800 hover:text-slate-600 transition-colors py-3 border-b border-slate-100"
                >
                  Contacto
                </motion.button>
              </div>
            </div>

            {/* Footer do Modal */}
            <div className="p-6 border-t border-slate-200">
              <p className="text-center text-sm text-slate-500">
                Empresa especializada en construcción con SteelPanel
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Header; 