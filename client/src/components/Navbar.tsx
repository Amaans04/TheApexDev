import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

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
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'glass-effect' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <div className="text-2xl font-bold font-outfit text-white cursor-pointer">
              <span className="gradient-text">TheApexDev</span>
            </div>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className={`font-medium text-white hover:text-primary transition-colors ${
                location === link.href ? "active-nav" : ""
              }`}>
                {link.label}
              </a>
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2 rounded-md text-white hover:bg-gray-800">
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden glass-effect py-4"
        >
          <div className="container mx-auto px-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a 
                  className={`font-medium text-white py-2 hover:text-primary transition-colors ${
                    location === link.href ? "active-nav" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
