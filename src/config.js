/**
 * Application configuration
 * Contains environment variables and constants
 */

// Google Maps Configuration
export const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

// Company Information
export const COMPANY_ADDRESS = '80 Gow St. Padstow, NSW 2162, Australia';
export const COMPANY_NAME = 'Stella Di Pietra';
export const COMPANY_EMAIL = 'info@stelladipietra.com';
export const COMPANY_WEBSITE = 'stelladipietra.com.au';

// Map Coordinates (fallback)
export const COMPANY_COORDINATES = { 
  lat: -33.9507, 
  lng: 151.0312 
}; 