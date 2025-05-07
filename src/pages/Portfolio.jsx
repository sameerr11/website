import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary text-primary py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl max-w-3xl mx-auto">Showcasing our finest projects and material solutions across residential and commercial spaces.</p>
        </div>
      </section>

      {/* Portfolio Overview */}
      <section className="bg-primary text-secondary py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-6">Excellence in Every Project</h2>
              <p className="mb-4">At Stella Di Pietra, we take pride in our portfolio of successful projects across various sectors of the construction industry.</p>
              <p className="mb-4">From luxurious residential homes to large-scale commercial developments, our expertise in sourcing and delivering premium materials has contributed to the success of countless stunning spaces.</p>
              <p>Each project in our portfolio represents our unwavering commitment to quality, attention to detail, and our ability to bring architectural visions to life through exceptional materials.</p>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="aspect-video bg-secondary text-primary rounded-lg flex items-center justify-center shadow-lg overflow-hidden">
                <img src="/images/portfolio-overview.svg" alt="Portfolio Projects Overview" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="bg-secondary text-primary py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Project Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <img src="/images/luxury-residential.jpg" alt="Luxury Residential" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-secondary bg-opacity-20"></div>
              </div>
              <div className="p-6 text-secondary">
                <h3 className="font-bold text-xl mb-2">Luxury Residential</h3>
                <p className="text-gray-600 mb-4">Exquisite homes featuring premium materials that create spaces of unparalleled beauty and comfort.</p>
                <Link to="#residential" className="text-secondary font-semibold hover:underline">Explore Projects →</Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <img src="/images/commercial-projects.jpg" alt="Commercial Developments" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-secondary bg-opacity-20"></div>
              </div>
              <div className="p-6 text-secondary">
                <h3 className="font-bold text-xl mb-2">Commercial Developments</h3>
                <p className="text-gray-600 mb-4">Innovative commercial spaces where functionality meets sophisticated design through quality materials.</p>
                <Link to="#commercial" className="text-secondary font-semibold hover:underline">Explore Projects →</Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <img src="/images/renovation-projects.jpg" alt="Renovations & Restorations" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-secondary bg-opacity-20"></div>
              </div>
              <div className="p-6 text-secondary">
                <h3 className="font-bold text-xl mb-2">Renovations & Restorations</h3>
                <p className="text-gray-600 mb-4">Transformative renovation projects that breathe new life into spaces through carefully selected materials.</p>
                <Link to="#renovations" className="text-secondary font-semibold hover:underline">Explore Projects →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="bg-primary text-secondary py-20" id="residential">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Featured Case Studies</h2>
          
          {/* Luxury Villa Project */}
          <div className="flex flex-col md:flex-row items-center mb-20">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src="/images/luxury-villa.jpg" alt="Luxury Villa Project" className="w-full h-96 object-cover" />
                <div className="bg-white p-6 text-secondary">
                  <h4 className="font-bold text-xl mb-2">Coastal Luxury Villa</h4>
                  <p className="text-gray-600 mb-4">Private Residence | Completed 2023</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-primary bg-opacity-20 text-secondary text-sm px-3 py-1 rounded-full">Italian Marble</span>
                    <span className="bg-primary bg-opacity-20 text-secondary text-sm px-3 py-1 rounded-full">Custom Tiling</span>
                    <span className="bg-primary bg-opacity-20 text-secondary text-sm px-3 py-1 rounded-full">Premium Timber</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-2xl font-bold mb-4">Luxury Villa Project</h3>
              <p className="mb-4">This stunning coastal villa required materials that could withstand the harsh marine environment while delivering exceptional aesthetic appeal.</p>
              <p className="mb-4">Our team sourced rare Italian marble for the interior spaces, complemented by custom-designed ceramic tiles and premium hardwood timber for the outdoor decking areas.</p>
              <p className="mb-4">Key highlights of this project included:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Sourcing of rare Calacatta gold marble for master bathrooms</li>
                <li>Custom production of hand-painted ceramic tiles for kitchen backsplash</li>
                <li>Procurement of weather-resistant teak decking from sustainable sources</li>
                <li>Specialized glass installations for unobstructed ocean views</li>
                <li>Sound-dampening insulation materials for ultimate privacy</li>
              </ul>
              <p>The result is a breathtaking residence that perfectly balances luxury with durability, providing the homeowners with a space that will retain its beauty for generations.</p>
            </div>
          </div>
          
          {/* Commercial Office Complex */}
          <div className="flex flex-col md:flex-row items-center mb-20" id="commercial">
            <div className="md:w-1/2 order-2 md:order-1 md:pr-12">
              <h3 className="text-2xl font-bold mb-4">Modern Office Complex</h3>
              <p className="mb-4">This award-winning commercial development required materials that balanced aesthetics, sustainability, and practical considerations for a busy corporate environment.</p>
              <p className="mb-4">Working closely with the architects, we sourced and supplied a comprehensive package of materials that met the demanding specifications while staying within budget constraints.</p>
              <p className="mb-4">The project highlights included:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Acoustic ceiling panels that reduced noise while enhancing the space's aesthetics</li>
                <li>Specialized flooring materials balancing durability with comfort for high-traffic areas</li>
                <li>Energy-efficient glass façade with thermal regulation properties</li>
                <li>Custom stone cladding for statement walls and entrance areas</li>
                <li>Modular and flexible partition materials for adaptable office layouts</li>
              </ul>
              <p>The completed complex has set a new standard for commercial developments in the region, combining functionality with striking design elements.</p>
            </div>
            <div className="md:w-1/2 mb-10 md:mb-0 order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src="/images/office-complex.jpg" alt="Modern Office Complex" className="w-full h-96 object-cover" />
                <div className="bg-white p-6 text-secondary">
                  <h4 className="font-bold text-xl mb-2">Fusion Commercial Center</h4>
                  <p className="text-gray-600 mb-4">Corporate Headquarters | Completed 2022</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-primary bg-opacity-20 text-secondary text-sm px-3 py-1 rounded-full">Acoustic Panels</span>
                    <span className="bg-primary bg-opacity-20 text-secondary text-sm px-3 py-1 rounded-full">Smart Glass</span>
                    <span className="bg-primary bg-opacity-20 text-secondary text-sm px-3 py-1 rounded-full">Stone Cladding</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Heritage Restoration */}
          <div className="flex flex-col md:flex-row items-center" id="renovations">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src="/images/heritage-restoration.jpg" alt="Heritage Building Restoration" className="w-full h-96 object-cover" />
                <div className="bg-white p-6 text-secondary">
                  <h4 className="font-bold text-xl mb-2">Victoria Heritage Building</h4>
                  <p className="text-gray-600 mb-4">Historical Restoration | Completed 2021</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-primary bg-opacity-20 text-secondary text-sm px-3 py-1 rounded-full">Reclaimed Materials</span>
                    <span className="bg-primary bg-opacity-20 text-secondary text-sm px-3 py-1 rounded-full">Period Matching</span>
                    <span className="bg-primary bg-opacity-20 text-secondary text-sm px-3 py-1 rounded-full">Heritage Techniques</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-2xl font-bold mb-4">Heritage Building Restoration</h3>
              <p className="mb-4">This challenging restoration project involved sourcing materials that would preserve the historical integrity of a 19th-century building while implementing modern safety standards.</p>
              <p className="mb-4">Our team worked with heritage conservation experts to identify and source authentic period materials, or create faithful modern reproductions where original materials were unavailable.</p>
              <p className="mb-4">Notable achievements in this project included:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Sourcing reclaimed timber from buildings of the same era for authentic flooring</li>
                <li>Reproducing decorative plasterwork using traditional techniques and materials</li>
                <li>Finding rare matching bricks from historical suppliers for façade repairs</li>
                <li>Implementing modern insulation and safety materials discretely without compromising authenticity</li>
                <li>Recreating period-specific paint colors using natural pigments</li>
              </ul>
              <p>The restored building now stands as a testament to historical preservation while functioning as a modern, usable space that will endure for another century.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary text-primary py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Client Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                quote: "Stella Di Pietra exceeded our expectations with their ability to source exactly the materials we envisioned. Their attention to detail transformed our home renovation.",
                author: "Sophia Anderson",
                role: "Residential Client",
                project: "Luxury Villa Project"
              },
              { 
                quote: "Working with the team on our office complex was seamless. Their expertise in commercial materials and ability to meet our tight deadlines was impressive.",
                author: "Michael Reynolds",
                role: "Project Director",
                project: "Fusion Commercial Center"
              },
              { 
                quote: "The care and precision taken in finding authentic materials for our heritage building restoration was remarkable. True craftsmanship and dedication.",
                author: "Victoria Heritage Trust",
                role: "Conservation Committee",
                project: "Heritage Restoration"
              },
              { 
                quote: "From selection to delivery, the quality of materials and professionalism of service was unmatched. Our boutique hotel renovation would not have been possible without them.",
                author: "James Patterson",
                role: "Hotel Manager",
                project: "Boutique Hotel Renovation"
              },
              { 
                quote: "Their ability to source rare marble at a competitive price point saved our project budget while delivering on the luxury aesthetic we required.",
                author: "Elizabeth Morales",
                role: "Interior Designer",
                project: "Penthouse Redesign"
              },
              { 
                quote: "The technical knowledge of their team regarding materials suitable for our coastal property was invaluable. Five years later, everything still looks perfect.",
                author: "Robert Chen",
                role: "Property Developer",
                project: "Seaside Residence"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-secondary">
                <svg className="w-8 h-8 text-primary opacity-30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="mb-4 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                    <span className="text-secondary font-bold text-sm">{testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.project}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="bg-primary text-secondary py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Project Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "35+", label: "Countries Sourced From" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "10K+", label: "Tons of Materials Delivered" }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-8 text-center shadow-lg">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-secondary">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-secondary text-primary py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Contact us today to discuss how we can source the perfect materials for your next construction or renovation project.</p>
          <Link to="/contact" className="inline-block bg-primary text-secondary font-bold rounded-xl text-xl btn">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio; 