import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary text-primary py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Our Company</h1>
          <p className="text-xl max-w-3xl mx-auto">Learn about our journey, our mission, and the team behind our success.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-primary text-secondary py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="mb-4">Founded in 2010, our company began with a simple mission: to provide businesses with high-quality digital solutions that drive real results.</p>
              <p className="mb-4">What started as a small team of passionate developers has grown into a full-service digital agency with expertise across web development, design, and digital marketing.</p>
              <p>Over the years, we've had the privilege of working with clients across various industries, from startups to enterprise companies, helping them achieve their digital transformation goals.</p>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="aspect-video bg-secondary text-primary rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold">Company History Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="bg-secondary text-primary py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="mb-4">To empower businesses through innovative digital solutions that drive growth, enhance user experiences, and create lasting value.</p>
              <p>We're committed to staying at the forefront of technology while maintaining a focus on delivering measurable results for our clients.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Core Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <div>
                    <strong className="block mb-1">Innovation:</strong>
                    <p>We embrace new technologies and creative approaches to solve complex problems.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <div>
                    <strong className="block mb-1">Quality:</strong>
                    <p>We hold ourselves to the highest standards in everything we do.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <div>
                    <strong className="block mb-1">Collaboration:</strong>
                    <p>We work closely with our clients to ensure their vision is realized.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <div>
                    <strong className="block mb-1">Integrity:</strong>
                    <p>We operate with transparency and honesty in all our interactions.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-primary text-secondary py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: 'John Doe', title: 'CEO & Founder', image: 'team-member' },
              { name: 'Jane Smith', title: 'Creative Director', image: 'team-member' },
              { name: 'Michael Johnson', title: 'Lead Developer', image: 'team-member' },
              { name: 'Sarah Williams', title: 'UX Designer', image: 'team-member' },
              { name: 'Robert Brown', title: 'Marketing Specialist', image: 'team-member' },
              { name: 'Emily Davis', title: 'Project Manager', image: 'team-member' },
              { name: 'David Wilson', title: 'Full Stack Developer', image: 'team-member' },
              { name: 'Lisa Miller', title: 'Content Strategist', image: 'team-member' }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-secondary text-primary flex items-center justify-center">
                  <span className="text-xl font-bold">{member.image}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-secondary text-primary py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to work with us?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Let's discuss how our team can help you achieve your business goals.</p>
          <Link to="/contact" className="bg-primary text-secondary font-bold py-3 px-8 rounded-lg inline-block hover:bg-white transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About; 