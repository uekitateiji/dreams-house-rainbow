import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

interface Language {
  code: string;
  name: string;
  flag: string;
  country: string;
}

interface LanguageSelectorProps {
  dropdownDirection?: 'up' | 'down';
}

const languages: Language[] = [
  { code: 'es-UY', name: 'Español', flag: '🇺🇾', country: 'Uruguay' },
  { code: 'pt-BR', name: 'Português', flag: '🇧🇷', country: 'Brasil' },
  { code: 'en-US', name: 'English', flag: '🇺🇸', country: 'USA' }
];

const LanguageSelector = ({ dropdownDirection = 'down' }: LanguageSelectorProps) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[1];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  const dropdownClasses = dropdownDirection === 'up'
    ? "absolute bottom-full mb-1 right-0"
    : "absolute top-full mt-1 right-0";

  const animationDirection = dropdownDirection === 'up' ? 10 : -10;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-slate-300 hover:border-slate-400 bg-white transition-colors"
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="text-sm font-medium text-slate-700 hidden md:block">
          {currentLanguage.name}
        </span>
        <svg
          className={`w-4 h-4 text-slate-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: animationDirection }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: animationDirection }}
            transition={{ duration: 0.2 }}
            className={`${dropdownClasses} bg-white border border-slate-300 rounded-lg shadow-lg z-50 min-w-[180px]`}
          >
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-slate-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${currentLanguage.code === language.code ? 'bg-slate-100' : ''
                  }`}
              >
                <span className="text-lg">{language.flag}</span>
                <div>
                  <div className="text-sm font-medium text-slate-800">{language.name}</div>
                  <div className="text-xs text-slate-500">{language.country}</div>
                </div>
                {currentLanguage.code === language.code && (
                  <svg className="w-4 h-4 text-emerald-600 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector; 