import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'Luxury Beachfront Villa',
      category: 'residential',
      image: 'https://placehold.co/800x600/ECE7D0/53565C?text=Luxury+Villa',
      description: 'A stunning beachfront property featuring imported Italian marble, custom glass installations, and premium timber finishes.',
      client: 'Private Client',
      location: 'Coastal California',
      services: 'Material Sourcing, Quality Control, Logistics & Delivery',
      highlights: [
        'Custom-cut Italian Calacatta marble',
        'Handcrafted timber elements',
        'Floor-to-ceiling glass facade',
        'Seamless indoor-outdoor living spaces'
      ]
    },
    {
      id: 2,
      title: 'Modern Office Complex',
      category: 'commercial',
      image: 'https://placehold.co/800x600/ECE7D0/53565C?text=Office+Complex',
      description: 'A sustainable office development with emphasis on natural lighting, premium fixtures, and eco-friendly materials.',
      client: 'TechInnovate Corp',
      location: 'Metropolitan Business District',
      services: 'Material Sourcing, Logistics & Importing, On-Time Delivery',
      highlights: [
        'LEED-certified materials throughout',
        'Custom designed glass partitions',
        'Energy-efficient lighting systems',
        'Acoustically optimized interior elements'
      ]
    },
    {
      id: 3,
      title: 'Boutique Hotel Renovation',
      category: 'hospitality',
      image: 'https://placehold.co/800x600/ECE7D0/53565C?text=Hotel+Renovation',
      description: 'Complete renovation of a boutique hotel, including custom bathroom fixtures, premium flooring, and bespoke furniture.',
      client: 'Luxury Stays Group',
      location: 'Historic District',
      services: 'Material Sourcing, Quality Control, Delivery',
      highlights: [
        'Designer bathroom collections',
        'Custom-stained hardwood flooring',
        'Artisan crafted furniture pieces',
        'Luxury textiles and wall coverings'
      ]
    },
    {
      id: 4,
      title: 'Urban Apartment Building',
      category: 'residential',
      image: 'https://placehold.co/800x600/ECE7D0/53565C?text=Apartment+Building',
      description: 'A modern residential complex featuring premium fixtures, custom windows, and high-end finishes throughout.',
      client: 'Urban Development Partners',
      location: 'City Center',
      services: 'Material Sourcing, Logistics & Importing, Quality Control',
      highlights: [
        'Sound-insulated wall systems',
        'Custom kitchen installations',
        'Premium European fixtures',
        'Engineered flooring solutions'
      ]
    },
    {
      id: 5,
      title: 'Waterfront Restaurant',
      category: 'hospitality',
      image: 'https://placehold.co/800x600/ECE7D0/53565C?text=Waterfront+Restaurant',
      description: 'An elegant dining establishment featuring weather-resistant materials, custom lighting, and premium indoor-outdoor furnishings.',
      client: 'Fine Dining Experiences',
      location: 'Harbor District',
      services: 'Material Sourcing, On-Time Delivery',
      highlights: [
        'Weather-resistant decking materials',
        'Custom lighting installations',
        'Commercial-grade kitchen surfaces',
        'Imported stone feature walls'
      ]
    },
    {
      id: 6,
      title: 'Corporate Headquarters',
      category: 'commercial',
      image: 'https://placehold.co/800x600/ECE7D0/53565C?text=Corporate+Headquarters',
      description: 'A prestigious corporate office featuring custom marble floors, specialty glass, and bespoke executive furniture.',
      client: 'Global Finance Corporation',
      location: 'Financial District',
      services: 'Material Sourcing, Quality Control, Logistics & Importing',
      highlights: [
        'Premium marble flooring',
        'Customized executive furnishings',
        'Specialty glass partitions',
        'Integrated technology infrastructure'
      ]
    },
  ];

  const featuredCaseStudy = {
    title: "Luxury Oceanfront Residence",
    description: "A comprehensive material solution for an award-winning coastal luxury residence, showcasing our ability to source and deliver the finest materials for high-end construction.",
    image: "https://placehold.co/1200x600/ECE7D0/53565C?text=Featured+Case+Study",
    challenge: "The client required rare, premium materials with specific aesthetic qualities while ensuring on-time delivery despite global supply chain disruptions. All materials needed to withstand coastal environmental conditions without compromising on luxury.",
    solution: "Our team worked directly with specialized quarries in Italy to source custom-cut marble and with sustainable timber suppliers in Scandinavia. We implemented a dedicated quality control process and created a tailored logistics plan to ensure all materials arrived on schedule despite international shipping challenges.",
    results: "The project was completed on schedule with zero material defects or delays. The residence went on to win regional architectural awards, with specific mention of the exceptional material quality. Our comprehensive approach saved the client an estimated 15% on material costs while delivering superior products."
  };

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="portfolio-page">
      <section className="hero">
        <div className="hero-detailed-layer"></div>
        <div className="hero-content">
          <h1>Our Portfolio</h1>
          <p>Discover our showcase of exceptional projects and material applications</p>
        </div>
      </section>

      <section className="portfolio-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Excellence in Every Project</h2>
            <p className="lead-text">
              Our portfolio features a variety of successful projects, including luxury homes, commercial developments, and large-scale renovations. Each case study highlights our commitment to excellence and our ability to source and deliver high-quality materials for every type of project.
            </p>
            <div className="portfolio-stats">
              <div className="stat-item">
                <span className="stat-number">150+</span>
                <span className="stat-label">Successful Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">45+</span>
                <span className="stat-label">Countries Sourced From</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-case-study">
        <div className="container">
          <h2>Featured Case Study</h2>
          <div className="case-study-container">
            <div className="case-study-image">
              <img src={featuredCaseStudy.image} alt={featuredCaseStudy.title} />
            </div>
            <div className="case-study-content">
              <h3>{featuredCaseStudy.title}</h3>
              <p className="case-study-description">{featuredCaseStudy.description}</p>
              
              <div className="case-study-details">
                <div className="case-detail">
                  <h4>The Challenge</h4>
                  <p>{featuredCaseStudy.challenge}</p>
                </div>
                <div className="case-detail">
                  <h4>Our Solution</h4>
                  <p>{featuredCaseStudy.solution}</p>
                </div>
                <div className="case-detail">
                  <h4>The Results</h4>
                  <p>{featuredCaseStudy.results}</p>
                </div>
              </div>
              
              <Link to="/contact" className="case-study-cta">Discuss Your Project</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="container">
          <h2>Our Projects</h2>
          <div className="portfolio-filters">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Projects
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'residential' ? 'active' : ''}`}
              onClick={() => setActiveFilter('residential')}
            >
              Residential
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'commercial' ? 'active' : ''}`}
              onClick={() => setActiveFilter('commercial')}
            >
              Commercial
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'hospitality' ? 'active' : ''}`}
              onClick={() => setActiveFilter('hospitality')}
            >
              Hospitality
            </button>
          </div>

          <div className="portfolio-grid">
            {filteredItems.map(item => (
              <div key={item.id} className="portfolio-item">
                <div className="portfolio-image">
                  <img src={item.image} alt={item.title} />
                  <div className="image-overlay">
                    <span className="project-category">{item.category}</span>
                  </div>
                </div>
                <div className="portfolio-content">
                  <h3>{item.title}</h3>
                  <p className="portfolio-description">{item.description}</p>
                  <div className="project-details">
                    <div className="detail-item">
                      <span className="detail-label">Client:</span>
                      <span className="detail-value">{item.client}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Location:</span>
                      <span className="detail-value">{item.location}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Services:</span>
                      <span className="detail-value">{item.services}</span>
                    </div>
                  </div>
                  <div className="project-highlights">
                    <h4>Highlights</h4>
                    <ul>
                      {item.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <button className="view-project-btn">View Project Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-content">
            <div className="quote-mark">"</div>
            <blockquote>
              Stella Di Pietra transformed our project with their exceptional materials and commitment to quality. Their ability to source exactly what we needed, on time and within budget, was instrumental to our success. Their end-to-end supply chain management eliminated countless headaches.
            </blockquote>
            <div className="testimonial-author">
              <div className="author-name">Michael Richardson</div>
              <div className="author-title">Principal Architect, Urban Design Associates</div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-cta">
        <div className="container">
          <h2>Ready to Elevate Your Next Project?</h2>
          <p>Partner with Stella Di Pietra for premium materials and seamless supply chain solutions</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-button">Discuss Your Project</Link>
            <Link to="/catalogues" className="secondary-button">Explore Our Materials</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio; 