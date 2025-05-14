import React, { useEffect, useRef, useState } from 'react';

function GoogleMap({ apiKey, address }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fallback coordinates for 80 Gow St. Padstow, NSW 2162, Australia
  const fallbackCoordinates = { lat: -33.9507, lng: 151.0312 };

  useEffect(() => {
    // Function to initialize the map
    const initMap = () => {
      setIsLoading(true);
      // Create a geocoder to convert the address to coordinates
      const geocoder = new window.google.maps.Geocoder();
      
      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK' && results[0]) {
          const location = results[0].geometry.location;
          createMapWithLocation(location);
        } else {
          console.error('Geocode was not successful for the following reason:', status);
          console.log('Using fallback coordinates instead');
          createMapWithLocation(fallbackCoordinates);
        }
      });
    };

    // Function to create the map with a given location
    const createMapWithLocation = (location) => {
      // Create map options
      const mapOptions = {
        center: location,
        zoom: 15,
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
        zoomControl: true,
        styles: [
          {
            "featureType": "all",
            "elementType": "geometry.fill",
            "stylers": [
              { "weight": "2.00" }
            ]
          },
          {
            "featureType": "all",
            "elementType": "geometry.stroke",
            "stylers": [
              { "color": "#9c9c9c" }
            ]
          },
          {
            "featureType": "all",
            "elementType": "labels.text",
            "stylers": [
              { "visibility": "on" }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
              { "color": "#f2f2f2" }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [
              { "color": "#f8f5eb" }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
              { "visibility": "off" }
            ]
          },
          {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
              { "saturation": -100 },
              { "lightness": 45 }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
              { "visibility": "simplified" }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
              { "visibility": "off" }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
              { "visibility": "simplified" }
            ]
          },
          {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
              { "color": "#a67c52" },
              { "visibility": "on" }
            ]
          }
        ]
      };
      
      // Create the map
      mapInstanceRef.current = new window.google.maps.Map(mapRef.current, mapOptions);
      
      // Add a marker for the location
      const marker = new window.google.maps.Marker({
        position: location,
        map: mapInstanceRef.current,
        title: 'Stella Di Pietra',
        animation: window.google.maps.Animation.DROP
      });
      
      // Add info window
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 8px; max-width: 200px;">
            <h3 style="margin: 0 0 8px; color: #53565C; font-size: 16px;">Stella Di Pietra</h3>
            <p style="margin: 0; font-size: 13px; color: #666;">${address}</p>
          </div>
        `
      });
      
      // Open info window on marker click
      marker.addListener('click', () => {
        infoWindow.open(mapInstanceRef.current, marker);
      });
      
      // Initially open the info window
      infoWindow.open(mapInstanceRef.current, marker);
      
      setIsLoading(false);
      setError(null);
    };

    // Function to load the Google Maps script
    const loadGoogleMapsScript = () => {
      // Check if script is already loaded
      if (window.google && window.google.maps) {
        initMap();
        return;
      }
      
      // Create script element
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      
      script.onload = initMap;
      
      script.onerror = () => {
        setError('Failed to load Google Maps API');
        setIsLoading(false);
      };
      
      document.head.appendChild(script);
      
      return () => {
        // Clean up script if component unmounts during loading
        document.head.removeChild(script);
      };
    };
    
    if (!apiKey) {
      setError('Google Maps API key is required');
      setIsLoading(false);
      return;
    }
    
    loadGoogleMapsScript();
    
    // Cleanup function
    return () => {
      // Nothing specific to clean up as Google Maps API handles its own resources
    };
  }, [apiKey, address]);

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
          border: '1px solid #e5e1d6'
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
    </div>
  );
}

export default GoogleMap; 