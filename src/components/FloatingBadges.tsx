import { motion } from "framer-motion";

const badges = [
  { label: "iOS", position: "top-24 left-[8%]", delay: 0 },
  { label: "macOS", position: "top-40 right-[12%]", delay: 0.2 },
  { label: "visionOS", position: "top-[50%] left-[6%]", delay: 0.4 },
  { label: "watchOS", position: "top-[45%] right-[8%]", delay: 0.6 },
  { label: "SwiftUI", position: "bottom-40 left-[15%]", delay: 0.3 },
  { label: "tvOS", position: "bottom-48 right-[14%]", delay: 0.5 },
];

const FloatingBadges = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
      {badges.map((badge, index) => (
        <motion.div
          key={badge.label}
          className={`absolute ${badge.position}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 1 + badge.delay,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >
          <motion.span
            className="text-muted-foreground/30 text-sm font-medium tracking-wide"
            animate={{ 
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              delay: index * 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {badge.label}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingBadges;
