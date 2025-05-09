import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import { ZIndexProvider } from './hooks/useZIndex.jsx';

// Initialize AOS
AOS.init({
  duration: 1000,
  once: false,
  mirror: true
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ZIndexProvider>
      <App />
    </ZIndexProvider>
  </React.StrictMode>,
)
