import heroImage from "@/assets/hero-energy.jpg";
import slide2 from "@/assets/hero-slide-2.jpg";
import slide3 from "@/assets/hero-slide-3.webp";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  { src: heroImage, alt: "Energy infrastructure at sunset", pos: "center" },
  { src: slide3, alt: "African Energy Hub team on site", pos: "center" },
  { src: slide2, alt: "African Energy Hub technicians with company vehicle", pos: "center 55%" },
];

const HeroSection = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setI((v) => (v + 1) % slides.length), 6000);
    return () => clearTimeout(t);
  }, [i]);
  return (
  <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    <div className="absolute inset-0 bg-energy-dark">
      <AnimatePresence>
        <motion.img
          key={i}
          src={slides[i].src}
          alt={slides[i].alt}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: slides[i].pos }}
          initial={{ opacity: 0, scale: 1.12 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.4, ease: "easeInOut" }, scale: { duration: 7, ease: "easeOut" } }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-energy-dark/70" />
    </div>
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
      {slides.map((_, n) => (
        <button key={n} aria-label={`Show background ${n + 1}`} onClick={() => setI(n)}
          className={`h-2 rounded-full transition-all duration-500 ${n === i ? "w-8 bg-primary" : "w-2 bg-primary-foreground/50 hover:bg-primary-foreground"}`} />
      ))}
    </div>
    <div className="container relative z-10 py-20">
      <div className="max-w-2xl">
        <span className="inline-block bg-gradient-warm text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-6 animate-fade-up">Quick Energy Service Delivery</span>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          African Energy Hub Powering Rwanda's <span className="text-primary-foreground">Energy Future</span>
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
};

export default HeroSection;
