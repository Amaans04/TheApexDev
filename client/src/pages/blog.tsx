import React, { useState } from 'react';
import { MainLayout } from '@/layouts/main-layout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Helmet } from 'react-helmet';

// Placeholder blog data
const blogPosts = [
  {
    id: 1,
    title: "10 Web Design Trends Dominating 2025",
    excerpt: "Explore the cutting-edge design trends shaping the digital landscape this year, from cosmic themes to minimalist interfaces.",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    category: "Design",
    date: "May 15, 2025",
    readTime: "7 min read"
  },
  {
    id: 2,
    title: "Why Every Business Needs a Strategic Web Presence",
    excerpt: "In today's digital-first economy, businesses without a strong web presence risk being left behind. Learn why it matters and how to build yours.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Business",
    date: "May 10, 2025",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "How AI is Transforming Web Development",
    excerpt: "Artificial intelligence is revolutionizing how websites are built and maintained. Discover the latest AI tools transforming the industry.",
    image: "https://images.unsplash.com/photo-1677442135146-2623a4842301?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    category: "Technology",
    date: "May 5, 2025",
    readTime: "10 min read"
  },
  {
    id: 4,
    title: "Essential SEO Strategies for 2025",
    excerpt: "Search engine optimization continues to evolve. Learn the most effective SEO strategies to boost your visibility this year.",
    image: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "SEO",
    date: "May 3, 2025",
    readTime: "8 min read"
  },
  {
    id: 5,
    title: "The Psychology of Color in Web Design",
    excerpt: "Colors impact how users perceive your brand and interact with your website. Explore the psychological principles behind color selection.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Design",
    date: "April 28, 2025",
    readTime: "5 min read"
  },
  {
    id: 6,
    title: "Building Accessible Websites: A Complete Guide",
    excerpt: "Web accessibility is not just a legal requirement but a moral imperative. Learn how to make your websites accessible to everyone.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Development",
    date: "April 20, 2025",
    readTime: "9 min read"
  }
];

// Categories for filtering
const categories = ["All", "Design", "Business", "Technology", "SEO", "Development"];

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  // Filter posts based on category and search term
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscription successful!",
      description: "You'll receive our newsletter with the latest web development insights.",
    });
  };

  return (
    <MainLayout>
      <Helmet>
        <title>Blog | Latest Web Development Insights | TheApexDev</title>
        <meta name="description" content="Explore the latest trends, tips, and strategies in web development, design, and digital marketing. Stay ahead with TheApexDev's expert insights." />
        <meta property="og:title" content="Blog | Latest Web Development Insights | TheApexDev" />
        <meta property="og:description" content="Explore the latest trends, tips, and strategies in web development, design, and digital marketing. Stay ahead with TheApexDev's expert insights." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
        <meta property="og:url" content="https://yourdomain.com/blog" />
      </Helmet>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-outfit font-bold mb-6">
              Insights & <span className="gradient-text">Inspirations</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our latest thoughts on web design, development, and digital strategy.
              Stay ahead with cutting-edge insights from our team of experts.
            </p>
          </motion.div>

          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {categories.map((category, index) => (
                  <motion.button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm ${
                      selectedCategory === category 
                        ? 'bg-primary text-white' 
                        : 'bg-black/20 border border-violet-800/30 text-violet-300 hover:bg-black/40'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
              
              <div className="w-full md:w-auto">
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-black/20 border border-violet-800/30 rounded-full px-5"
                />
              </div>
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-black/20 backdrop-blur-md border border-violet-800/30 rounded-xl overflow-hidden hover:border-violet-600/50 transition-colors duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent h-1/2 w-full"></div>
                    <span className="absolute top-4 left-4 bg-violet-800/90 text-white text-xs py-1 px-3 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-center justify-between text-xs text-violet-300 mb-3">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-outfit font-semibold mb-3 group-hover:text-violet-300 transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4">
                      {post.excerpt}
                    </p>
                    
                    <Button 
                      variant="link" 
                      className="text-violet-400 p-0 hover:text-violet-300 group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Read Article 
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 ml-2" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl mb-3">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}

          <motion.div
            className="mt-16 md:mt-24 p-6 md:p-10 bg-black/30 border border-violet-800/30 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-outfit font-bold mb-3">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-muted-foreground mb-4">
                  Get the latest web development insights, tips, and trends delivered straight to your inbox.
                </p>
              </div>
              
              <div className="w-full md:w-1/3">
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <Input 
                    placeholder="Your email address" 
                    type="email" 
                    required
                    className="bg-black/40 border border-violet-800/50 rounded-full"
                  />
                  <Button type="submit" className="bg-primary hover:bg-secondary rounded-full">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Blog;