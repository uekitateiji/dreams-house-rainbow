import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import AboutSection from "@/components/AboutSection";
import SystemSection from "@/components/SystemSection";
import LifestyleSection from "@/components/LifestyleSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import PortfolioSection from "@/components/PortfolioSection";

// Adiciona CSS global para prevenir overflow horizontal
if (typeof document !== 'undefined') {
  document.documentElement.style.overflowX = 'hidden';
  document.body.style.overflowX = 'hidden';
}

const Index = () => {
  return <div className="min-h-screen bg-white overflow-x-hidden" style={{ maxWidth: '100vw' }}>
    <Header />

    <HeroSection />
    <WhyChooseSection />
    <AboutSection />
    <SystemSection />
    <LifestyleSection />
    <SustainabilitySection />
    <PortfolioSection />

    <Footer />
  </div >;
};

export default Index;
