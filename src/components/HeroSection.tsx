import heroImage from "@/assets/hero-energy.jpg";
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImage} alt="Energy infrastructure at sunset" width={1920} height={1080} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-energy-dark/70" />
    </div>
    <div className="container relative z-10 py-20">
      <div className="max-w-2xl">
        <span className="inline-block bg-gradient-warm text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-6 animate-fade-up">Quick Energy Service Delivery</span>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          African Energy Hub — Powering Rwanda's <span className="text-secondary">Energy Future</span>
        </h1>
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg animate-fade-up" style={{ animationDelay: "0.2s" }}>
          African Energy Hub Ltd delivers professional supply, installation, and maintenance of electrical LV–HV materials and power equipment for public institutions, private organizations, and individuals across Rwanda.
        </p>
        <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a href="#services" className="bg-gradient-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
            Our Services <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
