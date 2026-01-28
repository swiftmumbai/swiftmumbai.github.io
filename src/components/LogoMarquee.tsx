import { motion } from "framer-motion";

// Companies where Swift Mumbai members work
const companies = [
  { name: "Apple", logo: "🍎" },
  { name: "Google", logo: "G" },
  { name: "Microsoft", logo: "M" },
  { name: "Amazon", logo: "A" },
  { name: "Flipkart", logo: "F" },
  { name: "Swiggy", logo: "S" },
  { name: "Razorpay", logo: "R" },
  { name: "Zerodha", logo: "Z" },
  { name: "Dream11", logo: "D" },
  { name: "PhonePe", logo: "P" },
  { name: "Jio", logo: "J" },
  { name: "Paytm", logo: "₹" },
];

const LogoMarquee = () => {
  return (
    <div className="py-8 overflow-hidden">
      <p className="text-center text-sm text-muted-foreground mb-6">
        Join developers from top organizations
      </p>
      
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Marquee */}
        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[...companies, ...companies].map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex items-center gap-2 text-muted-foreground/50 hover:text-muted-foreground transition-colors shrink-0"
            >
              <span className="text-2xl font-bold tracking-tight">
                {company.logo}
              </span>
              <span className="text-lg font-medium hidden sm:inline">
                {company.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoMarquee;
