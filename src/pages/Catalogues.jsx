import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <div className="catalogues-page">
      <section className="hero">
        <div className="hero-detailed-layer"></div>
        <div className="hero-content">
          <h1>Our Catalogues</h1>
          <p>Browse and download our product catalogues, brochures, and technical documentation</p>
        </div>
      </section>

      <section className="catalogues-content">
        <div className="catalogues-filters">
          <h2>Browse Our Resources</h2>
          <p>Access our complete library of product catalogues and informational materials</p>
          
          {/* Category filters */}
          <div className="category-filters">
            <button 
              className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Categories
            </button>
            {categories.map(category => (
              <button 
                key={category}
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading catalogues...</p>
          </div>
        ) : error ? (
          <div className="error-message">
            <p>{error}</p>
            <button 
              className="retry-btn"
              onClick={() => window.location.reload()}
            >
              Retry
            </button>
          </div>
        ) : (
          <div className="catalogues-grid">
            {filteredCatalogues.length > 0 ? (
              filteredCatalogues.map(catalogue => (
                <div key={catalogue.id} className="catalogue-card">
                  <div className="catalogue-cover pdf-embed-container">
                    <iframe 
                      src={catalogue.embedLink}
                      title={catalogue.title}
                      frameBorder="0"
                      scrolling="no"
                      className="pdf-embed"
                    ></iframe>
                    <div className="catalogue-overlay">
                      <a href={catalogue.viewLink} target="_blank" rel="noopener noreferrer" className="view-btn">
                        View PDF
                      </a>
                    </div>
                  </div>
                  <div className="catalogue-details">
                    <h3>{catalogue.title}</h3>
                    <p>{catalogue.description}</p>
                    <div className="catalogue-actions">
                      <a href={catalogue.downloadLink} className="download-btn">
                        <span className="download-icon">↓</span> Download PDF
                      </a>
                      <span className="catalogue-category">{catalogue.category}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <p>No catalogues found in this category.</p>
              </div>
            )}
          </div>
        )}
      </section>

      <section className="request-section">
        <div className="request-content">
          <h2>Need a Custom Catalogue?</h2>
          <p>Contact our team to request specialized documentation or custom product information tailored to your needs.</p>
          <Link to="/contact" className="cta-button">Request Custom Materials</Link>
        </div>
      </section>
    </div>
  );
}

export default Catalogues; 