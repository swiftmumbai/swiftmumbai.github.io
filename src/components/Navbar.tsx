import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/swift-mumbai-logo.png";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Events", href: "https://luma.com/user/swiftmumbai", external: true },
  { label: "GitHub", href: "https://github.com/swiftmumbai", external: true },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-background/80 backdrop-blur-apple border-b border-border/50" 
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-full bg-background overflow-hidden transition-transform duration-300 group-hover:scale-110">
                <img 
                  src={logo} 
                  alt="Swift Mumbai" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <span className="font-semibold text-foreground hidden sm:block">
                Swift Mumbai
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <ThemeToggle />
              <a
                href="https://chat.whatsapp.com/Gszg4xLSDvTFhlfSGFfK0x"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium px-4 py-2 rounded-full bg-foreground text-background transition-all hover:bg-foreground/90"
              >
                Join
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div 
              className="absolute inset-0 bg-background/95 backdrop-blur-apple"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute top-20 left-6 right-6 bg-card border border-border rounded-2xl p-6 space-y-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="block text-lg text-foreground py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://chat.whatsapp.com/Gszg4xLSDvTFhlfSGFfK0x"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center font-medium px-4 py-3 rounded-full bg-foreground text-background"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Community
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
