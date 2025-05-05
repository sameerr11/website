import { Link } from 'react-router-dom';

const Catalogues = () => {
  // Sample catalogue data
  const catalogueData = [
    {
      id: 1,
      title: "Summer Collection 2025",
      description: "Explore our latest summer designs and innovations.",
      image: "summer",
      category: "Seasonal"
    },
    {
      id: 2,
      title: "Premium Solutions",
      description: "High-end products designed for enterprise clients.",
      image: "premium",
      category: "Enterprise"
    },
    {
      id: 3,
      title: "Budget-Friendly Options",
      description: "Cost-effective solutions without compromising quality.",
      image: "budget",
      category: "Value"
    },
    {
      id: 4,
      title: "Industry Specific",
      description: "Specialized solutions for healthcare, finance, and education.",
      image: "industry",
      category: "Specialized"
    },
    {
      id: 5,
      title: "Sustainable Products",
      description: "Eco-friendly options for environmentally conscious clients.",
      image: "eco",
      category: "Sustainable"
    },
    {
      id: 6,
      title: "Trending Technologies",
      description: "Stay ahead with our cutting-edge tech solutions.",
      image: "tech",
      category: "Innovation"
    },
    {
      id: 7,
      title: "Custom Solutions",
      description: "Tailored products designed for your specific needs.",
      image: "custom",
      category: "Custom"
    },
    {
      id: 8,
      title: "Limited Edition",
      description: "Exclusive products available for a limited time only.",
      image: "limited",
      category: "Exclusive"
    }
  ];

  // Categories for filtering
  const categories = ["All", "Seasonal", "Enterprise", "Value", "Specialized", "Sustainable", "Innovation", "Custom", "Exclusive"];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary text-primary py-20 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#ECE7D0 1px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        </div>
        <div className="container relative text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Product Catalogues</h1>
          <p className="text-xl max-w-3xl mx-auto">Browse our comprehensive collection of products and solutions.</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All" 
                    ? "bg-secondary text-primary" 
                    : "bg-gray-100 text-secondary hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogues Grid */}
      <section className="bg-primary py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catalogueData.map((catalogue) => (
              <div 
                key={catalogue.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="aspect-video bg-secondary text-primary flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-secondary opacity-30"></div>
                  <span className="text-xl font-bold relative z-10">{catalogue.image.toUpperCase()}</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-secondary">{catalogue.title}</h3>
                    <span className="bg-secondary text-primary text-xs px-2 py-1 rounded-full">
                      {catalogue.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">{catalogue.description}</p>
                  <div className="flex justify-between items-center">
                    <Link 
                      to={`/catalogues/${catalogue.id}`} 
                      className="text-secondary font-bold hover:underline inline-flex items-center"
                    >
                      View Catalogue
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                    <button className="text-secondary hover:text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Complete Catalogue */}
      <section className="bg-secondary text-primary py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Download Our Complete Catalogue</h2>
          <p className="max-w-3xl mx-auto mb-8">Get access to our full range of products and detailed specifications in one comprehensive document.</p>
          <button className="bg-primary text-secondary font-bold py-3 px-8 rounded-lg inline-flex items-center hover:bg-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download PDF Catalogue
          </button>
        </div>
      </section>

      {/* Request Custom Catalogue */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="bg-primary rounded-lg p-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-secondary mb-4">Need a Custom Catalogue?</h2>
                <p className="text-gray-600 mb-6">We can create a personalized catalogue tailored to your industry and specific requirements.</p>
                <Link to="/contact" className="bg-secondary text-primary font-bold py-2 px-6 rounded-lg inline-block hover:bg-gray-700 transition-colors">
                  Request a Custom Catalogue
                </Link>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-full max-w-xs aspect-square bg-secondary rounded-full opacity-10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-secondary opacity-50"></div>
                  <div className="z-10 transform -rotate-12">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalogues; 