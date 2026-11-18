import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail, MessageCircle, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactHelpDesk = () => {
  const [open, setOpen] = useState(false);
  const [greeting, setGreeting] = useState(true);
  const reducedMotion = useReducedMotion();

  return (
    <aside className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6" aria-label="Contact help desk">
      <AnimatePresence>
        {open ? (
          <motion.div key="help" id="contact-help-panel" initial={{ opacity: 0, y: reducedMotion ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="w-[min(340px,calc(100vw-32px))] overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-elevated">
            <div className="flex items-center justify-between gap-3 bg-secondary px-5 py-4 text-secondary-foreground">
              <div><p className="font-display font-semibold">African Energy Hub</p><p className="text-xs">Help desk</p></div>
              <Button variant="ghost" size="icon" aria-label="Close help desk" onClick={() => setOpen(false)}><X /></Button>
            </div>
            <div className="space-y-4 p-5">
              <h2 className="text-xl font-semibold">Welcome! 👋</h2>
              <p className="text-sm text-muted-foreground">How can we help you with supply, installation or maintenance?</p>
              <Button asChild className="w-full"><a href="#contact" onClick={() => setOpen(false)}>Contact our team <ArrowRight /></a></Button>
              <div className="grid grid-cols-2 gap-2">
                <Button asChild variant="outline"><a href="tel:+250788608320"><Phone /> Call us</a></Button>
                <Button asChild variant="outline"><a href="mailto:africanenergyhub@gmail.com"><Mail /> Email us</a></Button>
              </div>
            </div>
          </motion.div>
        ) : greeting ? (
          <motion.div key="welcome" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-1 rounded-lg border border-border bg-card p-2 text-card-foreground shadow-card">
            <Button variant="ghost" className="h-auto whitespace-normal text-left" onClick={() => { setOpen(true); setGreeting(false); }}>👋 Welcome! How can we help?</Button>
            <Button variant="ghost" size="icon" aria-label="Dismiss welcome message" onClick={() => setGreeting(false)}><X /></Button>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <Button size="icon" className="h-14 w-14 rounded-full shadow-elevated [&_svg]:size-6" aria-label={open ? "Hide help desk" : "Open help desk"} aria-expanded={open} aria-controls={open ? "contact-help-panel" : undefined} onClick={() => { setOpen(!open); setGreeting(false); }}><MessageCircle /></Button>
    </aside>
  );
};

export default ContactHelpDesk;