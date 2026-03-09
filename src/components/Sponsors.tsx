import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import haptikImg from "@/assets/sponsors/haptik.png";
import hereImg from "@/assets/sponsors/here.png";
import erosnowImg from "@/assets/sponsors/erosnow.png";
import servifyImg from "@/assets/sponsors/servify.png";
import bookmyshowImg from "@/assets/sponsors/bookmyshow.png";
import letsupgradeImg from "@/assets/sponsors/letsupgrade.png";
import springboardImg from "@/assets/sponsors/springboard.png";
import dream11Img from "@/assets/sponsors/dream11.png";
import weworkImg from "@/assets/sponsors/wework.png";
import tuistImg from "@/assets/sponsors/tuist.png";
import atlasImg from "@/assets/sponsors/atlas.png";
import somaiyaImg from "@/assets/sponsors/somaiya.png";
import shaadiImg from "@/assets/sponsors/shaadi.png";

const sponsors = [
  { name: "Haptik", logo: haptikImg, href: "https://www.haptik.ai" },
  { name: "Here Technologies", logo: hereImg, href: "https://www.here.com" },
  { name: "Eros Now", logo: erosnowImg, href: "https://www.erosnow.com" },
  { name: "Servify", logo: servifyImg, href: "https://www.servify.tech" },
  { name: "BookMyShow", logo: bookmyshowImg, href: "https://www.bookmyshow.com" },
  { name: "LetsUpgrade", logo: letsupgradeImg, href: "https://www.letsupgrade.in" },
  { name: "91Springboard", logo: springboardImg, href: "https://www.91springboard.com" },
  { name: "Dream11", logo: dream11Img, href: "https://www.dream11.com" },
  { name: "WeWork", logo: weworkImg, href: "https://www.wework.com" },
  { name: "Tuist", logo: tuistImg, href: "https://tuist.dev" },
  { name: "Atlas SkillTech University", logo: atlasImg, href: "https://www.atlasuniversity.edu.in" },
  { name: "Somaiya Vidyavihar University", logo: somaiyaImg, href: "https://www.somaiya.edu" },
  { name: "Shaadi.com", logo: shaadiImg, href: "https://www.shaadi.com" },
];

const Sponsors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-card/30" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="display-md mb-6">
            Our <span className="text-gradient-swift">partners</span>
          </h2>
          <p className="body-lg">
            Companies and organizations supporting the community.
          </p>
        </motion.div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <motion.a
              key={sponsor.name}
              href={sponsor.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center p-6 rounded-2xl bg-background/50 border border-border/50 transition-all duration-500 hover:bg-background hover:border-border hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 + index * 0.05,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </motion.a>
          ))}
        </div>

        {/* Become a Sponsor CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-muted-foreground mb-4">
            Interested in supporting the community?
          </p>
          <a
            href="https://opencollective.com/swift-mumbai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary font-medium transition-colors hover:text-primary/80"
          >
            Become a sponsor
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
