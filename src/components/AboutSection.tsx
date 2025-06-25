import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-10 md:py-20 px-4 md:px-12 bg-slate-50 overflow-hidden">
      <div className="max-w-full mx-auto grid md:grid-cols-5 gap-6 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative h-64 md:h-[650px] order-2 md:order-1 md:col-span-3"
        >
          <img src="/images/image-1.png" alt="Dreams House Construction" className="w-full h-full object-cover shadow-2xl" />
        </motion.div>
        <div className="order-1 md:order-2 md:col-span-2 px-0">
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
    </section>
  );
};

export default AboutSection; 