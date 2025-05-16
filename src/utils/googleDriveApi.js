/**
 * Google Drive API utility functions
 */

// Google Drive API configuration
const API_KEY = 'AIzaSyA30Nc2JkRZ6rLLW5GyRNw0TJf2ysP9qOo'; // API key for Google Drive
const ROOT_FOLDER_ID = '1tq6OlHrERqRxDM4VheuIoRl0PMRDVSBJ'; // Updated to new Google Drive folder ID

// Mock data for development when API access is restricted
const MOCK_CATALOGUES = [
  {
    id: 'mock-doors-1',
    title: 'Luxury Doors Collection',
    cover: 'https://placehold.co/400x500/ECE7D0/53565C?text=Doors+Catalogue',
    description: 'DOORS catalogue',
    viewLink: '#',
    downloadLink: '#',
    category: 'doors',
    embedLink: '#'
  },
  {
    id: 'mock-fireplace-1',
    title: 'Designer Fireplaces',
    cover: 'https://placehold.co/400x500/ECE7D0/53565C?text=Fireplace+Catalogue',
    description: 'FIREPLACE catalogue',
    viewLink: '#',
    downloadLink: '#',
    category: 'fireplace',
    embedLink: '#'
  },
  {
    id: 'mock-laundry-1',
    title: 'Modern Laundry Solutions',
    cover: 'https://placehold.co/400x500/ECE7D0/53565C?text=Laundry+Catalogue',
    description: 'LAUNDRY catalogue',
    viewLink: '#',
    downloadLink: '#',
    category: 'laundry',
    embedLink: '#'
  },
  {
    id: 'mock-staircase-1',
    title: 'Premium Staircases',
    cover: 'https://placehold.co/400x500/ECE7D0/53565C?text=Staircase+Catalogue',
    description: 'STAIRCASE catalogue',
    viewLink: '#',
    downloadLink: '#',
    category: 'staircase',
    embedLink: '#'
  },
  {
    id: 'mock-switches-1',
    title: 'Designer Switches & Sockets',
    cover: 'https://placehold.co/400x500/ECE7D0/53565C?text=Switches+Catalogue',
    description: 'SWITCHES AND SOCKETS catalogue',
    viewLink: '#',
    downloadLink: '#',
    category: 'switches and sockets',
    embedLink: '#'
  },
  {
    id: 'mock-tv-1',
    title: 'TV Cabinet Collection',
    cover: 'https://placehold.co/400x500/ECE7D0/53565C?text=TV+Cabinets+Catalogue',
    description: 'TV CABINETS catalogue',
    viewLink: '#',
    downloadLink: '#',
    category: 'tv cabinets',
    embedLink: '#'
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
    // Get PDFs directly from the root folder
    console.log('Fetching PDFs directly from root folder');
    const folderContents = await getFolderContents(ROOT_FOLDER_ID);
    const pdfs = folderContents.filter(file => file.mimeType === 'application/pdf');
    const images = folderContents.filter(file => file.mimeType.startsWith('image/'));
    
    if (!pdfs || pdfs.length === 0) {
      throw new Error('No PDF files found in the root folder');
    }
    
    // Process each PDF into a catalogue entry
    const catalogues = pdfs.map(pdf => {
      const baseFileName = pdf.name.replace('.pdf', '');
      const coverImage = findMatchingImage(images, baseFileName);
      
      // Extract the category from filename
      let category;
      
      // Try to extract category from filename using common patterns
      // If filename contains category information such as "Category - Title" or "Category_Title"
      const categoryMatch = baseFileName.match(/^(.*?)[\s\-_]+/);
      if (categoryMatch && categoryMatch[1]) {
        category = categoryMatch[1].toLowerCase().trim();
      } else {
        // If no category could be extracted, use the full filename as the category
        category = baseFileName.toLowerCase().trim();
      }
      
      // Specific category mapping - map generic names to specific ones
      const categoryMappings = {
        'general': 'furniture',  // Map 'general' to 'furniture'
      };
      
      // Apply the mapping if it exists
      if (categoryMappings[category]) {
        category = categoryMappings[category];
      }
      
      // Use static cover images from public/covers
      const coverPath = `/covers/${category.replace(/\s+/g, '-')}.png`;
      
      return {
        id: pdf.id,
        title: baseFileName,
        // Use static cover image rather than PDF preview
        cover: coverPath,
        description: `${category} catalogue`,
        viewLink: `https://drive.google.com/file/d/${pdf.id}/view?usp=sharing`,
        downloadLink: `https://drive.google.com/uc?export=download&id=${pdf.id}`,
        category: category
      };
    });
    
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
 * Find a matching image for a PDF based on filename
 * @param {Array} images Array of image file objects
 * @param {string} baseFileName Base name of the PDF file (without extension)
 * @returns {Object|null} Matching image object or null if no match found
 */
const findMatchingImage = (images, baseFileName) => {
  // Try exact match first (e.g., "catalogue.pdf" → "catalogue.jpg")
  const exactMatch = images.find(img => 
    img.name.toLowerCase().replace(/\.(jpg|jpeg|png|gif|webp)$/i, '') === 
    baseFileName.toLowerCase()
  );
  
  if (exactMatch) return exactMatch;
  
  // Try to find image with similar name (e.g., "catalogue.pdf" → "catalogue-cover.jpg")
  const partialMatch = images.find(img => 
    img.name.toLowerCase().includes(baseFileName.toLowerCase()) ||
    baseFileName.toLowerCase().includes(img.name.toLowerCase().replace(/\.(jpg|jpeg|png|gif|webp)$/i, ''))
  );
  
  return partialMatch || null;
};

/**
 * Gets all files inside a folder (both PDFs and images)
 * @param {string} folderId Folder ID
 * @returns {Promise<Array>} Array of file objects
 */
const getFolderContents = async (folderId) => {
  try {
    // Query for PDFs and images in the folder
    const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+(mimeType='application/pdf'+or+mimeType+contains+'image/')&fields=files(id,name,mimeType)&key=${API_KEY}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.error) {
      console.error('Google API Error:', data.error);
      throw new Error(`Google API Error: ${data.error.message}`);
    }
    
    return data.files || [];
  } catch (error) {
    console.error('Error getting folder contents:', error);
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

 