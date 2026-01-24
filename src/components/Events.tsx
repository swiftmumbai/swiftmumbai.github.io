import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Sparkles } from "lucide-react";

const events = [
  {
    title: "Spatially Xtended",
    description: "India's biggest visionOS meetup with 100+ attendees, in collaboration with KJ Somaiya University, XDG Mumbai and Parallax Labs. Focusing on Apple Vision Pro, Spatial Computing and visionOS.",
    highlight: "100+ Attendees",
    icon: "🥽",
  },
  {
    title: "Build Beyond Screens",
    description: "Student-focused meetups in collaboration with XDG Mumbai, covering Swift Student Challenge, AI, VR, and AR development.",
    highlight: "For Students",
    icon: "🎓",
  },
  {
    title: "Sip N Swift",
    description: "Invite-only meetups for loyal attendees and community contributors. We banter, sip coffee, and have swift conversations.",
    highlight: "13+ Sessions",
    icon: "☕",
  },
  {
    title: "WWDC Watch Parties",
    description: "Live streaming WWDC keynotes from Cupertino with the community. Our 2025 edition was in collaboration with BookMyShow Engineering.",
    highlight: "Live from Cupertino",
    icon: "📺",
  },
  {
    title: "Google I/O x WWDC",
    description: "Cross-community events in collaboration with GDG MAD, discussing AI innovations and platform releases from both Apple and Google.",
    highlight: "With GDG MAD",
    icon: "🤝",
  },
];

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-card" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient-swift">Events</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From casual coffee chats to large-scale conferences, we bring developers together in meaningful ways.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              className="relative bg-background p-8 rounded-2xl border border-border overflow-hidden group hover:border-primary/30 transition-all"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-swift opacity-5 blur-3xl group-hover:opacity-10 transition-opacity" />
              
              <span className="text-5xl mb-6 block">{event.icon}</span>
              
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                {event.highlight}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {event.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {event.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
