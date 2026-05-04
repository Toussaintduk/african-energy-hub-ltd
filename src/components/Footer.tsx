import { Linkedin } from "lucide-react";
import logo from "@/assets/logo-aeh.png";

const Footer = () => (
  <footer className="bg-background text-foreground py-12 border-t border-border">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 font-display font-bold">
          <img src={logo} alt="AEH Ltd" width={80} height={80} className="h-20 w-20 object-contain" />
          African Energy Hub Ltd
        </div>
        <a
          href="https://www.linkedin.com/in/african-energy-hub-ltd-5a3a48404"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="African Energy Hub on LinkedIn"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-secondary transition-colors"
        >
          <Linkedin className="h-5 w-5" />
          Follow us on LinkedIn
        </a>
        <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} African Energy Hub Ltd. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
