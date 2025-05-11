import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchCatalogues } from '../utils/googleDriveApi';

// Custom PDF preview component with fallback
const PDFPreview = ({ catalogue }) => {
  const [previewError, setPreviewError] = useState(false);

  return (
    <div className="catalogue-cover pdf-embed-container">
      {!previewError ? (
        <iframe 
          src={catalogue.embedLink}
          title={catalogue.title}
          frameBorder="0"
          scrolling="no"
          className="pdf-embed"
          onError={() => setPreviewError(true)}
        ></iframe>
      ) : (
        <div 
          className="pdf-fallback"
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#f4f4f4',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            textAlign: 'center'
          }}
        >
          <div style={{ marginBottom: '15px' }}>
            <svg width="50" height="60" viewBox="0 0 50 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M45 15H30V5L45 15Z" fill="#A67C52" />
              <path d="M30 5H5C3.34 5 2 6.34 2 8V52C2 53.66 3.34 55 5 55H45C46.66 55 48 53.66 48 52V15L30 5Z" stroke="#A67C52" strokeWidth="2" />
              <path d="M15 30H35M15 40H35" stroke="#A67C52" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <h3 style={{ 
            color: '#333', 
            fontSize: '1.5rem',
            margin: '10px 0',
            fontWeight: 'bold' 
          }}>{catalogue.title}</h3>
          <a 
            href={catalogue.downloadLink} 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#A67C52',
              color: 'white',
              padding: '8px 20px',
              borderRadius: '4px',
              textDecoration: 'none',
              display: 'inline-block',
              marginTop: '15px',
              fontWeight: '500',
              fontSize: '0.9rem'
            }}
          >
            Download PDF
          </a>
        </div>
      )}
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
  );
};

function Catalogues() {
  const [catalogues, setCatalogues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [categories, setCategories] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          <h2 style={{
            color: "#FFFFFF",
            textAlign: "center",
            fontSize: "2.2rem",
            marginBottom: "1rem",
            fontWeight: "500",
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
          }}>Browse Our Resources</h2>
          <p style={{
            color: "#FFFFFF",
            textAlign: "center",
            fontSize: "1.1rem",
            maxWidth: "600px",
            margin: "0 auto 2rem",
            lineHeight: "1.5"
          }}>Access our complete library of product catalogues and informational materials</p>
          
          {/* Category filters */}
          <div className="category-filters" style={{
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '0.5rem',
            justifyContent: 'center',
            margin: '2rem 0'
          }}>
            <motion.button 
              className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: activeCategory === 'all' ? '#A67C52' : 'rgba(166, 124, 82, 0.4)',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease',
                boxShadow: activeCategory === 'all' ? '0 4px 10px rgba(166, 124, 82, 0.3)' : 'none'
              }}
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
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: activeCategory === category ? '#A67C52' : 'rgba(166, 124, 82, 0.4)',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: '500',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease',
                  boxShadow: activeCategory === category ? '0 4px 10px rgba(166, 124, 82, 0.3)' : 'none'
                }}
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
                  <PDFPreview catalogue={catalogue} />
                  <div className="catalogue-details">
                    <h3>{catalogue.title}</h3>
                    <p>{catalogue.description}</p>
                    <div className="catalogue-actions">
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