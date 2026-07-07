import { Target, Eye } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-6">Reliable Energy Solutions in Rwanda</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          <strong className="text-foreground">African Energy Hub</strong> Ltd is a registered Rwandan company delivering professional supply, <a href="#services" className="text-primary hover:underline">installation, and maintenance</a> of electrical LV to HV facilities and power equipment for public institutions, private organizations, and individuals. With over two years of experience, African Energy Hub serves clients across Rwanda with reliable energy solutions.
        </p>
        <p className="text-muted-foreground text-base leading-relaxed mt-5">
          African Energy Hub is officially <span className="font-semibold text-foreground">certified by the Rwanda Utilities Regulatory Authority (RURA) under Category C in Electrical Installation</span>, and our work is led by <a href="#team" className="text-primary hover:underline">professionals registered with the Institute of Engineering Rwanda (IER)</a> — a guarantee of quality, safety, and compliance on every project we deliver.
        </p>
        <p className="text-muted-foreground text-base leading-relaxed mt-4">
          We have proudly partnered with leading organizations including <span className="font-semibold text-foreground">REG/EUCL, KABISA, RITCO, Solid Africa, Volkswagen Rwanda, Gorilla Feed, and V Plus Packaging Industries</span>. <a href="#contact" className="text-primary hover:underline font-medium">Get in touch with African Energy Hub →</a>
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-card rounded-xl p-8 shadow-card border border-border">
          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-5">
            <Target className="h-6 w-6 text-primary-foreground" />
          </div>
          <h3 className="font-display font-bold text-xl mb-3">Our Mission</h3>
          <p className="text-muted-foreground leading-relaxed">To supply high-quality electrical materials and provide professional installation services that ensure safety, efficiency, and reliability in electrical power systems.</p>
        </div>
        <div className="bg-card rounded-xl p-8 shadow-card border border-border">
          <div className="w-12 h-12 bg-gradient-warm rounded-lg flex items-center justify-center mb-5">
            <Eye className="h-6 w-6 text-secondary-foreground" />
          </div>
          <h3 className="font-display font-bold text-xl mb-3">Our Vision</h3>
          <p className="text-muted-foreground leading-relaxed">To become a leading provider of reliable electrical materials and installation services in Rwanda and across the East African region.</p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
