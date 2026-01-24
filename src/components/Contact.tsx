import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const links = [
  {
    label: "Events",
    href: "https://lu.ma/swiftmumbai",
    description: "Upcoming meetups on Luma",
  },
  {
    label: "WhatsApp",
    href: "https://chat.whatsapp.com/Gszg4xLSDvTFhlfSGFfK0x",
    description: "Join the community group",
  },
  {
    label: "GitHub",
    href: "https://github.com/swiftmumbai",
    description: "Open source projects",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/swift_mumbai",
    description: "@swift_mumbai",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/swift-mumbai",
    description: "Professional network",
  },
  {
    label: "Email",
    href: "mailto:helloswiftmumbai@gmail.com",
    description: "helloswiftmumbai@gmail.com",
  },
];

const Contact = () => {
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
            Get <span className="text-gradient-swift">connected</span>
          </h2>
          <p className="body-lg">
            Join the community, attend events, or reach out to collaborate.
          </p>
        </motion.div>

        {/* Links Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {links.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="group p-6 rounded-2xl bg-card/50 border border-border/50 transition-all duration-500 hover:bg-card hover:border-primary/30"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: 0.1 + index * 0.05,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {link.label}
                </span>
                <svg 
                  className="w-4 h-4 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <p className="text-sm text-muted-foreground">
                {link.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;