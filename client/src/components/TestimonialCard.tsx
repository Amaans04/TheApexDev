import { motion } from "framer-motion";
import { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  return (
    <motion.div 
      className="glass-effect rounded-xl p-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
    >
      <div className="flex gap-1 mb-4 text-accent">
        {[...Array(5)].map((_, i) => (
          <i key={i} className="fas fa-star"></i>
        ))}
      </div>
      <p className="text-gray-300 italic mb-6">{testimonial.content}</p>
      <div className="flex items-center">
        <div className="mr-4">
          <img 
            src={testimonial.avatarUrl} 
            alt={testimonial.name} 
            className="w-12 h-12 rounded-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h4 className="font-medium font-outfit">{testimonial.name}</h4>
          <p className="text-sm text-gray-400">{testimonial.position}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
