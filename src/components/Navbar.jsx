import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../App.css';
import logoImage from '../assets/Logo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        duration: 0.5
      }
    }
  };

  const linkVariants = {
    hover: { 
      scale: 1.05, 
      textShadow: "0px 0px 8px rgba(236, 231, 208, 0.5)",
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="navbar-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Link to="/" className="navbar-logo" aria-label="Stella Di Pietra - Home">
            <motion.img 
              src={logoImage} 
              alt="Stella Di Pietra" 
              className="logo-image" 
              title="Stella Di Pietra - Premium Construction Materials"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span 
              className="logo-text"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Stella Di Pietra
            </motion.span>
          </Link>
        </motion.div>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <motion.li 
            className="nav-item"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.div variants={linkVariants} whileHover="hover">
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                Home
              </Link>
            </motion.div>
          </motion.li>
          <motion.li 
            className="nav-item"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.div variants={linkVariants} whileHover="hover">
              <Link 
                to="/about" 
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              >
                About
              </Link>
            </motion.div>
          </motion.li>
          <motion.li 
            className="nav-item"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.div variants={linkVariants} whileHover="hover">
              <Link 
                to="/services" 
                className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
              >
                Services
              </Link>
            </motion.div>
          </motion.li>
          <motion.li 
            className="nav-item"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.div variants={linkVariants} whileHover="hover">
              <Link 
                to="/portfolio" 
                className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`}
              >
                Portfolio
              </Link>
            </motion.div>
          </motion.li>
          <motion.li 
            className="nav-item"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <motion.div variants={linkVariants} whileHover="hover">
              <Link 
                to="/catalogues" 
                className={`nav-link ${location.pathname === '/catalogues' ? 'active' : ''}`}
              >
                Catalogues
              </Link>
            </motion.div>
          </motion.li>
          <motion.li 
            className="nav-item"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.div variants={linkVariants} whileHover="hover">
              <Link 
                to="/contact" 
                className={`nav-link nav-button ${location.pathname === '/contact' ? 'active' : ''}`}
              >
                Contact
              </Link>
            </motion.div>
          </motion.li>
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar; 