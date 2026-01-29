import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MessageCircle, Github, Twitter, Instagram, Youtube, Linkedin, Mail } from "lucide-react";

const links = [
  {
    label: "Events",
    href: "https://luma.com/user/swiftmumbai",
    description: "Upcoming meetups on Luma",
    icon: Calendar,
  },
  {
    label: "WhatsApp",
    href: "https://chat.whatsapp.com/Gszg4xLSDvTFhlfSGFfK0x",
    description: "Join the community group",
    icon: MessageCircle,
  },
  {
    label: "GitHub",
    href: "https://github.com/swiftmumbai",
    description: "Open source projects",
    icon: Github,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/swift_mumbai",
    description: "@swift_mumbai",
    icon: Twitter,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/swift_mumbai",
    description: "@swift_mumbai",
    icon: Instagram,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@SwiftMumbai",
    description: "Watch talks & sessions",
    icon: Youtube,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/swift-mumbai",
    description: "Professional network",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:helloswiftmumbai@gmail.com",
    description: "helloswiftmumbai@gmail.com",
    icon: Mail,
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding scroll-mt-24" ref={ref}>
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
                <div className="flex items-center gap-3">
                  <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {link.label}
                  </span>
                </div>
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