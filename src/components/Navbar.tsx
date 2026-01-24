import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/swift-mumbai-logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="Swift Mumbai" className="w-10 h-10" />
            <span className="font-bold text-lg text-foreground">
              Swift Mumbai
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="https://twitter.com/swift_mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-gradient-swift text-primary-foreground font-semibold rounded-lg hover:shadow-glow-sm transition-all"
            >
              Join Us
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
