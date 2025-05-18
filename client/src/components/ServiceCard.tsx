import { motion } from "framer-motion";
import { Link } from "wouter";
import { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <motion.div 
      className="service-card glass-effect rounded-xl p-8 h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
    >
      <div className="w-14 h-14 rounded-full accent-gradient flex items-center justify-center mb-6">
        <i className={`fas ${service.icon} text-xl`}></i>
      </div>
      <h3 className="text-xl font-semibold font-outfit mb-4">{service.title}</h3>
      <p className="text-gray-400 mb-6">{service.description}</p>
      <Link href="/contact">
        <a className="text-primary font-medium inline-flex items-center hover:text-accent transition-colors">
          Learn more <i className="fas fa-arrow-right ml-2 text-sm"></i>
        </a>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
