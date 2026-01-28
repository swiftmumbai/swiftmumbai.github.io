import { motion } from "framer-motion";

const badges = [
  { label: "iOS Developer", color: "bg-swift-orange", position: "top-20 left-[10%]", delay: 0 },
  { label: "macOS Engineer", color: "bg-blue-500", position: "top-32 right-[8%]", delay: 0.2 },
  { label: "visionOS Pioneer", color: "bg-purple-500", position: "top-[45%] left-[5%]", delay: 0.4 },
  { label: "watchOS Creator", color: "bg-green-500", position: "top-[55%] right-[6%]", delay: 0.6 },
  { label: "SwiftUI Expert", color: "bg-pink-500", position: "bottom-32 left-[12%]", delay: 0.3 },
  { label: "tvOS Developer", color: "bg-yellow-500", position: "bottom-40 right-[10%]", delay: 0.5 },
];

const cursorVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
};

const FloatingBadges = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
      {badges.map((badge, index) => (
        <motion.div
          key={badge.label}
          className={`absolute ${badge.position}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.8 + badge.delay,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >
          {/* Cursor */}
          <motion.svg
            className="w-4 h-4 mb-1 ml-[-8px]"
            viewBox="0 0 24 24"
            fill="none"
            variants={cursorVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 1 + badge.delay, duration: 0.3 }}
            style={{ 
              filter: `drop-shadow(0 2px 4px rgba(0,0,0,0.2))`,
              transform: `rotate(${-15 + index * 10}deg)`
            }}
          >
            <path
              d="M5.65376 12.4561L5.06714 12.6742C4.41746 12.9138 4.09262 12.9336 3.86901 12.817C3.6454 12.7004 3.50861 12.4108 3.41479 11.7553C3.30961 11.0203 3.35185 10.0612 3.68256 8.91612C4.01327 7.77106 4.47399 6.89687 4.93197 6.28584C5.44619 5.60002 5.76291 5.32655 6.01061 5.25294C6.25831 5.17934 6.57127 5.26264 7.15788 5.51291L17.0333 9.66067C17.6199 9.91094 17.9329 10.0942 18.0684 10.3274C18.2039 10.5606 18.2039 10.8764 18.0684 11.4403C17.933 12.0043 17.6199 12.4182 17.0333 12.6684L5.65376 12.4561Z"
              fill={`hsl(var(--${badge.color === 'bg-swift-orange' ? 'swift-orange' : 'foreground'}))`}
              stroke="white"
              strokeWidth="1.5"
            />
          </motion.svg>
          
          {/* Badge */}
          <motion.span
            className={`${badge.color} text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap`}
            animate={{ 
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              delay: index * 0.5,
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
