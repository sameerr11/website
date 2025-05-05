import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
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
          <p className="text-xl max-w-3xl mx-auto">We'd love to hear from you. Reach out to us with any questions or inquiries.</p>
        </div>
      </section>
      
      {/* Contact Form & Info */}
      <section className="bg-primary text-secondary py-20">
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-bold">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 font-bold">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block mb-2 font-bold">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block mb-2 font-bold">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-bold">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="bg-secondary text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
            
            {/* Contact Info */}
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2">Office Location</h3>
                  <p className="mb-1">1234 Business Avenue</p>
                  <p>City, State 56789</p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2">Contact Details</h3>
                  <p className="mb-1">Phone: (123) 456-7890</p>
                  <p className="mb-1">Email: info@company.com</p>
                  <p>Support: support@company.com</p>
                </div>
                
                <div>
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
      <section className="bg-secondary text-primary py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Find Us</h2>
          <div className="aspect-video bg-primary text-secondary rounded-lg flex items-center justify-center">
            <span className="text-xl font-bold">Map will be displayed here</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 