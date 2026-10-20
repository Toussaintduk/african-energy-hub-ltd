import { Linkedin } from "lucide-react";
import logo from "@/assets/logo-aeh.png";

const navLinks = ["About", "Services", "Team", "SDG", "Contact"];

const Footer = () => (
  <footer className="bg-energy-dark text-primary-foreground border-t-2 border-primary">
    <div className="container py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#home" className="flex items-center gap-3">
          <div className="bg-primary-foreground rounded-lg p-1">
            <img
              src={logo}
              alt="African Energy Hub Ltd logo"
              width={40}
              height={40}
              className="h-9 w-9 object-contain"
            />
          </div>
          <span className="font-display font-bold text-base leading-tight">
            African Energy Hub Ltd
          </span>
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {navLinks.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm text-primary-foreground/75 hover:text-secondary transition-colors"
            >
              {l}
            </a>
          ))}
        </nav>

        <a
          href="https://www.linkedin.com/in/african-energy-hub-ltd-5a3a48404"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="African Energy Hub on LinkedIn"
          className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-primary-foreground/10 hover:bg-primary transition-colors"
        >
          <Linkedin className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-6 pt-5 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/60">
        <p>© {new Date().getFullYear()} African Energy Hub Ltd. All rights reserved.</p>
        <p>RURA Category C — Certified Electrical Installation</p>
      </div>
    </div>
  </footer>
);

export default Footer;
