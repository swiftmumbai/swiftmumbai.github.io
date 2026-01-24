import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Code, Mic, Github } from "lucide-react";

const activities = [
  {
    icon: Users,
    title: "In-Person Meetups",
    description: "Regular gatherings where developers share talks on Swift, SwiftUI, iOS architecture, tooling, and real-world case studies.",
  },
  {
    icon: Mic,
    title: "Talks & Workshops",
    description: "Sessions ranging from beginner-friendly introductions to deep dives into frameworks, libraries, and best practices.",
  },
  {
    icon: Github,
    title: "Open Source",
    description: "Through our GitHub organisation we maintain community projects, giving members a place to learn in public and contribute.",
  },
  {
    icon: Code,
    title: "Community Support",
    description: "Our WhatsApp group and social channels are active spaces for questions, opportunities, and discussions around Apple platforms.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What We <span className="text-gradient-swift">Do</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We bring together iOS, macOS, watchOS, tvOS, and Swift developers for meetups, talks, workshops, and community projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-gradient-card p-8 rounded-2xl border border-border transition-all hover:shadow-glow-sm hover:border-primary/30 group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-14 h-14 bg-gradient-swift rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
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
