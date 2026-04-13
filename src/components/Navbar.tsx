import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-aeh.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["About", "Services", "Projects", "Team", "SDG", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-energy-dark/95 backdrop-blur-lg border-b border-primary/20">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 font-display font-bold text-lg text-primary-foreground">
          <img src={logo} alt="African Energy Hub logo" width={40} height={40} className="h-10 w-10" />
          <span>African Energy Hub</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm font-medium text-primary-foreground/70 hover:text-secondary transition-colors">{l}</a>
          ))}
          <a href="#contact" className="bg-gradient-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">Get a Quote</a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground"><Menu className="h-6 w-6" /></button>
      </div>
      {open && (
        <div className="md:hidden fixed inset-0 bg-energy-dark z-50 flex flex-col p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="font-display font-bold text-lg flex items-center gap-2 text-primary-foreground">
              <img src={logo} alt="AEH" width={40} height={40} className="h-10 w-10" />
              African Energy Hub
            </span>
            <button onClick={() => setOpen(false)} className="text-primary-foreground"><X className="h-6 w-6" /></button>
          </div>
          <div className="flex flex-col gap-6">
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="text-xl font-display font-semibold text-primary-foreground">{l}</a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
