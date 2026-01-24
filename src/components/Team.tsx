import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const team = [
  {
    name: "Yogesh Singh",
    title: "Originator",
    initials: "YS",
  },
  {
    name: "Akanksha Sharma",
    title: "Senior Madam / SuperMom",
    initials: "AS",
  },
  {
    name: "Raj Raval",
    title: "Chief Meme Officer",
    initials: "RR",
  },
  {
    name: "Rushit Rakhasiya",
    title: "Chief Excited Officer",
    initials: "RK",
  },
  {
    name: "Nishant Desai",
    title: "Human LLM / Tech Legend",
    initials: "ND",
  },
];

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="display-md mb-6">
            Meet the <span className="text-gradient-swift">team</span>
          </h2>
          <p className="body-lg">
            The passionate organizers making Swift Mumbai happen.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="flex flex-wrap justify-center gap-12 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 + index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <div className="relative w-24 h-24 mx-auto mb-5">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-swift opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40" />
                
                {/* Avatar */}
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-muted to-card border border-border/50 flex items-center justify-center transition-all duration-500 group-hover:border-primary/30 group-hover:scale-105">
                  <span className="text-2xl font-semibold text-gradient-swift">
                    {member.initials}
                  </span>
                </div>
              </div>
              
              <h3 className="font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {member.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;