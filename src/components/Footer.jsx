import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoImage from '../assets/Logo.png';

function Footer() {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { type: "spring", stiffness: 200 } },
    hover: { scale: 1.2, color: "#ECE7D0" }
  };

  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer 
      className="footer"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="footer-content">
        <motion.div className="footer-logo-section" variants={itemVariants}>
          <Link to="/">
            <motion.h2 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Stella Di Pietra
            </motion.h2>
          </Link>
          <motion.p variants={itemVariants}>
            Premium construction materials supplier for luxury architectural projects
          </motion.p>
          <motion.div className="social-icons" variants={itemVariants}>
            {['facebook', 'instagram', 'linkedin', 'twitter'].map((platform) => (
              <motion.a 
                key={platform} 
                href={`https://${platform}.com`} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`social-icon ${platform}`}
                variants={iconVariants}
                whileHover="hover"
              >
                <span className="sr-only">{platform}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div className="footer-links" variants={itemVariants}>
          <motion.div className="footer-links-column" variants={itemVariants}>
            <h3>Navigation</h3>
            <ul>
              {[
                {name: 'Home', path: '/'},
                {name: 'About Us', path: '/about'},
                {name: 'Services', path: '/services'},
                {name: 'Portfolio', path: '/portfolio'},
                {name: 'Catalogues', path: '/catalogues'},
                {name: 'Contact', path: '/contact'}
              ].map((item) => (
                <motion.li 
                  key={item.path}
                  whileHover={{ x: 5, color: "#ECE7D0" }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to={item.path}>{item.name}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div className="footer-links-column" variants={itemVariants}>
            <h3>Materials</h3>
            <ul>
              {[
                'Premium Marble', 
                'Luxury Granite', 
                'Exotic Woods',
                'Designer Tiles', 
                'Natural Stone'
              ].map((material) => (
                <motion.li 
                  key={material}
                  whileHover={{ x: 5, color: "#ECE7D0" }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to="/catalogues">{material}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div className="footer-links-column contact-info" variants={itemVariants}>
            <h3>Contact</h3>
            <motion.p variants={itemVariants}>
              <strong>Address:</strong> 123 Construction Avenue, Building District, Country
            </motion.p>
            <motion.p variants={itemVariants}>
              <strong>Phone:</strong> +1 (555) 123-4567
            </motion.p>
            <motion.p variants={itemVariants}>
              <strong>Email:</strong> info@stelladipietra.com
            </motion.p>
            <motion.p variants={itemVariants}>
              <strong>Hours:</strong> Monday-Friday: 9am - 6pm
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p>&copy; {currentYear} Stella Di Pietra. All Rights Reserved.</p>
        <div className="footer-legal">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
        </div>
      </motion.div>
    </motion.footer>
  );
}

export default Footer; 