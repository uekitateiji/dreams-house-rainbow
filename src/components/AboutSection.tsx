import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();
  
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
            {t('about.title')}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-slate-600 leading-relaxed mb-6 md:mb-8 text-base md:text-lg break-words overflow-hidden font-lato text-center md:text-left"
          >
            {t('about.description')}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 