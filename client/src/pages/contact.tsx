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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-poppins">Your Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            className="bg-background gradient-border" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-poppins">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="john@example.com" 
                            className="bg-background gradient-border" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-poppins">Project Type</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-background gradient-border">
                              <SelectValue placeholder="Select your project type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="web-development">Web Development</SelectItem>
                            <SelectItem value="e-commerce">E-Commerce</SelectItem>
                            <SelectItem value="landing-page">Landing Page</SelectItem>
                            <SelectItem value="web-app">Web Application</SelectItem>
                            <SelectItem value="redesign">Website Redesign</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-poppins">Your Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project..." 
                            className="bg-background gradient-border" 
                            rows={5}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-secondary shadow-lg shadow-primary/30 rounded-lg font-poppins font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
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
                      {contactIcons.email}
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold mb-1">Email</h4>
                      <a href="mailto:hello@theapexdev.com" className="text-muted-foreground hover:text-foreground transition-colors duration-300">hello@theapexdev.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      {contactIcons.phone}
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold mb-1">Phone</h4>
                      <a href="tel:+1234567890" className="text-muted-foreground hover:text-foreground transition-colors duration-300">+1 (234) 567-890</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      {contactIcons.location}
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold mb-1">Location</h4>
                      <p className="text-muted-foreground">123 Innovation Street, Tech City, 12345</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-poppins font-semibold mb-6">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    {socialIcons.facebook}
                  </a>
                  
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    {socialIcons.twitter}
                  </a>
                  
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    {socialIcons.linkedin}
                  </a>
                  
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    {socialIcons.instagram}
                  </a>
                </div>
              </div>
              
              {/* Office Image */}
              <div className="mt-12 rounded-xl overflow-hidden shadow-xl shadow-primary/20">
                <img 
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="TheApexDev Office" 
                  className="w-full h-auto"
                />
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
