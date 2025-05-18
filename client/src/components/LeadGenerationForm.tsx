import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().optional(),
  projectType: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface LeadGenerationFormProps {
  variant?: 'inline' | 'overlay' | 'contact';
  onClose?: () => void;
  className?: string;
}

export function LeadGenerationForm({ variant = 'inline', onClose, className = '' }: LeadGenerationFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      projectType: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Here you would normally submit the form data to your backend
      // For demonstration purposes, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success!",
        description: "We've received your information and will contact you shortly.",
        variant: "default",
      });
      
      reset();
      
      // Close the overlay if this is an overlay form
      if (variant === 'overlay' && onClose) {
        onClose();
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your form submission failed. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Different title and description based on variant
  const getContent = () => {
    switch (variant) {
      case 'overlay':
        return {
          title: "Let's Discuss Your Project",
          description: "Fill out this quick form to get a free consultation and quote for your web project.",
          buttonText: "Get Started Now"
        };
      case 'contact':
        return {
          title: "Get In Touch",
          description: "Tell us about your project and we'll get back to you promptly with expert insights.",
          buttonText: "Send Message"
        };
      case 'inline':
      default:
        return {
          title: "Ready to Transform Your Digital Presence?",
          description: "Drop us a line and we'll get back to you to discuss your requirements.",
          buttonText: "Send Inquiry"
        };
    }
  };

  const { title, description, buttonText } = getContent();

  return (
    <div className={`${className} ${variant === 'overlay' ? 'p-8 rounded-xl backdrop-blur-lg bg-black/40 border border-violet-800/30' : ''}`}>
      {variant === 'overlay' && onClose && (
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      )}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="text-2xl md:text-3xl font-outfit font-bold mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground mb-6">
          {description}
        </p>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Name *</label>
            <Input
              {...register('name')}
              placeholder="Your full name"
              className={`bg-black/40 border ${errors.name ? 'border-red-500' : 'border-violet-800/50'}`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Email *</label>
            <Input
              {...register('email')}
              placeholder="your.email@example.com"
              className={`bg-black/40 border ${errors.email ? 'border-red-500' : 'border-violet-800/50'}`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Phone (optional)</label>
              <Input
                {...register('phone')}
                placeholder="Your phone number"
                className="bg-black/40 border border-violet-800/50"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Company (optional)</label>
              <Input
                {...register('company')}
                placeholder="Your company name"
                className="bg-black/40 border border-violet-800/50"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Project Type (optional)</label>
            <select
              {...register('projectType')}
              className="w-full h-10 px-3 py-2 rounded-md bg-black/40 border border-violet-800/50 text-foreground"
            >
              <option value="">Select project type</option>
              <option value="website">Website Design</option>
              <option value="ecommerce">E-Commerce</option>
              <option value="app">Mobile App</option>
              <option value="branding">Branding</option>
              <option value="seo">SEO Optimization</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Message (optional)</label>
            <Textarea
              {...register('message')}
              placeholder="Tell us about your project..."
              className="bg-black/40 border border-violet-800/50 min-h-[100px]"
            />
          </div>
          
          <div className="pt-2">
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-secondary text-white font-medium py-2 rounded-full shadow-lg shadow-primary/30"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                buttonText
              )}
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground text-center pt-2">
            By submitting this form, you agree to our <a href="#" className="underline text-violet-300">Privacy Policy</a> and consent to be contacted regarding your inquiry.
          </p>
        </form>
      </motion.div>
    </div>
  );
}

export default LeadGenerationForm;