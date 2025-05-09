/**
 * Google Drive API utility functions
 */

// Google Drive API configuration
const API_KEY = 'AIzaSyA30Nc2JkRZ6rLLW5GyRNw0TJf2ysP9qOo'; // API key for Google Drive
const ROOT_FOLDER_ID = '1UR9zNrWN2Rzl9PUgJpRUON6vE7ga0awN'; // Updated root folder ID

// Mock data for development when API access is restricted
const MOCK_CATALOGUES = [
  {
    id: 'mock-doors-1',
    title: 'Luxury Doors Collection',
    cover: 'https://placehold.co/400x500/ECE7D0/53565C?text=Doors+Catalogue',
    description: 'DOORS catalogue',
    viewLink: '#',
    downloadLink: '#',
    category: 'doors'
  },
  {
    id: 'mock-fireplace-1',
    title: 'Designer Fireplaces',
    cover: 'https://placehold.co/400x500/ECE7D0/53565C?text=Fireplace+Catalogue',
    description: 'FIREPLACE catalogue',
    viewLink: '#',
    downloadLink: '#',
    category: 'fireplace'
  },
  {
    id: 'mock-laundry-1',
    title: 'Modern Laundry Solutions',
    cover: 'https://placehold.co/400x500/ECE7D0/53565C?text=Laundry+Catalogue',
    description: 'LAUNDRY catalogue',
    viewLink: '#',
    downloadLink: '#',
    category: 'laundry'
  },
  {
    id: 'mock-staircase-1',
    title: 'Premium Staircases',
    cover: 'https://placehold.co/400x500/ECE7D0/53565C?text=Staircase+Catalogue',
    description: 'STAIRCASE catalogue',
    viewLink: '#',
    downloadLink: '#',
    category: 'staircase'
  },
  {
    id: 'mock-switches-1',
    title: 'Designer Switches & Sockets',
    cover: 'https://placehold.co/400x500/ECE7D0/53565C?text=Switches+Catalogue',
    description: 'SWITCHES AND SOCKETS catalogue',
    viewLink: '#',
    downloadLink: '#',
    category: 'switches and sockets'
  },
  {
    id: 'mock-tv-1',
    title: 'TV Cabinet Collection',
    cover: 'https://placehold.co/400x500/ECE7D0/53565C?text=TV+Cabinets+Catalogue',
    description: 'TV CABINETS catalogue',
    viewLink: '#',
    downloadLink: '#',
    category: 'tv cabinets'
  }
];

// Disable mock data to use real API even in development
const isDevelopment = false;

/**
 * Fetches catalogues from Google Drive
 * @returns {Promise<Array>} Array of catalogue objects
 */
export const fetchCatalogues = async () => {
  // If in development and not using real API, return mock data
  if (isDevelopment) {
    console.log('Using mock catalogue data for development');
    return MOCK_CATALOGUES;
  }

  try {
    // Get all category folders directly from the root folder
    const categoryFolders = await getCategoryFolders();
    
    if (!categoryFolders || categoryFolders.length === 0) {
      throw new Error('No category folders found');
    }
    
    // For each category folder, get the PDFs inside
    const catalogues = [];
    for (const folder of categoryFolders) {
      const pdfs = await getPDFsInFolder(folder.id);
      
      // Add each PDF to our catalogues array with folder name as category
      pdfs.forEach(pdf => {
        catalogues.push({
          id: pdf.id,
          title: pdf.name.replace('.pdf', ''),
          cover: `https://drive.google.com/thumbnail?id=${pdf.id}&sz=w400-h500`,
          description: `${folder.name} catalogue`,
          viewLink: `https://drive.google.com/file/d/${pdf.id}/view?usp=sharing`,
          downloadLink: `https://drive.google.com/uc?export=download&id=${pdf.id}`,
          category: folder.name.toLowerCase()
        });
      });
    }
    
    return catalogues;
  } catch (error) {
    console.error('Error fetching catalogues:', error);
    
    // If in development, fall back to mock data on error
    if (isDevelopment) {
      console.log('Falling back to mock catalogue data');
      return MOCK_CATALOGUES;
    }
    
    throw error;
  }
};

/**
 * Gets all category folders from the root folder
 * @returns {Promise<Array>} Array of folder objects
 */
const getCategoryFolders = async () => {
  try {
    const url = `https://www.googleapis.com/drive/v3/files?q='${ROOT_FOLDER_ID}'+in+parents+and+mimeType='application/vnd.google-apps.folder'&key=${API_KEY}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.error) {
      console.error('Google API Error:', data.error);
      throw new Error(`Google API Error: ${data.error.message}`);
    }
    
    return data.files || [];
  } catch (error) {
    console.error('Error getting category folders:', error);
    throw error;
  }
};

/**
 * Gets all PDF files inside a folder
 * @param {string} folderId Folder ID
 * @returns {Promise<Array>} Array of PDF file objects
 */
const getPDFsInFolder = async (folderId) => {
  try {
    const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType='application/pdf'&key=${API_KEY}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.error) {
      console.error('Google API Error:', data.error);
      throw new Error(`Google API Error: ${data.error.message}`);
    }
    
    return data.files || [];
  } catch (error) {
    console.error('Error getting PDFs:', error);
    throw error;
  }
}; 