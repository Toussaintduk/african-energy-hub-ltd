import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/logo-aeh.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["About", "Services", "Team", "SDG", "Contact"];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-24">
        <a href="#" className="flex items-center gap-3 font-display font-bold text-lg text-foreground">
          <img src={logo} alt="African Energy Hub Ltd logo" width={96} height={96} className="h-20 w-20 md:h-24 md:w-24 object-contain" />
          <span className="hidden sm:inline">African Energy Hub Ltd</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{l}</a>
          ))}
          <a href="#contact" className="bg-gradient-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">Get a Quote</a>
        </div>
        <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="md:hidden text-foreground">
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
            className="md:hidden fixed inset-0 z-50 bg-background flex flex-col p-6 shadow-elevated"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="font-display font-bold text-lg flex items-center gap-3 text-foreground">
                <img src={logo} alt="AEH Ltd" width={56} height={56} className="h-14 w-14 object-contain" />
                African Energy Hub Ltd
              </span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-foreground">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {links.map((l, i) => (
                <motion.a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.35, ease: "easeOut" }}
                  className="text-xl font-display font-semibold text-foreground hover:text-primary transition-colors"
                >
                  {l}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + links.length * 0.06, duration: 0.35 }}
                className="mt-4 bg-gradient-primary text-primary-foreground px-5 py-3 rounded-lg text-base font-semibold text-center hover:opacity-90 transition-opacity"
              >
                Get a Quote
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
