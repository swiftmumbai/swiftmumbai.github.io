import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Twitter, Linkedin, MessageCircle, Calendar, Github } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient-swift">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Join our community, attend events, or reach out to collaborate!
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a
              href="https://lu.ma/swiftmumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-glow-sm transition-all group"
            >
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-foreground group-hover:text-primary transition-colors">
                Events on Luma
              </span>
            </a>
            
            <a
              href="https://chat.whatsapp.com/Gszg4xLSDvTFhlfSGFfK0x"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-glow-sm transition-all group"
            >
              <MessageCircle className="w-5 h-5 text-primary" />
              <span className="text-foreground group-hover:text-primary transition-colors">
                WhatsApp Group
              </span>
            </a>

            <a
              href="https://github.com/swiftmumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-glow-sm transition-all group"
            >
              <Github className="w-5 h-5 text-primary" />
              <span className="text-foreground group-hover:text-primary transition-colors">
                GitHub
              </span>
            </a>

            <a
              href="https://twitter.com/swift_mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-glow-sm transition-all group"
            >
              <Twitter className="w-5 h-5 text-primary" />
              <span className="text-foreground group-hover:text-primary transition-colors">
                @swift_mumbai
              </span>
            </a>
            
            <a
              href="https://linkedin.com/company/swift-mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-glow-sm transition-all group"
            >
              <Linkedin className="w-5 h-5 text-primary" />
              <span className="text-foreground group-hover:text-primary transition-colors">
                LinkedIn
              </span>
            </a>
            
            <a
              href="mailto:helloswiftmumbai@gmail.com"
              className="flex items-center gap-3 px-6 py-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-glow-sm transition-all group"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-foreground group-hover:text-primary transition-colors">
                Email Us
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
