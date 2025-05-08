import React from 'react';
import { Link } from 'react-router-dom';

function Catalogues() {
  const catalogues = [
    {
      id: 1,
      title: 'Product Catalogue 2023',
      cover: 'https://placehold.co/400x500/ECE7D0/53565C?text=Catalogue+2023',
      description: 'Our complete product range with detailed specifications and pricing information. Updated for 2023 with our latest offerings and innovations.',
      downloadLink: '#',
      category: 'products'
    },
    {
      id: 2,
      title: 'Solutions Brochure',
      cover: 'https://placehold.co/400x500/ECE7D0/53565C?text=Solutions+Brochure',
      description: 'Comprehensive overview of our service offerings and case studies. Discover how we solve complex challenges for businesses across various industries.',
      downloadLink: '#',
      category: 'solutions'
    },
    {
      id: 3,
      title: 'Technical Specifications',
      cover: 'https://placehold.co/400x500/ECE7D0/53565C?text=Technical+Specs',
      description: 'Detailed technical information for engineering and implementation teams. Includes all specifications needed for successful integration.',
      downloadLink: '#',
      category: 'technical'
    },
    {
      id: 4,
      title: 'Industry Solutions Guide',
      cover: 'https://placehold.co/400x500/ECE7D0/53565C?text=Industry+Solutions',
      description: 'Specialized solutions tailored to specific industry needs. Discover sector-specific applications and success stories.',
      downloadLink: '#',
      category: 'solutions'
    },
    {
      id: 5,
      title: 'Design Portfolio',
      cover: 'https://placehold.co/400x500/ECE7D0/53565C?text=Design+Portfolio',
      description: 'Showcase of our design work across various mediums and industries. A visual journey through our creative capabilities.',
      downloadLink: '#',
      category: 'portfolio'
    },
    {
      id: 6,
      title: 'Annual Report 2023',
      cover: 'https://placehold.co/400x500/ECE7D0/53565C?text=Annual+Report',
      description: "Our company's performance, achievements, and strategic vision. A comprehensive overview of our business operations.",
      downloadLink: '#',
      category: 'corporate'
    }
  ];

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
        </div>

        <div className="catalogues-grid">
          {catalogues.map(catalogue => (
            <div key={catalogue.id} className="catalogue-card">
              <div className="catalogue-cover">
                <img src={catalogue.cover} alt={catalogue.title} />
                <div className="catalogue-overlay">
                  <Link to={catalogue.downloadLink} className="view-btn">View Details</Link>
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
          ))}
        </div>
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