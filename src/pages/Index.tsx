import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import PricingSection from "@/components/PricingSection";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
      <ProcessSection />
      <AdvantagesSection />
      <PricingSection />
      <OrderForm />
      <Footer />
    </div>
  );
};

export default Index;
