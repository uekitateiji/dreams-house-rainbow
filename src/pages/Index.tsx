import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Leaf, Clock, Settings, TreePine } from "lucide-react";
import Footer from "@/components/Footer";

// Adiciona CSS global para prevenir overflow horizontal
if (typeof document !== 'undefined') {
  document.documentElement.style.overflowX = 'hidden';
  document.body.style.overflowX = 'hidden';
}

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const heroImages = [
    "images/hero-image-1.png",
    "images/hero-image-2.png",
    "images/hero-image-3.png",
    "images/hero-image-4.png",
    "images/hero-image-5.png",
    "images/hero-image-6.png",
    "/7.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Troca a cada 4 segundos

    return () => clearInterval(interval);
  }, [heroImages.length]);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false); // Fecha o menu mobile após navegar
  };
  return <div className="min-h-screen bg-white overflow-x-hidden" style={{ maxWidth: '100vw' }}>
    {/* Navigation */}
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 py-4 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex justify-end items-center">

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('hero')} className="text-slate-600 hover:text-slate-800 transition-colors relative group py-2 font-lato font-light">
            Inicio
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
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left text-2xl font-light text-slate-800 hover:text-slate-600 transition-colors py-3 border-b border-slate-100"
              >
                Inicio
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => scrollToSection('sobre')}
                className="block w-full text-left text-2xl font-light text-slate-800 hover:text-slate-600 transition-colors py-3 border-b border-slate-100"
              >
                Sobre Nosotros
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => scrollToSection('sistema')}
                className="block w-full text-left text-2xl font-light text-slate-800 hover:text-slate-600 transition-colors py-3 border-b border-slate-100"
              >
                Sistema
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => scrollToSection('estilo')}
                className="block w-full text-left text-2xl font-light text-slate-800 hover:text-slate-600 transition-colors py-3 border-b border-slate-100"
              >
                Estilo de Vida
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => scrollToSection('sustentabilidade')}
                className="block w-full text-left text-2xl font-light text-slate-800 hover:text-slate-600 transition-colors py-3 border-b border-slate-100"
              >
                Sostenibilidad
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                onClick={() => scrollToSection('portfolio')}
                className="block w-full text-left text-2xl font-light text-slate-800 hover:text-slate-600 transition-colors py-3 border-b border-slate-100"
              >
                Portafolio
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                onClick={() => scrollToSection('contato')}
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

    {/* Hero Section */}
    <section id="hero" className="relative h-[95vh] md:h-screen flex items-center justify-center overflow-hidden px-8 pt-20 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200">
      {/* Background container with padding */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
        {/* Image carousel */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${image}')` }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentImageIndex ? 1 : 0
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Basic dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 text-center text-white md:px-6">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl md:text-6xl font-bold tracking-wider mb-6"
        >
          DREAMS HOUSE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[27px] md:text-2xl font-light md:mb-8 mx-auto tracking-widest font-audrey leading-none"
        >
          EMPRESA ESPECIALIZADA EN LA CONSTRUCCIÓN DE CASAS PERSONALIZADAS <br></br>EN STEELPANEL, CON TECNOLOGÍA DE ÚLTIMA GENERACIÓN.
        </motion.p>
      </div>
    </section>
    {/* Hero Section */}
    <section id="hero" className="relative flex items-center justify-center bg-gradient-to-r from-slate-100 via-blue-50 to-slate-200 h-[200px] md:h-[300px] lg:h-[450px]">

      <div className="relative z-10 text-center text-slate-900 px-4 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: -50 }} // antes de aparecer
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <hr className="border-gray-500 mb-4 w-20 text-center mx-auto border-spacing-0" />
        </motion.div>
        <h2 className="text-lg md:text-[15px] font-light mb-3 md:mb-4 uppercase font-lato">
          Por qué elegir a Dreams House
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }} // antes de aparecer
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-base md:text-[37px] leading-tight font-light mb-6 md:mb-8 mx-auto uppercase font-audrey">
          Quienes buscan una forma rápida, <br></br>eficiente y sostenible de construir.
        </motion.p>
      </div>
    </section >

    {/* Bottom Image Section */}
    <section className="w-full h-full md:h-full md:px-16 md:pb-16 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2.5,
          delay: 0.2,
          ease: [0.25, 0.1, 0.25, 1],
          type: "spring",
          stiffness: 60,
          damping: 20
        }}
        viewport={{ once: true }}
        className="w-full h-full"
      >
        <img
          src="/images/hero-image-7.png"
          alt="Dreams House Bottom"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>



    {/* Tropical Paradise Section */}
    < section id="sobre" className="py-10 md:py-20 px-4 md:px-12 bg-slate-50 overflow-hidden" >
      <div className="max-w-full mx-auto grid md:grid-cols-5 gap-6 md:gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative h-64 md:h-[650px] order-2 md:order-1 md:col-span-3"
        >
          <img src="/images/image-1.png" alt="Dreams House Construction" className="w-full h-full object-cover shadow-2xl rounded-lg" />
        </motion.div>
        <div className="order-1 md:order-2 md:col-span-2 px-0">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-8 sm:w-12 md:w-16 h-px bg-gray-400 mb-4 sm:mb-5 md:mb-6 mx-auto lg:mx-0"
          ></motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl text-center md:text-left md:text-5xl font-medium text-slate-800 mb-4 md:mb-6 leading-tight font-audrey"
          >
            SOBRE NOSOTROS
          </motion.h2>
          <div className="text-slate-600 leading-relaxed mb-6 md:mb-8 text-base md:text-lg break-words overflow-hidden font-lato text-center md:text-left">
            {[
              "QuikHouse", "es", "la", "fábrica", "responsable", "por", "el", "desarrollo", "y", "la", "producción", "del", "sistema", "constructivo", "SteelPanel,",
              "una", "tecnología", "industrializada", "que", "ofrece", "agilidad,", "resistencia", "y", "precisión", "en", "la", "construcción", "civil.",
              "Para", "llevar", "sus", "proyectos", "a", "la", "realidad", "con", "excelencia,", "QuikHouse", "cuenta", "con", "la", "alianza", "estratégica", "de",
              "Dreams", "House,", "empresa", "especializada", "en", "la", "ejecución", "de", "obras", "residenciales", "y", "comerciales.",
              "Juntas,", "ofrecen", "una", "solución", "completa:", "desde", "la", "fabricación", "de", "los", "paneles", "hasta", "el", "montaje", "final", "en", "el", "terreno."
            ].map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  duration: 0.8,
                  bounce: 0,
                  delay: 0.5 + index * 0.03
                }}
                viewport={{ once: true }}
                className="inline-block mr-1 break-words"
                style={{ willChange: "transform, opacity" }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section >

    {/* Ocean Experience Section */}
    < section id="sistema" className="py-10 md:py-20 px-4 md:px-12 overflow-hidden" >
      <div className="max-w-full mx-auto grid md:grid-cols-2 gap-6 md:gap-12 items-center">
        <div className="px-0">

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-8 sm:w-12 md:w-16 h-px bg-gray-400 mb-4 sm:mb-5 md:mb-6 mx-auto lg:mx-0"
          ></motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl text-center md:text-left md:text-5xl font-medium text-slate-800 mb-4 md:mb-6 leading-tight font-audrey"
          >
            NUESTRO SISTEMA
          </motion.h2>
          <div className="text-slate-600 leading-relaxed mb-6 md:mb-8 text-base md:text-lg break-words overflow-hidden font-lato text-center md:text-left">
            {[
              "SteelPanel", "es", "un", "sistema", "constructivo", "exclusivo", "de", "QuikHouse.", "Está", "compuesto", "por", "paneles", "metálicos", "autoportantes", "de", "acero",
              "galvanizado", "que", "cumplen", "funciones", "estructurales", "y", "divisorias.", "Al", "ser", "prefabricados,", "garantizan", "rapidez", "en", "la", "instalación,",
              "alta", "resistencia,", "durabilidad", "y", "flexibilidad", "para", "aplicar", "diversos", "acabados.", "Es", "una", "solución", "ideal", "para", "edificaciones", "de",
              "hasta", "dos", "plantas,", "tanto", "residenciales", "como", "comerciales,", "con", "la", "garantía", "de", "calidad", "de", "un", "sistema", "industrializado."
            ].map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  duration: 0.8,
                  bounce: 0,
                  delay: 0.5 + (index * 0.03)
                }}
                viewport={{ once: true }}
                className="inline-block mr-1 break-words"
                style={{ willChange: "transform, opacity" }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative h-64 md:h-[450px]"
        >


          <img src="/images/image-2.png" alt="SteelPanel System" className="w-full h-full object-cover shadow-2xl rounded-lg" />

        </motion.div>
      </div>
    </section >


    {/* Modern Accommodation Section */}
    < section id="estilo" className="py-10 md:py-20 px-4 md:px-12 bg-slate-50 overflow-hidden" >
      <div className="max-w-full mx-auto grid md:grid-cols-2 gap-6 md:gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative h-64 md:h-full order-2 md:order-1"
        >
          <img src="/images/image-3.png" alt="Dreams House Lifestyle" className="w-full h-full object-cover shadow-2xl rounded-lg" />
        </motion.div>
        <div className="order-1 md:order-2 px-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-8 sm:w-12 md:w-16 h-px bg-gray-400 mb-4 sm:mb-5 md:mb-6 mx-auto lg:mx-0"
          ></motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-5xl font-light text-slate-800 mb-4 md:mb-6 leading-tight break-words font-audrey text-center md:text-left"
          >
            NO CONSTRUIMOS CASAS, TRANSFORMAMOS TU ESTILO DE VIDA
          </motion.h2>
          <div className="text-slate-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-lg break-words overflow-hidden font-lato text-center md:text-left">
            {[
              "Elegir", "construir", "con", "el", "sistema", "SteelPanel", "es", "optar", "por", "una", "experiencia", "superior", "desde", "el", "primer", "día.",
              "Ofrecemos", "eficiencia", "en", "los", "plazos,", "acabados", "de", "alta", "calidad", "y", "flexibilidad", "total", "en", "los", "diseños.",
              "Cada", "proyecto", "se", "adapta", "a", "tus", "sueños,", "necesidades", "y", "estilo", "de", "vida,", "con", "soluciones", "personalizadas", "y",
              "atención", "a", "cada", "detalle.", "Nuestros", "sistemas", "permiten", "una", "instalación", "limpia,", "rápida", "y", "precisa,", "ideal", "para", "quienes",
              "valoran", "innovación,", "confort", "y", "durabilidad", "en", "su", "inversión.", "Más", "que", "construir", "estructuras,", "creamos", "espacios", "únicos", "que",
              "reflejan", "quién", "eres", "y", "cómo", "quieres", "vivir."
            ].map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  duration: 0.8,
                  bounce: 0,
                  delay: 0.5 + (index * 0.03)
                }}
                viewport={{ once: true }}
                className="inline-block mr-1 break-words"
                style={{ willChange: "transform, opacity" }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section >

    {/* Sustainability Section */}
    <section id="sustentabilidade" className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-200/30 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-2">
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-full mb-6"
          >
            <TreePine className="w-8 h-8 text-white" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-light text-slate-800 uppercase tracking-wider font-audrey mb-6"
          >
            SOSTENIBILIDAD
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-8"
          ></motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-slate-600 text-base md:text-lg max-w-4xl mx-auto leading-relaxed px-4 md:px-0 font-lato"
          >
            El sistema QuikHouse es una forma industrializada y productiva que elimina el uso<br className="hidden md:block" />
            de cemento y mortero en su composición, reduciendo significativamente el consumo de energía<br className="hidden md:block" />
            y promoviendo la construcción sostenible del futuro.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {/* Costo Competitivo */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-8 text-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4 font-audrey">COSTO COMPETITIVO</h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-4"></div>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-lato">
                  QuikHouse construye con máxima economía en línea con prácticas sostenibles, 
                  ofreciendo soluciones eficientes y rentables para cada proyecto.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Menor Tiempo */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-8 text-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-500 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4 font-audrey">MENOR TIEMPO DE EJECUCIÓN</h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-4"></div>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-lato">
                  El sistema QuikHouse es un modelo simplificado que acelera todo el proceso de 
                  construcción con resultados superiores y mayor eficiencia.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Organización */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-8 text-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Settings className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-500 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4 font-audrey">ORGANIZACIÓN DEL SITIO</h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4"></div>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-lato">
                  El ensamblaje inteligente elimina costos adicionales de mano de obra y 
                  evita el desperdicio de materiales, optimizando cada recurso.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Environmental Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
            <div className="text-center mb-8">
              <Leaf className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-light text-slate-800 font-audrey">IMPACTO AMBIENTAL</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-emerald-600 font-audrey">-70%</div>
                <div className="text-slate-600 font-lato">Reducción de residuos</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-teal-600 font-audrey">-50%</div>
                <div className="text-slate-600 font-lato">Menor consumo energético</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-cyan-600 font-audrey">100%</div>
                <div className="text-slate-600 font-lato">Materiales reciclables</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Portfolio Section */}
    < section id="portfolio" className="py-10 md:py-20 px-4 md:px-6 bg-slate-50" >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl font-light text-slate-800 mb-4 md:mb-6 font-audrey"
          >
            PORTAFOLIO
          </motion.h2>
        </div>

        <div className="space-y-8 md:space-y-16">
          {/* Fazenda Boa Vista */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden hover:shadow-xl transition-all hover:scale-[1.02] duration-300">
              <div className="relative">
                <div className="h-48 md:h-96 bg-cover bg-center" style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200')"
                }} />
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute top-4 left-4 bg-slate-700/80 text-white px-4 py-2 rounded-full backdrop-blur-sm"
                >
                  Fazenda Boa Vista - SP - BR
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute bottom-4 left-4 bg-slate-900/90 text-white px-4 py-2 rounded backdrop-blur-sm"
                >
                  Construido en 60 días - 2000 m²
                </motion.div>
              </div>
            </Card>
          </motion.div>

          {/* Casa Alphaville */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden hover:shadow-xl transition-all hover:scale-[1.02] duration-300">
              <div className="relative">
                <div className="h-48 md:h-96 bg-cover bg-center" style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200')"
                }} />
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="absolute top-4 left-4 bg-slate-700/80 text-white px-4 py-2 rounded-full backdrop-blur-sm"
                >
                  Casa Alphaville - SP - BR
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute bottom-4 left-4 bg-slate-900/90 text-white px-4 py-2 rounded backdrop-blur-sm"
                >
                  Construido en 90 días - 250 m²
                </motion.div>
              </div>
            </Card>
          </motion.div>

          {/* McDonald's */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden hover:shadow-xl transition-all hover:scale-[1.02] duration-300">
              <div className="relative">
                <div className="h-48 md:h-96 bg-cover bg-center" style={{
                  backgroundImage: "url('/images/hero-image-5.png')"
                }} />
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute top-4 left-4 bg-slate-700/80 text-white px-4 py-2 rounded-full backdrop-blur-sm"
                >
                  McDonald's - RS - BR
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="absolute bottom-4 left-4 bg-slate-900/90 text-white px-4 py-2 rounded backdrop-blur-sm"
                >
                  Construido en 20 días - 500 m²
                </motion.div>
              </div>
            </Card>
          </motion.div>

          {/* Casa de Campo */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden hover:shadow-xl transition-all hover:scale-[1.02] duration-300">
              <div className="relative">
                <div className="h-48 md:h-96 bg-cover bg-center" style={{
                  backgroundImage: "url('/images/hero-image-2.png')"
                }} />
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute top-4 left-4 bg-slate-700/80 text-white px-4 py-2 rounded-full backdrop-blur-sm"
                >
                  Casa de campo - SP - BR
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="absolute bottom-4 left-4 bg-slate-900/90 text-white px-4 py-2 rounded backdrop-blur-sm"
                >
                  Construido en 60 días - 300 m²
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-16 flex justify-center items-center space-x-4 md:space-x-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <img src="/logo/selo-verde.png" alt="Selo Verde" className="h-10 md:h-16 w-auto object-contain" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <img src="/logo/steel-panel.png" alt="SteelPanel Logo" className="h-10 md:h-16 w-auto object-contain" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <img src="/logo/miami-dade.png" alt="Miami Dade" className="h-10 md:h-16 w-auto object-contain" />
          </motion.div>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div >;
};

export default Index;
