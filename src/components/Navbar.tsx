import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["About", "Services", "Impact", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 font-display font-bold text-lg">
          <Zap className="h-6 w-6 text-primary" />
          <span>African Energy Hub</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">{l}</a>
          ))}
          <a href="#contact" className="bg-gradient-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">Get a Quote</a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground"><Menu className="h-6 w-6" /></button>
      </div>
      {open && (
        <div className="md:hidden fixed inset-0 bg-card z-50 flex flex-col p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="font-display font-bold text-lg flex items-center gap-2"><Zap className="h-6 w-6 text-primary" />African Energy Hub</span>
            <button onClick={() => setOpen(false)}><X className="h-6 w-6" /></button>
          </div>
          <div className="flex flex-col gap-6">
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="text-xl font-display font-semibold text-foreground">{l}</a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
