import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import InteriorPlanningShowcase from '../components/InteriorPlanningShowcase';
import '../styles/InteriorPlanningSection.css';

function Services() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth > 768 && window.innerWidth <= 1100);
  
  const servicesRef = useRef(null);
  const isInView = useInView(servicesRef, { once: false, amount: 0.2 });
  
  const interiorPlanningRef = useRef(null);
  const interiorInView = useInView(interiorPlanningRef, { once: false, amount: 0.2 });
  
  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: false, amount: 0.2 });
  
  const materialsRef = useRef(null);
  const materialsInView = useInView(materialsRef, { once: false, amount: 0.2 });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsMediumScreen(window.innerWidth > 768 && window.innerWidth <= 1100);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15
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
        stiffness: 90,
        damping: 15
      }
    }
  };
  
  // Card hover animation
  const cardHover = {
    rest: { 
      x: 0,
      transition: { duration: 0.3, type: "tween", ease: "easeOut" }
    },
    hover: { 
      x: 10,
      transition: { duration: 0.3, type: "tween", ease: "easeOut" }
    }
  };

  const mainServices = [
    {
      id: 1,
      title: 'Material Sourcing',
      description: 'Premium materials for any project, sourced globally. We leverage our extensive network of suppliers to provide you with the finest selection of construction materials worldwide.',
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
      image: 'https://images.pexels.com/photos/5502227/pexels-photo-5502227.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 2,
      title: 'Bathroom & Fixtures',
      items: ['Luxury Faucets', 'Designer Sinks', 'Shower Systems', 'Bathtubs', 'Toilets', 'Bathroom Accessories'],
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Building Materials',
      items: ['Premium Timber', 'Glass Solutions', 'Windows & Doors', 'Structural Elements', 'Insulation Materials', 'Roofing Systems'],
      image: 'https://images.pexels.com/photos/6908368/pexels-photo-6908368.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 4,
      title: 'Interior Elements',
      items: ['Custom Furniture', 'Lighting Solutions', 'Wall Treatments', 'Decorative Panels', 'Ceiling Systems', 'Flooring Options'],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop'
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
        minHeight: isMobile ? '500px' : '600px',
        marginTop: 0,
        marginBottom: 0,
        borderTop: 'none',
        borderBottom: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: isMobile ? 'center' : 'center',
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
            textAlign: isMobile ? 'center' : 'center',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontSize: isMobile ? '1.8rem' : '3rem',
              marginBottom: isMobile ? '1rem' : '1.5rem',
              color: '#53565C',
              textShadow: isMobile ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.1)',
              fontWeight: isMobile ? '600' : '500'
            }}>
              Comprehensive Solutions for Every Project
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
              At Stella Di Pietra, we provide a comprehensive range of services designed to meet all your construction material needs. From sourcing premium materials globally to ensuring timely delivery to your location, we handle every aspect of the supply chain with expertise and precision.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      <section className="main-services" ref={servicesRef} style={{ marginTop: 0, marginBottom: 0, backgroundColor: '#f8f5eb', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={{
              color: '#53565C',
              fontSize: '2.2rem',
              marginBottom: '2.5rem',
              textAlign: 'center',
              position: 'relative',
              fontWeight: '500'
            }}
          >
            Our Core Services
            <span style={{
              display: 'block',
              width: '80px',
              height: '3px',
              background: '#A67C52',
              margin: '0.8rem auto 0'
            }}></span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{
              maxWidth: '800px',
              margin: '0 auto 2.5rem',
              textAlign: 'center'
            }}
          >
            <p style={{
              color: '#555',
              fontSize: '1.05rem',
              lineHeight: '1.6'
            }}>Explore our comprehensive range of premium construction material services designed to meet the highest standards of quality and reliability.</p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              maxWidth: '1100px',
              margin: '0 auto'
            }}
          >
            {mainServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  backgroundColor: 'white',
                  marginBottom: '2rem',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)',
                  border: '1px solid rgba(166, 124, 82, 0.05)',
                  borderLeft: '3px solid #A67C52',
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  overflow: 'hidden'
                }}
              >
                <motion.div 
                  style={{ 
                    flex: isMobile ? '1' : '0 0 30%', 
                    padding: '1.8rem',
                    borderRight: isMobile ? 'none' : '1px solid rgba(166, 124, 82, 0.1)',
                    borderBottom: isMobile ? '1px solid rgba(166, 124, 82, 0.1)' : 'none',
                    backgroundColor: '#fff'
                  }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * service.id }}
                >
                  <h3 style={{ 
                    color: '#53565C', 
                    fontSize: '1.2rem', 
                    marginBottom: '0.6rem',
                    fontWeight: '500',
                    letterSpacing: '0.5px'
                  }}>{service.title}</h3>
                  <p style={{ 
                    color: '#555', 
                    lineHeight: '1.5',
                    fontSize: '0.9rem',
                    margin: 0
                  }}>{service.description}</p>
                </motion.div>
                <div style={{ 
                  flex: isMobile ? '1' : '0 0 70%',
                  padding: '1.8rem',
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  flexWrap: 'wrap'
                }}>
                  {service.features.map((feature, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (0.1 * idx), duration: 0.4 }}
                      style={{ 
                        padding: '0.5rem 1rem 0.5rem 0',
                        width: isMobile ? '100%' : '50%',
                        display: 'flex',
                        alignItems: 'flex-start'
                      }}
                    >
                      <span style={{
                        color: '#A67C52',
                        marginRight: '0.5rem',
                        fontWeight: 'normal',
                        fontSize: '0.9rem',
                        paddingTop: '0.1rem'
                      }}>—</span>
                      <span style={{
                        color: '#666',
                        fontSize: '0.9rem',
                        lineHeight: '1.4'
                      }}>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Divider />

      <section className="interior-planning-detail" ref={interiorPlanningRef} style={{ marginTop: 0, marginBottom: 0, padding: '4rem 2rem', backgroundColor: '#f8f5eb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={interiorInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={{
              color: '#53565C',
              fontSize: '2.2rem',
              marginBottom: '2.5rem',
              textAlign: 'center',
              position: 'relative',
              fontWeight: '500'
            }}
          >
            Interior Planning Excellence
            <span style={{
              display: 'block',
              width: '80px',
              height: '3px',
              background: '#A67C52',
              margin: '0.8rem auto 0'
            }}></span>
          </motion.h2>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: isMobile ? 'column' : 'row',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{ 
                flex: '1', 
                padding: isMobile ? '0' : '0 2rem 0 0'
              }}
            >
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.7',
                color: '#555',
                marginBottom: '1.5rem'
              }}>
                At Stella Di Pietra, we offer expert interior planning services to elevate the design and functionality of your space. Our team works closely with one of Dubai's leading interior designers, ensuring that your vision is brought to life with exceptional attention to detail and innovative solutions.
              </p>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.7',
                color: '#555',
                marginBottom: '1.5rem'
              }}>
                Our interior planning services encompass every element of your space, from layout optimization to the final selection of materials, furniture, and finishes. Whether you're renovating a home, designing a commercial space, or working on a large-scale development, we tailor our approach to meet your specific needs.
              </p>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.7',
                color: '#555'
              }}>
                With the expertise of world-renowned interior designers and our seamless coordination, Stella Di Pietra ensures that every design detail aligns with your vision, delivering a sophisticated and functional space that exceeds your expectations.
              </p>
              
              <div style={{ marginTop: '2rem' }}>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}
                >
                  <span style={{ color: '#A67C52', marginRight: '0.5rem' }}>—</span>
                  <span style={{ color: '#555' }}>Space planning and layout optimization</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}
                >
                  <span style={{ color: '#A67C52', marginRight: '0.5rem' }}>—</span>
                  <span style={{ color: '#555' }}>Design concept development</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}
                >
                  <span style={{ color: '#A67C52', marginRight: '0.5rem' }}>—</span>
                  <span style={{ color: '#555' }}>Premium material selection</span>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{ 
                flex: '1',
                height: isMobile ? '300px' : '450px',
                borderRadius: '0px',
                overflow: 'hidden',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
                width: isMobile ? '100%' : 'auto',
                maxWidth: '100%'
              }}
            >
              <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                <InteriorPlanningShowcase />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Divider />

      <section className="process-section" ref={processRef} style={{ marginTop: 0, marginBottom: 0, backgroundColor: '#fff', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={{
              color: '#53565C',
              fontSize: '2.2rem',
              marginBottom: '2.5rem',
              textAlign: 'center',
              position: 'relative',
              fontWeight: '500'
            }}
          >
            Our Streamlined Process
            <span style={{
              display: 'block',
              width: '80px',
              height: '3px',
              background: '#A67C52',
              margin: '0.8rem auto 0'
            }}></span>
          </motion.h2>
          
          <div style={{ 
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '1.5rem',
            justifyContent: 'space-between'
          }}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                flex: '1',
                padding: '1.8rem',
                backgroundColor: '#fcfbf8',
                border: '1px solid rgba(166, 124, 82, 0.1)',
                position: 'relative'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '1.5rem',
                left: '1.5rem',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#A67C52',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                fontWeight: '500'
              }}>1</div>
              <div style={{ marginLeft: '60px' }}>
                <h3 style={{ 
                  color: '#53565C', 
                  fontSize: '1.1rem', 
                  marginBottom: '0.8rem',
                  fontWeight: '500'
                }}>Consultation & Requirements</h3>
                <p style={{ 
                  color: '#555', 
                  fontSize: '0.9rem',
                  lineHeight: '1.6'
                }}>We begin by understanding your project needs, specifications, and timeline requirements to tailor our services accordingly.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                flex: '1',
                padding: '1.8rem',
                backgroundColor: '#fcfbf8',
                border: '1px solid rgba(166, 124, 82, 0.1)',
                position: 'relative'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '1.5rem',
                left: '1.5rem',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#A67C52',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                fontWeight: '500'
              }}>2</div>
              <div style={{ marginLeft: '60px' }}>
                <h3 style={{ 
                  color: '#53565C', 
                  fontSize: '1.1rem', 
                  marginBottom: '0.8rem',
                  fontWeight: '500'
                }}>Material Selection & Sourcing</h3>
                <p style={{ 
                  color: '#555', 
                  fontSize: '0.9rem',
                  lineHeight: '1.6'
                }}>Our team sources the finest materials that match your requirements, providing samples and detailed specifications for approval.</p>
              </div>
            </motion.div>
          </div>
          
          <div style={{ 
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '1.5rem',
            justifyContent: 'space-between',
            marginTop: '1.5rem'
          }}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                flex: '1',
                padding: '1.8rem',
                backgroundColor: '#fcfbf8',
                border: '1px solid rgba(166, 124, 82, 0.1)',
                position: 'relative'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '1.5rem',
                left: '1.5rem',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#A67C52',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                fontWeight: '500'
              }}>3</div>
              <div style={{ marginLeft: '60px' }}>
                <h3 style={{ 
                  color: '#53565C', 
                  fontSize: '1.1rem', 
                  marginBottom: '0.8rem',
                  fontWeight: '500'
                }}>Quality Assurance & Logistics</h3>
                <p style={{ 
                  color: '#555', 
                  fontSize: '0.9rem',
                  lineHeight: '1.6'
                }}>We conduct thorough quality checks before coordinating the shipping, importing, and logistics process.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                flex: '1',
                padding: '1.8rem',
                backgroundColor: '#fcfbf8',
                border: '1px solid rgba(166, 124, 82, 0.1)',
                position: 'relative'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '1.5rem',
                left: '1.5rem',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#A67C52',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                fontWeight: '500'
              }}>4</div>
              <div style={{ marginLeft: '60px' }}>
                <h3 style={{ 
                  color: '#53565C', 
                  fontSize: '1.1rem', 
                  marginBottom: '0.8rem',
                  fontWeight: '500'
                }}>Delivery & Support</h3>
                <p style={{ 
                  color: '#555', 
                  fontSize: '0.9rem',
                  lineHeight: '1.6'
                }}>Your materials are delivered on schedule to your specified location, with ongoing support throughout the project lifecycle.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Divider />

      <section className="materials-showcase" style={{ marginTop: 0, marginBottom: 0, backgroundColor: '#fff', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              color: '#53565C',
              fontSize: '2.2rem',
              marginBottom: '2.5rem',
              textAlign: 'center',
              position: 'relative',
              fontWeight: '500'
            }}
          >
            Premium Materials We Provide
            <span style={{
              display: 'block',
              width: '80px',
              height: '3px',
              background: '#A67C52',
              margin: '0.8rem auto 0'
            }}></span>
          </motion.h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : (isMediumScreen ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)'),
            gap: '1.5rem'
          }}>
            {materialCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                whileHover={{ y: -10 }}
                style={{
                  backgroundColor: 'white',
                  border: '1px solid rgba(166, 124, 82, 0.1)',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'relative',
                  height: '200px',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={category.image} 
                    alt={category.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    background: 'linear-gradient(to top, rgba(83, 86, 92, 0.8), transparent)',
                    padding: '1.5rem 1rem 0.8rem'
                  }}>
                    <h3 style={{
                      color: 'white',
                      fontSize: '1.2rem',
                      margin: 0,
                      fontWeight: '500'
                    }}>{category.title}</h3>
                  </div>
                </div>
                
                <div style={{
                  padding: '1.5rem'
                }}>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {category.items.map((item, itemIndex) => (
                      <li 
                        key={itemIndex}
                        style={{
                          padding: '0.4rem 0',
                          borderBottom: itemIndex !== category.items.length - 1 ? '1px solid rgba(166, 124, 82, 0.08)' : 'none',
                          fontSize: '0.9rem',
                          color: '#666',
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        <span style={{
                          color: '#A67C52',
                          marginRight: '0.5rem',
                          fontWeight: 'normal'
                        }}>—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/catalogues"
                    style={{
                      display: 'inline-block',
                      marginTop: '1.2rem',
                      color: '#A67C52',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      textDecoration: 'none',
                      borderBottom: '1px solid #A67C52',
                      paddingBottom: '0.2rem',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    View Catalogue
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      <section className="services-cta" style={{ 
        marginTop: 0, 
        backgroundColor: '#53565C', 
        backgroundImage: 'linear-gradient(135deg, #53565C 0%, #3c3e43 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: '5rem 2rem'
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
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ 
              color: '#ECE7D0',
              fontSize: isMobile ? '1.8rem' : '2.2rem',
              marginBottom: '1.5rem',
              fontWeight: '400',
              letterSpacing: '0.5px'
            }}
          >
            Ready to Transform Your Construction Projects?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ 
              color: '#ECE7D0',
              fontSize: '1.05rem',
              lineHeight: '1.7',
              marginBottom: '2.5rem',
              maxWidth: '650px',
              margin: '0 auto 2.5rem'
            }}
          >
            Partner with Stella Di Pietra for premium materials and seamless supply chain solutions
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ 
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap'
            }}
          >
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
              Request a Consultation
            </Link>
            <Link to="/catalogues" style={{
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
              Browse Our Catalogues
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Services; 