import { useContext, createContext } from 'react';

// Define standard z-index values to use throughout the app
const Z_INDEX = {
  // Background elements
  background: 0,
  
  // Main content elements
  content: 10,
  cards: 20,
  
  // Interactive elements
  buttons: 30,
  
  // Overlay elements
  tooltip: 40,
  modal: 50,
  
  // Navigation elements
  navbar: 1000,
  mobileMenu: 1100,
  
  // Special elements that should appear above everything
  cursor: 9000,
  notifications: 9500
};

// Create context to share z-index values
const ZIndexContext = createContext(Z_INDEX);

/**
 * Custom hook to access consistent z-index values throughout the app
 * This helps prevent overlapping issues by standardizing z-index values
 * 
 * @returns {Object} Object containing standard z-index values
 */
export const useZIndex = () => {
  return useContext(ZIndexContext);
};

/**
 * ZIndexProvider component to make z-index values available throughout the app
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element} Provider component
 */
export const ZIndexProvider = ({ children }) => {
  return (
    <ZIndexContext.Provider value={Z_INDEX}>
      {children}
    </ZIndexContext.Provider>
  );
};

export default useZIndex; 