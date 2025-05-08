import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

          <div className="contact-card">
            <h2>Connect With Us</h2>
            <div className="social-links">
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Twitter">Twitter</a>
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" aria-label="Instagram">Instagram</a>
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