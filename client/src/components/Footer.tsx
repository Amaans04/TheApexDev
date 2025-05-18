import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="py-16 bg-[#121212] border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="text-2xl font-bold font-outfit text-white mb-6">
              <span className="gradient-text">TheApexDev</span>
            </div>
            <p className="text-gray-400 mb-6">
              Premium web development agency specializing in creating innovative, high-performance websites and applications.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1e1e1e] border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1e1e1e] border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1e1e1e] border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold font-outfit mb-6">Services</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/services" className="hover:text-primary transition-colors">SEO Optimization</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Landing Page Design</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Custom Web Development</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">E-Commerce Development</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Website Redesign</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold font-outfit mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold font-outfit mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-primary"></i>
                <span>hello@theapexdev.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone mr-3 text-primary"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt mr-3 text-primary"></i>
                <span>123 Tech Hub Street, San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">© {new Date().getFullYear()} TheApexDev. All rights reserved.</p>
          <div className="flex space-x-6 text-gray-500">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-primary transition-colors">Cookies Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
