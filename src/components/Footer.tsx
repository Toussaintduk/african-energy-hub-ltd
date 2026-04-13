import { Zap } from "lucide-react";

const Footer = () => (
  <footer className="bg-energy-dark text-primary-foreground py-12">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-display font-bold">
          <Zap className="h-5 w-5 text-secondary" />
          African Energy Hub
        </div>
        <p className="text-primary-foreground/50 text-sm">© {new Date().getFullYear()} African Energy Hub Ltd. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
