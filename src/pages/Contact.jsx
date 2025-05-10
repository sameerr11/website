import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Add state for tracking which social icon is being hovered
  const [hoveredSocial, setHoveredSocial] = useState(null);

  // Social media data with larger icons
  const socialIcons = [
    {
      id: 'facebook',
      url: 'https://facebook.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="38" height="38">
          <path fill="#333333" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
        </svg>
      )
    },
    {
      id: 'instagram',
      url: 'https://instagram.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="38" height="38">
          <path fill="#333333" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
        </svg>
      )
    },
    {
      id: 'linkedin',
      url: 'https://linkedin.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="38" height="38">
          <path fill="#333333" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
        </svg>
      )
    },
    {
      id: 'twitter',
      url: 'https://twitter.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="38" height="38">
          <path fill="#333333" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
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

  return (
    <div className="contact-page">
      <section className="hero">
        <div className="hero-detailed-layer"></div>
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with our expert team for your construction material needs</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-information">
          <div className="contact-card">
            <h2>Our Office</h2>
            <address>
              123 Business Street<br />
              Suite 100<br />
              City, State 12345<br />
              United States
            </address>
          </div>
          
          <div className="contact-card">
            <h2>Contact Information</h2>
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Email:</strong> info@yourcompany.com</p>
            <p><strong>Hours:</strong> Monday - Friday: 9am - 5pm</p>
          </div>

          <div className="contact-card" style={{ 
            textAlign: "center",
            backgroundColor: "#ECE7D0",
            padding: "2rem",
            borderRadius: "8px",
            maxWidth: "500px",
            margin: "0 auto"
          }}>
            <h2 style={{ color: "#4A4A4A", marginBottom: "1.5rem" }}>Connect With Us</h2>
            <div style={{ 
              width: "40px", 
              height: "2px", 
              backgroundColor: "#A67C52", 
              margin: "0 auto 2rem"
            }}></div>
            <div style={{ 
              display: "flex", 
              justifyContent: "space-between",
              marginTop: "1rem",
              padding: "0 1rem",
              flexWrap: "nowrap"
            }}>
              {socialIcons.map((social) => (
                <button 
                  key={social.id}
                  onClick={() => handleSocialClick(social.url)}
                  onMouseEnter={() => setHoveredSocial(social.id)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "70px",
                    height: "70px",
                    backgroundColor: hoveredSocial === social.id ? "rgba(51, 51, 51, 0.2)" : "rgba(230, 225, 208, 0.5)",
                    borderRadius: "50%",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    transform: hoveredSocial === social.id ? "scale(1.15)" : "scale(1)",
                    boxShadow: hoveredSocial === social.id ? "0 0 12px rgba(51, 51, 51, 0.4)" : "none",
                    outline: "none"
                  }}
                  aria-label={`Visit our ${social.id} page`}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </section>

      <section className="map-section">
        <h2>Find Us</h2>
        <div className="map-placeholder">
          {/* Map would be integrated here using Google Maps or other map service */}
          <div style={{ background: 'var(--color-primary)', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p>Map Integration Would Appear Here</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact; 