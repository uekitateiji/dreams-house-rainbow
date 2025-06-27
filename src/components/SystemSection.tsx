import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const SystemSection = () => {
  const { t } = useTranslation();
  
  return (
    <section id="sistema" className="py-10 md:py-20 px-4 md:px-12 bg-white overflow-hidden">
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
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl text-center md:text-left md:text-5xl font-medium text-slate-800 mb-4 md:mb-6 leading-tight font-audrey"
          >
            {t('system.title')}
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-slate-600 leading-relaxed mb-6 md:mb-12 text-base md:text-lg break-words overflow-hidden font-lato text-center md:text-left"
          >
            {t('system.description')}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <img
              src="/logo/steel-panel.png"
              alt="QuikHouse Logo"
              className="h-10 md:h-10 object-contain"
            />
          </motion.div>
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