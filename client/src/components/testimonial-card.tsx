import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  name: string;
  position: string;
  company: string;
  delay?: number;
  className?: string;
}

export function TestimonialCard({
  quote,
  name,
  position,
  company,
  delay = 0,
  className,
}: TestimonialCardProps) {
  // Star rating component
  const StarRating = () => (
    <div className="flex items-center mb-6">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-secondary"
        >
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#8a5cf7" }} />
              <stop offset="100%" style={{ stopColor: "#f087b3" }} />
            </linearGradient>
          </defs>
          <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
        </svg>
      ))}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className={cn(
        "gradient-border rounded-xl p-8 bg-background/70 backdrop-blur-sm",
        className
      )}
    >
      <StarRating />
      <p className="text-muted-foreground mb-6 italic">{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-accent mr-4"></div>
        <div>
          <h4 className="font-poppins font-semibold">{name}</h4>
          <p className="text-muted-foreground text-sm">
            {position}, {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default TestimonialCard;
