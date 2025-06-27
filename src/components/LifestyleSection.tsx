import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const LifestyleSection = () => {
  const { t } = useTranslation();
  
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
            {t('lifestyle.title')}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-slate-600 leading-relaxed mb-6 md:mb-10 text-sm md:text-lg break-words overflow-hidden font-lato text-center md:text-left"
          >
            {t('lifestyle.description')}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start gap-8"
          >
            <img
              src="/logo/miami-dade.png"
              alt="QuikHouse Logo"
              className="h-10 md:h-16 object-contain "
            />
            <img
              src="/logo/patented.png"
              alt="QuikHouse Logo"
              className="h-10 md:h-16 object-contain "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection; 