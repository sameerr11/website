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
            <span className="text-secondary font-bold text-xl">S</span>
          </div>
          <div>
            <span className="text-primary font-bold text-2xl tracking-wider">STELLA DI PIETRA</span>
          </div>
        </Link>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-primary font-medium transition-colors py-2 border-b-2 border-transparent hover:border-primary">Home</Link>
          <Link to="/about" className="text-primary font-medium transition-colors py-2 border-b-2 border-transparent hover:border-primary">About</Link>
          <Link to="/services" className="text-primary font-medium transition-colors py-2 border-b-2 border-transparent hover:border-primary">Services</Link>
          <Link to="/interior-design" className="text-primary font-medium transition-colors py-2 border-b-2 border-transparent hover:border-primary">Interior Design</Link>
          <Link to="/catalogues" className="text-primary font-medium transition-colors py-2 border-b-2 border-transparent hover:border-primary">Catalogues</Link>
          <Link to="/portfolio" className="text-primary font-medium transition-colors py-2 border-b-2 border-transparent hover:border-primary">Portfolio</Link>
          <Link to="/contact" className="bg-primary text-secondary font-bold rounded-lg transition-all btn">Contact</Link>
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
              <Link to="/" className="text-primary font-medium transition-colors py-2 px-4 rounded-lg hover:bg-secondary-dark">Home</Link>
              <Link to="/about" className="text-primary font-medium transition-colors py-2 px-4 rounded-lg hover:bg-secondary-dark">About</Link>
              <Link to="/services" className="text-primary font-medium transition-colors py-2 px-4 rounded-lg hover:bg-secondary-dark">Services</Link>
              <Link to="/interior-design" className="text-primary font-medium transition-colors py-2 px-4 rounded-lg hover:bg-secondary-dark">Interior Design</Link>
              <Link to="/catalogues" className="text-primary font-medium transition-colors py-2 px-4 rounded-lg hover:bg-secondary-dark">Catalogues</Link>
              <Link to="/portfolio" className="text-primary font-medium transition-colors py-2 px-4 rounded-lg hover:bg-secondary-dark">Portfolio</Link>
              <Link to="/contact" className="bg-primary text-secondary font-bold text-center rounded-lg btn">Contact</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 