import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { serviceIcons } from "@/lib/utils";
import ServiceCard from "@/components/service-card";
import ParticlesBackground from "@/components/particles-background";

export function Services() {
  const servicesDetails = [
    {
      id: "seo",
      icon: serviceIcons.seo,
      title: "SEO Optimization",
      shortDesc: "Boost your online visibility with our comprehensive SEO strategies that drive organic traffic and improve search rankings.",
      longDesc: "Our SEO services help businesses rank higher in search engine results, driving more qualified traffic to your website. We use data-driven approaches to identify the best keywords, optimize on-page content, build quality backlinks, and improve technical SEO factors. Regular performance analysis ensures we're always improving your digital presence.",
      features: [
        "Comprehensive SEO audit",
        "Keyword research and strategy",
        "On-page optimization",
        "Technical SEO improvements",
        "Content strategy development",
        "Link building campaigns",
        "Local SEO optimization",
        "Monthly performance reporting"
      ]
    },
    {
      id: "landing",
      icon: serviceIcons.landing,
      title: "Landing Page Design",
      shortDesc: "Capture audience attention with stunning, conversion-optimized landing pages designed to turn visitors into customers.",
      longDesc: "Our landing page designs focus on conversion optimization to help you achieve your business goals. Whether you're launching a new product, capturing leads, or promoting a special offer, we create engaging, responsive pages that drive action. Each design is backed by UX best practices and optimized for performance.",
      features: [
        "Conversion-focused design",
        "Mobile-responsive layouts",
        "A/B testing setup",
        "Compelling copywriting",
        "Call-to-action optimization",
        "Fast loading performance",
        "Custom graphics and animations",
        "Analytics integration"
      ]
    },
    {
      id: "development",
      icon: serviceIcons.development,
      title: "Custom Web/App Development",
      shortDesc: "From concept to deployment, we build robust, scalable web applications using cutting-edge technologies.",
      longDesc: "We create custom web applications tailored to your business requirements. Our development process emphasizes scalability, security, and user experience. We leverage modern frameworks and technologies to build responsive, high-performance applications that solve complex business challenges.",
      features: [
        "Custom software architecture",
        "Front-end & back-end development",
        "Progressive Web Apps (PWAs)",
        "API development and integration",
        "Database design and optimization",
        "Authentication & authorization",
        "Automated testing",
        "Deployment and DevOps setup"
      ]
    },
    {
      id: "ecommerce",
      icon: serviceIcons.ecommerce,
      title: "E-Commerce Development",
      shortDesc: "Launch your online store with secure, feature-rich e-commerce solutions that drive sales and enhance customer experience.",
      longDesc: "Our e-commerce solutions help businesses sell products and services online effectively. We build secure, intuitive online stores with seamless checkout experiences, inventory management, and marketing tools integration. Our focus is on creating shopping experiences that convert visitors into loyal customers.",
      features: [
        "Custom storefront design",
        "Product catalog management",
        "Secure payment processing",
        "Inventory management",
        "Shipping & tax calculation",
        "Customer account systems",
        "Mobile shopping optimization",
        "Marketing tools integration"
      ]
    },
    {
      id: "redesign",
      icon: serviceIcons.redesign,
      title: "Website Redesign",
      shortDesc: "Transform your outdated website into a modern, high-performing digital asset that aligns with your brand and goals.",
      longDesc: "Our website redesign services breathe new life into outdated digital properties. We analyze your current site's strengths and weaknesses, then create a modern design that improves user experience, performance, and conversion rates. The result is a website that effectively represents your brand and engages your audience.",
      features: [
        "Complete UX/UI overhaul",
        "Content migration and optimization",
        "Performance optimization",
        "Responsive design implementation",
        "SEO preservation strategy",
        "Conversion rate optimization",
        "Accessibility improvements",
        "Analytics setup and tracking"
      ]
    },
    {
      id: "logo",
      icon: serviceIcons.logo,
      title: "Logo Design",
      shortDesc: "Create a memorable brand identity with custom logo designs that capture your business essence and resonate with your audience.",
      longDesc: "Our logo design service helps businesses establish a strong visual identity. We create unique, versatile logos that effectively communicate your brand values and make a lasting impression. Our process involves understanding your brand, creating multiple concepts, and refining the chosen design until it perfectly represents your business.",
      features: [
        "Custom logo creation",
        "Multiple design concepts",
        "Brand color palette",
        "Logo variations and formats",
        "Vector file delivery",
        "Social media optimization",
        "Brand guidelines",
        "Unlimited revisions"
      ]
    }
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
              Our <span className="gradient-text">Services</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We offer comprehensive web development solutions to help your business thrive in the digital landscape. From design to development, we've got you covered.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {servicesDetails.map((service, index) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.shortDesc}
                serviceType={service.id}
                delay={index + 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {servicesDetails.map((service, index) => (
        <section 
          id={service.id} 
          key={service.id}
          className={`py-16 md:py-24 ${index % 2 === 0 ? 'bg-background/30' : ''}`}
        >
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <motion.div 
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-6">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-8">{service.longDesc}</p>
                <Link href="/contact">
                  <a>
                    <Button
                      size="lg" 
                      className="bg-primary hover:bg-secondary shadow-lg shadow-primary/30 rounded-full"
                    >
                      Get Started
                    </Button>
                  </a>
                </Link>
              </motion.div>
              
              <motion.div 
                className="w-full lg:w-1/2 gradient-border rounded-xl p-8 bg-background/70 backdrop-blur-sm"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-poppins font-semibold mb-6">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-5xl font-outfit font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to <span className="gradient-text">Elevate</span> Your Digital Presence?
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Let's discuss how our services can help your business grow. Contact us today to start your project.
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
                  <a>Get In Touch</a>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
