/**
 * Utility functions for maintaining proper layout and preventing content overlap
 */

/**
 * Calculates proper spacing for elements to prevent overlapping
 * 
 * @param {number} baseSpacing - Base spacing value in pixels
 * @param {number} scale - Scale factor for different screen sizes
 * @param {string} unit - CSS unit (px, rem, em, etc.)
 * @returns {string} - Calculated spacing value with units
 */
export const calculateSpacing = (baseSpacing = 16, scale = 1, unit = 'px') => {
  return `${baseSpacing * scale}${unit}`;
};

/**
 * Returns appropriate margin values to prevent overlapping elements
 * especially when animations are involved
 * 
 * @param {Object} options - Configuration options
 * @param {boolean} options.hasAnimation - Whether the element has animations
 * @param {string} options.animationType - Type of animation (fade, slide, etc.)
 * @param {string} options.direction - Direction of animation (up, down, left, right)
 * @param {string} options.device - Device type (mobile, tablet, desktop)
 * @returns {Object} - CSS margin properties
 */
export const getAnimationSafeMargins = (options = {}) => {
  const { hasAnimation = false, animationType = 'fade', direction = 'up', device = 'desktop' } = options;
  
  // Base margin values
  const margins = {
    marginTop: '0',
    marginBottom: '2rem',
    marginLeft: '0',
    marginRight: '0',
  };
  
  // Add extra margin for animated elements to prevent overlap
  if (hasAnimation) {
    if (animationType === 'fade') {
      // Fade animations need less margin adjustments
      margins.marginBottom = '3rem';
    } else if (animationType === 'slide') {
      // Slide animations need direction-specific margins
      switch (direction) {
        case 'up':
          margins.marginBottom = '4rem';
          break;
        case 'down':
          margins.marginTop = '4rem';
          break;
        case 'left':
          margins.marginRight = '2rem';
          break;
        case 'right':
          margins.marginLeft = '2rem';
          break;
      }
    }
  }
  
  // Adjust for device type
  if (device === 'mobile') {
    // Reduce margins slightly on mobile
    Object.keys(margins).forEach(key => {
      const currentValue = parseFloat(margins[key]);
      if (currentValue > 0) {
        margins[key] = `${currentValue * 0.7}rem`;
      }
    });
  }
  
  return margins;
};

/**
 * Creates CSS for container with proper spacing and positioning
 * to prevent overlapping elements
 * 
 * @param {Object} options - Configuration options
 * @returns {Object} - CSS properties object for the container
 */
export const createSafeContainer = (options = {}) => {
  const { 
    hasChildren = true, 
    isAnimated = false, 
    isRelative = true,
    zIndex = 1
  } = options;
  
  const containerStyles = {
    position: isRelative ? 'relative' : 'static',
    zIndex,
    overflow: 'visible',
    padding: hasChildren ? '1rem' : '0',
    margin: '0 auto',
  };
  
  if (isAnimated) {
    containerStyles.willChange = 'transform, opacity';
    containerStyles.isolation = 'isolate';
  }
  
  return containerStyles;
};

export default {
  calculateSpacing,
  getAnimationSafeMargins,
  createSafeContainer
}; 