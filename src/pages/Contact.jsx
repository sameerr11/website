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
      <section className="bg-primary text-secondary py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* Form Side */}
                <div className="lg:w-2/3 p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-8 text-secondary">Send us a Message</h2>
                  
                  {submitted ? (
                    <div className="bg-secondary bg-opacity-10 p-8 rounded-xl border border-secondary border-opacity-20">
                      <div className="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-secondary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <h3 className="text-2xl font-bold mb-4 text-secondary">Thank You!</h3>
                        <p className="mb-6 text-gray-600">Your message has been received. We'll get back to you as soon as possible.</p>
                        <button 
                          className="bg-secondary text-primary font-medium py-3 px-8 rounded-lg hover:bg-secondary/90 transition-all"
                          onClick={() => setSubmitted(false)}
                        >
                          Send Another Message
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="form-group">
                          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-3 bg-gray-50 border-b-2 border-gray-200 focus:border-secondary transition-all outline-none text-secondary"
                            placeholder="Your name"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 bg-gray-50 border-b-2 border-gray-200 focus:border-secondary transition-all outline-none text-secondary"
                            placeholder="Your email address"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="form-group">
                          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-600">Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-3 bg-gray-50 border-b-2 border-gray-200 focus:border-secondary transition-all outline-none text-secondary"
                            placeholder="Your phone number"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-600">Subject</label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full p-3 bg-gray-50 border-b-2 border-gray-200 focus:border-secondary transition-all outline-none text-secondary"
                            placeholder="Subject of your message"
                          />
                        </div>
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="projectType" className="block mb-2 text-sm font-medium text-gray-600">Project Type</label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full p-3 bg-gray-50 border-b-2 border-gray-200 focus:border-secondary transition-all outline-none text-secondary appearance-none"
                          style={{ backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%2353565C\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"6 9 12 15 18 9\"></polyline></svg>')", backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center", backgroundSize: "1em" }}
                        >
                          <option disabled>Select Project Type</option>
                          <option value="Luxury Residential">Luxury Residential</option>
                          <option value="Commercial Development">Commercial Development</option>
                          <option value="Renovation">Renovation</option>
                          <option value="Heritage Restoration">Heritage Restoration</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-600">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full p-3 bg-gray-50 border-2 border-gray-200 focus:border-secondary rounded-lg transition-all outline-none text-secondary resize-none"
                          placeholder="Tell us about your project and material requirements..."
                        ></textarea>
                      </div>
                      
                      <div className="mt-8">
                        <button 
                          type="submit"
                          className="inline-block bg-secondary text-primary font-medium py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
                        >
                          Send Message
                        </button>
                      </div>
                    </form>
                  )}
                </div>
                
                {/* Contact Info Side */}
                <div className="lg:w-1/3 bg-secondary p-8 md:p-12 text-primary">
                  <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                  
                  <div className="space-y-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Office Location</h3>
                        <p className="opacity-90">1234 Business Avenue</p>
                        <p className="opacity-90">City, State 56789</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Contact Details</h3>
                        <p className="opacity-90">Phone: (123) 456-7890</p>
                        <p className="opacity-90">Email: info@stelladipietra.com</p>
                        <p className="opacity-90">Support: support@stelladipietra.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Business Hours</h3>
                        <p className="opacity-90">Monday - Friday: 9am - 6pm</p>
                        <p className="opacity-90">Saturday - Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="bg-white text-secondary py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Find Us</h2>
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video bg-gray-100 rounded-xl shadow-lg flex items-center justify-center overflow-hidden">
              <span className="text-xl font-medium text-gray-500">Map will be displayed here</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 