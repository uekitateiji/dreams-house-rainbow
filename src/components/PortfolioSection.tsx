import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const PortfolioSection = () => {
  const { t } = useTranslation();
  
  const portfolioProjects = [
    {
      id: "fazenda-boa-vista",
      title: t('portfolio.projects.fazenda'),
      description: t('portfolio.descriptions.fazenda'),
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
      delay: 0.1
    },
    {
      id: "casa-alphaville",
      title: t('portfolio.projects.alphaville'),
      description: t('portfolio.descriptions.alphaville'),
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200",
      delay: 0.2
    },
    {
      id: "mcdonalds",
      title: t('portfolio.projects.mcdonalds'),
      description: t('portfolio.descriptions.mcdonalds'),
      image: "/images/hero-image-5.png",
      delay: 0.3
    },
    {
      id: "casa-campo",
      title: t('portfolio.projects.campo'),
      description: t('portfolio.descriptions.campo'),
      image: "/images/hero-image-2.png",
      delay: 0.4
    }
  ];

  const partnerLogos = [
    {
      src: "/logo/selo-verde.png",
      alt: "Selo Verde",
      delay: 0.3
    },
    {
      src: "/logo/steel-panel.png",
      alt: "SteelPanel Logo",
      delay: 0.5
    },
    {
      src: "/logo/miami-dade.png",
      alt: "Miami Dade",
      delay: 0.7
    }
  ];

  return (
    <section id="portfolio" className="py-10 md:py-20 px-4 md:px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl font-light text-slate-800 mb-4 md:mb-6 font-audrey"
          >
            {t('portfolio.title')}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <hr className="border-gray-500 mb-6 mt-4 w-20 text-center mx-auto border-spacing-0" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {portfolioProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: project.delay }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all hover:scale-[1.02] duration-300">
                <div className="relative">
                  <div
                    className="h-56 md:h-80 bg-cover bg-center"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  />
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: project.delay + 0.2 }}
                    viewport={{ once: true }}
                    className="absolute top-4 left-4 bg-slate-700/80 text-white px-4 py-2 backdrop-blur-sm"
                  >
                    {project.title}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: project.delay + 0.4 }}
                    viewport={{ once: true }}
                    className="absolute bottom-4 left-4 bg-slate-900/90 text-white px-4 py-2 backdrop-blur-sm"
                  >
                    {project.description}
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-16 flex justify-center items-center space-x-4 md:space-x-8"
        >
          {partnerLogos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: logo.delay }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-10 md:h-16 w-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection; 