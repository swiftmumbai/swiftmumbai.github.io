import logo from "@/assets/swift-mumbai-logo.png";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
              <img src={logo} alt="Swift Mumbai" className="w-full h-full object-cover" />
            </div>
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Swift Mumbai. All rights reserved.
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a 
              href="https://twitter.com/swift_mumbai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Twitter
            </a>
            <a 
              href="https://linkedin.com/company/swift-mumbai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/swiftmumbai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a 
              href="mailto:helloswiftmumbai@gmail.com"
              className="transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Made with love */}
        <div className="text-center mt-12 text-xs text-muted-foreground/60">
          Made with ❤️ for the Apple developer community in India
        </div>
      </div>
    </footer>
  );
};

export default Footer;
