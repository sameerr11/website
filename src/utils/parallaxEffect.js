/**
 * Parallax Scrolling Effect
 * Adds smooth parallax scrolling effects to elements with data-parallax attribute
 */

export const initParallaxEffect = () => {
  // Check if we're on a mobile device - use simpler effects on mobile
  const isMobile = window.innerWidth <= 768 || 
                   'ontouchstart' in window || 
                   navigator.maxTouchPoints > 0;
  
  // Options for the Intersection Observer
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
  };
  
  // Get all elements with parallax attributes
  const getParallaxElements = () => {
    return document.querySelectorAll('[data-parallax]');
  };
  
  // Calculate parallax transform based on scroll position
  const calculateParallaxTransform = (element, scrollPosition, viewportHeight) => {
    const rect = element.getBoundingClientRect();
    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = viewportHeight / 2;
    const distanceFromCenter = elementCenter - viewportCenter;
    
    // Get parallax settings from data attributes
    const speed = parseFloat(element.dataset.parallaxSpeed || 0.2);
    const direction = element.dataset.parallaxDirection || 'up';
    const scale = parseFloat(element.dataset.parallaxScale || 1);
    const rotation = parseFloat(element.dataset.parallaxRotation || 0);
    
    // Calculate transform based on direction
    let translateY = 0;
    let translateX = 0;
    let scaleValue = 1;
    let rotateValue = 0;
    
    // Only apply effect when element is in viewport
    if (rect.top < viewportHeight && rect.bottom > 0) {
      // Calculate parallax effect
      switch (direction) {
        case 'up':
          translateY = distanceFromCenter * speed;
          break;
        case 'down':
          translateY = -distanceFromCenter * speed;
          break;
        case 'left':
          translateX = distanceFromCenter * speed;
          break;
        case 'right':
          translateX = -distanceFromCenter * speed;
          break;
        default:
          translateY = distanceFromCenter * speed;
      }
      
      // Apply scale effect if specified
      if (scale !== 1) {
        // Calculate scale based on position in viewport
        const scrollPercentage = 1 - Math.abs(distanceFromCenter) / (viewportHeight / 2);
        scaleValue = 1 + ((scale - 1) * scrollPercentage);
      }
      
      // Apply rotation effect if specified
      if (rotation !== 0) {
        // Calculate rotation based on position in viewport
        const scrollPercentage = distanceFromCenter / (viewportHeight / 2);
        rotateValue = rotation * scrollPercentage;
      }
    }
    
    // Reduce effect on mobile
    if (isMobile) {
      translateY *= 0.5;
      translateX *= 0.5;
      scaleValue = 1 + (scaleValue - 1) * 0.5;
      rotateValue *= 0.5;
    }
    
    // Build transform string
    return `translate3d(${translateX}px, ${translateY}px, 0) scale(${scaleValue}) rotate(${rotateValue}deg)`;
  };
  
  // Handle intersection observer callback
  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      const element = entry.target;
      
      // Add or remove active class based on visibility
      if (entry.isIntersecting) {
        element.classList.add('parallax-active');
      } else {
        element.classList.remove('parallax-active');
      }
    });
  };
  
  // Create observer for detecting elements in viewport
  const observer = new IntersectionObserver(handleIntersection, options);
  
  // Update parallax effects on scroll
  const updateParallax = () => {
    const scrollPosition = window.pageYOffset;
    const viewportHeight = window.innerHeight;
    
    // Get all active parallax elements
    const activeElements = document.querySelectorAll('.parallax-active');
    
    activeElements.forEach(element => {
      const transform = calculateParallaxTransform(element, scrollPosition, viewportHeight);
      element.style.transform = transform;
    });
  };
  
  // Initialize parallax effect
  const initParallax = () => {
    const parallaxElements = getParallaxElements();
    
    // Set initial styles and observe each element
    parallaxElements.forEach(element => {
      // Set will-change for better performance
      element.style.willChange = 'transform';
      element.style.transition = 'transform 0.1s linear';
      
      // Start observing element
      observer.observe(element);
    });
    
    // Add scroll event listener
    window.addEventListener('scroll', updateParallax, { passive: true });
    window.addEventListener('resize', updateParallax, { passive: true });
    
    // Initial update
    updateParallax();
  };
  
  // Initialize on load
  if (document.readyState === 'complete') {
    initParallax();
  } else {
    window.addEventListener('load', initParallax);
  }
  
  // Add a mutation observer to detect new elements added to the DOM
  const mutationObserver = new MutationObserver(mutations => {
    let shouldReinit = false;
    
    mutations.forEach(mutation => {
      if (mutation.addedNodes.length) {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === 1) { // Element node
            if (node.hasAttribute('data-parallax') || node.querySelector('[data-parallax]')) {
              shouldReinit = true;
            }
          }
        });
      }
    });
    
    if (shouldReinit) {
      initParallax();
    }
  });
  
  // Start observing the document body for DOM changes
  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true
  });
  
  // Cleanup function
  return () => {
    observer.disconnect();
    mutationObserver.disconnect();
    window.removeEventListener('scroll', updateParallax);
    window.removeEventListener('resize', updateParallax);
    window.removeEventListener('load', initParallax);
  };
}; 