import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { serviceIcons } from "@/lib/utils";
import ParticlesBackground from "@/components/particles-background";
import ServiceCard from "@/components/service-card";
import ProjectCard from "@/components/project-card";
import TestimonialCard from "@/components/testimonial-card";
import { Separator } from "@/components/ui/separator";
import { RotatingObject3D } from "@/components/RotatingObject3D";

export function Home() {
  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      {/* Hero Section - Simplified, Text-only Design */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
        <div className="container mx-auto px-6 py-12 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Glowing circles for visual interest */}
            <motion.div 
              className="absolute w-96 h-96 rounded-full bg-violet-600/20 blur-3xl -top-20 -right-20 z-0"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2] 
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            
            <motion.div 
              className="absolute w-80 h-80 rounded-full bg-pink-600/20 blur-3xl -bottom-20 -left-20 z-0"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.15, 0.25, 0.15] 
              }}
              transition={{ 
                duration: 7, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />

            {/* Main heading with larger size */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-outfit font-black leading-tight mb-8 tracking-tight">
                <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">TheApex</span>
                <span className="text-white">Dev</span>
              </h1>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-5xl font-outfit font-bold mb-10 leading-tight relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              We Build <span className="gradient-text">Digital</span> Experiences <br className="hidden md:block" />
              That <span className="gradient-text">Inspire</span> & <span className="gradient-text">Transform</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl text-violet-200 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Your vision, our expertise. We create cutting-edge web solutions 
              that elevate your brand and drive business growth.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Button 
                asChild
                size="lg" 
                className="bg-primary hover:bg-secondary text-white rounded-full shadow-lg shadow-primary/30 px-10 py-7 text-lg"
              >
                <Link href="/contact">
                  <a>Start Your Project</a>
                </Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline" 
                className="gradient-border bg-transparent rounded-full px-10 py-7 text-lg"
              >
                <Link href="/services">
                  <a>Explore Services</a>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Link href="#services">
            <a className="flex flex-col items-center text-violet-300 hover:text-violet-100 transition-colors duration-300">
              <span className="text-sm font-poppins mb-2">Discover Our Services</span>
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </a>
          </Link>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-3xl md:text-5xl font-outfit font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our <span className="gradient-text">Services</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We offer comprehensive web development solutions tailored to your unique business needs.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <ServiceCard
              icon={serviceIcons.seo}
              title="SEO Optimization"
              description="Boost your online visibility with our comprehensive SEO strategies that drive organic traffic and improve search rankings."
              serviceType="seo"
              delay={1}
            />
            
            <ServiceCard
              icon={serviceIcons.landing}
              title="Landing Page Design"
              description="Capture audience attention with stunning, conversion-optimized landing pages designed to turn visitors into customers."
              serviceType="landing"
              delay={2}
            />
            
            <ServiceCard
              icon={serviceIcons.development}
              title="Custom Web/App Development"
              description="From concept to deployment, we build robust, scalable web applications using cutting-edge technologies."
              serviceType="development"
              delay={3}
            />
            
            <ServiceCard
              icon={serviceIcons.ecommerce}
              title="E-Commerce Development"
              description="Launch your online store with secure, feature-rich e-commerce solutions that drive sales and enhance customer experience."
              serviceType="ecommerce"
              delay={4}
            />
            
            <ServiceCard
              icon={serviceIcons.redesign}
              title="Website Redesign"
              description="Transform your outdated website into a modern, high-performing digital asset that aligns with your brand and goals."
              serviceType="redesign"
              delay={5}
            />
            
            <ServiceCard
              icon={serviceIcons.api}
              title="API Integration"
              description="Connect your systems and services with seamless API integrations that enhance functionality and streamline operations."
              serviceType="api"
              delay={6}
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="featured-projects" className="py-20 md:py-32 bg-background/30 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-5xl font-outfit font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Explore a selection of our successful projects that demonstrate our expertise and creativity.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              imageUrl="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=380"
              title="LuxeMarket E-Commerce"
              description="Premium shopping experience with advanced filtering and payment solutions."
              technologies={["React", "Node.js", "Stripe"]}
              category="ecommerce"
              delay={1}
            />
            
            <ProjectCard
              imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=380"
              title="AnalyticsHub Dashboard"
              description="Real-time analytics platform with interactive data visualization."
              technologies={["Vue.js", "D3.js", "Firebase"]}
              category="web-app"
              delay={2}
            />
            
            <ProjectCard
              imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=380"
              title="NexaLaunch SaaS Platform"
              description="Conversion-optimized landing page with interactive features."
              technologies={["GSAP", "React", "Tailwind"]}
              category="landing-page"
              delay={3}
            />
          </div>
          
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg" 
              className="bg-primary hover:bg-secondary shadow-lg shadow-primary/30 rounded-full"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/projects">
                  <a>View All Projects</a>
                </Link>
              </motion.div>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-5xl font-outfit font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Client <span className="gradient-text">Testimonials</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Working with TheApexDev was a game-changer for our business. Their team delivered a stunning e-commerce platform that exceeded our expectations and has dramatically increased our conversion rates."
              name="Sarah Johnson"
              position="CEO"
              company="FashionFirst"
              delay={1}
            />
            
            <TestimonialCard
              quote="The team at TheApexDev transformed our outdated website into a modern, high-performing platform. Their technical expertise and attention to detail made the entire process smooth and successful."
              name="Michael Chen"
              position="CTO"
              company="TechInnovate"
              delay={2}
            />
            
            <TestimonialCard
              quote="The landing page TheApexDev designed for our product launch was instrumental in our success. The page not only looked amazing but also converted visitors at a rate far above industry standards."
              name="Amanda Rodriguez"
              position="Marketing Director"
              company="NexaLaunch"
              delay={3}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative bg-background/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-5xl font-outfit font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to <span className="gradient-text">Transform</span> Your Digital Presence?
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Let's collaborate to create exceptional web experiences that drive your business forward. Get in touch today to start your project.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                asChild
                size="lg" 
                className="bg-primary hover:bg-secondary shadow-lg shadow-primary/30 rounded-full px-8 py-6 text-lg"
              >
                <Link href="/contact">
                  <a>Contact Us Now</a>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
