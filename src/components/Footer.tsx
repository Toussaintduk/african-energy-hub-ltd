import logo from "@/assets/logo-aeh.png";

const Footer = () => (
  <footer className="bg-background text-foreground py-12 border-t border-border">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 font-display font-bold">
          <img src={logo} alt="AEH Ltd" width={56} height={56} className="h-14 w-14 object-contain" />
          African Energy Hub Ltd
        </div>
        <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} African Energy Hub Ltd. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
