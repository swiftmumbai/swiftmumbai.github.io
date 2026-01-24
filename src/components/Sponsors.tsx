import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const sponsors = [
  "Dream11",
  "Servify",
  "Springboard",
  "Somaiya Vidyavihar University",
  "K J Somaiya College of Engineering",
];

const Sponsors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-card" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-muted-foreground">
            Supported By
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor}
              className="px-6 py-4 bg-background rounded-xl border border-border text-muted-foreground font-medium hover:text-foreground hover:border-primary/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {sponsor}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
