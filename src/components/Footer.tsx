import logo from "@/assets/swift-mumbai-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Swift Mumbai" className="w-10 h-10" />
            <span className="font-semibold text-foreground">Swift Mumbai</span>
          </div>
          
          <p className="text-muted-foreground text-sm text-center">
            Fostering Apple Platform Developer Community in Mumbai & India
          </p>
          
          <p className="text-muted-foreground text-sm">
            Made with 🧡 in Mumbai
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
