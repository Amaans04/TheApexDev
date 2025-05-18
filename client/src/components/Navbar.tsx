import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence, MotionValue, useSpring, useTransform } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const [menuWidth, setMenuWidth] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  
  // Advanced animation controls
  const springConfig = { stiffness: 400, damping: 30 };
  const openSpring = useSpring(0, springConfig);
  const expandScale = useTransform(openSpring, [0, 1], [0.9, 1]);
  const expandOpacity = useTransform(openSpring, [0, 1], [0, 1]);
  const barOneRotate = useTransform(openSpring, [0, 1], [0, 45]);
  const barTwoOpacity = useTransform(openSpring, [0, 1], [1, 0]);
  const barThreeRotate = useTransform(openSpring, [0, 1], [0, -45]);
  const barOneY = useTransform(openSpring, [0, 1], [0, 8]);
  const barThreeY = useTransform(openSpring, [0, 1], [0, -8]);

  useEffect(() => {
    if (isOpen) {
      openSpring.set(1);
    } else {
      openSpring.set(0);
    }
  }, [isOpen, openSpring]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Set menu width based on navbar width for dynamic island effect
    if (navbarRef.current) {
      setMenuWidth(navbarRef.current.offsetWidth);
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => {
      if (navbarRef.current) {
        setMenuWidth(navbarRef.current.offsetWidth);
      }
    });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", () => {});
    };
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 pt-6">
      <motion.div 
        ref={navbarRef}
        className={`rounded-full mx-auto max-w-7xl ${isScrolled ? 'glass-effect shadow-lg shadow-primary/30' : 'bg-black/20 backdrop-blur-sm'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <nav className="py-4 px-6 flex justify-between items-center">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/">
              <a className="text-2xl font-bold font-outfit text-white cursor-pointer">
                <span className="gradient-text">TheApexDev</span>
              </a>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <motion.a 
                  className={`font-medium text-white hover:text-primary transition-colors ${
                    location === link.href ? "active-nav" : ""
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  {link.label}
                </motion.a>
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <motion.button 
              onClick={toggleMenu} 
              className="w-10 h-10 rounded-full accent-gradient flex flex-col items-center justify-center relative z-50"
              whileTap={{ scale: 0.9 }}
            >
              <motion.div 
                className="w-5 h-0.5 bg-white rounded-full mb-1.5"
                style={{ 
                  rotate: barOneRotate, 
                  y: barOneY,
                  transformOrigin: "center"
                }}
              />
              <motion.div 
                className="w-5 h-0.5 bg-white rounded-full mb-1.5"
                style={{ opacity: barTwoOpacity }}
              />
              <motion.div 
                className="w-5 h-0.5 bg-white rounded-full"
                style={{ 
                  rotate: barThreeRotate,
                  y: barThreeY,
                  transformOrigin: "center"
                }}
              />
            </motion.button>
          </div>
        </nav>
      </motion.div>

      {/* Dynamic Island Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            className="fixed inset-x-0 top-0 md:hidden"
            initial={{ 
              height: 80, 
              y: 0,
              borderRadius: 50,
            }}
            animate={{ 
              height: "100vh", 
              y: 0,
              borderRadius: 0,
            }}
            exit={{ 
              height: 80, 
              y: 0,
              borderRadius: 50,
            }}
            transition={{ 
              type: "spring", 
              damping: 30, 
              stiffness: 300,
            }}
            style={{
              width: "100%",
              backgroundColor: "rgba(0,0,0,0.9)",
              backdropFilter: "blur(10px)",
            }}
          >
            <motion.div 
              className="h-full flex flex-col items-center justify-center space-y-10 pt-24 pb-10"
              style={{ 
                opacity: expandOpacity,
                scale: expandScale
              }}
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 300
                  }}
                >
                  <Link href={link.href}>
                    <motion.a 
                      className={`flex flex-col items-center text-center px-10 py-3 ${
                        location === link.href 
                          ? "text-primary font-semibold" 
                          : "text-white"
                      }`}
                      onClick={() => setIsOpen(false)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className={`fas ${link.icon} text-2xl mb-2 ${
                        location === link.href ? "text-primary" : "text-white"
                      }`}></i>
                      <span className="text-lg font-outfit">{link.label}</span>
                    </motion.a>
                  </Link>
                </motion.div>
              ))}

              {/* Social media links in mobile menu */}
              <motion.div 
                className="flex space-x-5 mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.a 
                  href="#" 
                  className="w-10 h-10 rounded-full accent-gradient flex items-center justify-center"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fab fa-twitter text-white"></i>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="w-10 h-10 rounded-full accent-gradient flex items-center justify-center"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fab fa-instagram text-white"></i>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="w-10 h-10 rounded-full accent-gradient flex items-center justify-center"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fab fa-linkedin-in text-white"></i>
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
