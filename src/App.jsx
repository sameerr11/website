import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Catalogues from './pages/Catalogues';
import InteriorDesign from './pages/InteriorDesign';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="interior-design" element={<InteriorDesign />} />
          <Route path="catalogues" element={<Catalogues />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={
            <div className="container py-20 text-center">
              <h1 className="text-4xl font-bold mb-6">Page Not Found</h1>
              <p>The page you are looking for doesn't exist or has been moved.</p>
            </div>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
