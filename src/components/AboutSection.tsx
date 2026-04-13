import { Target, Eye } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-6">Reliable Energy Solutions in Rwanda</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          African Energy Hub Ltd is a registered Rwandan company specializing in the supply, sale, and installation of electrical materials and equipment. With over two years of experience, we serve public institutions, private organizations, and individuals with professional energy solutions.
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
