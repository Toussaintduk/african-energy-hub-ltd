import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PartnersSection from "@/components/PartnersSection";
import ServicesSection from "@/components/ServicesSection";
import ValuesSection from "@/components/ValuesSection";
import TeamSection from "@/components/TeamSection";
import SDGSection from "@/components/SDGSection";
import ImpactSection from "@/components/ImpactSection";
import SiteActivitiesSection from "@/components/SiteActivitiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
      <AboutSection />
      <PartnersSection />
      <ServicesSection />
    <ValuesSection />
    <TeamSection />
    <SDGSection />
    <ImpactSection />
    <SiteActivitiesSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
