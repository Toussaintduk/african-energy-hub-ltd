import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24 bg-muted/50">
    <div className="container">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3">Contact Us</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Phone, label: "Phone", value: "+250 788 608 320", href: "tel:+250788608320" },
            { icon: Mail, label: "Email", value: "africanenergyhub@gmail.com", href: "mailto:africanenergyhub@gmail.com" },
            { icon: MapPin, label: "Address", value: "Muhima Sector, Nyarugenge District, Kigali, Rwanda", href: "#" },
          ].map(c => (
            <a key={c.label} href={c.href} className="bg-card rounded-xl p-6 shadow-card border border-border text-center hover:shadow-elevated transition-shadow block">
              <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <c.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold mb-2">{c.label}</h3>
              <p className="text-muted-foreground text-sm">{c.value}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
