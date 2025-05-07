import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary text-primary py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Stella Di Pietra</h1>
          <p className="text-xl max-w-3xl mx-auto">Premium construction solutions for residential and commercial projects.</p>
        </div>
      </section>

      {/* About Us Main */}
      <section className="bg-primary text-secondary py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="mb-4">Stella Di Pietra is a leading provider of end-to-end construction solutions, specialising in sourcing, supplying, and delivering premium materials for residential and commercial projects.</p>
              <p className="mb-4">We offer a comprehensive one-package solution for builders, developers, designers, and homeowners. From material selection to quality checks and timely delivery, we ensure every product meets the highest standards.</p>
              <p>We manage the entire supply chain, including importing, quality control, logistics, and delivery to your preferred location.</p>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="aspect-video bg-secondary text-primary rounded-lg flex items-center justify-center shadow-lg overflow-hidden">
                <img src="/images/construction-materials.svg" alt="Premium Construction Materials" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-secondary text-primary py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Premium Materials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Tiles & Ceramics', icon: '/images/tile-icon.svg' },
              { name: 'Natural Stone', icon: '/images/stone-icon.svg' },
              { name: 'Bathroom Ware', icon: '/images/bathroom-icon.svg' },
              { name: 'Timber Products', icon: '/images/timber-icon.svg' },
              { name: 'Windows & Glass', icon: '/images/glass-icon.svg' },
              { name: 'Designer Furniture', icon: '/images/furniture-icon.svg' }
            ].map((material, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-6 text-secondary">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src={material.icon} alt={material.name} className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{material.name}</h3>
                <p className="text-center text-gray-600">Premium quality products sourced from trusted suppliers worldwide.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-primary text-secondary py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-secondary text-primary p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="mb-4">To offer seamless, high-quality construction material solutions, delivering products efficiently while maintaining the highest standards of service.</p>
              <div className="w-24 h-1 bg-primary mt-6"></div>
            </div>
            <div className="bg-secondary text-primary p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="mb-4">To be the leading global supplier of construction materials, providing end-to-end solutions for all your building needs.</p>
              <div className="w-24 h-1 bg-primary mt-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Chain */}
      <section className="bg-secondary text-primary py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our End-to-End Process</h2>
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="md:w-1/5 flex flex-col items-center text-center mb-10 md:mb-0">
              <div className="w-28 h-28 bg-primary text-secondary rounded-full flex items-center justify-center mb-6 shadow-lg border-4 border-white relative transition-all duration-300 hover:shadow-xl hover:scale-105">
                <span className="text-4xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Material Selection</h3>
              <p>Expert guidance on choosing the right materials</p>
            </div>
            <div className="hidden md:flex w-auto flex-grow items-center justify-center">
              <div className="h-2 bg-primary opacity-40 w-full rounded-full mx-4"></div>
            </div>
            <div className="md:w-1/5 flex flex-col items-center text-center mb-10 md:mb-0">
              <div className="w-28 h-28 bg-primary text-secondary rounded-full flex items-center justify-center mb-6 shadow-lg border-4 border-white relative transition-all duration-300 hover:shadow-xl hover:scale-105">
                <span className="text-4xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Sourcing</h3>
              <p>From our global network of trusted suppliers</p>
            </div>
            <div className="hidden md:flex w-auto flex-grow items-center justify-center">
              <div className="h-2 bg-primary opacity-40 w-full rounded-full mx-4"></div>
            </div>
            <div className="md:w-1/5 flex flex-col items-center text-center mb-10 md:mb-0">
              <div className="w-28 h-28 bg-primary text-secondary rounded-full flex items-center justify-center mb-6 shadow-lg border-4 border-white relative transition-all duration-300 hover:shadow-xl hover:scale-105">
                <span className="text-4xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Control</h3>
              <p>Rigorous inspection to ensure premium quality</p>
            </div>
            <div className="hidden md:flex w-auto flex-grow items-center justify-center">
              <div className="h-2 bg-primary opacity-40 w-full rounded-full mx-4"></div>
            </div>
            <div className="md:w-1/5 flex flex-col items-center text-center">
              <div className="w-28 h-28 bg-primary text-secondary rounded-full flex items-center justify-center mb-6 shadow-lg border-4 border-white relative transition-all duration-300 hover:shadow-xl hover:scale-105">
                <span className="text-4xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Delivery</h3>
              <p>Timely delivery to your preferred location</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-secondary py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Let's discuss how our premium materials and end-to-end solutions can elevate your construction project.</p>
          <Link to="/contact" className="inline-block bg-secondary text-primary font-bold rounded-xl text-xl btn">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About; 