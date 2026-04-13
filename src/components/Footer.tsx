import logo from "@/assets/logo-aeh.png";

const Footer = () => (
  <footer className="bg-energy-dark text-primary-foreground py-12 border-t border-primary/20">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-display font-bold">
          <img src={logo} alt="AEH" width={32} height={32} className="h-8 w-8" />
          African Energy Hub
        </div>
        <p className="text-primary-foreground/50 text-sm">© {new Date().getFullYear()} African Energy Hub Ltd. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
