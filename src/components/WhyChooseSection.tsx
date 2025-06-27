import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const WhyChooseSection = () => {
  const { t } = useTranslation();
  
  return (
    <>
      {/* Por qué elegir a Dreams House Section */}
      <section id="elegir" className="relative flex items-center justify-center bg-gradient-to-r  h-[200px] md:h-[300px] lg:h-[450px bg-slate-200">
        <div className="relative z-10 text-center text-slate-900 px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <hr className="border-gray-500 mb-4 w-20 text-center mx-auto border-spacing-0" />
          </motion.div>
          <h2 className="text-lg md:text-[15px] font-light mb-3 md:mb-4 uppercase font-lato">
            {t('why_choose.section_title')}
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-base md:text-[37px] leading-tight font-light mb-6 md:mb-8 mx-auto uppercase font-audrey"
            dangerouslySetInnerHTML={{ __html: t('why_choose.title') }}
          />
        </div>
      </section>

      {/* Bottom Image Section */}
      <section className="w-full h-full md:h-full bg-gradient-to-br bg-slate-200">
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
    </>
  );
};

export default WhyChooseSection; 