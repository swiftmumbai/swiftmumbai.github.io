import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const events = [
  {
    title: "Spatially Xtended",
    description: "India's biggest visionOS meetup with 100+ attendees. Focusing on Apple Vision Pro, Spatial Computing and visionOS.",
    highlight: "100+ Attendees",
    icon: "🥽",
    collab: "KJ Somaiya • XDG Mumbai • Parallax Labs"
  },
  {
    title: "Build Beyond Screens",
    description: "Student-focused meetups covering Swift Student Challenge, AI, VR, and AR development.",
    highlight: "120+ Attendees",
    icon: "🎓",
    collab: "Atlas SkillTech University • XDG Mumbai"
  },
  {
    title: "Sip N Swift",
    description: "Invite-only meetups for loyal attendees and community contributors. We banter, sip coffee, and have swift conversations.",
    highlight: "13+ Sessions",
    icon: "☕",
    collab: "Exclusive Community Event"
  },
  {
    title: "WWDC Watch Party 2025",
    description: "Live streaming WWDC keynotes from Cupertino with the community. Experience Apple's announcements together.",
    highlight: "Live Events",
    icon: "📺",
    collab: "BookMyShow Engineering"
  },
  {
    title: "Google I/O × WWDC",
    description: "Cross-community events discussing AI innovations and platform releases from both Apple and Google.",
    highlight: "Collaboration",
    icon: "🤝",
    collab: "GDG MAD • Shaadi.com"
  },
];

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-card/30" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="display-md mb-6">
            Our <span className="text-gradient-swift">events</span>
          </h2>
          <p className="body-lg">
            From casual coffee chats to large-scale conferences, 
            we bring developers together in meaningful ways.
          </p>
        </motion.div>

        {/* Events List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              className="group relative p-6 md:p-8 rounded-2xl bg-background/50 border border-border/50 transition-all duration-500 hover:bg-background hover:border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 + index * 0.08,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <div className="flex items-start gap-6">
                <span className="text-4xl flex-shrink-0">{event.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {event.title}
                    </h3>
                    <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                      {event.highlight}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    {event.description}
                  </p>
                  <p className="text-sm text-muted-foreground/70">
                    {event.collab}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="https://luma.com/user/swiftmumbai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary font-medium transition-colors hover:text-primary/80"
          >
            View all events on Luma
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;