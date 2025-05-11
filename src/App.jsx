import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import './App.css'

// Import components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Import pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Catalogues from './pages/Catalogues'
import Contact from './pages/Contact'
import InteriorDesign from './pages/InteriorDesign'
import { initCursorTrail } from './utils/cursorTrail'
import { initScrollReveal } from './utils/scrollReveal'
import { initParallaxEffect } from './utils/parallaxEffect'

// Animated page wrapper component
const PageTransition = ({ children }) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

// AnimatedRoutes component to handle route transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  
  // Initialize scroll reveal and parallax on route change
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    
    // Small delay to ensure DOM is updated
    const timer = setTimeout(() => {
      initScrollReveal();
      initParallaxEffect();
    }, 300);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Home />
          </PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition>
            <About />
          </PageTransition>
        } />
        <Route path="/services" element={
          <PageTransition>
            <Services />
          </PageTransition>
        } />
        <Route path="/portfolio" element={
          <PageTransition>
            <Portfolio />
          </PageTransition>
        } />
        <Route path="/catalogues" element={
          <PageTransition>
            <Catalogues />
          </PageTransition>
        } />
        <Route path="/contact" element={
          <PageTransition>
            <Contact />
          </PageTransition>
        } />
        <Route path="/interior-design" element={
          <PageTransition>
            <InteriorDesign />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  // Initialize effects
  useEffect(() => {
    const cursorCleanup = initCursorTrail();
    const scrollCleanup = initScrollReveal();
    const parallaxCleanup = initParallaxEffect();
    
    return () => {
      if (cursorCleanup) cursorCleanup();
      if (scrollCleanup) scrollCleanup();
      if (parallaxCleanup) parallaxCleanup();
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="content">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
