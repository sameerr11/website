  <section className="main-services">
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