import { motion } from "framer-motion";

const stats = [
  "500+ Members",
  "15+ Events",
  "50+ Speakers",
  "5 Cities",
];

const LogoMarquee = () => {
  return (
    <div className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <span className="text-muted-foreground text-sm font-medium tracking-wide">
                {stat}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
