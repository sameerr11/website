import React from 'react';
import { Link } from 'react-router-dom';

const InteriorDesign = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary text-primary py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Interior Planning Services</h1>
          <p className="text-xl max-w-3xl mx-auto">Expert solutions to elevate the design and functionality of your space, delivered with exceptional attention to detail.</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-primary text-secondary py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-6">Expert Interior Planning</h2>
              <p className="mb-4">At Stella Di Pietra, we offer expert interior planning services to elevate the design and functionality of your space. Our team works closely with one of Dubai's leading interior designers, ensuring that your vision is brought to life with exceptional attention to detail and innovative solutions.</p>
              <p className="mb-4">Our interior planning services encompass every element of your space, from layout optimization to the final selection of materials, furniture, and finishes. Whether you're renovating a home, designing a commercial space, or working on a large-scale development, we tailor our approach to meet your specific needs.</p>
              <p>With the expertise of a world-renowned interior designer and our seamless coordination, Stella Di Pietra ensures that every design detail aligns with your vision, delivering a sophisticated and functional space that exceeds your expectations.</p>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="aspect-video bg-secondary text-primary rounded-lg flex items-center justify-center shadow-lg overflow-hidden">
                <div className="text-center p-8 relative z-10">
                  <h3 className="text-3xl font-bold mb-4">INTERIOR PLANNING</h3>
                  <div className="w-16 h-1 bg-primary mx-auto mb-4"></div>
                  <p className="text-xl">Elevating spaces through expert design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-secondary text-primary py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Interior Planning Services</h2>
          
          {/* Space Planning */}
          <div className="flex flex-col md:flex-row items-center mb-20">
            <div className="md:w-1/2 order-2 md:order-1 md:pr-12">
              <h3 className="text-2xl font-bold mb-4">Space Planning</h3>
              <p className="mb-4">We optimize your space layout to maximize functionality, flow, and aesthetics, ensuring that every area is used efficiently and comfortably.</p>
              <p className="mb-4">Our comprehensive approach to space planning considers how you use your space, traffic patterns, furniture placement, and the overall visual balance of the room.</p>
              <p className="mb-4">Through detailed analysis and expert knowledge, we create layouts that not only look beautiful but enhance your daily experience within the space.</p>
              <p className="mb-4">Our Space Planning Process includes:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Thorough assessment of spatial requirements and constraints</li>
                <li>Optimization of traffic flow and functional zones</li>
                <li>Strategic furniture placement for both aesthetics and practicality</li>
                <li>Consideration of natural light and architectural features</li>
                <li>Accessibility planning for inclusive design</li>
                <li>Balance between open space and functional areas</li>
              </ul>
            </div>
            <div className="md:w-1/2 mb-10 md:mb-0 order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="h-64 bg-primary flex items-center justify-center">
                  <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-primary text-2xl font-bold">01</span>
                  </div>
                </div>
                <div className="bg-white p-6 text-secondary">
                  <h4 className="font-bold text-xl mb-2">Optimal Layout</h4>
                  <p>Creating functional and beautiful spaces that enhance your daily experience.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Design Concept Development */}
          <div className="flex flex-col md:flex-row items-center mb-20">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="h-64 bg-primary flex items-center justify-center">
                  <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-primary text-2xl font-bold">02</span>
                  </div>
                </div>
                <div className="bg-white p-6 text-secondary">
                  <h4 className="font-bold text-xl mb-2">Custom Concepts</h4>
                  <p>Personalized design concepts that reflect your unique style and meet your practical needs.</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-2xl font-bold mb-4">Design Concept Development</h3>
              <p className="mb-4">We create custom design concepts that reflect your personal style while meeting your practical needs.</p>
              <p className="mb-4">Our design concepts are developed through a collaborative process, taking into account your preferences, lifestyle, and the architectural context of your space.</p>
              <p className="mb-4">Each concept is presented with detailed visuals and explanations, allowing you to fully understand and provide feedback on the proposed design direction.</p>
              <p className="mb-4">Our Design Development Process includes:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>In-depth consultation to understand your aesthetic preferences</li>
                <li>Research and inspiration gathering tailored to your style</li>
                <li>Development of cohesive design themes and concepts</li>
                <li>Mood boards and visual presentations</li>
                <li>3D visualizations to help you envision the final result</li>
                <li>Iterative refinement based on your feedback</li>
              </ul>
            </div>
          </div>
          
          {/* Material Selection */}
          <div className="flex flex-col md:flex-row items-center mb-20">
            <div className="md:w-1/2 order-2 md:order-1 md:pr-12">
              <h3 className="text-2xl font-bold mb-4">Material Selection</h3>
              <p className="mb-4">We assist in selecting the finest materials such as marble, granite, tiles, and other finishes, integrating them into your design vision for a cohesive look.</p>
              <p className="mb-4">Our extensive knowledge of materials and finishes allows us to recommend options that not only look beautiful but offer the right level of durability and maintenance for your lifestyle.</p>
              <p className="mb-4">We carefully coordinate all materials to ensure visual harmony throughout your space, creating a sophisticated and unified design.</p>
              <p className="mb-4">Our Material Selection Process includes:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Selection of premium materials from trusted suppliers</li>
                <li>Expert advice on durability, maintenance, and suitability</li>
                <li>Coordination of textures, colors, and patterns</li>
                <li>Sustainable and eco-friendly material options</li>
                <li>Material sampling and visualization</li>
                <li>Budget optimization without compromising quality</li>
              </ul>
            </div>
            <div className="md:w-1/2 mb-10 md:mb-0 order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="h-64 bg-primary flex items-center justify-center">
                  <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-primary text-2xl font-bold">03</span>
                  </div>
                </div>
                <div className="bg-white p-6 text-secondary">
                  <h4 className="font-bold text-xl mb-2">Premium Materials</h4>
                  <p>Selecting the finest materials that balance beauty, durability, and functionality.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Lighting & Color Schemes */}
          <div className="flex flex-col md:flex-row items-center mb-20">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="h-64 bg-primary flex items-center justify-center">
                  <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-primary text-2xl font-bold">04</span>
                  </div>
                </div>
                <div className="bg-white p-6 text-secondary">
                  <h4 className="font-bold text-xl mb-2">Lighting & Color</h4>
                  <p>Creating the perfect ambiance through expertly designed lighting and color schemes.</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-2xl font-bold mb-4">Lighting & Color Schemes</h3>
              <p className="mb-4">We design lighting plans and choose color palettes that set the right mood and enhance the beauty of your space.</p>
              <p className="mb-4">Lighting and color are powerful tools in interior design, affecting not only the appearance of your space but also its functionality and the emotional response it evokes.</p>
              <p className="mb-4">Our expertise in these areas ensures that your space is properly illuminated for all activities while creating the desired atmosphere through thoughtful color selection.</p>
              <p className="mb-4">Our Lighting & Color Process includes:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Comprehensive lighting plans for ambient, task, and accent lighting</li>
                <li>Selection of fixtures that complement your design style</li>
                <li>Energy-efficient lighting solutions</li>
                <li>Custom color schemes tailored to your preferences</li>
                <li>Color psychology considerations for different spaces</li>
                <li>Coordination of paint, fabrics, and finishes for visual harmony</li>
              </ul>
            </div>
          </div>
          
          {/* Bespoke Furniture & Joinery Design */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 order-2 md:order-1 md:pr-12">
              <h3 className="text-2xl font-bold mb-4">Bespoke Furniture & Joinery Design</h3>
              <p className="mb-4">We offer custom furniture and joinery solutions, ensuring they perfectly fit your space and style.</p>
              <p className="mb-4">Bespoke furniture and joinery allow for perfect integration with your space, addressing specific requirements that off-the-shelf products cannot meet.</p>
              <p className="mb-4">Our designs are developed with attention to both aesthetics and functionality, resulting in beautiful pieces that serve your needs perfectly.</p>
              <p className="mb-4">Our Bespoke Design Process includes:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Custom-designed furniture pieces tailored to your specifications</li>
                <li>Built-in storage solutions that maximize space efficiency</li>
                <li>Architectural joinery elements that enhance your interior</li>
                <li>Selection of high-quality materials and finishes</li>
                <li>Detailed technical drawings for precise fabrication</li>
                <li>Coordination with skilled craftsmen and manufacturers</li>
              </ul>
            </div>
            <div className="md:w-1/2 mb-10 md:mb-0 order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="h-64 bg-primary flex items-center justify-center">
                  <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-primary text-2xl font-bold">05</span>
                  </div>
                </div>
                <div className="bg-white p-6 text-secondary">
                  <h4 className="font-bold text-xl mb-2">Custom Solutions</h4>
                  <p>Bespoke furniture and joinery designed specifically for your unique space and requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-primary text-secondary py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Our Interior Planning Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Expert Design Team', 
                description: 'Work with Dubai\'s leading interior designers for exceptional results.',
              },
              { 
                title: 'Comprehensive Solutions', 
                description: 'End-to-end service from concept development to final implementation.',
              },
              { 
                title: 'Personalized Approach', 
                description: 'Custom solutions tailored to your specific needs and preferences.',
              },
              { 
                title: 'Quality Materials', 
                description: 'Access to premium materials that enhance the beauty and durability of your space.',
              },
              { 
                title: 'Attention to Detail', 
                description: 'Meticulous planning and execution for flawless results.',
              },
              { 
                title: 'Timely Delivery', 
                description: 'Projects completed efficiently without compromising on quality.',
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-secondary p-8 rounded-lg shadow-lg text-primary">
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p>{benefit.description}</p>
                <div className="w-12 h-1 bg-primary mt-6"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-secondary text-primary py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Contact us today to discuss your interior planning needs and discover how our expertise can elevate your project.</p>
          <Link to="/contact" className="bg-primary text-secondary font-bold py-4 px-10 rounded-xl inline-block hover:bg-white transition-all shadow-lg transform hover:scale-105 text-xl">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default InteriorDesign; 