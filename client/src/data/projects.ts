export interface Project {
  imageUrl: string;
  title: string;
  category: string;
  description: string;
}

export const projects: Project[] = [
  {
    imageUrl: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    title: "Fashion E-Store",
    category: "E-Commerce",
    description: "A premium online fashion store with advanced filtering, wishlist functionality and seamless checkout."
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    title: "Analytics Dashboard",
    category: "Web Apps",
    description: "Interactive dashboard with real-time analytics, data visualization and customizable reporting features."
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    title: "Tech Product Launch",
    category: "Landing Pages",
    description: "High-converting landing page with animated product demonstrations and integrated pre-order system."
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    title: "Finance Firm Portal",
    category: "Web Apps",
    description: "Secure client portal with document management, financial reporting and client communication tools."
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    title: "Wellness Brand Identity",
    category: "Branding",
    description: "Complete brand identity system including logo design, color palette, typography and brand guidelines."
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1616469829941-c7200edec809?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    title: "Fitness Mobile App",
    category: "Web Apps",
    description: "Progressive web app for fitness tracking with workout plans, progress visualization and social features."
  }
];

export const projectCategories = [
  "All",
  "E-Commerce",
  "Web Apps",
  "Landing Pages",
  "Branding"
];
