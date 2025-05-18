import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass-effect rounded-xl p-8">
      <h3 className="text-xl font-semibold font-outfit mb-6">Send us a message</h3>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className={`w-full bg-[#121212] border ${
              errors.name ? "border-red-500" : "border-gray-700"
            } rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors`}
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
        
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className={`w-full bg-[#121212] border ${
              errors.email ? "border-red-500" : "border-gray-700"
            } rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        
        <div className="mb-6">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
          <input
            type="text"
            id="subject"
            {...register("subject")}
            className={`w-full bg-[#121212] border ${
              errors.subject ? "border-red-500" : "border-gray-700"
            } rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors`}
            placeholder="Project Inquiry"
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
          )}
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
          <textarea
            id="message"
            rows={5}
            {...register("message")}
            className={`w-full bg-[#121212] border ${
              errors.message ? "border-red-500" : "border-gray-700"
            } rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors`}
            placeholder="Tell us about your project..."
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>
        
        <motion.button
          type="submit"
          className="w-full px-6 py-3 rounded-full accent-gradient text-white font-medium transition-all hover:shadow-lg hover:shadow-primary/30 flex items-center justify-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>Processing <i className="fas fa-spinner fa-spin ml-2"></i></>
          ) : (
            <>Send Message <i className="fas fa-paper-plane ml-2"></i></>
          )}
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;
