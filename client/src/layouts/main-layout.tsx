import { ReactNode } from "react";
import { DynamicNavbar } from "@/components/DynamicNavbar";
import FloatingWhatsApp from "@/components/floating-whatsapp";
import { Logo } from "@/components/logo";
import { contactIcons, socialIcons } from "@/lib/utils";
import { Link } from "wouter";
import { SpaceBackground } from "@/components/SpaceBackground";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Enhanced starry background that covers the entire site */}
      <SpaceBackground starCount={1500} />
      
      {/* Main content with proper z-index to preserve the background while scrolling */}
      <div className="relative z-10 min-h-screen bg-transparent">
        <DynamicNavbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-12 bg-transparent relative backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/">
              <a className="text-2xl font-outfit font-black mb-6 inline-block">
                <Logo />
              </a>
            </Link>
            <p className="text-muted-foreground mb-6">
              Creating exceptional digital experiences that drive business growth and user engagement.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                {socialIcons.facebook}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                {socialIcons.twitter}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                {socialIcons.linkedin}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                {socialIcons.github}
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-poppins font-semibold mb-6 text-violet-300">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/"><a className="text-muted-foreground hover:text-violet-300 transition-colors duration-300">Home</a></Link></li>
              <li><Link href="/services"><a className="text-muted-foreground hover:text-violet-300 transition-colors duration-300">Services</a></Link></li>
              <li><Link href="/projects"><a className="text-muted-foreground hover:text-violet-300 transition-colors duration-300">Projects</a></Link></li>
              <li><Link href="/about"><a className="text-muted-foreground hover:text-violet-300 transition-colors duration-300">About Us</a></Link></li>
              <li><Link href="/contact"><a className="text-muted-foreground hover:text-violet-300 transition-colors duration-300">Contact</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-poppins font-semibold mb-6 text-violet-300">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services"><a className="text-muted-foreground hover:text-violet-300 transition-colors duration-300">SEO Optimization</a></Link></li>
              <li><Link href="/services"><a className="text-muted-foreground hover:text-violet-300 transition-colors duration-300">Landing Page Design</a></Link></li>
              <li><Link href="/services"><a className="text-muted-foreground hover:text-violet-300 transition-colors duration-300">Custom Web Development</a></Link></li>
              <li><Link href="/services"><a className="text-muted-foreground hover:text-violet-300 transition-colors duration-300">E-Commerce Development</a></Link></li>
              <li><Link href="/services"><a className="text-muted-foreground hover:text-violet-300 transition-colors duration-300">Website Redesign</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-poppins font-semibold mb-6 text-violet-300">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-pink-400">{contactIcons.email}</span>
                <span className="text-muted-foreground ml-2">hello@theapexdev.com</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-400">{contactIcons.phone}</span>
                <span className="text-muted-foreground ml-2">+1 (234) 567-890</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-400">{contactIcons.location}</span>
                <span className="text-muted-foreground ml-2">123 Innovation Street, Tech City, 12345</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-12 border-t border-violet-900/30 text-center">
          <p className="text-muted-foreground">&copy; {new Date().getFullYear()} TheApexDev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default MainLayout;
