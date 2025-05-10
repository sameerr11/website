import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Add state for tracking which social icon is being hovered
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [formFocus, setFormFocus] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Social media data with larger icons
  const socialIcons = [
    {
      id: 'facebook',
      url: 'https://facebook.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="38" height="38">
          <path fill="#53565C" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
        </svg>
      )
    },
    {
      id: 'instagram',
      url: 'https://instagram.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="38" height="38">
          <path fill="#53565C" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
        </svg>
      )
    },
    {
      id: 'linkedin',
      url: 'https://linkedin.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="38" height="38">
          <path fill="#53565C" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
        </svg>
      )
    },
    {
      id: 'twitter',
      url: 'https://twitter.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="38" height="38">
          <path fill="#53565C" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
        </svg>
      )
    }
  ];
  
  // Handle click on social icon
  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.3
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
    <div className="contact-page">
      <section className="hero">
        <div className="hero-detailed-layer"></div>
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with our expert team for your construction material needs</p>
        </div>
      </section>

      <motion.section 
        className="contact-content"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '1.5rem',
          padding: '3rem 2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        <motion.div 
          className="contact-information"
          variants={containerVariants}
          style={{
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}
        >
          <motion.div 
            className="contact-card"
            variants={itemVariants}
            whileHover={{ 
              y: -5, 
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              transition: { duration: 0.3 }
            }}
            style={{
              backgroundColor: '#f8f5eb',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 3px 8px rgba(0,0,0,0.05)',
              transition: 'all 0.3s ease'
            }}
          >
            <h2 style={{ 
              color: '#53565C', 
              position: 'relative',
              fontSize: '1.5rem',
              marginBottom: '1rem'
            }}>
              Our Office
              <span style={{
                display: 'block',
                width: '50px',
                height: '2px',
                background: '#A67C52',
                marginTop: '0.6rem'
              }}></span>
            </h2>
            <address style={{ 
              color: '#53565C', 
              fontStyle: 'normal',
              lineHeight: '1.6',
              fontSize: '1rem'
            }}>
              123 Business Street<br />
              Suite 100<br />
              City, State 12345<br />
              United States
            </address>
          </motion.div>
          
          <motion.div 
            className="contact-card"
            variants={itemVariants}
            whileHover={{ 
              y: -5, 
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              transition: { duration: 0.3 }
            }}
            style={{
              backgroundColor: '#f8f5eb',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 3px 8px rgba(0,0,0,0.05)',
              transition: 'all 0.3s ease'
            }}
          >
            <h2 style={{ 
              color: '#53565C', 
              position: 'relative',
              fontSize: '1.5rem',
              marginBottom: '1rem'
            }}>
              Contact Information
              <span style={{
                display: 'block',
                width: '50px',
                height: '2px',
                background: '#A67C52',
                marginTop: '0.6rem'
              }}></span>
            </h2>
            <p style={{ color: '#53565C', marginBottom: '0.6rem', fontSize: '1rem' }}>
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p style={{ color: '#53565C', marginBottom: '0.6rem', fontSize: '1rem' }}>
              <strong>Email:</strong> info@yourcompany.com
            </p>
            <p style={{ color: '#53565C', fontSize: '1rem' }}>
              <strong>Hours:</strong> Monday - Friday: 9am - 5pm
            </p>
          </motion.div>

          <motion.div 
            className="contact-card" 
            variants={itemVariants}
            whileHover={{ 
              y: -5, 
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              transition: { duration: 0.3 }
            }}
            style={{ 
              textAlign: "center",
              backgroundColor: "#f8f5eb",
              padding: '1.5rem',
              borderRadius: "8px",
              boxShadow: '0 3px 8px rgba(0,0,0,0.05)',
              transition: 'all 0.3s ease'
            }}
          >
            <h2 style={{ 
              color: "#53565C", 
              marginBottom: "1rem",
              fontSize: '1.5rem',
              position: 'relative'
            }}>
              Connect With Us
              <span style={{
                display: 'block',
                width: '50px',
                height: '2px',
                background: '#A67C52',
                margin: '0.6rem auto 0'
              }}></span>
            </h2>
            <div style={{ 
              display: "flex", 
              justifyContent: "space-between",
              marginTop: "1rem",
              padding: "0 0.5rem",
              flexWrap: "nowrap"
            }}>
              {socialIcons.map((social) => (
                <motion.button 
                  key={social.id}
                  onClick={() => handleSocialClick(social.url)}
                  onMouseEnter={() => setHoveredSocial(social.id)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "55px",
                    height: "55px",
                    backgroundColor: hoveredSocial === social.id ? "rgba(166, 124, 82, 0.2)" : "rgba(230, 225, 208, 0.5)",
                    borderRadius: "50%",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: hoveredSocial === social.id ? "0 0 8px rgba(166, 124, 82, 0.4)" : "none",
                    outline: "none"
                  }}
                  aria-label={`Visit our ${social.id} page`}
                >
                  {social.icon}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="contact-form-container"
          variants={containerVariants}
          style={{
            flex: '1.2',
            backgroundColor: '#ffffff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
            backgroundImage: 'url("/contact.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative'
          }}
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderRadius: '8px'
          }}></div>
          
          <motion.h2 
            variants={itemVariants}
            style={{ 
              color: '#53565C', 
              marginBottom: '1.5rem',
              fontSize: '1.7rem',
              position: 'relative',
              zIndex: 2
            }}
          >
            Send Us a Message
            <span style={{
              display: 'block',
              width: '70px',
              height: '2px',
              background: '#A67C52',
              marginTop: '0.8rem'
            }}></span>
          </motion.h2>
          <motion.form 
            className="contact-form" 
            onSubmit={handleSubmit}
            variants={containerVariants}
            style={{
              maxWidth: '90%',
              margin: '0 auto',
              position: 'relative',
              zIndex: 2
            }}
          >
            <motion.div 
              className="form-group"
              variants={itemVariants}
              style={{
                marginBottom: '1.2rem',
                position: 'relative'
              }}
            >
              <label 
                htmlFor="name"
                style={{
                  display: 'block',
                  marginBottom: '0.4rem',
                  color: '#53565C',
                  fontWeight: '500',
                  fontSize: '0.95rem'
                }}
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFormFocus('name')}
                onBlur={() => setFormFocus(null)}
                required
                style={{
                  width: '100%',
                  height: '38px',
                  padding: '0.5rem 0.8rem',
                  borderRadius: '4px',
                  border: `1px solid ${formFocus === 'name' ? '#A67C52' : '#e5e1d6'}`,
                  transition: 'all 0.3s ease',
                  backgroundColor: '#fcfbf8',
                  color: '#53565C',
                  outline: 'none',
                  fontSize: '0.95rem',
                  boxShadow: formFocus === 'name' ? '0 0 0 3px rgba(166, 124, 82, 0.2)' : 'none'
                }}
                placeholder="John Doe"
              />
            </motion.div>

            <motion.div 
              className="form-group"
              variants={itemVariants}
              style={{
                marginBottom: '1.2rem',
                position: 'relative'
              }}
            >
              <label 
                htmlFor="email"
                style={{
                  display: 'block',
                  marginBottom: '0.4rem',
                  color: '#53565C',
                  fontWeight: '500',
                  fontSize: '0.95rem'
                }}
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFormFocus('email')}
                onBlur={() => setFormFocus(null)}
                required
                style={{
                  width: '100%',
                  height: '38px',
                  padding: '0.5rem 0.8rem',
                  borderRadius: '4px',
                  border: `1px solid ${formFocus === 'email' ? '#A67C52' : '#e5e1d6'}`,
                  transition: 'all 0.3s ease',
                  backgroundColor: '#fcfbf8',
                  color: '#53565C',
                  outline: 'none',
                  fontSize: '0.95rem',
                  boxShadow: formFocus === 'email' ? '0 0 0 3px rgba(166, 124, 82, 0.2)' : 'none'
                }}
                placeholder="your.email@example.com"
              />
            </motion.div>

            <motion.div 
              className="form-group"
              variants={itemVariants}
              style={{
                marginBottom: '1.2rem',
                position: 'relative'
              }}
            >
              <label 
                htmlFor="subject"
                style={{
                  display: 'block',
                  marginBottom: '0.4rem',
                  color: '#53565C',
                  fontWeight: '500',
                  fontSize: '0.95rem'
                }}
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => setFormFocus('subject')}
                onBlur={() => setFormFocus(null)}
                required
                style={{
                  width: '100%',
                  height: '38px',
                  padding: '0.5rem 0.8rem',
                  borderRadius: '4px',
                  border: `1px solid ${formFocus === 'subject' ? '#A67C52' : '#e5e1d6'}`,
                  transition: 'all 0.3s ease',
                  backgroundColor: '#fcfbf8',
                  color: '#53565C',
                  outline: 'none',
                  fontSize: '0.95rem',
                  boxShadow: formFocus === 'subject' ? '0 0 0 3px rgba(166, 124, 82, 0.2)' : 'none'
                }}
                placeholder="Your subject"
              />
            </motion.div>

            <motion.div 
              className="form-group"
              variants={itemVariants}
              style={{
                marginBottom: '1.5rem',
                position: 'relative'
              }}
            >
              <label 
                htmlFor="message"
                style={{
                  display: 'block',
                  marginBottom: '0.4rem',
                  color: '#53565C',
                  fontWeight: '500',
                  fontSize: '0.95rem'
                }}
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFormFocus('message')}
                onBlur={() => setFormFocus(null)}
                required
                style={{
                  width: '100%',
                  maxHeight: '120px',
                  padding: '0.5rem 0.8rem',
                  borderRadius: '4px',
                  border: `1px solid ${formFocus === 'message' ? '#A67C52' : '#e5e1d6'}`,
                  transition: 'all 0.3s ease',
                  backgroundColor: '#fcfbf8',
                  color: '#53565C',
                  outline: 'none',
                  fontSize: '0.95rem',
                  boxShadow: formFocus === 'message' ? '0 0 0 3px rgba(166, 124, 82, 0.2)' : 'none',
                  resize: 'vertical'
                }}
                placeholder="Write your message here..."
              ></textarea>
            </motion.div>

            <div style={{ textAlign: 'right' }}>
              <motion.button 
                type="submit" 
                className="submit-button"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  backgroundColor: '#8e6a47'
                }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-block',
                  backgroundColor: '#A67C52',
                  color: 'white',
                  padding: '0.7rem 1.8rem',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  letterSpacing: '0.5px',
                  transition: 'all 0.3s ease',
                  outline: 'none',
                  boxShadow: '0 3px 6px rgba(166, 124, 82, 0.3)'
                }}
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </motion.div>
      </motion.section>

      <motion.section 
        className="map-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{
          padding: '3rem 2rem',
          textAlign: 'center',
          backgroundColor: '#f8f8f8'
        }}
      >
        <h2 style={{ 
          color: '#53565C', 
          marginBottom: '2rem',
          position: 'relative',
          display: 'inline-block'
        }}>
          Find Us
          <span style={{
            display: 'block',
            width: '60px',
            height: '3px',
            background: '#A67C52',
            margin: '0.8rem auto 0'
          }}></span>
        </h2>
        <div className="map-placeholder" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Map would be integrated here using Google Maps or other map service */}
          <div style={{ 
            background: '#ECE7D0', 
            height: '400px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            borderRadius: '8px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
          }}>
            <p style={{ color: '#53565C', fontSize: '1.2rem' }}>Map Integration Would Appear Here</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Contact; 