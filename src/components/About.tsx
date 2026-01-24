import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const activities = [
  {
    icon: "🎤",
    title: "In-Person Meetups",
    description: "Regular gatherings with talks on Swift, SwiftUI, iOS architecture, and real-world case studies.",
  },
  {
    icon: "🛠",
    title: "Workshops",
    description: "From beginner introductions to deep dives into frameworks, libraries, and best practices.",
  },
  {
    icon: "💻",
    title: "Open Source",
    description: "Community projects on GitHub where members learn in public and contribute to real codebases.",
  },
  {
    icon: "💬",
    title: "Community",
    description: "Active WhatsApp group for questions, opportunities, and discussions around Apple platforms.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="display-md mb-6">
            What we <span className="text-gradient-swift">do</span>
          </h2>
          <p className="body-lg">
            We bring together iOS, macOS, watchOS, tvOS, and Swift developers 
            for meetups, talks, workshops, and community projects.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {activities.map((item, index) => (
            <motion.div
              key={item.title}
              className="group relative p-8 rounded-3xl bg-card/50 border border-border/50 transition-all duration-500 hover:bg-card hover:border-border"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 + index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <span className="text-4xl mb-6 block">{item.icon}</span>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;