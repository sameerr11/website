import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import InteriorPlanningShowcase from '../components/InteriorPlanningShowcase';

function InteriorDesign() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const interiorServices = [
    {
      id: 1,
      title: 'Interior Design Concepts',
      description: 'Tailored interior design concepts that blend your style preferences with functional excellence. Our collaborative approach focuses on understanding your vision and delivering designs that exceed expectations.',
      features: [
        'Personalized design consultations',
        'Space planning and optimization',
        'Material and color scheme selection',
        'Comprehensive design presentations'
      ]
    },
    {
      id: 2,
      title: 'Customized Furniture & Décor',
      description: 'Enhance your interior ambiance with custom-designed furniture and décor. We collaborate with skilled craftsmen to create unique pieces that harmonize with your design theme.',
      features: [
        'Bespoke furniture design',
        'Custom upholstery and finishes',
        'Decorative accessory curation',
        'Artisan-crafted unique pieces'
      ]
    },
    {
      id: 3,
      title: '3D Modeling & Rendering',
      description: 'Utilizing advanced 3D modeling software for precise visualization of design elements. Our high-quality rendering techniques bring your interior spaces to life with photorealistic accuracy.',
      features: [
        'Detailed 3D spatial models',
        'Photorealistic renderings',
        'Virtual walkthroughs',
        'Lighting simulation and analysis'
      ]
    }
  ];

  const whyChooseUs = [
    {
      title: "Design Expertise & Innovation",
      description: "Our team of experienced designers, visual artists, and graphic designers brings a blend of expertise and innovation to every project."
    },
    {
      title: "Premium Material Integration",
      description: "We seamlessly incorporate Stella Di Pietra's premium construction materials into our design solutions, ensuring quality and cohesion."
    },
    {
      title: "Client-Focused Approach",
      description: "Your vision and requirements are at the center of our design process, ensuring results that align perfectly with your expectations."
    },
    {
      title: "Attention to Detail",
      description: "We meticulously consider every element of your space, from major architectural features to the smallest decorative accents."
    }
  ];

  const Divider = () => (
    <div style={{ 
      width: '100%', 
      height: '3px', 
      background: 'linear-gradient(90deg, rgba(166,124,82,0) 0%, rgba(166,124,82,0.7) 50%, rgba(166,124,82,0) 100%)',
      margin: '2rem auto'
    }}></div>
  );

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
    <div className="interior-design-page" style={{ backgroundColor: '#fff' }}>
      <section className="hero" style={{ marginBottom: 0 }}>
        <div className="hero-detailed-layer"></div>
        <div className="hero-content">
          <h1>Interior Design Services</h1>
          <p>Where creativity meets functionality to transform spaces into captivating environments</p>
        </div>
      </section>

      <section className="interior-intro" style={{ 
        backgroundImage: 'url("/bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: isMobile ? '500px' : '600px',
        marginTop: 0,
        marginBottom: 0,
        borderTop: 'none',
        borderBottom: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? '2rem 0' : '0'
      }}>
        <div style={{ 
          backgroundColor: isMobile ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
          borderRadius: isMobile ? '0' : 'none',
          width: isMobile ? '100%' : 'auto',
          padding: isMobile ? '2rem 1.5rem' : '0'
        }}>
          <div className="intro-content" style={{ 
            paddingBottom: isMobile ? '20px' : '80px', 
            paddingLeft: isMobile ? '0' : '100px', 
            maxWidth: isMobile ? '100%' : '85%',
            textAlign: 'center',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontSize: isMobile ? '1.8rem' : '3rem',
              marginBottom: isMobile ? '1rem' : '1.5rem',
              color: '#53565C',
              textShadow: isMobile ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.1)',
              fontWeight: isMobile ? '600' : '500'
            }}>
              Transforming Spaces into Captivating Environments
              {isMobile ? (
                <span style={{
                  display: 'block',
                  width: '60px',
                  height: '3px',
                  background: '#A67C52',
                  margin: '0.8rem auto 0',
                }}></span>
              ) : (
                <span style={{
                  display: 'block',
                  width: '100px',
                  height: '3px',
                  background: '#A67C52',
                  margin: '1.5rem auto 0',
                }}></span>
              )}
            </h2>
            <p className="lead-text" style={{
              fontSize: isMobile ? '1rem' : '1.2rem',
              lineHeight: isMobile ? '1.5' : '1.8',
              color: '#53565C',
              maxWidth: isMobile ? '100%' : '800px',
              textShadow: isMobile ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.1)',
              margin: '0 auto'
            }}>
              Welcome to our Interior Design and 3D Visualization services, where creativity meets functionality. With a keen eye for detail and a passion for innovative design, we specialize in bringing your interior dreams to life through stunning visuals and bespoke solutions. Our team combines artistic vision with premium materials from Stella Di Pietra to create spaces that inspire and elevate everyday living.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      <section className="interior-services" style={{ 
        padding: '4rem 2rem', 
        backgroundColor: '#f8f5eb',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            color: '#53565C',
            fontSize: '2.2rem',
            marginBottom: '2.5rem',
            textAlign: 'center',
            position: 'relative',
            fontWeight: '500'
          }}>
            Our Design Services
            <span style={{
              display: 'block',
              width: '80px',
              height: '3px',
              background: '#A67C52',
              margin: '0.8rem auto 0'
            }}></span>
          </h2>

          <motion.div 
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
              gap: '1.5rem'
            }}
          >
            {interiorServices.map((service) => (
              <motion.div 
                key={service.id}
                className="service-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 15px 30px rgba(166, 124, 82, 0.15)',
                  transition: { duration: 0.3 }
                }}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '0',
                  padding: '1.5rem',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
                  border: '1px solid rgba(166, 124, 82, 0.05)',
                  borderBottom: '3px solid #A67C52',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ 
                  height: '3px',
                  width: '40px',
                  background: '#A67C52',
                  marginBottom: '0.8rem'
                }}></div>
                <h3 style={{ 
                  color: '#53565C', 
                  fontSize: '1.2rem', 
                  marginBottom: '0.6rem',
                  fontWeight: '500',
                  letterSpacing: '0.5px'
                }}>
                  {service.title}
                </h3>
                <p style={{ 
                  color: '#555', 
                  marginBottom: '0.8rem',
                  lineHeight: '1.4',
                  fontSize: '0.9rem',
                  flex: '1'
                }}>
                  {service.description}
                </p>
                <ul style={{ 
                  listStyleType: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {service.features.map((feature, index) => (
                    <li key={index} style={{ 
                      color: '#666',
                      padding: '0.2rem 0',
                      borderBottom: index !== service.features.length - 1 ? '1px solid rgba(83, 86, 92, 0.08)' : 'none',
                      position: 'relative',
                      paddingLeft: '1.2rem',
                      fontSize: '0.85rem'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        top: '0.4rem',
                        color: '#A67C52',
                        fontWeight: 'normal'
                      }}>—</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="interior-showcase" style={{ 
        padding: '5rem 2rem',
        backgroundColor: '#fff'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <h2 style={{
              color: '#53565C',
              fontSize: '2.2rem',
              marginBottom: '1.5rem',
              fontWeight: '500'
            }}>
              Visualize Your Space
              <span style={{
                display: 'block',
                width: '80px',
                height: '3px',
                background: '#A67C52',
                margin: '0.8rem auto 0'
              }}></span>
            </h2>
            <p style={{
              maxWidth: '700px',
              margin: '0 auto',
              color: '#666',
              fontSize: '1.05rem',
              lineHeight: '1.7'
            }}>
              Experience your space before it's built with our advanced 3D visualization services. We create photorealistic renders that help you make confident design decisions.
            </p>
          </div>
          
          <div style={{ 
            width: '100%',
            height: isMobile ? '300px' : '500px',
            borderRadius: '0',
            overflow: 'hidden',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)'
          }}>
            <InteriorPlanningShowcase />
          </div>
        </div>
      </section>

      <Divider />

      <section className="why-choose-us" style={{ 
        padding: '5rem 2rem',
        backgroundColor: '#f8f5eb',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            color: '#53565C',
            fontSize: '2.2rem',
            marginBottom: '3.5rem',
            textAlign: 'center',
            fontWeight: '500'
          }}>
            Why Choose Our Design Services
            <span style={{
              display: 'block',
              width: '80px',
              height: '3px',
              background: '#A67C52',
              margin: '0.8rem auto 0'
            }}></span>
          </h2>

          <motion.div 
            className="features-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: '3rem 4rem'
            }}
          >
            {whyChooseUs.map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: '0 10px 25px rgba(166, 124, 82, 0.1)',
                  transition: { duration: 0.3 }
                }}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '0',
                  padding: '2.5rem',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(166, 124, 82, 0.05)',
                  borderLeft: '3px solid #A67C52'
                }}
              >
                <h3 style={{ 
                  color: '#53565C', 
                  fontSize: '1.3rem', 
                  marginBottom: '1.2rem',
                  position: 'relative',
                  paddingBottom: '0.8rem',
                  fontWeight: '500',
                  letterSpacing: '0.5px'
                }}>
                  {item.title}
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '40px',
                    height: '2px',
                    background: '#A67C52'
                  }}></span>
                </h3>
                <p style={{ 
                  color: '#666',
                  lineHeight: '1.7',
                  fontSize: '0.95rem'
                }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="cta-section" style={{ 
        padding: '5rem 2rem',
        backgroundColor: '#53565C',
        backgroundImage: 'linear-gradient(135deg, #53565C 0%, #3c3e43 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("/bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.03,
          zIndex: 0
        }}></div>
        
        <div style={{ 
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <h2 style={{ 
            color: '#ECE7D0',
            fontSize: isMobile ? '1.8rem' : '2.2rem',
            marginBottom: '1.5rem',
            fontWeight: '400',
            letterSpacing: '0.5px'
          }}>
            Ready to Transform Your Space?
          </h2>
          <p style={{ 
            color: '#ECE7D0',
            fontSize: '1.05rem',
            lineHeight: '1.7',
            marginBottom: '2.5rem',
            maxWidth: '650px',
            margin: '0 auto 2.5rem'
          }}>
            Contact our design team today for a consultation and discover how we can bring your vision to life with innovative design solutions and premium materials.
          </p>
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}>
            <Link to="/contact" style={{
              display: 'inline-block',
              padding: '1rem 2.5rem',
              backgroundColor: '#A67C52',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '0',
              fontWeight: '400',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              letterSpacing: '0.5px'
            }}>
              Contact Our Team
            </Link>
            <Link to="/portfolio" style={{
              display: 'inline-block',
              padding: '1rem 2.5rem',
              backgroundColor: 'transparent',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '0',
              fontWeight: '400',
              border: '1px solid rgba(236, 231, 208, 0.3)',
              transition: 'all 0.3s ease',
              letterSpacing: '0.5px'
            }}>
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InteriorDesign; 