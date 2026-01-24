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
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The <span className="text-gradient-swift">Team</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The passionate organizers making Swift Mumbai happen
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-gradient-swift p-[3px] group-hover:shadow-glow transition-all">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                  <span className="text-2xl font-bold text-gradient-swift">
                    {member.initials}
                  </span>
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground">{member.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
