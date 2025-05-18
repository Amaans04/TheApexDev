import { ReactNode } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  serviceType: string;
  className?: string;
  delay?: number;
}

export function ServiceCard({
  icon,
  title,
  description,
  serviceType,
  className,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className={cn(
        "service-card gradient-border rounded-xl p-8 bg-background/70 backdrop-blur-sm",
        className
      )}
      data-service={serviceType}
    >
      <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-poppins font-semibold mb-4">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      <Link href="/contact">
        <a className="flex items-center text-secondary hover:text-accent font-poppins font-medium transition-colors duration-300">
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </Link>
    </motion.div>
  );
}

export default ServiceCard;
