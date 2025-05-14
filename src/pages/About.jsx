import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArchitecturalShowcase from '../components/ArchitecturalShowcase';

function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
              <ArchitecturalShowcase />
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

      <section className="services-overview" style={{
        background: `linear-gradient(rgba(248, 245, 235, 0.9), rgba(248, 245, 235, 0.9)), 
                     url('/bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(166, 124, 82, 0.2)',
        borderBottom: '1px solid rgba(166, 124, 82, 0.2)',
        padding: isMobile ? '3rem 1rem' : '4rem 2rem'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            textAlign: 'center',
            marginBottom: '2rem',
            fontSize: isMobile ? '1.8rem' : '2.2rem',
            position: 'relative',
            color: '#53565C',
            fontWeight: '500'
          }}>
            Our Comprehensive Solutions
            <span style={{
              display: 'block',
              width: '80px',
              height: '3px',
              background: '#A67C52',
              margin: '0.8rem auto 0'
            }}></span>
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: isMobile ? '1.5rem' : '2rem',
            width: '100%'
          }}>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              boxShadow: '0 10px 30px rgba(166, 124, 82, 0.1)',
              transition: 'all 0.4s ease',
              border: '1px solid rgba(166, 124, 82, 0.1)',
              borderBottom: '3px solid rgba(166, 124, 82, 0.3)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              borderRadius: '4px'
            }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#53565C' }}>Material Sourcing</h3>
              <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: "1.5" }}>We source premium materials from trusted suppliers worldwide, ensuring quality and sustainability.</p>
            </div>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              boxShadow: '0 10px 30px rgba(166, 124, 82, 0.1)',
              transition: 'all 0.4s ease',
              border: '1px solid rgba(166, 124, 82, 0.1)',
              borderBottom: '3px solid rgba(166, 124, 82, 0.3)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              borderRadius: '4px'
            }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#53565C' }}>Quality Control</h3>
              <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: "1.5" }}>Rigorous testing and inspection processes to guarantee all products meet the highest industry standards.</p>
            </div>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              boxShadow: '0 10px 30px rgba(166, 124, 82, 0.1)',
              transition: 'all 0.4s ease',
              border: '1px solid rgba(166, 124, 82, 0.1)',
              borderBottom: '3px solid rgba(166, 124, 82, 0.3)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              borderRadius: '4px'
            }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#53565C' }}>Logistics & Delivery</h3>
              <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: "1.5" }}>Efficient supply chain management with reliable, timely delivery to your project location.</p>
            </div>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              boxShadow: '0 10px 30px rgba(166, 124, 82, 0.1)',
              transition: 'all 0.4s ease',
              border: '1px solid rgba(166, 124, 82, 0.1)',
              borderBottom: '3px solid rgba(166, 124, 82, 0.3)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              borderRadius: '4px'
            }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#53565C' }}>Project Consultation</h3>
              <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: "1.5" }}>Expert advice on material selection tailored to your specific project requirements and budget.</p>
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
              <Link 
                to="/contact" 
                style={{
                  display: "inline-block",
                  backgroundColor: "#A67C52",
                  color: "#ffffff",
                  padding: "1rem 2rem",
                  fontSize: "1rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  borderRadius: "4px",
                  transition: "all 0.3s ease",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  margin: "0.5rem",
                  position: "relative",
                  zIndex: 5,
                  cursor: "pointer"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#8e6a47";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 7px 14px rgba(0, 0, 0, 0.15)";
                  e.currentTarget.style.color = "#ffffff";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#A67C52";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                  e.currentTarget.style.color = "#ffffff";
                }}
              >
                Contact Our Team
              </Link>
              <Link 
                to="/catalogues" 
                style={{
                  display: "inline-block",
                  backgroundColor: "transparent",
                  color: "#A67C52",
                  padding: "0.9rem 1.8rem",
                  fontSize: "1rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  borderRadius: "4px",
                  transition: "all 0.3s ease",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                  margin: "0.5rem",
                  border: "2px solid #A67C52",
                  position: "relative",
                  zIndex: 5,
                  cursor: "pointer"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#A67C52";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 7px 14px rgba(0, 0, 0, 0.15)";
                  e.currentTarget.style.color = "#ffffff";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.05)";
                  e.currentTarget.style.color = "#A67C52";
                }}
              >
                Browse Our Catalogues
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About; 