import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ParticlesBackground from "@/components/particles-background";

export function About() {
  const techStack = [
    "React", "Next.js", "Vue.js", "Node.js", 
    "Tailwind CSS", "GSAP", "Three.js", "MongoDB",
    "TypeScript", "AWS", "Firebase", "GraphQL"
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
              About <span className="gradient-text">TheApexDev</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We're a team of passionate developers, designers, and digital strategists committed to delivering exceptional web solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We are a team of passionate developers, designers, and digital strategists committed to delivering exceptional web solutions that drive business growth and user engagement.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-poppins font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower businesses with cutting-edge web technology that transforms their digital presence and creates meaningful connections with their audience.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-poppins font-semibold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading web development agency known for innovative solutions, exceptional design, and measurable results that exceed client expectations.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-poppins font-semibold mb-4">Our Tech Stack</h3>
                <div className="flex flex-wrap gap-4">
                  {techStack.map((tech, index) => (
                    <span key={index} className="px-4 py-2 bg-primary/20 text-secondary rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Modern tech office workspace with team collaboration */}
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700" 
                alt="TheApexDev Team Workspace" 
                className="rounded-xl shadow-2xl shadow-primary/20 w-full h-auto relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-secondary rounded-xl z-0"></div>
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-accent rounded-xl z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Values */}
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
              Our <span className="gradient-text">Values</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              These core principles guide everything we do and define how we work with our clients.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <motion.div 
              className="gradient-border rounded-xl p-8 bg-background/70 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-4">Excellence</h3>
              <p className="text-muted-foreground">
                We are committed to delivering the highest quality in everything we do. From code to design, we never compromise on excellence.
              </p>
            </motion.div>
            
            {/* Value 2 */}
            <motion.div 
              className="gradient-border rounded-xl p-8 bg-background/70 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                We constantly explore new technologies and approaches to deliver innovative solutions that give our clients a competitive edge.
              </p>
            </motion.div>
            
            {/* Value 3 */}
            <motion.div 
              className="gradient-border rounded-xl p-8 bg-background/70 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-4">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe in working closely with our clients, treating their goals as our own and building lasting partnerships based on trust.
              </p>
            </motion.div>
            
            {/* Value 4 */}
            <motion.div 
              className="gradient-border rounded-xl p-8 bg-background/70 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-4">Transparency</h3>
              <p className="text-muted-foreground">
                We maintain open communication and clear processes, ensuring clients are always informed and involved in their project's progress.
              </p>
            </motion.div>
            
            {/* Value 5 */}
            <motion.div 
              className="gradient-border rounded-xl p-8 bg-background/70 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-4">Creativity</h3>
              <p className="text-muted-foreground">
                We approach each project with fresh ideas and creative thinking, crafting unique solutions that stand out in the digital landscape.
              </p>
            </motion.div>
            
            {/* Value 6 */}
            <motion.div 
              className="gradient-border rounded-xl p-8 bg-background/70 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-4">Results-Driven</h3>
              <p className="text-muted-foreground">
                Our ultimate goal is to deliver measurable results that contribute to our clients' business growth and success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-5xl font-outfit font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to <span className="gradient-text">Work</span> With Us?
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Let's discuss how we can help your business grow through exceptional web development and digital solutions.
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
                  <a>Contact Our Team</a>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
