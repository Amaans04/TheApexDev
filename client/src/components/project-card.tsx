import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  className?: string;
  delay?: number;
}

export function ProjectCard({
  imageUrl,
  title,
  description,
  technologies,
  category,
  className,
  delay = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className={cn("project-card rounded-xl overflow-hidden", className)}
      data-category={category}
    >
      <div className="overflow-hidden">
        <img
          src={imageUrl}
          alt={`${title} Project`}
          className="w-full h-60 object-cover"
        />
      </div>
      <div className="p-6 bg-background/90 backdrop-blur-sm">
        <h3 className="text-xl font-poppins font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary/20 text-secondary rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
