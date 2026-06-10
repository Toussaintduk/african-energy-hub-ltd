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
import Reveal from "@/components/Reveal";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <Reveal><AboutSection /></Reveal>
    <Reveal direction="fade"><PartnersSection /></Reveal>
    <Reveal><ServicesSection /></Reveal>
    <Reveal direction="left"><ValuesSection /></Reveal>
    <Reveal><TeamSection /></Reveal>
    <Reveal direction="right"><SDGSection /></Reveal>
    <Reveal><ImpactSection /></Reveal>
    <Reveal><SiteActivitiesSection /></Reveal>
    <Reveal direction="fade"><ContactSection /></Reveal>
    <Footer />
  </div>
);

export default Index;
