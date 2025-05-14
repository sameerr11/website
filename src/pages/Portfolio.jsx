import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="portfolio-page">
      <section className="hero">
        <div className="hero-detailed-layer"></div>
        <div className="hero-content">
          <h1>Our Portfolio</h1>
          <p>Discover our showcase of exceptional projects and material applications</p>
        </div>
      </section>

      <motion.section 
        className="portfolio-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          padding: '4rem 2rem',
          backgroundColor: '#fff',
          borderBottom: '1px solid #f0ebe0'
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
            style={{
              color: '#53565C',
              fontSize: '2.2rem',
              marginBottom: '1.5rem',
              position: 'relative',
              display: 'inline-block'
            }}
          >
            Excellence in Every Project
            <motion.span 
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '80px', opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              style={{
                display: 'block',
                width: '80px',
                height: '3px',
                background: '#A67C52',
                margin: '0.8rem auto 0'
              }}
            ></motion.span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              maxWidth: '800px',
              margin: '0 auto 3rem',
              fontSize: '1.1rem',
              lineHeight: '1.6',
              color: '#53565C'
            }}
          >
              Our portfolio features a variety of successful projects, including luxury homes, commercial developments, and large-scale renovations. Each case study highlights our commitment to excellence and our ability to source and deliver high-quality materials for every type of project.
          </motion.p>
          
          <motion.div 
            className="portfolio-stats"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'space-between',
              gap: '2rem',
              marginTop: '2rem'
            }}
          >
            <motion.div 
              className="stat-item"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 8px 20px rgba(166, 124, 82, 0.15)',
                transition: { duration: 0.3 }
              }}
              style={{
                flex: 1,
                padding: '2rem',
                backgroundColor: '#f8f5eb',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
                style={{ 
                  display: 'block',
                  fontSize: '3rem',
                  fontWeight: '700',
                  color: '#A67C52',
                  marginBottom: '0.5rem'
                }}
              >
                150+
              </motion.span>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                style={{ color: '#53565C', fontSize: '1.1rem' }}
              >
                Successful Projects
              </motion.span>
            </motion.div>
            
            <motion.div 
              className="stat-item"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 8px 20px rgba(166, 124, 82, 0.15)',
                transition: { duration: 0.3 }
              }}
              style={{
                flex: 1,
                padding: '2rem',
                backgroundColor: '#f8f5eb',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                style={{ 
                  display: 'block',
                  fontSize: '3rem',
                  fontWeight: '700',
                  color: '#A67C52',
                  marginBottom: '0.5rem'
                }}
              >
                45+
              </motion.span>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                style={{ color: '#53565C', fontSize: '1.1rem' }}
              >
                Countries Sourced From
              </motion.span>
            </motion.div>
            
            <motion.div 
              className="stat-item"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 8px 20px rgba(166, 124, 82, 0.15)',
                transition: { duration: 0.3 }
              }}
              style={{
                flex: 1,
                padding: '2rem',
                backgroundColor: '#f8f5eb',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.5, type: "spring" }}
                style={{ 
                  display: 'block',
                  fontSize: '3rem',
                  fontWeight: '700',
                  color: '#A67C52',
                  marginBottom: '0.5rem'
                }}
              >
                98%
              </motion.span>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                style={{ color: '#53565C', fontSize: '1.1rem' }}
              >
                Client Satisfaction
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="featured-case-study"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          padding: '5rem 2rem',
          backgroundColor: '#f8f5eb',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              color: '#53565C',
              fontSize: '2.2rem',
              marginBottom: '2.5rem',
              textAlign: 'center',
              position: 'relative'
            }}
          >
            Featured Case Study
            <span style={{
              display: 'block',
              width: '80px',
              height: '3px',
              background: '#A67C52',
              margin: '0.8rem auto 0'
            }}></span>
          </motion.h2>
          
          <motion.div 
            className="case-study-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundImage: 'url("/portfolio.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
              position: 'relative'
            }}
          >
            <div 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                zIndex: 1
              }}
            ></div>
            
            <div className="case-study-content" style={{
              width: '100%',
              maxWidth: '800px',
              padding: '3rem',
              zIndex: 2
            }}>
              <motion.h3 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                style={{ 
                  fontSize: '1.8rem', 
                  marginBottom: '1.5rem',
                  color: '#53565C',
                  textAlign: 'center'
                }}
              >
                {featuredCaseStudy.title}
              </motion.h3>
            
              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.6', 
                color: '#53565C',
                marginBottom: '2rem' 
              }}>
                {featuredCaseStudy.description}
              </p>
              
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ 
                  color: '#53565C', 
                  fontSize: '1.2rem', 
                  marginBottom: '0.8rem',
                  position: 'relative',
                  paddingLeft: '1rem',
                  borderLeft: '3px solid #A67C52'
                }}>
                  The Challenge
                </h4>
                <p style={{ color: '#53565C' }}>{featuredCaseStudy.challenge}</p>
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ 
                  color: '#53565C', 
                  fontSize: '1.2rem', 
                  marginBottom: '0.8rem',
                  position: 'relative',
                  paddingLeft: '1rem',
                  borderLeft: '3px solid #A67C52'
                }}>
                  Our Solution
                </h4>
                <p style={{ color: '#53565C' }}>{featuredCaseStudy.solution}</p>
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ 
                  color: '#53565C', 
                  fontSize: '1.2rem', 
                  marginBottom: '0.8rem',
                  position: 'relative',
                  paddingLeft: '1rem',
                  borderLeft: '3px solid #A67C52'
                }}>
                  The Results
                </h4>
                <p style={{ color: '#53565C' }}>{featuredCaseStudy.results}</p>
              </div>
              
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link 
                    to="/contact" 
                    style={{
                      display: 'inline-block',
                      padding: '0.8rem 1.5rem',
                      backgroundColor: '#A67C52',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '4px',
                      fontWeight: '500',
                      boxShadow: '0 3px 8px rgba(166, 124, 82, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Discuss Your Project
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* <motion.section 
        className="portfolio-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          padding: '5rem 2rem',
          backgroundColor: '#ffffff'
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              color: '#53565C',
              fontSize: '2.2rem',
              marginBottom: '2.5rem',
              textAlign: 'center',
              position: 'relative'
            }}
          >
            Our Projects
            <span style={{
              display: 'block',
              width: '80px',
              height: '3px',
              background: '#A67C52',
              margin: '0.8rem auto 0'
            }}></span>
          </motion.h2>
          
          <motion.div 
            className="portfolio-filters"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '0.8rem',
              marginBottom: '3rem'
            }}
          >
            {['all', 'residential', 'commercial', 'hospitality'].map((filter) => (
              <motion.button 
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                style={{
                  padding: '0.7rem 1.5rem',
                  backgroundColor: activeFilter === filter ? '#A67C52' : '#f8f5eb',
                  color: activeFilter === filter ? 'white' : '#53565C',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  textTransform: 'capitalize',
                  boxShadow: activeFilter === filter 
                    ? '0 3px 8px rgba(166, 124, 82, 0.3)' 
                    : '0 2px 5px rgba(0,0,0,0.04)',
                  transition: 'all 0.3s ease'
                }}
              >
                {filter === 'all' ? 'All Projects' : filter}
              </motion.button>
            ))}
          </motion.div>

          <motion.div 
            className="portfolio-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile 
                ? '1fr' 
                : 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '2rem'
            }}
          >
            {filteredItems.map(item => (
              <motion.div 
                key={item.id} 
                className="portfolio-item"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                  transition: { duration: 0.3 }
                }}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.06)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div className="portfolio-image" style={{
                  height: '250px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                  />
                  <div className="image-overlay" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.7))',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '1.5rem'
                  }}>
                    <span style={{
                      display: 'inline-block',
                      padding: '0.4rem 1rem',
                      backgroundColor: '#A67C52',
                      color: 'white',
                      fontWeight: '500',
                      borderRadius: '4px',
                      fontSize: '0.85rem',
                      textTransform: 'capitalize'
                    }}>
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="portfolio-content" style={{
                  padding: '1.5rem'
                }}>
                  <h3 style={{ 
                    color: '#53565C', 
                    fontSize: '1.4rem', 
                    marginBottom: '0.8rem'
                  }}>
                    {item.title}
                  </h3>
                  
                  <p style={{ 
                    color: '#53565C', 
                    marginBottom: '1.5rem',
                    lineHeight: '1.6'
                  }}>
                    {item.description}
                  </p>
                  
                  <div className="project-details" style={{
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start',
                      marginBottom: '0.5rem'
                    }}>
                      <span style={{ 
                        fontWeight: '600', 
                        color: '#53565C', 
                        width: '85px'
                      }}>
                        Client:
                      </span>
                      <span style={{ color: '#53565C' }}>{item.client}</span>
                    </div>
                    
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start',
                      marginBottom: '0.5rem'
                    }}>
                      <span style={{ 
                        fontWeight: '600', 
                        color: '#53565C', 
                        width: '85px'
                      }}>
                        Location:
                      </span>
                      <span style={{ color: '#53565C' }}>{item.location}</span>
                    </div>
                    
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start'
                    }}>
                      <span style={{ 
                        fontWeight: '600', 
                        color: '#53565C', 
                        width: '85px'
                      }}>
                        Services:
                      </span>
                      <span style={{ color: '#53565C' }}>{item.services}</span>
                    </div>
                  </div>
                  
                  <div className="project-highlights" style={{
                    backgroundColor: '#f8f5eb',
                    padding: '1.2rem',
                    borderRadius: '6px',
                    marginBottom: '1.5rem'
                  }}>
                    <h4 style={{ 
                      color: '#53565C', 
                      fontSize: '1.1rem', 
                      marginBottom: '0.8rem' 
                    }}>
                      Highlights
                    </h4>
                    <ul style={{ 
                      paddingLeft: '1.2rem',
                      marginBottom: 0
                    }}>
                      {item.highlights.map((highlight, index) => (
                        <li key={index} style={{ 
                          color: '#53565C',
                          marginBottom: '0.4rem'
                        }}>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <motion.button 
                    className="view-project-btn"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      width: '100%',
                      padding: '0.8rem',
                      backgroundColor: '#A67C52',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                      fontWeight: '500',
                      boxShadow: '0 3px 8px rgba(166, 124, 82, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    View Project Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section> */}
    </div>
  );
}

export default Portfolio; 