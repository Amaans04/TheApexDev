import { motion } from "framer-motion";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div 
      className="project-card overflow-hidden rounded-xl bg-[#1e1e1e]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
    >
      <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="w-full h-60 object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold font-outfit">{project.title}</h3>
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/20 text-primary">
            {project.category}
          </span>
        </div>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
        <a href="#" className="text-primary font-medium inline-flex items-center hover:text-accent transition-colors">
          View project <i className="fas fa-arrow-right ml-2 text-sm"></i>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
