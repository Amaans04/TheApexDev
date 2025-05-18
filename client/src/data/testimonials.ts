export interface Testimonial {
  content: string;
  name: string;
  position: string;
  avatarUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    content: "TheApexDev transformed our outdated website into a modern, user-friendly platform that has significantly increased our conversions. Their attention to detail and technical expertise is unmatched.",
    name: "Michael Thompson",
    position: "CEO, FutureTech Solutions",
    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    content: "Working with TheApexDev was a game-changer for our e-commerce store. Their expertise in UX design and site optimization led to a 45% increase in sales within just two months of launch.",
    name: "Sarah Johnson",
    position: "Founder, StyleHub Boutique",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    content: "The team at TheApexDev doesn't just build websites – they create digital experiences. Their strategic approach to our product launch website exceeded our expectations and helped us secure additional funding.",
    name: "David Rodriguez",
    position: "Co-founder, InnovateTech",
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
  }
];
