import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoImage from '../assets/Logo.png';

function Footer() {
  // State for tracking which social icon is being hovered
  const [hoveredSocial, setHoveredSocial] = useState(null);
  
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
    hover: { scale: 1.2 }
  };
  
  // Social media data with larger icons
  const socialIcons = [
    {
      id: 'facebook',
      url: 'https://facebook.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="32" height="32">
          <path fill="#ECE7D0" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
        </svg>
      )
    },
    {
      id: 'instagram',
      url: 'https://instagram.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="32" height="32">
          <path fill="#ECE7D0" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
        </svg>
      )
    },
    {
      id: 'linkedin',
      url: 'https://linkedin.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="32" height="32">
          <path fill="#ECE7D0" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
        </svg>
      )
    },
    {
      id: 'twitter',
      url: 'https://twitter.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="32" height="32">
          <path fill="#ECE7D0" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
        </svg>
      )
    }
  ];

  const currentYear = new Date().getFullYear();
  
  // Handle click on social icon
  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <motion.footer 
      className="footer"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{ 
        background: "#3A3A3A", 
        color: "#fff", 
        padding: "4rem 2rem 2rem",
        position: "relative"
      }}
    >
      <div className="footer-content" style={{ 
        display: "flex", 
        flexWrap: "wrap", 
        justifyContent: "space-between",
        maxWidth: "1200px",
        margin: "0 auto",
        gap: "2rem"
      }}>
        <motion.div className="footer-logo-section" variants={itemVariants} style={{ flex: "1 1 300px" }}>
          <Link to="/">
            <motion.h2 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              style={{ color: "#ECE7D0", fontSize: "2rem", marginBottom: "1rem" }}
            >
              Stella Di Pietra
            </motion.h2>
          </Link>
          <motion.p variants={itemVariants} style={{ color: "#ECE7D0", marginBottom: "1.5rem" }}>
            Premium construction materials supplier for luxury architectural projects
          </motion.p>
          
          {/* Social Icons */}
          <div style={{ display: "flex", marginTop: "1.5rem" }}>
            {socialIcons.map((social) => (
              <button 
                key={social.id}
                onClick={() => handleSocialClick(social.url)}
                onMouseEnter={() => setHoveredSocial(social.id)}
                onMouseLeave={() => setHoveredSocial(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "56px",
                  height: "56px",
                  backgroundColor: hoveredSocial === social.id ? "rgba(236, 231, 208, 0.3)" : "rgba(255, 255, 255, 0.1)",
                  borderRadius: "50%",
                  marginRight: "1rem",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  transform: hoveredSocial === social.id ? "scale(1.15)" : "scale(1)",
                  boxShadow: hoveredSocial === social.id ? "0 0 12px rgba(236, 231, 208, 0.6)" : "none",
                  outline: "none"
                }}
                aria-label={`Visit our ${social.id} page`}
              >
                {social.icon}
              </button>
            ))}
          </div>
        </motion.div>
        
        <motion.div className="footer-links" variants={itemVariants} style={{ 
          display: "flex", 
          flexWrap: "wrap", 
          flex: "1 1 600px", 
          justifyContent: "space-between",
          gap: "2rem"
        }}>
          <motion.div className="footer-links-column" variants={itemVariants} style={{ flex: "1 1 150px" }}>
            <h3 style={{ color: "#ECE7D0", marginBottom: "1.5rem", position: "relative", paddingBottom: "0.8rem" }}>
              Navigation
              <span style={{ 
                content: "''", 
                position: "absolute", 
                bottom: 0, 
                left: 0, 
                width: "40px", 
                height: "2px", 
                backgroundColor: "#A67C52" 
              }}></span>
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
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
                  style={{ marginBottom: "0.8rem" }}
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      to={item.path} 
                      style={{ 
                        color: "rgba(255, 255, 255, 0.8)", 
                        textDecoration: "none",
                        transition: "color 0.3s ease"
                      }}
                      onMouseOver={(e) => e.target.style.color = "#ECE7D0"}
                      onMouseOut={(e) => e.target.style.color = "rgba(255, 255, 255, 0.8)"}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div className="footer-links-column" variants={itemVariants} style={{ flex: "1 1 150px" }}>
            <h3 style={{ color: "#ECE7D0", marginBottom: "1.5rem", position: "relative", paddingBottom: "0.8rem" }}>
              Materials
              <span style={{ 
                content: "''", 
                position: "absolute", 
                bottom: 0, 
                left: 0, 
                width: "40px", 
                height: "2px", 
                backgroundColor: "#A67C52" 
              }}></span>
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                'Premium Marble', 
                'Luxury Granite', 
                'Exotic Woods',
                'Designer Tiles', 
                'Natural Stone'
              ].map((material) => (
                <motion.li 
                  key={material}
                  style={{ marginBottom: "0.8rem" }}
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      to="/catalogues" 
                      style={{ 
                        color: "rgba(255, 255, 255, 0.8)", 
                        textDecoration: "none",
                        transition: "color 0.3s ease"
                      }}
                      onMouseOver={(e) => e.target.style.color = "#ECE7D0"}
                      onMouseOut={(e) => e.target.style.color = "rgba(255, 255, 255, 0.8)"}
                    >
                      {material}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div className="footer-links-column contact-info" variants={itemVariants} style={{ flex: "1 1 200px" }}>
            <h3 style={{ color: "#ECE7D0", marginBottom: "1.5rem", position: "relative", paddingBottom: "0.8rem" }}>
              Contact
              <span style={{ 
                content: "''", 
                position: "absolute", 
                bottom: 0, 
                left: 0, 
                width: "40px", 
                height: "2px", 
                backgroundColor: "#A67C52" 
              }}></span>
            </h3>
            <motion.p variants={itemVariants} style={{ marginBottom: "0.8rem", color: "rgba(255, 255, 255, 0.8)" }}>
              <strong style={{ color: "#ECE7D0" }}>Address:</strong> 123 Construction Avenue, Building District, Country
            </motion.p>
            <motion.p variants={itemVariants} style={{ marginBottom: "0.8rem", color: "rgba(255, 255, 255, 0.8)" }}>
              <strong style={{ color: "#ECE7D0" }}>Phone:</strong> 
              <motion.a 
                href="tel:+15551234567" 
                style={{ 
                  color: "rgba(255, 255, 255, 0.8)", 
                  textDecoration: "none", 
                  marginLeft: "5px",
                  transition: "color 0.3s ease"
                }}
                whileHover={{ color: "#ECE7D0" }}
                onMouseOver={(e) => e.target.style.color = "#ECE7D0"}
                onMouseOut={(e) => e.target.style.color = "rgba(255, 255, 255, 0.8)"}
              >
                +1 (555) 123-4567
              </motion.a>
            </motion.p>
            <motion.p variants={itemVariants} style={{ marginBottom: "0.8rem", color: "rgba(255, 255, 255, 0.8)" }}>
              <strong style={{ color: "#ECE7D0" }}>Email:</strong> 
              <motion.a 
                href="mailto:info@stelladipietra.com" 
                style={{ 
                  color: "rgba(255, 255, 255, 0.8)", 
                  textDecoration: "none", 
                  marginLeft: "5px",
                  transition: "color 0.3s ease"
                }}
                whileHover={{ color: "#ECE7D0" }}
                onMouseOver={(e) => e.target.style.color = "#ECE7D0"}
                onMouseOut={(e) => e.target.style.color = "rgba(255, 255, 255, 0.8)"}
              >
                info@stelladipietra.com
              </motion.a>
            </motion.p>
            <motion.p variants={itemVariants} style={{ marginBottom: "0.8rem", color: "rgba(255, 255, 255, 0.8)" }}>
              <strong style={{ color: "#ECE7D0" }}>Hours:</strong> Monday-Friday: 9am - 6pm
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{ 
          borderTop: "1px solid rgba(255, 255, 255, 0.1)", 
          paddingTop: "1.5rem",
          marginTop: "2rem",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto"
        }}
      >
        <p style={{ color: "rgba(255, 255, 255, 0.7)" }}>&copy; {currentYear} Stella Di Pietra. All Rights Reserved.</p>
        <div className="footer-legal">
          <motion.span whileHover={{ x: 3 }} style={{ display: "inline-block", marginRight: "1.5rem" }}>
            <Link 
              to="/privacy-policy" 
              style={{ 
                color: "rgba(255, 255, 255, 0.7)", 
                textDecoration: "none",
                transition: "color 0.3s ease"
              }}
              onMouseOver={(e) => e.target.style.color = "#ECE7D0"}
              onMouseOut={(e) => e.target.style.color = "rgba(255, 255, 255, 0.7)"}
            >
              Privacy Policy
            </Link>
          </motion.span>
          <motion.span whileHover={{ x: 3 }} style={{ display: "inline-block" }}>
            <Link 
              to="/terms-of-service" 
              style={{ 
                color: "rgba(255, 255, 255, 0.7)", 
                textDecoration: "none",
                transition: "color 0.3s ease"
              }}
              onMouseOver={(e) => e.target.style.color = "#ECE7D0"}
              onMouseOut={(e) => e.target.style.color = "rgba(255, 255, 255, 0.7)"}
            >
              Terms of Service
            </Link>
          </motion.span>
        </div>
      </motion.div>
    </motion.footer>
  );
}

export default Footer; 