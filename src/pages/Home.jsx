import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary text-primary py-24 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#ECE7D0 1px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        </div>
        
        <div className="container relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Creative Solutions for <span className="text-white">Your Business</span>
              </h1>
              <p className="text-xl mb-8 max-w-3xl">
                We help companies achieve their goals with innovative strategies and cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-primary text-secondary font-bold py-3 px-6 rounded-lg text-center hover:bg-white transition-colors">
                  Get Started
                </Link>
                <Link to="/services" className="border-2 border-primary text-primary font-bold py-3 px-6 rounded-lg text-center hover:bg-primary hover:text-secondary transition-colors">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative z-10 overflow-hidden rounded-lg shadow-lg">
                <div className="aspect-video bg-primary rounded-lg flex items-center justify-center relative overflow-hidden transition-all hover:shadow-xl">
                  <div className="absolute inset-0 bg-secondary opacity-10"></div>
                  <div className="bg-white p-6 rounded-lg shadow-lg transform rotate-6 absolute -right-12 -bottom-12 w-32 h-32"></div>
                  <div className="bg-white p-6 rounded-lg shadow-lg transform -rotate-12 absolute -left-16 -top-16 w-32 h-32"></div>
                  <span className="text-secondary text-xl font-bold relative z-10">CREATIVE SOLUTIONS</span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 bg-white w-12 h-12 rounded-lg transform rotate-12"></div>
              <div className="absolute -top-6 -left-6 bg-white w-12 h-12 rounded-lg transform -rotate-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Clients/Trusted By */}
      <section className="bg-white py-12">
        <div className="container">
          <h2 className="text-2xl font-bold text-center text-secondary mb-8">Trusted By</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 mb-6">
            {['Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5'].map((client, index) => (
              <div key={index} className="flex items-center justify-center p-4">
                <div className="h-12 flex items-center justify-center">
                  <div className="w-24 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 font-semibold">{client}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-primary text-secondary py-20">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-secondary text-primary rounded-full mb-4 font-medium">Our Services</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What We Offer</h2>
            <p className="max-w-3xl mx-auto text-lg">Comprehensive solutions tailored to meet your business needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Web Development', icon: '🖥️', description: 'Custom websites and web applications built with the latest technologies.' },
              { title: 'Mobile Development', icon: '📱', description: 'Native and cross-platform mobile applications for iOS and Android.' },
              { title: 'UI/UX Design', icon: '🎨', description: 'User-centered design that creates intuitive and engaging digital experiences.' },
              { title: 'Digital Marketing', icon: '📈', description: 'Strategic marketing campaigns to increase your online presence and conversions.' },
              { title: 'Brand Strategy', icon: '🚀', description: 'Comprehensive brand development and positioning for your business.' },
              { title: 'Consulting', icon: '💼', description: 'Expert advice on technology implementation and digital transformation.' }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105">
                <div className="bg-secondary text-primary w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="mb-4 text-gray-600">{service.description}</p>
                <Link to="/services" className="text-secondary font-bold hover:underline inline-flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-secondary text-primary rounded-full mb-4 font-medium">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">Our Unique Approach</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">What sets us apart from the competition</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: 'Innovative Solutions', icon: '💡', description: 'We stay ahead of industry trends to deliver cutting-edge solutions.' },
              { title: 'Customer Focus', icon: '👥', description: 'Your needs are our priority, and we tailor our services to match your goals.' },
              { title: 'Quality Assurance', icon: '✓', description: 'Rigorous testing ensures our deliverables meet the highest standards.' },
              { title: 'Ongoing Support', icon: '🛠️', description: 'We provide continuous support and maintenance after project completion.' }
            ].map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-secondary text-primary w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg mt-1">
                  <span className="text-xl">{feature.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-secondary">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Teaser */}
      <section className="bg-secondary text-primary py-20 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#ECE7D0 1px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        </div>
        
        <div className="container relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 order-2 md:order-1">
              <div className="relative">
                <div className="aspect-video bg-primary rounded-lg flex items-center justify-center overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-secondary opacity-10"></div>
                  <span className="text-secondary text-xl font-bold relative z-10">OUR STORY</span>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 bg-white w-12 h-12 rounded-lg transform rotate-12"></div>
                <div className="absolute -top-6 -left-6 bg-white w-12 h-12 rounded-lg transform -rotate-12"></div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
              <span className="inline-block px-4 py-2 bg-primary text-secondary rounded-full mb-4 font-medium">About Us</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Story</h2>
              <p className="text-xl mb-6">Founded in 2010, we've been helping businesses achieve digital success for over a decade.</p>
              <p className="mb-8">Our team of experts combines technical knowledge with creative thinking to deliver exceptional results for our clients.</p>
              <Link to="/about" className="border-2 border-primary text-primary font-bold py-3 px-6 rounded-lg inline-block hover:bg-primary hover:text-secondary transition-colors">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary py-20">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-secondary text-primary rounded-full mb-4 font-medium">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">What Our Clients Say</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">Hear from the businesses we've helped succeed</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'John Smith', position: 'CEO, TechCorp', quote: 'Working with this team transformed our digital presence. Their expertise and dedication exceeded our expectations.' },
              { name: 'Sarah Johnson', position: 'Marketing Director, Innovation Inc', quote: 'Their strategic approach to our marketing challenges delivered measurable results within months.' },
              { name: 'Michael Brown', position: 'Founder, StartUp Labs', quote: 'As a startup, we needed a partner who understood our vision. They delivered a solution that helped us grow rapidly.' }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-4">
                  <svg className="h-8 w-8 text-secondary opacity-30" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="mb-6 text-gray-600">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary mr-3">
                    <span className="font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-secondary text-primary py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Contact us today to discuss how we can help bring your vision to life.</p>
          <Link to="/contact" className="bg-primary text-secondary font-bold py-3 px-8 rounded-lg inline-block hover:bg-white transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 