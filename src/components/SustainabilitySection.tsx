import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Settings } from "lucide-react";
import { useTranslation } from 'react-i18next';

interface SustainabilityCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

const SustainabilityCard = ({ icon, title, description, delay }: SustainabilityCardProps) => {
  return (
    
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="w-full max-w-xs"
    >
      <Card className="relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group h-80">
        <CardContent className="p-6 text-center h-full flex flex-col justify-center">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d={icon} />
              </svg>
            </div>
          </div>
          
          <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-3 font-audrey">
            {title.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < title.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h3>
          <div className="w-12 h-0.5 bg-gradient-to-r from-slate-500 to-slate-500 mx-auto mb-3"></div>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-lato">
            {description.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < description.split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const SustainabilitySection = () => {
  const { t } = useTranslation();
  
      const sustainabilityData = [
    {
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z",
      title: t('sustainability.cost_competitive.title'),
      description: t('sustainability.cost_competitive.description'),
      delay: 0.2
    },
    {
      icon: "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z",
      title: t('sustainability.execution_time.title'),
      description: t('sustainability.execution_time.description'),
      delay: 0.4
    },
    {
      icon: "M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z",
      title: t('sustainability.organization.title'),
      description: t('sustainability.organization.description'),
      delay: 0.6
    }
  ];

  return (
    <section id="sustentabilidade" className="py-10 md:py-20 px-4 md:px-6 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 relative overflow-hidden">
      <div className="max-w-full mx-auto relative z-10 px-2">
        <div className="text-center mb-8 md:mb-14 md:pt-8">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl font-light text-slate-800 uppercase tracking-wider font-audrey"
          >
{t('sustainability.title')}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <hr className="border-gray-500 mb-6 mt-4 w-20 text-center mx-auto border-spacing-0" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-slate-600 text-base md:text-lg max-w-4xl mx-auto leading-relaxed px-4 md:px-0 font-lato"
          >
{t('sustainability.subtitle')}
          </motion.p>
        </div>


        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {sustainabilityData.map((item, index) => (
            <SustainabilityCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              delay={item.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection; 