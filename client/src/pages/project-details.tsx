import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import projectsData from "@/data/projects.json";
import type { Project } from "@/types/project";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectsData.projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <Link href="/projects">
            <a className="text-primary hover:text-primary/80 transition-colors">
              ← Back to Projects
            </a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link href="/projects">
          <a className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <i className="fas fa-arrow-left mr-2" />
            Back to Projects
          </a>
        </Link>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              {project.category}
            </span>
            <span className="text-muted-foreground text-sm">
              Duration: {project.duration}
            </span>
            <span className="text-muted-foreground text-sm">
              Client: {project.client}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">{project.description}</p>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 rounded-xl overflow-hidden shadow-xl"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[500px] object-cover"
          />
        </motion.div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Technologies */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-muted text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Project Links</h3>
              <div className="space-y-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-lg bg-card hover:bg-card/80 transition-colors"
                >
                  <span>Live Demo</span>
                  <i className="fas fa-external-link-alt" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-lg bg-card hover:bg-card/80 transition-colors"
                >
                  <span>GitHub Repository</span>
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 