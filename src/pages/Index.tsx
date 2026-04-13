import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ValuesSection from "@/components/ValuesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TeamSection from "@/components/TeamSection";
import SDGSection from "@/components/SDGSection";
import ImpactSection from "@/components/ImpactSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ValuesSection />
    <ProjectsSection />
    <TeamSection />
    <SDGSection />
    <ImpactSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
