import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchCatalogues } from '../utils/googleDriveApi';
import '../styles/catalogues.css'; // Import dedicated CSS

// Custom PDF preview component with fallback
const PDFPreview = ({ catalogue, forcedImagePath }) => {
  // Determine the image file to use - directly use the catalogue title
  // This ensures that the PDF filename and cover image filename are in sync
  let imageFile = `${catalogue.title.toLowerCase()}.png`;
  
  // Use forced path if provided (from parent component)
  const imagePath = forcedImagePath || `/covers/${imageFile}`;
  console.log('Using image path:', imagePath, 'for catalogue:', catalogue.title);
  
  return (
    <div className="catalogue-cover pdf-embed-container">
      <img 
        src={imagePath} 
        alt={catalogue.title}
        onError={(e) => {
          console.log('Image not found, using furniture fallback');
          e.target.src = `/covers/furniture.png`;
          
          // If that also fails, use an online placeholder
          e.onerror = () => {
            console.log('Fallback also failed, using placeholder');
            e.target.src = 'https://placehold.co/400x500/ECE7D0/333333?text=' + encodeURIComponent(catalogue.title);
            e.onerror = null; // Prevent infinite loops
          };
        }}
      />
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

  // Function to force reload with cache busting
  const forceRefresh = () => {
    const cacheBuster = `?cb=${Date.now()}`;
    window.location.href = window.location.pathname + cacheBuster;
  };

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
              filteredCatalogues.map((catalogue, index) => {
                // We're no longer using complex forced image path logic
                // The image path is now directly derived from the PDF filename
                const forcedImagePath = null;
                
                return (
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
                    <PDFPreview catalogue={catalogue} forcedImagePath={forcedImagePath} />
                    <div className="catalogue-details">
                      <h3>{catalogue.title.toUpperCase()}</h3>
                     
                      <div className="catalogue-actions">
                        <span className="catalogue-category">{catalogue.category}</span>
                      </div>
                    </div>
                  </motion.div>
                )
              })
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
          <div style={{ position: "relative", zIndex: 10 }}>
            <Link 
              to="/contact" 
              style={{
                display: "inline-block",
                backgroundColor: "#A67C52",
                color: "#ffffff",
                padding: "1rem 2rem",
                fontSize: "1rem",
                fontWeight: 600,
                textDecoration: "none",
                borderRadius: "4px",
                transition: "all 0.3s ease",
                textTransform: "uppercase",
                letterSpacing: "1px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                position: "relative",
                zIndex: 5,
                cursor: "pointer"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#8e6a47";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 7px 14px rgba(0, 0, 0, 0.15)";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#A67C52";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                e.currentTarget.style.color = "#ffffff";
              }}
            >
              Request Custom Materials
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Catalogues; 