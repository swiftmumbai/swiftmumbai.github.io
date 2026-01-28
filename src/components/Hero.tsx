import { motion } from "framer-motion";
import logo from "@/assets/swift-mumbai-logo.png";
import FloatingBadges from "./FloatingBadges";
import LogoMarquee from "./LogoMarquee";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* Subtle dot pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Floating role badges */}
      <FloatingBadges />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Logo */}
          <motion.div
            className="relative inline-block mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-foreground overflow-hidden mx-auto shadow-lg">
              <img
                src={logo}
                alt="Swift Mumbai"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          {/* Main headline with script accent */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-foreground">India's #1 </span>
            <span className="text-gradient-swift font-script italic">Swift</span>
            <br />
            <span className="text-foreground">Developer Community</span>
          </motion.h1>
          
          {/* CTA Button */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="https://chat.whatsapp.com/Gszg4xLSDvTFhlfSGFfK0x"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-apple-lg"
            >
              Join Swift Mumbai
            </a>
          </motion.div>

          {/* Subheadline */}
          <motion.p 
            className="text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Fostering growth for iOS, macOS, watchOS, tvOS & visionOS developers 🇮🇳
          </motion.p>
        </motion.div>
      </div>
      
      {/* Logo marquee at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <LogoMarquee />
      </motion.div>
    </section>
  );
};

export default Hero;