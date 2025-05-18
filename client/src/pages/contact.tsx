import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { contactIcons, socialIcons } from "@/lib/utils";
import { apiRequest } from "@/lib/queryClient";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import ParticlesBackground from "@/components/particles-background";
import { LeadGenerationForm } from "@/components/LeadGenerationForm";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  projectType: z.string().min(1, { message: "Please select a project type." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  // Initialize form
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. We'll get back to you shortly.",
        variant: "default",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again later.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Get In <span className="gradient-text">Touch</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Ready to start your project? Contact us today and let's bring your vision to life.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div 
              className="gradient-border rounded-xl p-8 bg-background/70 backdrop-blur-sm"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <LeadGenerationForm variant="contact" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="mb-12">
                <h3 className="text-2xl font-poppins font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold mb-1">Email</h4>
                      <a href="mailto:theapexdev.amaan@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors duration-300">theapexdev.amaan@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold mb-1">Phone</h4>
                      <a href="tel:+919019850972" className="text-muted-foreground hover:text-foreground transition-colors duration-300">+91 90198 50972</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold mb-1">Location</h4>
                      <p className="text-muted-foreground">Bangalore, Karnataka, India</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-poppins font-semibold mb-6">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://wa.me/919019850972" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors duration-300"
                    aria-label="WhatsApp"
                  >
                    <i className="fab fa-whatsapp text-xl"></i>
                  </a>
                  
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook-f text-xl"></i>
                  </a>
                  
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in text-xl"></i>
                  </a>
                  
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently <span className="gradient-text">Asked Questions</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Got questions about working with us? Here are some answers to commonly asked questions.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="gradient-border rounded-xl p-6 bg-background/70 backdrop-blur-sm"
            >
              <h3 className="text-xl font-poppins font-semibold mb-3">How long does a typical project take?</h3>
              <p className="text-muted-foreground">Project timelines vary based on complexity and scope. A simple landing page might take 2-3 weeks, while a custom web application can take 2-3 months. We'll provide a detailed timeline during our initial consultation.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="gradient-border rounded-xl p-6 bg-background/70 backdrop-blur-sm"
            >
              <h3 className="text-xl font-poppins font-semibold mb-3">What is your payment structure?</h3>
              <p className="text-muted-foreground">We typically work with a 50% upfront deposit and the remaining 50% upon project completion. For larger projects, we offer milestone-based payment schedules to distribute costs throughout the development process.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="gradient-border rounded-xl p-6 bg-background/70 backdrop-blur-sm"
            >
              <h3 className="text-xl font-poppins font-semibold mb-3">Do you provide ongoing maintenance?</h3>
              <p className="text-muted-foreground">Yes, we offer ongoing maintenance packages to keep your website secure, updated, and performing optimally. These can be customized based on your specific needs and budget.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="gradient-border rounded-xl p-6 bg-background/70 backdrop-blur-sm"
            >
              <h3 className="text-xl font-poppins font-semibold mb-3">How involved will I be in the process?</h3>
              <p className="text-muted-foreground">We believe in collaborative development. You'll be involved at key decision points, including the initial discovery, wireframing, design approval, and testing phases. We provide regular updates and welcome your feedback throughout.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
