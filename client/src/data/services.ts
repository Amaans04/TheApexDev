export interface Service {
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: "fa-search",
    title: "SEO Optimization",
    description: "Boost your online visibility with our comprehensive SEO strategies designed to rank higher in search results."
  },
  {
    icon: "fa-paint-brush",
    title: "Landing Page Design",
    description: "Convert visitors into customers with our high-converting, aesthetically pleasing landing page designs."
  },
  {
    icon: "fa-code",
    title: "Custom Web/App Development",
    description: "Bespoke web applications and sites built with cutting-edge technologies for optimal performance."
  },
  {
    icon: "fa-shopping-cart",
    title: "E-Commerce Development",
    description: "Full-featured online stores with secure payment gateways, inventory management, and customer analytics."
  },
  {
    icon: "fa-sync",
    title: "Website Redesign",
    description: "Transform outdated websites into modern, responsive platforms that align with current design standards."
  },
  {
    icon: "fa-mobile-alt",
    title: "Responsive Web Design",
    description: "Create seamless experiences across all devices with our mobile-first responsive design approach."
  }
];
