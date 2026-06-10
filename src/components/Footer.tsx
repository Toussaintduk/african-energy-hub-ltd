import { Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-aeh.png";

const navLinks = ["About", "Services", "Team", "SDG", "Contact"];

const Footer = () => (
  <footer className="bg-energy-dark text-primary-foreground border-t-4 border-primary">
    <div className="container py-14">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary-foreground rounded-xl p-1.5 shadow-card">
              <img
                src={logo}
                alt="African Energy Hub Ltd logo"
                width={64}
                height={64}
                className="h-14 w-14 object-contain"
              />
            </div>
            <div>
              <p className="font-display font-bold text-lg leading-tight">African Energy Hub</p>
              <p className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">Ltd</p>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-sm">
            Powering Rwanda's energy future through professional supply, installation and maintenance of electrical LV–HV facilities.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-secondary mb-4">
            Explore
          </h4>
          <ul className="space-y-2.5">
            {navLinks.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="text-sm text-primary-foreground/75 hover:text-secondary transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-secondary mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-primary-foreground/75">
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-secondary" />
              <span>Kigali, Rwanda</span>
            </li>
            <li>
              <a
                href="mailto:info@africanenergyhub.rw"
                className="flex items-start gap-2.5 hover:text-secondary transition-colors break-all"
              >
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-secondary" />
                <span>info@africanenergyhub.rw</span>
              </a>
            </li>
            <li>
              <a
                href="tel:+250788644271"
                className="flex items-start gap-2.5 hover:text-secondary transition-colors"
              >
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-secondary" />
                <span>+250 788 644 271</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-secondary mb-4">
            Follow
          </h4>
          <a
            href="https://www.linkedin.com/in/african-energy-hub-ltd-5a3a48404"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="African Energy Hub on LinkedIn"
            className="inline-flex items-center gap-2 bg-primary-foreground/10 hover:bg-primary text-primary-foreground px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
        <p>© {new Date().getFullYear()} African Energy Hub Ltd. All rights reserved.</p>
        <p>RURA Category C — Certified Electrical Installation</p>
      </div>
    </div>
  </footer>
);

export default Footer;
