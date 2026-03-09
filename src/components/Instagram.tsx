import { motion, useInView } from "framer-motion";
import { useRef, useCallback, useEffect, useState } from "react";
import { Instagram as InstagramIcon, ArrowLeft, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

import post1Img from "@/assets/instagram/post1.jpg";
import post2Img from "@/assets/instagram/post2.jpg";
import post3Img from "@/assets/instagram/post3.jpg";
import post4Img from "@/assets/instagram/post4.jpg";
import post5Img from "@/assets/instagram/post5.jpg";
import post6Img from "@/assets/instagram/post6.jpg";
import post7Img from "@/assets/instagram/post7.jpg";

const posts = [
  {
    image: post1Img,
    url: "https://www.instagram.com/p/DUPl2Q8jBfpd-WQFcRoqjztTABf9rQoH7lsW3A0/",
  },
  {
    image: post2Img,
    url: "https://www.instagram.com/p/C50NLLKofzF/",
  },
  {
    image: post3Img,
    url: "https://www.instagram.com/p/DLSPjC6olQ4/",
  },
  {
    image: post4Img,
    url: "https://www.instagram.com/p/DGX-T3RTbzM/",
  },
  {
    image: post5Img,
    url: "https://www.instagram.com/p/DD3sgzMIwfB/",
  },
  {
    image: post6Img,
    url: "https://www.instagram.com/p/C7OBAOZIY8k/",
  },
  {
    image: post7Img,
    url: "https://www.instagram.com/p/C8IxvcZyb3hJA7_00iGftkFEgEoxUC1pYpTPxY0/",
  },
];

const Instagram = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollSnaps = emblaApi?.scrollSnapList() ?? [];

  return (
    <section className="section-padding" ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="display-md mb-6">
            On <span className="text-gradient-swift">Instagram</span>
          </h2>
          <p className="body-lg">
            Snapshots from our events, meetups, and community moments.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            {/* Embla viewport */}
            <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
              <div className="flex -ml-4">
                {posts.map((post, index) => (
                  <div
                    key={index}
                    className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/3 pl-4"
                  >
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block relative aspect-square rounded-2xl overflow-hidden liquid-glass-card"
                    >
                      <img
                        src={post.image}
                        alt={`Instagram post ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                        <InstagramIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur border border-border/50 flex items-center justify-center text-foreground transition-all duration-300 hover:bg-background hover:border-border disabled:opacity-0 disabled:pointer-events-none"
              aria-label="Previous posts"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur border border-border/50 flex items-center justify-center text-foreground transition-all duration-300 hover:bg-background hover:border-border disabled:opacity-0 disabled:pointer-events-none"
              aria-label="Next posts"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Page indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === selectedIndex
                    ? "bg-primary w-6"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="https://instagram.com/swift_mumbai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary font-medium transition-colors hover:text-primary/80"
          >
            Follow us on Instagram
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Instagram;
