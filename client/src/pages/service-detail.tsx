
import { useParams } from 'wouter';
import { motion } from 'framer-motion';
import { servicesDetails } from '@/pages/services';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import ParticlesBackground from '@/components/particles-background';

export function ServiceDetail() {
  const { id } = useParams();
  const service = servicesDetails.find(s => s.id === id);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <ParticlesBackground />
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                <div className="w-8 h-8">
                  {service.icon}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-outfit font-bold">{service.title}</h1>
            </div>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {service.longDesc}
            </motion.p>

            <motion.div
              className="gradient-border rounded-xl p-8 bg-background/70 backdrop-blur-sm mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-outfit font-semibold mb-6">Key Features</h2>
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

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-secondary shadow-lg shadow-primary/30 rounded-full px-10 py-7 text-lg"
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default ServiceDetail;
