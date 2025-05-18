import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/project-card";
import ParticlesBackground from "@/components/particles-background";

export function Projects() {
  const [filter, setFilter] = useState("all");
  
  const projects = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=380",
      title: "LuxeMarket E-Commerce",
      description: "Premium shopping experience with advanced filtering and payment solutions.",
      technologies: ["React", "Node.js", "Stripe"],
      category: "ecommerce"
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=380",
      title: "AnalyticsHub Dashboard",
      description: "Real-time analytics platform with interactive data visualization.",
      technologies: ["Vue.js", "D3.js", "Firebase"],
      category: "web-app"
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=380",
      title: "NexaLaunch SaaS Platform",
      description: "Conversion-optimized landing page with interactive features.",
      technologies: ["GSAP", "React", "Tailwind"],
      category: "landing-page"
    },
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=380",
      title: "FashionFirst Mobile App",
      description: "Fashion e-commerce platform with AR try-on features.",
      technologies: ["React Native", "Redux", "AR Kit"],
      category: "ecommerce"
    },
    {
      id: 5,
      imageUrl: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=380",
      title: "TaskFlow Management",
      description: "Collaborative project management tool with real-time updates.",
      technologies: ["Angular", "Socket.io", "MongoDB"],
      category: "web-app"
    },
    {
      id: 6,
      imageUrl: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=380",
      title: "GourmetGo Restaurant",
      description: "Elegant restaurant website with booking system and menu showcase.",
      technologies: ["Next.js", "Framer Motion", "Stripe"],
      category: "landing-page"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const filterButtons = [
    { id: "all", label: "All" },
    { id: "ecommerce", label: "E-Commerce" },
    { id: "web-app", label: "Web Apps" },
    { id: "landing-page", label: "Landing Pages" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <ParticlesBackground count={30} />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-outfit font-black mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our <span className="gradient-text">Projects</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Explore our portfolio of successful projects that demonstrate our expertise and creativity.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          {/* Project Filters */}
          <motion.div 
            className="flex justify-center mb-12 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filterButtons.map(button => (
              <Button
                key={button.id}
                onClick={() => setFilter(button.id)}
                className={cn(
                  "px-6 py-3 m-2 rounded-full transition-all duration-300",
                  filter === button.id
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-background hover:bg-primary/80 text-foreground"
                )}
              >
                {button.label}
              </Button>
            ))}
          </motion.div>
          
          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <ProjectCard
                    imageUrl={project.imageUrl}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    category={project.category}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-xl text-muted-foreground">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Process Section */}
      <section className="py-16 md:py-24 bg-background/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-5xl font-outfit font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our <span className="gradient-text">Process</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We follow a proven methodology to ensure every project is delivered with excellence.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <motion.div 
              className="bg-background/70 backdrop-blur-sm rounded-xl p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/30 to-secondary/10 rounded-bl-full"></div>
              <div className="text-5xl font-outfit font-black mb-6 gradient-text">01</div>
              <h3 className="text-xl font-poppins font-semibold mb-4">Discovery</h3>
              <p className="text-muted-foreground z-10 relative">
                We analyze your business needs, target audience, and project goals to create a comprehensive strategy.
              </p>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div 
              className="bg-background/70 backdrop-blur-sm rounded-xl p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/30 to-secondary/10 rounded-bl-full"></div>
              <div className="text-5xl font-outfit font-black mb-6 gradient-text">02</div>
              <h3 className="text-xl font-poppins font-semibold mb-4">Design</h3>
              <p className="text-muted-foreground z-10 relative">
                We create visually stunning, user-centric designs that align with your brand identity and business objectives.
              </p>
            </motion.div>
            
            {/* Step 3 */}
            <motion.div 
              className="bg-background/70 backdrop-blur-sm rounded-xl p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/30 to-secondary/10 rounded-bl-full"></div>
              <div className="text-5xl font-outfit font-black mb-6 gradient-text">03</div>
              <h3 className="text-xl font-poppins font-semibold mb-4">Development</h3>
              <p className="text-muted-foreground z-10 relative">
                Our expert developers build your solution using cutting-edge technologies and best coding practices.
              </p>
            </motion.div>
            
            {/* Step 4 */}
            <motion.div 
              className="bg-background/70 backdrop-blur-sm rounded-xl p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/30 to-secondary/10 rounded-bl-full"></div>
              <div className="text-5xl font-outfit font-black mb-6 gradient-text">04</div>
              <h3 className="text-xl font-poppins font-semibold mb-4">Launch & Support</h3>
              <p className="text-muted-foreground z-10 relative">
                We ensure a smooth deployment and provide ongoing support to keep your digital presence at its best.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
