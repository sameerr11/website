import React, { useEffect, useRef, useState } from 'react';
import { COMPANY_COORDINATES, COMPANY_NAME } from '../config';

function MapComponent({ address }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    let mapInstance = null;
    
    // Define event handlers at the top level of useEffect
    const handleKeyDown = (e) => {
      if (mapInstanceRef.current && (e.ctrlKey || e.metaKey)) {
        mapInstanceRef.current.scrollWheelZoom.enable();
      }
    };
    
    const handleKeyUp = (e) => {
      if (mapInstanceRef.current && (!e.ctrlKey && !e.metaKey)) {
        mapInstanceRef.current.scrollWheelZoom.disable();
      }
    };
    
    // Function to load Leaflet CSS
    const loadLeafletCSS = () => {
      if (document.querySelector('link[href*="leaflet.css"]')) return;
      
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
      link.crossOrigin = '';
      document.head.appendChild(link);
    };

    // Function to load Leaflet JS
    const loadLeafletJS = () => {
      return new Promise((resolve, reject) => {
        if (window.L) {
          resolve(window.L);
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
        script.crossOrigin = '';
        script.async = true;
        
        script.onload = () => resolve(window.L);
        script.onerror = (e) => reject(new Error('Failed to load Leaflet'));
        
        document.head.appendChild(script);
      });
    };

    // Function to initialize the map
    const initMap = async () => {
      if (!isMounted) return;
      
      try {
        setIsLoading(true);
        
        // Load Leaflet CSS
        loadLeafletCSS();
        
        // Load Leaflet JS
        const L = await loadLeafletJS();
        
        // Clean up any existing map instance
        if (mapInstanceRef.current) {
          mapInstanceRef.current.remove();
          mapInstanceRef.current = null;
        }
        
        // Safety check to ensure DOM node still exists
        if (!mapRef.current || !isMounted) return;
        
        // Clear any leftover leaflet content
        if (mapRef.current._leaflet_id) {
          mapRef.current._leaflet_id = null;
        }
        mapRef.current.innerHTML = '';
        
        // Create map
        mapInstance = L.map(mapRef.current, {
          scrollWheelZoom: false, // Disable scroll zoom by default
          zoomControl: false      // We'll add zoom control in a better position
        }).setView([COMPANY_COORDINATES.lat, COMPANY_COORDINATES.lng], 15);
        
        // Save reference to map instance
        mapInstanceRef.current = mapInstance;
        
        // Apply custom styles to match website theme
        // Add custom styles to map container
        mapRef.current.style.border = '1px solid #A67C52';
        
        // Add zoom control in a better position with custom styling
        const zoomControl = L.control.zoom({
          position: 'bottomright'
        }).addTo(mapInstance);
        
        // Add styling for zoom controls after they're added to the DOM
        setTimeout(() => {
          const zoomInButton = mapRef.current.querySelector('.leaflet-control-zoom-in');
          const zoomOutButton = mapRef.current.querySelector('.leaflet-control-zoom-out');
          
          if (zoomInButton && zoomOutButton) {
            // Style zoom controls
            [zoomInButton, zoomOutButton].forEach(button => {
              button.style.backgroundColor = '#f8f5eb';
              button.style.color = '#53565C';
              button.style.border = '1px solid #A67C52';
              button.style.width = '30px';
              button.style.height = '30px';
              button.style.lineHeight = '30px';
              button.style.fontSize = '18px';
              button.style.fontWeight = 'bold';
              
              // Add hover effects
              button.addEventListener('mouseover', () => {
                button.style.backgroundColor = '#A67C52';
                button.style.color = '#fff';
              });
              
              button.addEventListener('mouseout', () => {
                button.style.backgroundColor = '#f8f5eb';
                button.style.color = '#53565C';
              });
            });
          }
        }, 100);
        
        // Use a more elegant map style (CartoDB Voyager)
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: 'abcd',
          maxZoom: 20
        }).addTo(mapInstance);
        
        // Create a custom icon with the company's colors
        const customIcon = L.divIcon({
          className: 'custom-map-marker',
          html: `<div style="
            background-color: #A67C52; 
            width: 24px; 
            height: 24px; 
            border-radius: 50%; 
            border: 4px solid #f8f5eb;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          "></div>`,
          iconSize: [36, 36],
          iconAnchor: [18, 18]
        });
        
        // Add marker with custom icon
        const marker = L.marker([COMPANY_COORDINATES.lat, COMPANY_COORDINATES.lng], {
          icon: customIcon
        }).addTo(mapInstance);
        
        // Add a styled popup
        const popupContent = `
          <div style="
            text-align: center;
            padding: 10px;
            font-family: Arial, sans-serif;
          ">
            <h3 style="
              margin: 0 0 8px; 
              color: #A67C52; 
              font-size: 16px;
              font-weight: bold;
            ">${COMPANY_NAME}</h3>
            <p style="
              margin: 0; 
              font-size: 13px; 
              color: #53565C;
              line-height: 1.4;
            ">${address}</p>
          </div>
        `;
        
        const popup = L.popup({
          closeButton: false,
          offset: [0, -10],
          className: 'custom-popup'
        }).setContent(popupContent);
        
        // Add custom popup style
        const style = document.createElement('style');
        style.textContent = `
          .custom-popup .leaflet-popup-content-wrapper {
            background-color: #f8f5eb;
            border-radius: 8px;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
          }
          .custom-popup .leaflet-popup-tip {
            background-color: #f8f5eb;
          }
        `;
        document.head.appendChild(style);
        
        // Open popup when marker is clicked
        marker.bindPopup(popup).openPopup();
        
        // Add event listeners for keyboard controls
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        
        if (isMounted) {
          setIsLoading(false);
          setError(null);
        }
      } catch (err) {
        console.error('Error initializing map:', err);
        if (isMounted) {
          setError('Failed to load map. Please try again later.');
          setIsLoading(false);
        }
      }
    };
    
    initMap();
    
    // Cleanup function
    return () => {
      isMounted = false;
      
      // Remove event listeners
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
      
      // Clean up map instance
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
      
      // Remove any script tags we might have added
      const scriptTag = document.querySelector('script[src*="leaflet.js"]');
      if (scriptTag && scriptTag.parentNode) {
        try {
          scriptTag.parentNode.removeChild(scriptTag);
        } catch (e) {
          console.log('Script tag already removed');
        }
      }
    };
  }, [address]);

  if (error) {
    return (
      <div 
        style={{ 
          width: '100%', 
          height: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f8f5eb',
          borderRadius: '8px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
          border: '1px solid #e5e1d6'
        }}
      >
        <p style={{ color: '#cc0000', textAlign: 'center' }}>
          {error}
        </p>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', height: '400px' }}>
      <div 
        ref={mapRef} 
        style={{ 
          width: '100%', 
          height: '400px',
          borderRadius: '8px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
          border: '1px solid #A67C52'
        }}
      />
      
      {isLoading && (
        <div 
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(248, 245, 235, 0.7)',
            borderRadius: '8px'
          }}
        >
          <div>
            <div 
              style={{ 
                border: '4px solid #ECE7D0',
                borderTop: '4px solid #A67C52',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                animation: 'spin 2s linear infinite',
                margin: '0 auto 16px'
              }}
            />
            <style>
              {`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}
            </style>
            <p style={{ margin: 0, color: '#53565C' }}>Loading map...</p>
          </div>
        </div>
      )}
      
      <div style={{ 
        position: 'absolute', 
        bottom: '10px', 
        left: '10px', 
        background: 'rgba(248, 245, 235, 0.8)', 
        padding: '4px 8px', 
        fontSize: '12px', 
        borderRadius: '4px',
        zIndex: 1000,
        color: '#53565C',
        border: '1px solid #A67C52'
      }}>
        Hold Ctrl/⌘ to enable zoom with scroll
      </div>
    </div>
  );
}

export default MapComponent; 