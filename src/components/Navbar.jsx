import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-secondary py-4 sticky top-0 z-50 shadow-md">
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          {/* Logo */}
          <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-secondary font-bold text-xl">C</span>
          </div>
          <div>
            <span className="text-primary font-bold text-2xl tracking-wider">COMPANY</span>
          </div>
        </Link>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-primary hover:text-white font-medium transition-colors py-2">Home</Link>
          <Link to="/about" className="text-primary hover:text-white font-medium transition-colors py-2">About</Link>
          <Link to="/services" className="text-primary hover:text-white font-medium transition-colors py-2">Services</Link>
          <Link to="/interior-design" className="text-primary hover:text-white font-medium transition-colors py-2">Interior Design</Link>
          <Link to="/catalogues" className="text-primary hover:text-white font-medium transition-colors py-2">Catalogues</Link>
          <Link to="/portfolio" className="text-primary hover:text-white font-medium transition-colors py-2">Portfolio</Link>
          <Link to="/contact" className="bg-primary text-secondary font-bold py-2 px-4 rounded-lg hover:bg-white transition-colors">Contact</Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-primary p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary border-t border-gray-700 mt-4 shadow-lg">
          <div className="container py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-primary hover:text-white font-medium transition-colors py-2 px-4 rounded-lg hover:bg-gray-700">Home</Link>
              <Link to="/about" className="text-primary hover:text-white font-medium transition-colors py-2 px-4 rounded-lg hover:bg-gray-700">About</Link>
              <Link to="/services" className="text-primary hover:text-white font-medium transition-colors py-2 px-4 rounded-lg hover:bg-gray-700">Services</Link>
              <Link to="/interior-design" className="text-primary hover:text-white font-medium transition-colors py-2 px-4 rounded-lg hover:bg-gray-700">Interior Design</Link>
              <Link to="/catalogues" className="text-primary hover:text-white font-medium transition-colors py-2 px-4 rounded-lg hover:bg-gray-700">Catalogues</Link>
              <Link to="/portfolio" className="text-primary hover:text-white font-medium transition-colors py-2 px-4 rounded-lg hover:bg-gray-700">Portfolio</Link>
              <Link to="/contact" className="bg-primary text-secondary font-bold py-2 px-4 rounded-lg hover:bg-white transition-colors text-center">Contact</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 