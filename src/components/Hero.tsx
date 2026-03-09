import { motion } from "framer-motion";
import logo from "@/assets/swift-mumbai-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-gradient-radial" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(0 0% 50%) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(0 0% 50%) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Logo with liquid glass effect */}
          <motion.div
            className="relative inline-block mb-12"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="absolute inset-0 blur-3xl bg-primary/20 scale-150" />
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full liquid-glass-tint liquid-glass-specular overflow-hidden p-2">
              <img
                src={logo}
                alt="Swift Mumbai"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>
          
          {/* Main headline */}
          <motion.h1 
            className="display-xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-gradient-white">Swift</span>{" "}
            <span className="text-gradient-swift">Mumbai</span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            className="body-lg max-w-2xl mx-auto mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            India's premier community for Apple platform developers.
          </motion.p>

          <motion.p 
            className="text-lg text-muted-foreground/80 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Fostering growth for iOS, macOS, visionOS & the open source Swift language engineers from India 🇮🇳
          </motion.p>
          
          {/* CTA Buttons with liquid glass */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#events"
              className="group inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-apple-lg"
            >
              View Events
              <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            <a
              href="https://chat.whatsapp.com/Gszg4xLSDvTFhlfSGFfK0x"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 font-medium rounded-full liquid-glass-button liquid-glass-glow text-primary"
            >
              Join Community
            </a>
          </motion.div>
        </motion.div>
      </div>
      
    </section>
  );
};

export default Hero;
