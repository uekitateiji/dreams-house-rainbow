import { motion } from "framer-motion";

const LifestyleSection = () => {
  return (
    <section id="estilo" className="py-10 md:py-20 px-4 md:px-12 bg-slate-50 overflow-hidden">
      <div className="max-w-full mx-auto grid md:grid-cols-2 gap-6 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative h-64 md:h-full order-2 md:order-1"
        >
          <img src="/images/image-3.png" alt="Dreams House Lifestyle" className="w-full h-full object-cover shadow-2xl" />
        </motion.div>
        <div className="order-1 md:order-2 px-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-8 sm:w-12 md:w-16 h-px bg-gray-400 mb-4 sm:mb-5 md:mb-6 mx-auto lg:mx-0"
          />
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
    </section>
  );
};

export default LifestyleSection; 