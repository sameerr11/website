import { Link } from 'react-router-dom';

const InteriorDesign = () => {
  // Sample design projects
  const designProjects = [
    {
      id: 1,
      title: "Modern Minimalist Office",
      description: "Clean lines and functional design for a productive workspace.",
      image: "office",
      category: "Commercial"
    },
    {
      id: 2,
      title: "Luxury Apartment Living",
      description: "Contemporary elegance for upscale residential spaces.",
      image: "apartment",
      category: "Residential"
    },
    {
      id: 3,
      title: "Boutique Retail Space",
      description: "Inviting and stylish environment to showcase products.",
      image: "retail",
      category: "Commercial"
    },
    {
      id: 4,
      title: "Cozy Home Renovation",
      description: "Warm and welcoming design that prioritizes comfort.",
      image: "home",
      category: "Residential"
    },
    {
      id: 5,
      title: "Sustainable Eco Office",
      description: "Green design with eco-friendly materials and energy efficiency.",
      image: "eco-office",
      category: "Commercial"
    },
    {
      id: 6,
      title: "Urban Loft Redesign",
      description: "Industrial chic aesthetics for city living.",
      image: "loft",
      category: "Residential"
    }
  ];

  // Design services
  const designServices = [
    {
      title: "Space Planning",
      description: "Optimize your layout for functionality and flow.",
      icon: "📐"
    },
    {
      title: "Color Consultation",
      description: "Select the perfect color palette to achieve your desired mood and style.",
      icon: "🎨"
    },
    {
      title: "Furniture Selection",
      description: "Find pieces that combine comfort, style, and durability.",
      icon: "🪑"
    },
    {
      title: "Material Specification",
      description: "Choose the right materials for flooring, countertops, and finishes.",
      icon: "✨"
    },
    {
      title: "Lighting Design",
      description: "Create the perfect ambiance with strategic lighting placement.",
      icon: "💡"
    },
    {
      title: "Sustainable Design",
      description: "Eco-friendly options that minimize environmental impact.",
      icon: "🌱"
    }
  ];

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
                Transform Your <span className="text-white">Space</span>
              </h1>
              <p className="text-xl mb-8 max-w-3xl">
                Expert interior design solutions for residential and commercial spaces that blend functionality, aesthetics, and your personal style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-primary text-secondary font-bold py-3 px-6 rounded-lg text-center hover:bg-white transition-colors">
                  Get a Consultation
                </Link>
                <a href="#projects" className="border-2 border-primary text-primary font-bold py-3 px-6 rounded-lg text-center hover:bg-primary hover:text-secondary transition-colors">
                  View Our Projects
                </a>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative z-10 overflow-hidden rounded-lg shadow-lg">
                <div className="aspect-video bg-primary rounded-lg flex items-center justify-center relative overflow-hidden transition-all hover:shadow-xl">
                  <div className="absolute inset-0 bg-secondary opacity-10"></div>
                  <div className="bg-white p-6 rounded-lg shadow-lg transform rotate-6 absolute -right-12 -bottom-12 w-32 h-32"></div>
                  <div className="bg-white p-6 rounded-lg shadow-lg transform -rotate-12 absolute -left-16 -top-16 w-32 h-32"></div>
                  <span className="text-secondary text-xl font-bold relative z-10">INTERIOR DESIGN</span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 bg-white w-12 h-12 rounded-lg transform rotate-12"></div>
              <div className="absolute -top-6 -left-6 bg-white w-12 h-12 rounded-lg transform -rotate-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-secondary text-primary rounded-full mb-4 font-medium">Our Approach</span>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">Design Philosophy</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">Creating spaces that reflect your identity and meet your needs</p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="aspect-square bg-primary rounded-lg flex items-center justify-center overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-secondary opacity-10"></div>
                  <span className="text-secondary text-xl font-bold relative z-10">DESIGN PROCESS</span>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 bg-secondary w-12 h-12 rounded-lg transform rotate-12"></div>
                <div className="absolute -top-6 -left-6 bg-secondary w-12 h-12 rounded-lg transform -rotate-12"></div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2 flex items-center">
                    <span className="bg-secondary text-primary w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
                    Discovery
                  </h3>
                  <p className="text-gray-600 ml-11">We begin by understanding your needs, preferences, lifestyle, and budget to establish the foundation of your design.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2 flex items-center">
                    <span className="bg-secondary text-primary w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
                    Concept Development
                  </h3>
                  <p className="text-gray-600 ml-11">Our designers create concepts that align with your vision, incorporating space planning, color schemes, and material selections.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2 flex items-center">
                    <span className="bg-secondary text-primary w-8 h-8 rounded-full flex items-center justify-center mr-3">3</span>
                    Design Refinement
                  </h3>
                  <p className="text-gray-600 ml-11">We refine the concept based on your feedback, adding detailed specifications and precise measurements.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2 flex items-center">
                    <span className="bg-secondary text-primary w-8 h-8 rounded-full flex items-center justify-center mr-3">4</span>
                    Implementation
                  </h3>
                  <p className="text-gray-600 ml-11">Our team coordinates with contractors and vendors to bring your design to life, ensuring quality execution.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Services */}
      <section className="bg-primary py-20">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-secondary text-primary rounded-full mb-4 font-medium">Our Expertise</span>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">Design Services</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">Comprehensive solutions for all your interior design needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105">
                <div className="bg-secondary text-primary w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-secondary">{service.title}</h3>
                <p className="mb-4 text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="bg-white py-20">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-secondary text-primary rounded-full mb-4 font-medium">Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">Featured Projects</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">A showcase of our finest interior design work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designProjects.map((project) => (
              <div 
                key={project.id} 
                className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="aspect-square bg-secondary text-primary flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-secondary opacity-30"></div>
                  <span className="text-xl font-bold relative z-10">{project.image.toUpperCase()}</span>
                </div>
                <div className="p-6 bg-white">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-secondary">{project.title}</h3>
                    <span className="bg-secondary text-primary text-xs px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link 
                    to={`/interior-design/${project.id}`} 
                    className="text-secondary font-bold hover:underline inline-flex items-center"
                  >
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary text-primary py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="max-w-3xl mx-auto">Hear from homeowners and businesses who have transformed their spaces</p>
          </div>

          <div className="max-w-4xl mx-auto bg-primary p-8 rounded-lg shadow-lg text-secondary">
            <div className="mb-6">
              <svg className="h-10 w-10 text-secondary opacity-30 mb-2" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-xl italic mb-4">The team transformed our outdated office into a modern, functional space that perfectly reflects our brand identity. The attention to detail and understanding of our needs exceeded our expectations.</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary mr-4">
                  <span className="font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-bold">James Davidson</h4>
                  <p className="text-sm text-gray-600">CEO, TechStart Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">Schedule a consultation with our design experts to start your interior design journey.</p>
          <Link to="/contact" className="bg-secondary text-primary font-bold py-3 px-8 rounded-lg inline-block hover:bg-gray-700 transition-colors">
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default InteriorDesign; 