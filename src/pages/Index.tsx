
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
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
    <section id="sustentabilidade" className="py-10 md:py-20 px-4 md:px-6 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 relative overflow-hidden">


      <div className="max-w-full mx-auto relative z-10 px-2">
        <div className="text-center mb-8 md:mb-14 pt-8">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl font-light text-slate-800 uppercase tracking-wider font-audrey"
          >
            SOSTENIBILIDAD
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-slate-600 text-xs md:text-base max-w-4xl mx-auto uppercase tracking-wide break-words px-2 md:px-0 font-lato"
          >
            EL SISTEMA QUICK HOUSE ES UNA FORMA INDUSTRIALIZADA Y PRODUCTIVA QUE ELIMINA EL USO<br />
            DE CEMENTO Y MORTERO EN SU COMPOSICIÓN, REDUCIENDO EL CONSUMO DE ENERGÍA.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Costo Competitivo */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-medium text-slate-800 mb-4 uppercase font-audrey">COSTO COMPETITIVO</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed uppercase font-lato font-light">
              QUICK HOUSE CONSTRUYE<br />
              ECONOMIZANDO UNA MÁXIMA<br />
              ECONOMÍA EN LA LÍNEA<br />
              CON PRÁCTICAS SOSTENIBLES
            </p>
          </motion.div>

          {/* Menor Tiempo */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-4 uppercase font-audrey">MENOR TIEMPO DE EJECUCIÓN</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed uppercase font-lato font-light">
              EL SISTEMA QUICK HOUSE ES UN<br />
              MODELO SIMPLIFICADO QUE HACE<br />
              QUE TODO EL PROCESO DE<br />
              CONSTRUCCIÓN SEA MÁS RÁPIDO Y<br />
              CON UN RESULTADO FINAL MÁS ALTO.
            </p>
          </motion.div>

          {/* Organización */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-4 uppercase font-audrey">ORGANIZACIÓN DEL SITIO DE<br />CONSTRUCCIÓN</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed uppercase font-lato font-light">
              DEBIDO A QUE EL ENSAMBLAJE ES<br />
              COMPLETAMENTE INTELIGIBLE, ESTA<br />
              ADICIONAL ELIMINA LOS COSTOS<br />
              ADICIONALES CON LA DE OBRA Y<br />
              EVITA EL DESPERDÍCIO DE MATERIALES
            </p>
          </motion.div>
        </div>
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
