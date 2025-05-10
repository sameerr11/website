import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  const mainServices = [
    {
      id: 1,
      title: 'Material Sourcing',
      description: 'Premium materials for any project, sourced globally. We leverage our extensive network of suppliers to provide you with the finest selection of construction materials worldwide.',
      icon: '🏗️',
      features: [
        'Extensive global supplier network',
        'Custom material specifications',
        'Sustainable and eco-friendly options',
        'Competitive pricing through direct relationships'
      ]
    },
    {
      id: 2,
      title: 'Quality Control',
      description: 'Rigorous checks to ensure the highest quality. Our dedicated quality assurance team performs comprehensive inspections at every stage of the sourcing process.',
      icon: '🔍',
      features: [
        'Pre-shipment inspections',
        'Material testing and certification',
        'Compliance with international standards',
        'Detailed quality documentation'
      ]
    },
    {
      id: 3,
      title: 'Logistics & Importing',
      description: 'Full management of the importing process. We handle all aspects of logistics, from factory to site, ensuring smooth and efficient transportation of your materials.',
      icon: '🚢',
      features: [
        'Complete customs documentation',
        'International shipping coordination',
        'Storage and warehousing solutions',
        'Inventory management systems'
      ]
    },
    {
      id: 4,
      title: 'On-Time Delivery',
      description: 'Reliable, efficient delivery to your location. We prioritize punctuality and precision in our delivery services, allowing you to plan your projects with confidence.',
      icon: '🚚',
      features: [
        'Scheduled delivery timelines',
        'Real-time tracking systems',
        'Flexible delivery options',
        'Project-specific logistics planning'
      ]
    },
    {
      id: 5,
      title: 'Interior Planning Services',
      description: 'Expert interior planning to elevate your space. We collaborate with Dubai\'s leading interior designers to transform your vision into reality with exceptional attention to detail and innovative solutions.',
      icon: '🏠',
      features: [
        'Space planning and layout optimization',
        'Design concept development',
        'Premium material selection and integration',
        'Lighting plans and color schemes',
        'Bespoke furniture and joinery design'
      ]
    }
  ];

  const materialCategories = [
    {
      id: 1,
      title: 'Tiles & Stone',
      items: ['Porcelain Tiles', 'Ceramic Tiles', 'Natural Stone', 'Marble', 'Granite', 'Limestone'],
      image: 'https://placehold.co/600x400/ECE7D0/53565C?text=Tiles+%26+Stone'
    },
    {
      id: 2,
      title: 'Bathroom & Fixtures',
      items: ['Luxury Faucets', 'Designer Sinks', 'Shower Systems', 'Bathtubs', 'Toilets', 'Bathroom Accessories'],
      image: 'https://placehold.co/600x400/ECE7D0/53565C?text=Bathroom+%26+Fixtures'
    },
    {
      id: 3,
      title: 'Building Materials',
      items: ['Premium Timber', 'Glass Solutions', 'Windows & Doors', 'Structural Elements', 'Insulation Materials', 'Roofing Systems'],
      image: 'https://placehold.co/600x400/ECE7D0/53565C?text=Building+Materials'
    },
    {
      id: 4,
      title: 'Interior Elements',
      items: ['Custom Furniture', 'Lighting Solutions', 'Wall Treatments', 'Decorative Panels', 'Ceiling Systems', 'Flooring Options'],
      image: 'https://placehold.co/600x400/ECE7D0/53565C?text=Interior+Elements'
    }
  ];

  const Divider = () => (
    <div style={{ 
      width: '100%', 
      height: '3px', 
      background: 'linear-gradient(90deg, rgba(166,124,82,0) 0%, rgba(166,124,82,0.7) 50%, rgba(166,124,82,0) 100%)',
      margin: '0 auto'
    }}></div>
  );

  return (
    <div className="services-page" style={{ backgroundColor: '#fff' }}>
      <section className="hero" style={{ marginBottom: 0 }}>
        <div className="hero-detailed-layer"></div>
        <div className="hero-content">
          <h1>Our Services</h1>
          <p>Comprehensive construction material solutions for your projects</p>
        </div>
      </section>

      <section className="services-intro" style={{ 
        backgroundImage: 'url("/bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '400px',
        marginTop: 0,
        marginBottom: 0,
        borderTop: 'none',
        borderBottom: 'none'
      }}>
        <div className="container">
          <div className="intro-content" style={{ paddingBottom: '80px', paddingLeft: '100px', maxWidth: '85%' }}>
            <h2>Comprehensive Solutions for Every Project</h2>
            <p className="lead-text">
              At Stella Di Pietra, we provide a comprehensive range of services designed to meet all your construction material needs. From sourcing premium materials globally to ensuring timely delivery to your location, we handle every aspect of the supply chain with expertise and precision.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      <section className="main-services" style={{ marginTop: 0, marginBottom: 0, backgroundColor: '#fff', paddingTop: '40px' }}>
        <div className="container">
          <h2>Our Core Services</h2>
          <div className="section-description">
            <p>Explore our comprehensive range of premium construction material services designed to meet the highest standards of quality and reliability.</p>
          </div>
          <div className="services-grid">
            {mainServices.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                </div>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      <section className="interior-planning-detail" style={{ marginTop: 0, marginBottom: 0, backgroundColor: '#f8f8f8', paddingTop: '40px' }}>
        <div className="container">
          <h2>Interior Planning Excellence</h2>
          <div className="interior-planning-content">
            <div className="interior-planning-text">
              <p>
                At Stella Di Pietra, we offer expert interior planning services to elevate the design and functionality of your space. Our team works closely with one of Dubai's leading interior designers, ensuring that your vision is brought to life with exceptional attention to detail and innovative solutions.
              </p>
              <p>
                Our interior planning services encompass every element of your space, from layout optimization to the final selection of materials, furniture, and finishes. Whether you're renovating a home, designing a commercial space, or working on a large-scale development, we tailor our approach to meet your specific needs.
              </p>
              <p>
                With the expertise of world-renowned interior designers and our seamless coordination, Stella Di Pietra ensures that every design detail aligns with your vision, delivering a sophisticated and functional space that exceeds your expectations.
              </p>
            </div>
            <div className="interior-planning-image">
              <img src="https://placehold.co/800x500/ECE7D0/53565C?text=Interior+Planning" alt="Interior Planning Services" />
            </div>
          </div>
        </div>
      </section>

      <Divider />

      <section className="process-section" style={{ marginTop: 0, marginBottom: 0, backgroundColor: '#fff', paddingTop: '40px' }}>
        <div className="container">
          <h2>Our Streamlined Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Consultation & Requirements</h3>
                <p>We begin by understanding your project needs, specifications, and timeline requirements to tailor our services accordingly.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Material Selection & Sourcing</h3>
                <p>Our team sources the finest materials that match your requirements, providing samples and detailed specifications for approval.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Quality Assurance & Logistics</h3>
                <p>We conduct thorough quality checks before coordinating the shipping, importing, and logistics process.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Delivery & Support</h3>
                <p>Your materials are delivered on schedule to your specified location, with ongoing support throughout the project lifecycle.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      <section className="materials-showcase" style={{ marginTop: 0, marginBottom: 0, backgroundColor: '#f8f8f8', paddingTop: '40px' }}>
        <div className="container">
          <h2>Premium Materials We Provide</h2>
          <div className="materials-grid">
            {materialCategories.map(category => (
              <div key={category.id} className="material-card">
                <div className="material-image">
                  <img src={category.image} alt={category.title} />
                  <div className="material-overlay">
                    <h3>{category.title}</h3>
                  </div>
                </div>
                <div className="material-details">
                  <ul className="material-items">
                    {category.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <Link to="/catalogues" className="view-more">View Catalogue</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      <section className="services-cta" style={{ marginTop: 0, backgroundColor: '#ECE7D0', paddingTop: '40px' }}>
        <div className="container">
          <h2>Ready to Transform Your Construction Projects?</h2>
          <p>Partner with Stella Di Pietra for premium materials and seamless supply chain solutions</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-button">Request a Consultation</Link>
            <Link to="/catalogues" className="secondary-button">Browse Our Catalogues</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services; 