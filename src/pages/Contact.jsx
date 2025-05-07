import { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    projectType: 'Select Project Type'
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // In a real app, you would send this data to your server
  };
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary text-primary py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">We'd love to hear from you. Reach out to us with any questions or inquiries about our premium construction materials and services.</p>
        </div>
      </section>
      
      {/* Contact Form & Info */}
      <section className="bg-white text-secondary py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              
              {submitted ? (
                <div className="bg-secondary text-primary p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                  <p className="mb-4">Your message has been received. We'll get back to you as soon as possible.</p>
                  <button 
                    className="bg-primary text-secondary font-bold py-2 px-6 rounded-lg hover:bg-white transition-colors"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium text-lg text-gray-600">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-4 text-lg border-b-2 border-gray-300 focus:border-secondary focus:outline-none bg-gray-50 rounded-t-lg shadow-sm transition-all duration-200 hover:bg-gray-100"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium text-lg text-gray-600">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-4 text-lg border-b-2 border-gray-300 focus:border-secondary focus:outline-none bg-gray-50 rounded-t-lg shadow-sm transition-all duration-200 hover:bg-gray-100"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="phone" className="block mb-2 font-medium text-lg text-gray-600">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-4 text-lg border-b-2 border-gray-300 focus:border-secondary focus:outline-none bg-gray-50 rounded-t-lg shadow-sm transition-all duration-200 hover:bg-gray-100"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block mb-2 font-medium text-lg text-gray-600">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full p-4 text-lg border-b-2 border-gray-300 focus:border-secondary focus:outline-none bg-gray-50 rounded-t-lg shadow-sm transition-all duration-200 hover:bg-gray-100"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="projectType" className="block mb-2 font-medium text-lg text-gray-600">Project Type</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full p-4 text-lg border-b-2 border-gray-300 focus:border-secondary focus:outline-none bg-gray-50 rounded-t-lg shadow-sm transition-all duration-200 hover:bg-gray-100 appearance-none cursor-pointer"
                    >
                      <option disabled>Select Project Type</option>
                      <option value="Luxury Residential">Luxury Residential</option>
                      <option value="Commercial Development">Commercial Development</option>
                      <option value="Renovation">Renovation</option>
                      <option value="Heritage Restoration">Heritage Restoration</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium text-lg text-gray-600">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full p-4 text-lg border-b-2 border-gray-300 focus:border-secondary focus:outline-none bg-gray-50 rounded-t-lg shadow-sm transition-all duration-200 resize-vertical hover:bg-gray-100"
                      placeholder="Tell us about your project and material requirements..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="bg-secondary text-primary font-bold py-4 px-10 rounded-full hover:bg-gray-700 transition-all duration-300 text-lg mt-6 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
            
            {/* Contact Info */}
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              
              <div className="bg-primary p-8 rounded-lg shadow-md">
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2">Office Location</h3>
                  <p className="mb-1">1234 Business Avenue</p>
                  <p>City, State 56789</p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2">Contact Details</h3>
                  <p className="mb-1">Phone: (123) 456-7890</p>
                  <p className="mb-1">Email: info@stelladipietra.com</p>
                  <p>Support: support@stelladipietra.com</p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                  <p className="mb-1">Monday - Friday: 9am - 6pm</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="bg-primary text-secondary py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Find Us</h2>
          <div className="aspect-video bg-secondary text-primary rounded-lg flex items-center justify-center">
            <span className="text-xl font-bold">Map will be displayed here</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;