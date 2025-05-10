import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../App.css';
import servicesImage from '../assets/services.png';

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <motion.div
      className="home-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.section 
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="hero-detailed-layer"></div>
        <div className="hero-content">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Premium Construction Materials by Stella Di Pietra
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Elevating architectural excellence with finest imported stone, marble, and building materials
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link to="/catalogues" className="cta-button">
              <motion.span 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Collections
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </motion.section>
      
      <section className="featured-materials">
        <h2 data-aos="fade-up">Exquisite Materials</h2>
        <div className="materials-grid">
          <motion.div 
            className="material-card"
            data-aos="fade-up"
            data-aos-delay="0"
            whileHover={{ 
              y: -10,
              boxShadow: "0 15px 30px rgba(0,0,0,0.2)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="material-image marble"></div>
            <h3>Luxury Marble</h3>
            <p>Premium Italian and Portuguese marble for sophisticated interiors</p>
          </motion.div>
          
          <motion.div 
            className="material-card"
            data-aos="fade-up"
            data-aos-delay="100"
            whileHover={{ 
              y: -10,
              boxShadow: "0 15px 30px rgba(0,0,0,0.2)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="material-image granite"></div>
            <h3>Natural Stone</h3>
            <p>Durable granite and limestone sourced from elite quarries worldwide</p>
          </motion.div>
          
          <motion.div 
            className="material-card"
            data-aos="fade-up"
            data-aos-delay="200"
            whileHover={{ 
              y: -10,
              boxShadow: "0 15px 30px rgba(0,0,0,0.2)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="material-image tile"></div>
            <h3>Designer Tiles</h3>
            <p>Artisanal ceramic and porcelain tiles for distinctive spaces</p>
          </motion.div>
        </div>
        <div className="materials-cta" data-aos="fade-up">
          <Link to="/catalogues" className="text-link">View Full Material Catalogue →</Link>
        </div>
      </section>
      
      <section className="services-highlight" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'column',
        background: '#53565c',
        padding: '4rem 0.75rem 3rem',
        position: 'relative',
        width: 'calc(100% - 1.5rem)', // Reduced side margin
        maxWidth: '100%', // Allow full width within container
        margin: '3rem auto 0',
        borderRadius: '8px',
        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        boxSizing: 'border-box' // Ensure padding is included in width calculation
      }}>
        <div className="services-content" data-aos="fade-up" style={{ 
          width: '100%',
          maxWidth: '90%', // Reduced from 1000px
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          margin: '0 auto',
          padding: '0'
        }}>
          <h2 style={{ 
            color: '#ECE7D0',
            fontSize: 'clamp(1.7rem, 4.5vw, 2.4rem)', // Slightly smaller
            marginBottom: '1.5rem',
            wordWrap: 'break-word' // Ensure text wraps properly
          }}>End-to-End Construction Solutions</h2>
        </div>
        
        <div style={{
          margin: '1rem auto',
          width: '90%', // Reduced width
          maxWidth: '320px', // Smaller max width
          display: 'flex',
          justifyContent: 'center',
          zIndex: 2,
          padding: '0'
        }}>
          <motion.img 
            src={servicesImage} 
            alt="Construction Services"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              ease: "easeOut"
            }}
            style={{
              width: '100%',
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)"
            }}
          />
        </div>
        
        <div className="services-list-container" style={{
          width: '90%', // Reduced from 100%
          maxWidth: '600px', // Reduced from 800px
          margin: '0.5rem auto 0',
          zIndex: 2,
          padding: '0'
        }}>
          <motion.ul 
            className="services-list"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            viewport={{ once: true }}
            style={{ 
              color: '#e8e8e8',
              listStylePosition: 'inside',
              paddingLeft: 0,
              textAlign: 'left',
              margin: '0 auto',
              maxWidth: '100%',
              fontSize: 'clamp(0.85rem, 3.8vw, 1rem)' // Slightly smaller
            }}
          >
            {[
              'Expert material sourcing and consultation',
              'Rigorous quality control procedures',
              'Global logistics and importing expertise',
              'Reliable on-time delivery systems'
            ].map((service, index) => (
              <motion.li 
                key={index}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ 
                  marginBottom: '10px', // Slightly reduced
                  display: 'flex',
                  alignItems: 'flex-start', // Align to top for better text wrapping
                  paddingRight: '5px'
                }}
              >
                <span style={{ 
                  color: '#ECE7D0', 
                  marginRight: '6px',
                  flexShrink: 0,
                  paddingTop: '2px' 
                }}>✓</span>
                <span style={{ 
                  display: 'block', 
                  wordBreak: 'break-word' // Handle long words on small screens
                }}>{service}</span>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            style={{ 
              marginTop: '20px',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Link to="/services" className="secondary-button">Our Services</Link>
          </motion.div>
        </div>
      </section>
      
      <section className="projects-showcase" data-aos="fade-up">
        <h2>Featured Projects</h2>
        <div className="project-preview">
          <motion.div 
            className="project-card"
            whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="project-image luxury-residential"></div>
            <h3>La Maison Elegante</h3>
            <p>Luxury residential project featuring custom marble flooring and stone facades</p>
          </motion.div>
          <motion.div 
            className="project-card"
            whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="project-image commercial-tower"></div>
            <h3>Meridian Tower</h3>
            <p>Premium commercial development with imported granite and limestone elements</p>
          </motion.div>
        </div>
        <div className="projects-cta" data-aos="fade-up" data-aos-delay="200">
          <Link to="/portfolio" className="text-link">Explore Our Portfolio →</Link>
        </div>
      </section>
      
      <section className="cta-section" data-aos="fade">
        <h2>Elevate Your Construction Projects</h2>
        <p>Partner with Stella Di Pietra for unmatched quality and expertise</p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/contact" className="primary-button">Contact Our Specialists</Link>
        </motion.div>
      </section>
    </motion.div>
  );
}

export default Home; 