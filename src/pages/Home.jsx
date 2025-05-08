import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-detailed-layer"></div>
        <div className="hero-content">
          <h1>Premium Construction Materials by Stella Di Pietra</h1>
          <p>Elevating architectural excellence with finest imported stone, marble, and building materials</p>
          <Link to="/catalogues" className="cta-button">Explore Our Collections</Link>
        </div>
      </section>

      <section className="featured-materials">
        <h2>Exquisite Materials</h2>
        <div className="materials-grid">
          <div className="material-card">
            <div className="material-image marble"></div>
            <h3>Luxury Marble</h3>
            <p>Premium Italian and Portuguese marble for sophisticated interiors</p>
          </div>
          <div className="material-card">
            <div className="material-image granite"></div>
            <h3>Natural Stone</h3>
            <p>Durable granite and limestone sourced from elite quarries worldwide</p>
          </div>
          <div className="material-card">
            <div className="material-image tile"></div>
            <h3>Designer Tiles</h3>
            <p>Artisanal ceramic and porcelain tiles for distinctive spaces</p>
          </div>
        </div>
        <div className="materials-cta">
          <Link to="/catalogues" className="text-link">View Full Material Catalogue →</Link>
        </div>
      </section>

      <section className="services-highlight">
        <div className="services-content">
          <h2>End-to-End Construction Solutions</h2>
          <ul className="services-list">
            <li>Expert material sourcing and consultation</li>
            <li>Rigorous quality control procedures</li>
            <li>Global logistics and importing expertise</li>
            <li>Reliable on-time delivery systems</li>
          </ul>
          <Link to="/services" className="secondary-button">Our Services</Link>
        </div>
      </section>

      <section className="projects-showcase">
        <h2>Featured Projects</h2>
        <div className="project-preview">
          <div className="project-card">
            <div className="project-image luxury-residential"></div>
            <h3>La Maison Elegante</h3>
            <p>Luxury residential project featuring custom marble flooring and stone facades</p>
          </div>
          <div className="project-card">
            <div className="project-image commercial-tower"></div>
            <h3>Meridian Tower</h3>
            <p>Premium commercial development with imported granite and limestone elements</p>
          </div>
        </div>
        <div className="projects-cta">
          <Link to="/portfolio" className="text-link">Explore Our Portfolio →</Link>
        </div>
      </section>

      <section className="cta-section">
        <h2>Elevate Your Construction Projects</h2>
        <p>Partner with Stella Di Pietra for unmatched quality and expertise</p>
        <Link to="/contact" className="primary-button">Contact Our Specialists</Link>
      </section>
    </div>
  );
}

export default Home; 