import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchCatalogues } from '../utils/googleDriveApi';

function Catalogues() {
  const [catalogues, setCatalogues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCatalogues = async () => {
      try {
        setLoading(true);
        const data = await fetchCatalogues();
        setCatalogues(data);
        
        // Extract unique categories
        const uniqueCategories = [...new Set(data.map(item => item.category))];
        setCategories(uniqueCategories);
        
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch catalogues:', err);
        setError('Failed to load catalogues. Please try again later.');
        setLoading(false);
      }
    };

    loadCatalogues();
  }, []);

  // Filter catalogues by active category
  const filteredCatalogues = activeCategory === 'all' 
    ? catalogues 
    : catalogues.filter(catalogue => catalogue.category === activeCategory);

  // Animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="catalogues-page">
      <section className="hero" data-parallax data-parallax-speed="0.15">
        <div className="hero-detailed-layer"></div>
        <div className="hero-content" data-scroll="zoom-in">
          <h1>Our Catalogues</h1>
          <p>Browse and download our product catalogues, brochures, and technical documentation</p>
        </div>
      </section>

      <section className="catalogues-content">
        <div className="catalogues-filters" data-scroll="fade-down">
          <h2>Browse Our Resources</h2>
          <p>Access our complete library of product catalogues and informational materials</p>
          
          {/* Category filters */}
          <div className="category-filters">
            <motion.button 
              className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All Categories
            </motion.button>
            {categories.map((category, index) => (
              <motion.button 
                key={category}
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-scroll="fade-up"
                data-scroll-delay={index * 100}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="loading-container" data-scroll="fade">
            <div className="loading-spinner"></div>
            <p>Loading catalogues...</p>
          </div>
        ) : error ? (
          <div className="error-message" data-scroll="fade">
            <p>{error}</p>
            <motion.button 
              className="retry-btn"
              onClick={() => window.location.reload()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Retry
            </motion.button>
          </div>
        ) : (
          <motion.div 
            className="catalogues-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredCatalogues.length > 0 ? (
              filteredCatalogues.map((catalogue, index) => (
                <motion.div 
                  key={catalogue.id} 
                  className="catalogue-card"
                  variants={itemVariants}
                  data-scroll="fade-up"
                  data-scroll-delay={index * 100}
                  whileHover={{ 
                    y: -15,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="catalogue-cover pdf-embed-container">
                    <iframe 
                      src={catalogue.embedLink}
                      title={catalogue.title}
                      frameBorder="0"
                      scrolling="no"
                      className="pdf-embed"
                    ></iframe>
                    <motion.div 
                      className="catalogue-overlay"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.a 
                        href={catalogue.viewLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="view-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        View PDF
                      </motion.a>
                    </motion.div>
                  </div>
                  <div className="catalogue-details">
                    <h3>{catalogue.title}</h3>
                    <p>{catalogue.description}</p>
                    <div className="catalogue-actions">
                      <motion.a 
                        href={catalogue.downloadLink} 
                        className="download-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="download-icon">↓</span> Download PDF
                      </motion.a>
                      <span className="catalogue-category">{catalogue.category}</span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="no-results" data-scroll="fade">
                <p>No catalogues found in this category.</p>
              </div>
            )}
          </motion.div>
        )}
      </section>

      <section className="request-section" data-parallax data-parallax-speed="0.1">
        <div className="request-content" data-scroll="fade-up">
          <h2>Need a Custom Catalogue?</h2>
          <p>Contact our team to request specialized documentation or custom product information tailored to your needs.</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/contact" className="cta-button">Request Custom Materials</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Catalogues; 