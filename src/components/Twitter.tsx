import { motion, useInView } from "framer-motion";
import { useRef, useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Tweet } from "react-tweet";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

// Pinned tweet IDs — always shown first, never removed or reordered.
// Add your tweet IDs here (the number at the end of the tweet URL).
// e.g. https://x.com/swift_mumbai/status/1234567890 → "1234567890"
const PINNED_TWEET_IDS: string[] = [
  "1786617284967923988",
  "1926202475935154184",
  "1932126313151947223"
];

interface DynamicTweet {
  id: string;
  text: string;
  createdAt: string;
}

const Twitter = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [dynamicTweetIds, setDynamicTweetIds] = useState<string[]>([]);
  const [isDark, setIsDark] = useState(false);

  // Sync with site dark mode so react-tweet renders the right theme
  useEffect(() => {
    const check = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  // Fetch dynamic tweet IDs at runtime
  useEffect(() => {
    fetch("/twitter/tweets.json")
      .then((res) => res.json())
      .then((data) => {
        if (data?.tweets?.length) {
          setDynamicTweetIds(data.tweets.map((t: DynamicTweet) => t.id));
        }
      })
      .catch(() => {
        // Fail silently — pinned tweets still show
      });
  }, []);

  const allTweetIds = [...PINNED_TWEET_IDS, ...dynamicTweetIds];

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

  // Re-initialize carousel when dynamic tweets load
  useEffect(() => {
    if (emblaApi && dynamicTweetIds.length > 0) {
      emblaApi.reInit();
    }
  }, [emblaApi, dynamicTweetIds]);

  const scrollSnaps = emblaApi?.scrollSnapList() ?? [];

  // Don't render the section until there are tweets to show
  if (allTweetIds.length === 0) return null;

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
            On <span className="text-gradient-swift">X</span>
          </h2>
          <p className="body-lg">
            Latest updates, announcements, and community highlights.
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
              <div
                className="flex -ml-4"
                data-theme={isDark ? "dark" : "light"}
              >
                {allTweetIds.map((tweetId) => (
                  <div
                    key={tweetId}
                    className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3 pl-4"
                  >
                    <div className="[&>div]:!my-0 [&_article]:!border-border/50 [&_article]:!rounded-2xl">
                      <Tweet id={tweetId} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur border border-border/50 flex items-center justify-center text-foreground transition-all duration-300 hover:bg-background hover:border-border disabled:opacity-0 disabled:pointer-events-none"
              aria-label="Previous tweets"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur border border-border/50 flex items-center justify-center text-foreground transition-all duration-300 hover:bg-background hover:border-border disabled:opacity-0 disabled:pointer-events-none"
              aria-label="Next tweets"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Page indicators */}
          {scrollSnaps.length > 1 && (
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
          )}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="https://twitter.com/swift_mumbai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary font-medium transition-colors hover:text-primary/80"
          >
            Follow us on X
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Twitter;
