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
        justifyContent: 'flex-end', 
        background: `url(${servicesImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '6rem 0 4rem 0', 
        position: 'relative',
        width: '100%',
        maxWidth: '1400px',
        margin: '3rem auto 0', 
        borderRadius: '8px',
        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
        minHeight: '500px'
      }}>
        <div className="services-content" data-aos="fade-up" style={{ 
          flex: '0 1 50%',
          maxWidth: '600px',
          position: 'relative',
          zIndex: 2,
          textAlign: 'left',
          padding: '0 4rem 0 0',
          marginRight: '3rem'
        }}>
          <h2 style={{ 
            color: '#53565C',
            fontSize: '2.5rem',
            position: 'relative',
            marginBottom: '2rem'
          }}>
            End-to-End Construction Solutions
            <span style={{
              display: 'block',
              width: '80px',
              height: '3px',
              background: '#A67C52',
              marginTop: '1rem'
            }}></span>
          </h2>
          <motion.ul 
            className="services-list"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            viewport={{ once: true }}
            style={{ 
              color: '#53565C',
              listStyleType: 'none',
              paddingLeft: 0
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
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ 
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  color: '#53565C',
                  fontWeight: '500'
                }}
              >
                <span style={{ 
                  color: '#A67C52', 
                  marginRight: '12px',
                  fontSize: '1.2rem'
                }}>✓</span>
                {service}
              </motion.li>
            ))}
          </motion.ul>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ marginTop: '32px' }}>
            <Link to="/services" className="secondary-button" style={{
              display: 'inline-block',
              padding: '12px 24px',
              color: '#53565C',
              borderColor: '#53565C'
            }}>OUR SERVICES</Link>
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