import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary text-primary py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">End-to-end construction material solutions for your project needs.</p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-primary text-secondary py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-6">Comprehensive Solutions</h2>
              <p className="mb-4">At Stella Di Pietra, we provide a comprehensive range of services designed to make your construction material needs seamless and worry-free.</p>
              <p className="mb-4">From initial material selection to final delivery, our experienced team handles every aspect of the supply chain with precision and care, ensuring you receive only the highest quality products for your projects.</p>
              <p>We pride ourselves on attention to detail, industry expertise, and our commitment to exceeding client expectations with every delivery.</p>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="aspect-video bg-secondary text-primary rounded-lg flex items-center justify-center shadow-lg overflow-hidden">
                <img src="/images/services-overview.svg" alt="Construction Materials Services" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="bg-secondary text-primary py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Premium Services</h2>
          
          {/* Material Sourcing */}
          <div className="flex flex-col md:flex-row items-center mb-20">
            <div className="md:w-1/2 order-2 md:order-1 md:pr-12">
              <h3 className="text-2xl font-bold mb-4">Material Sourcing</h3>
              <p className="mb-4">We meticulously source premium construction materials from trusted suppliers worldwide, providing you with access to the finest quality products for your projects.</p>
              <p className="mb-4">Our global network of partners allows us to procure rare and specialized materials, ensuring you have exactly what your project demands, regardless of complexity or scale.</p>
              <p className="mb-4">We source a diverse range of materials including:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Premium tiles and ceramics from Italy and Spain</li>
                <li>Exquisite natural stone from quarries worldwide</li>
                <li>High-end bathroom fixtures and fittings</li>
                <li>Precision-engineered windows and glass</li>
                <li>Sustainably harvested timber products</li>
                <li>Designer furniture and architectural elements</li>
              </ul>
              <p>Our sourcing experts work closely with you to understand your specific requirements, budget constraints, and design vision to find the perfect materials for your project.</p>
            </div>
            <div className="md:w-1/2 mb-10 md:mb-0 order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="h-64 bg-primary flex items-center justify-center">
                  <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center">
                    <img src="/images/sourcing-icon.svg" alt="Material Sourcing" className="w-12 h-12" />
                  </div>
                </div>
                <div className="bg-white p-6 text-secondary">
                  <h4 className="font-bold text-xl mb-2">Global Network</h4>
                  <p>Access to premium materials from around the world, carefully selected to meet your exact specifications.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quality Control */}
          <div className="flex flex-col md:flex-row items-center mb-20">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="h-64 bg-primary flex items-center justify-center">
                  <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center">
                    <img src="/images/quality-icon.svg" alt="Quality Control" className="w-12 h-12" />
                  </div>
                </div>
                <div className="bg-white p-6 text-secondary">
                  <h4 className="font-bold text-xl mb-2">Rigorous Standards</h4>
                  <p>Comprehensive quality assurance processes to guarantee only the finest materials reach your project site.</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-2xl font-bold mb-4">Quality Control</h3>
              <p className="mb-4">We implement stringent quality control measures at every stage of the supply chain to ensure that all materials meet our exacting standards before reaching your project site.</p>
              <p className="mb-4">Our quality assurance process includes:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Pre-shipment inspections at supplier facilities</li>
                <li>Material testing for durability, strength, and performance</li>
                <li>Verification of authentic certification and documentation</li>
                <li>Quality grading according to international standards</li>
                <li>Thorough documentation of all quality checks</li>
                <li>Final inspection before delivery to clients</li>
              </ul>
              <p className="mb-4">Our dedicated quality control specialists work diligently to identify and resolve any issues before materials leave our facilities, ensuring you receive only premium products that will stand the test of time.</p>
              <p>With Stella Di Pietra, you can have absolute confidence in the quality and authenticity of every material we supply.</p>
            </div>
          </div>
          
          {/* Logistics & Importing */}
          <div className="flex flex-col md:flex-row items-center mb-20">
            <div className="md:w-1/2 order-2 md:order-1 md:pr-12">
              <h3 className="text-2xl font-bold mb-4">Logistics & Importing</h3>
              <p className="mb-4">We handle the entire importing process from start to finish, navigating complex international shipping regulations, customs clearance, and documentation to ensure smooth and timely delivery of your materials.</p>
              <p className="mb-4">Our logistics services include:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Efficient international shipping arrangements</li>
                <li>Customs clearance and documentation management</li>
                <li>Regulatory compliance and certification verification</li>
                <li>Secure warehousing and inventory management</li>
                <li>Careful handling of delicate and specialty materials</li>
                <li>Real-time tracking and status updates</li>
              </ul>
              <p className="mb-4">Our logistics team has extensive experience in managing complex international shipments of valuable and specialized construction materials.</p>
              <p>We take the stress out of importing, allowing you to focus on your project while we ensure your materials arrive safely and on schedule.</p>
            </div>
            <div className="md:w-1/2 mb-10 md:mb-0 order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="h-64 bg-primary flex items-center justify-center">
                  <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center">
                    <img src="/images/logistics-icon.svg" alt="Logistics & Importing" className="w-12 h-12" />
                  </div>
                </div>
                <div className="bg-white p-6 text-secondary">
                  <h4 className="font-bold text-xl mb-2">Seamless Process</h4>
                  <p>End-to-end management of importing logistics, from international shipping to final delivery coordination.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* On-Time Delivery */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="h-64 bg-primary flex items-center justify-center">
                  <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center">
                    <img src="/images/delivery-icon.svg" alt="On-Time Delivery" className="w-12 h-12" />
                  </div>
                </div>
                <div className="bg-white p-6 text-secondary">
                  <h4 className="font-bold text-xl mb-2">Reliable Delivery</h4>
                  <p>Punctual and dependable delivery service coordinated to align perfectly with your project schedule.</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-2xl font-bold mb-4">On-Time Delivery</h3>
              <p className="mb-4">We understand that project timelines are critical. Our reliable delivery service ensures your materials arrive exactly when you need them, preventing costly delays and keeping your project on schedule.</p>
              <p className="mb-4">Our delivery service advantages include:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Precise scheduling aligned with your project timeline</li>
                <li>Flexible delivery options to accommodate your needs</li>
                <li>Careful handling and appropriate transportation methods</li>
                <li>Professional installation support when required</li>
                <li>Complete documentation and delivery verification</li>
                <li>Post-delivery inspection and issue resolution</li>
              </ul>
              <p className="mb-4">We maintain close communication throughout the delivery process, providing you with updates and ensuring everything proceeds according to plan.</p>
              <p>Our commitment to on-time delivery is a cornerstone of our service, allowing you to plan with confidence and maintain smooth project progression.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-primary text-secondary py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'One-Stop Solution', 
                description: 'Comprehensive end-to-end service covering all aspects of construction material supply.',
                icon: 'solution-icon' 
              },
              { 
                title: 'Exceptional Quality', 
                description: 'Premium materials that meet rigorous quality standards for durability and performance.',
                icon: 'quality-badge-icon' 
              },
              { 
                title: 'Expert Guidance', 
                description: 'Professional advice and recommendations from industry specialists.',
                icon: 'expert-icon' 
              },
              { 
                title: 'Time Efficiency', 
                description: 'Streamlined processes that save you time and prevent project delays.',
                icon: 'efficiency-icon' 
              },
              { 
                title: 'Cost Effectiveness', 
                description: 'Competitive pricing and value optimization for your budget.',
                icon: 'cost-icon' 
              },
              { 
                title: 'Personalized Service', 
                description: 'Tailored approach to meet your unique project requirements.',
                icon: 'personalized-icon' 
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-6">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{benefit.title}</h3>
                <p className="text-center text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-secondary text-primary py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Contact us today to discuss your construction material needs and discover how our services can elevate your project.</p>
          <Link to="/contact" className="inline-block bg-primary text-secondary font-bold rounded-xl text-xl btn">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services; 