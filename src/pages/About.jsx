import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about-page">
      <section className="hero">
        <div className="hero-detailed-layer"></div>
        <div className="hero-content">
          <h1>About Stella Di Pietra</h1>
          <p>Dedicated to architectural excellence through premium construction materials</p>
        </div>
      </section>

      <section className="about-intro">
        <div className="about-container">
          <div className="about-intro-content">
            <h2>Who We Are</h2>
            <p className="lead-text">Stella Di Pietra is a leading provider of end-to-end construction solutions, specialising in sourcing, supplying, and delivering premium materials for residential and commercial projects.</p>
            <div className="about-image">
              <img src="https://placehold.co/1200x700/ECE7D0/53565C?text=Stella+Di+Pietra" alt="Stella Di Pietra headquarters" />
            </div>
            <div className="about-text-block">
              <p>We offer a comprehensive one-package solution for builders, developers, designers, and homeowners. From material selection to quality checks and timely delivery, we ensure every product meets the highest standards.</p>
              <p>We manage the entire supply chain, including importing, quality control, logistics, and delivery to your preferred location. Our wide network of trusted suppliers allows us to source tiles, fixtures, bathroom ware, natural stone, timber, glass, windows, furniture and more, ensuring you receive only the finest materials and products.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision-section">
        <div className="mission-vision-bg"></div>
        <div className="mission-vision-container">
          <div className="mission-box">
            <div className="mission-content">
              <h2>Our Mission</h2>
              <p>To offer seamless, high-quality construction material solutions, delivering products efficiently while maintaining the highest standards of service.</p>
            </div>
          </div>
          <div className="vision-box">
            <div className="vision-content">
              <h2>Our Vision</h2>
              <p>To be the leading global supplier of construction materials, providing end-to-end solutions for all your building needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-overview">
        <div className="about-container">
          <h2>Our Comprehensive Solutions</h2>
          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon">
                <span>🏗️</span>
              </div>
              <h3>Material Sourcing</h3>
              <p>We source premium materials from trusted suppliers worldwide, ensuring quality and sustainability.</p>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <span>🔍</span>
              </div>
              <h3>Quality Control</h3>
              <p>Rigorous testing and inspection processes to guarantee all products meet the highest industry standards.</p>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <span>🚚</span>
              </div>
              <h3>Logistics & Delivery</h3>
              <p>Efficient supply chain management with reliable, timely delivery to your project location.</p>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <span>📋</span>
              </div>
              <h3>Project Consultation</h3>
              <p>Expert advice on material selection tailored to your specific project requirements and budget.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="materials-section">
        <div className="about-container">
          <h2>Premium Materials We Provide</h2>
          <div className="materials-grid">
            <div className="material-category">
              <h3>Tiles & Flooring</h3>
              <ul>
                <li>Ceramic & Porcelain Tiles</li>
                <li>Natural Stone Tiles</li>
                <li>Marble & Granite</li>
                <li>Engineered Wood</li>
              </ul>
            </div>
            <div className="material-category">
              <h3>Bathroom & Fixtures</h3>
              <ul>
                <li>Luxury Bathroom Fittings</li>
                <li>Designer Fixtures</li>
                <li>Sanitary Ware</li>
                <li>Shower Systems</li>
              </ul>
            </div>
            <div className="material-category">
              <h3>Building Materials</h3>
              <ul>
                <li>Premium Timber</li>
                <li>Glass Solutions</li>
                <li>Windows & Doors</li>
                <li>Structural Components</li>
              </ul>
            </div>
            <div className="material-category">
              <h3>Interior Finishing</h3>
              <ul>
                <li>Custom Furniture</li>
                <li>Lighting Solutions</li>
                <li>Decorative Elements</li>
                <li>Wall Treatments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-container">
          <div className="cta-content">
            <h2>Ready to Elevate Your Construction Projects?</h2>
            <p>Partner with Stella Di Pietra for premium materials and seamless supply chain solutions.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button">Contact Our Team</Link>
              <Link to="/catalogues" className="secondary-button">Browse Our Catalogues</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About; 