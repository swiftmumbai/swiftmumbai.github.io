import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const sponsors = [
  { name: "Dream11", tier: "Partner" },
  { name: "Servify", tier: "Partner" },
  { name: "BookMyShow", tier: "Partner" },
  { name: "Shaadi.com", tier: "Partner" },
  { name: "KJ Somaiya", tier: "Venue Partner" },
  { name: "Parallax Labs", tier: "Partner" },
  { name: "Atlas SkillTech University", tier: "Venue Partner" },
  { name: "Riidl", tier: "Partner" },
  { name: "Here Technologies", tier: "Partner" },
];

const Sponsors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-card/30" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="display-md mb-6">
            Our <span className="text-gradient-swift">partners</span>
          </h2>
          <p className="body-lg">
            Companies and organizations supporting the community.
          </p>
        </motion.div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              className="group p-6 rounded-2xl bg-background/50 border border-border/50 text-center transition-all duration-500 hover:bg-background hover:border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: 0.1 + index * 0.05,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <div className="text-lg font-semibold text-foreground mb-1 transition-colors group-hover:text-primary">
                {sponsor.name}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">
                {sponsor.tier}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Become a Sponsor CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-muted-foreground mb-4">
            Interested in supporting the community?
          </p>
          <a
            href="https://opencollective.com/swiftmumbai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary font-medium transition-colors hover:text-primary/80"
          >
            Become a sponsor
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
