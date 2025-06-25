import { motion } from "framer-motion";

const SystemSection = () => {
  return (
    <section id="sistema" className="py-10 md:py-20 px-4 md:px-12 overflow-hidden">
      <div className="max-w-full mx-auto grid md:grid-cols-2 gap-6 md:gap-12 items-center">
        <div className="px-0">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
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
          <img src="/images/image-2.png" alt="SteelPanel System" className="w-full h-full object-cover shadow-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default SystemSection; 