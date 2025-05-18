import { serviceIcons } from "@/lib/utils";

export interface Service {
  type: keyof typeof serviceIcons;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

export const services: Service[] = [
  {
    type: "seo",
    title: "SEO Optimization",
    description: "Improve your website's visibility in search engines and drive organic traffic.",
    features: [
      "Keyword Research & Analysis",
      "On-Page SEO Optimization",
      "Technical SEO Audit",
      "Content Strategy",
      "Link Building",
      "Performance Optimization"
    ],
    icon: serviceIcons.seo
  },
  {
    type: "landing",
    title: "Landing Page Design",
    description: "Create high-converting landing pages that turn visitors into customers.",
    features: [
      "Conversion-Focused Design",
      "A/B Testing",
      "Mobile Optimization",
      "Lead Generation Forms",
      "Analytics Integration",
      "Performance Optimization"
    ],
    icon: serviceIcons.landing
  },
  {
    type: "development",
    title: "Web Development",
    description: "Custom web development solutions tailored to your business needs.",
    features: [
      "Custom Website Development",
      "E-commerce Solutions",
      "CMS Development",
      "API Integration",
      "Database Design",
      "Performance Optimization"
    ],
    icon: serviceIcons.development
  },
  {
    type: "ecommerce",
    title: "E-commerce Solutions",
    description: "Build powerful online stores that drive sales and growth.",
    features: [
      "Custom E-commerce Development",
      "Payment Gateway Integration",
      "Inventory Management",
      "Order Processing",
      "Customer Management",
      "Analytics & Reporting"
    ],
    icon: serviceIcons.ecommerce
  },
  {
    type: "redesign",
    title: "Website Redesign",
    description: "Transform your existing website into a modern, user-friendly platform.",
    features: [
      "UI/UX Redesign",
      "Content Restructuring",
      "Performance Optimization",
      "Mobile Responsiveness",
      "SEO Enhancement",
      "Analytics Integration"
    ],
    icon: serviceIcons.redesign
  },
  {
    type: "responsive",
    title: "Responsive Design",
    description: "Ensure your website looks and works perfectly on all devices.",
    features: [
      "Mobile-First Design",
      "Cross-Device Testing",
      "Touch Optimization",
      "Performance Optimization",
      "Responsive Images",
      "Flexible Layouts"
    ],
    icon: serviceIcons.responsive
  },
  {
    type: "marketing",
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to grow your business.",
    features: [
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "PPC Advertising",
      "Analytics & Reporting",
      "Campaign Management"
    ],
    icon: serviceIcons.marketing
  },
  {
    type: "support",
    title: "Technical Support",
    description: "24/7 technical support and maintenance for your website.",
    features: [
      "24/7 Support",
      "Regular Maintenance",
      "Security Updates",
      "Performance Monitoring",
      "Backup Management",
      "Technical Documentation"
    ],
    icon: serviceIcons.support
  },
  {
    type: "api",
    title: "API Development",
    description: "Build robust and scalable APIs for your applications.",
    features: [
      "RESTful API Design",
      "GraphQL Development",
      "API Documentation",
      "Authentication & Security",
      "Performance Optimization",
      "Integration Support"
    ],
    icon: serviceIcons.api
  }
];
