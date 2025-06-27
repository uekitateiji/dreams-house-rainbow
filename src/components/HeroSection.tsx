import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile"
import { useTranslation } from 'react-i18next';
import dreamsHouseLogo from '../assets/logo/dreams-house-logo.svg';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useTranslation();
  const heroImages = [
    "images/hero-image-1.png",
    "images/hero-image-2.png",
    "images/hero-image-3.png",
    "images/hero-image-4.png",
    "images/hero-image-5.png",
    "images/hero-image-6.png",
    "/7.png"
  ];
  const isMobile = useIsMobile();
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Troca a cada 4 segundos

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section id="hero" className="relative h-[95vh] md:h-screen flex items-center justify-center overflow-hidden px-8 pt-24 md:pt-28 bg-gradient-to-br bg-slate-200">
      {/* Background container with padding */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
        {/* Image carousel box */}
        <div className="relative w-full h-full overflow-hidden">
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

          {/* Basic dark overlay */}
          <div className="absolute inset-0 bg-black/70" />
        </div>
      </div>

      <div className="relative z-10 text-center text-white md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-6 flex justify-center"
        >
          <img
            src={dreamsHouseLogo}
            alt="Dreams House"
            className="h-16 md:h-24 w-auto"
          />
        </motion.div>

        {isMobile ? (
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-[20px] md:text-2xl font-light md:mb-8 mx-auto tracking-widest font-audrey leading-none"
            dangerouslySetInnerHTML={{ __html: t('hero.description_mobile') }}
          />
        ) : (
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-[27px] md:text-2xl font-light md:mb-8 mx-auto tracking-widest font-audrey leading-none"
            dangerouslySetInnerHTML={{ __html: t('hero.description') }}
          />
        )}
      </div>
    </section>
  );
};

export default HeroSection; 