import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

export const DynamicNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const navbarRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const menuTimeline = useRef<gsap.core.Timeline | null>(null);
  
  // Initialize GSAP timelines
  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });
    menuTimeline.current = gsap.timeline({ paused: true });
    
    return () => {
      if (tl.current) tl.current.kill();
      if (menuTimeline.current) menuTimeline.current.kill();
    };
  }, []);
  
  // Setup hamburger animation
  useEffect(() => {
    if (!tl.current) return;
    
    const topBar = document.querySelector(".hamburger-top");
    const middleBar = document.querySelector(".hamburger-middle");
    const bottomBar = document.querySelector(".hamburger-bottom");
    
    if (topBar && middleBar && bottomBar) {
      tl.current.clear();
      tl.current
        .to(topBar, { 
          y: 8, 
          rotation: 45, 
          duration: 0.2, 
          ease: "power2.inOut"
        })
        .to(middleBar, { 
          opacity: 0, 
          duration: 0.1, 
          ease: "power2.inOut" 
        }, "<")
        .to(bottomBar, { 
          y: -8, 
          rotation: -45, 
          duration: 0.2, 
          ease: "power2.inOut" 
        }, "<");
    }
  }, []);
  
  // Toggle menu animation with GSAP for smooth Dynamic Island effect
  useEffect(() => {
    if (!menuTimeline.current || !menuRef.current) return;
    
    const menuItems = menuRef.current.querySelectorAll(".menu-item");
    const socialIcons = menuRef.current.querySelectorAll(".social-icon");
    
    menuTimeline.current.clear();
    
    if (isOpen) {
      tl.current?.play();
      
      menuTimeline.current
        .to(menuRef.current, { 
          height: "100vh", 
          borderRadius: 0, 
          duration: 0.4, 
          ease: "power3.inOut" 
        })
        .fromTo(menuItems, { 
          y: 30, 
          opacity: 0 
        }, { 
          y: 0, 
          opacity: 1, 
          stagger: 0.07, 
          ease: "back.out(1.4)" 
        }, "-=0.1")
        .fromTo(socialIcons, { 
          scale: 0, 
          opacity: 0 
        }, { 
          scale: 1, 
          opacity: 1, 
          stagger: 0.05, 
          ease: "back.out(2)" 
        }, "-=0.3");
      
      menuTimeline.current.play();
    } else {
      tl.current?.reverse();
      
      if (menuTimeline.current.progress() > 0) {
        menuTimeline.current.reverse();
      }
    }
  }, [isOpen]);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "/", label: "Home", icon: "fa-home" },
    { href: "/services", label: "Services", icon: "fa-cogs" },
    { href: "/projects", label: "Projects", icon: "fa-briefcase" },
    { href: "/about", label: "About", icon: "fa-info-circle" },
    { href: "/contact", label: "Contact", icon: "fa-envelope" },
  ];

  // Dynamic Island style classes
  const pillClass = `rounded-full mx-auto max-w-7xl ${isScrolled 
    ? 'glass-effect shadow-lg shadow-primary/20' 
    : 'bg-black/20 backdrop-blur-sm'
  }`;
  
  const menuClass = "fixed inset-x-0 top-0 md:hidden bg-black/90 backdrop-blur-lg rounded-full";
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 pt-6">
      <motion.div 
        ref={navbarRef}
        className={pillClass}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 20 
        }}
      >
        <nav className="py-4 px-6 flex justify-between items-center">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/">
              <div className="text-2xl font-bold font-outfit text-white cursor-pointer">
                <span className="gradient-text">TheApexDev</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link, idx) => (
              <Link key={`desktop-${link.href}`} href={link.href}>
                <motion.div 
                  className={`font-medium text-white hover:text-primary transition-colors cursor-pointer ${
                    location === link.href ? "active-nav" : ""
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  {link.label}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button 
              onClick={toggleMenu} 
              className="w-10 h-10 rounded-full accent-gradient flex flex-col items-center justify-center relative z-50"
              whileTap={{ scale: 0.9 }}
            >
              <span className="hamburger-top w-5 h-0.5 bg-white rounded-full mb-1.5 transform origin-center transition-transform" />
              <span className="hamburger-middle w-5 h-0.5 bg-white rounded-full mb-1.5 transition-opacity" />
              <span className="hamburger-bottom w-5 h-0.5 bg-white rounded-full transform origin-center transition-transform" />
            </motion.button>
          </div>
        </nav>
      </motion.div>

      {/* Dynamic Island Mobile Menu (always in DOM, animated with GSAP) */}
      <div 
        ref={menuRef}
        className={`${menuClass} ${isOpen ? 'pointer-events-auto' : 'pointer-events-none opacity-0'}`}
        style={{ 
          height: "80px",
          transition: "opacity 0.3s ease"
        }}
      >
        <div className="h-full flex flex-col items-center justify-center space-y-10 pt-24 pb-10">
          {navLinks.map((link, index) => (
            <div
              key={`mobile-${link.href}`}
              className="menu-item opacity-0"
            >
              <Link href={link.href}>
                <div
                  className={`flex flex-col items-center text-center px-10 py-3 cursor-pointer ${
                    location === link.href 
                      ? "text-primary font-semibold" 
                      : "text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <i className={`fas ${link.icon} text-2xl mb-2 ${
                    location === link.href ? "text-primary" : "text-white"
                  }`}></i>
                  <span className="text-lg font-outfit">{link.label}</span>
                </div>
              </Link>
            </div>
          ))}

          {/* Social media icons */}
          <div className="flex space-x-5 mt-10">
            <a 
              href="#" 
              className="social-icon w-10 h-10 rounded-full accent-gradient flex items-center justify-center opacity-0"
            >
              <i className="fab fa-twitter text-white"></i>
            </a>
            <a 
              href="#" 
              className="social-icon w-10 h-10 rounded-full accent-gradient flex items-center justify-center opacity-0"
            >
              <i className="fab fa-instagram text-white"></i>
            </a>
            <a 
              href="#" 
              className="social-icon w-10 h-10 rounded-full accent-gradient flex items-center justify-center opacity-0"
            >
              <i className="fab fa-linkedin-in text-white"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DynamicNavbar;