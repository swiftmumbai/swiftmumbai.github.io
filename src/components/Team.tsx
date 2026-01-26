import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import yogeshImg from "@/assets/team/yogesh.png";
import akanshaImg from "@/assets/team/akanksha.png";
import rajImg from "@/assets/team/raj.png";
import rushitImg from "@/assets/team/rushit.png";
import nishantImg from "@/assets/team/nishant.png";

const team = [
  {
    name: "Yogesh Singh",
    title: "Originator",
    image: yogeshImg,
    twitter: "https://x.com/_yogeshsingh",
    linkedin: "https://www.linkedin.com/in/yogeshsingh2810/",
  },
  {
    name: "Akanksha Sharma",
    title: "Senior Madam / SuperMom",
    image: akanshaImg,
    twitter: "https://x.com/akanksharmaa",
    linkedin: "https://www.linkedin.com/in/akanksharmaa/",
  },
  {
    name: "Raj Raval",
    title: "Chief Meme Officer",
    image: rajImg,
    twitter: "https://x.com/rajhraval",
    linkedin: "https://www.linkedin.com/in/rajhraval/",
  },
  {
    name: "Rushit Rakhasiya",
    title: "Chief Excited Officer",
    image: rushitImg,
    twitter: "https://x.com/AvidRush94",
    linkedin: "https://www.linkedin.com/in/rushit-r-757aa0167/",
  },
  {
    name: "Nishant Desai",
    title: "Human LLM / Tech Legend",
    image: nishantImg,
    twitter: "https://x.com/nish_desai",
    linkedin: "https://www.linkedin.com/in/nishantdesai1/",
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
        <div className="flex flex-wrap justify-center gap-12 md:gap-16 max-w-5xl mx-auto">
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
              <div className="relative w-28 h-28 md:w-32 md:h-32 mx-auto mb-5">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-swift opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40" />
                
                {/* Avatar */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-border/50 transition-all duration-500 group-hover:border-primary/30 group-hover:scale-105">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <h3 className="font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {member.title}
              </p>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-3">
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground/60 hover:text-foreground transition-colors duration-300"
                  aria-label={`${member.name} on X`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground/60 hover:text-foreground transition-colors duration-300"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
