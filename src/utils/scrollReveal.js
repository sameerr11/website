/**
 * Scroll Reveal Utility
 * Adds scroll-triggered animations to elements with data-scroll attributes
 */

export const initScrollReveal = () => {
  // Options for the Intersection Observer
  const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.15 // Trigger when 15% of the element is visible
  };

  // Callback function for the Intersection Observer
  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        
        // Get animation type from data attribute
        const animationType = element.dataset.scroll || 'fade-up';
        const delay = element.dataset.scrollDelay || 0;
        const duration = element.dataset.scrollDuration || '0.8s';
        
        // Apply animation class based on type
        setTimeout(() => {
          switch (animationType) {
            case 'fade-up':
              element.style.opacity = '0';
              element.style.transform = 'translateY(30px)';
              element.style.transition = `opacity ${duration} ease, transform ${duration} ease`;
              
              setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
              }, 50);
              break;
              
            case 'fade-down':
              element.style.opacity = '0';
              element.style.transform = 'translateY(-30px)';
              element.style.transition = `opacity ${duration} ease, transform ${duration} ease`;
              
              setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
              }, 50);
              break;
              
            case 'fade-left':
              element.style.opacity = '0';
              element.style.transform = 'translateX(-50px)';
              element.style.transition = `opacity ${duration} ease, transform ${duration} ease`;
              
              setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateX(0)';
              }, 50);
              break;
              
            case 'fade-right':
              element.style.opacity = '0';
              element.style.transform = 'translateX(50px)';
              element.style.transition = `opacity ${duration} ease, transform ${duration} ease`;
              
              setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateX(0)';
              }, 50);
              break;
              
            case 'zoom-in':
              element.style.opacity = '0';
              element.style.transform = 'scale(0.9)';
              element.style.transition = `opacity ${duration} ease, transform ${duration} ease`;
              
              setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'scale(1)';
              }, 50);
              break;
              
            case 'zoom-out':
              element.style.opacity = '0';
              element.style.transform = 'scale(1.1)';
              element.style.transition = `opacity ${duration} ease, transform ${duration} ease`;
              
              setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'scale(1)';
              }, 50);
              break;
              
            case 'flip':
              element.style.opacity = '0';
              element.style.transform = 'perspective(400px) rotateY(90deg)';
              element.style.transition = `opacity ${duration} ease, transform ${duration} ease`;
              
              setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'perspective(400px) rotateY(0)';
              }, 50);
              break;
              
            default:
              element.style.opacity = '0';
              element.style.transition = `opacity ${duration} ease`;
              
              setTimeout(() => {
                element.style.opacity = '1';
              }, 50);
          }
        }, delay);
        
        // Stop observing this element after it's been revealed
        observer.unobserve(element);
      }
    });
  };

  // Create the observer
  const observer = new IntersectionObserver(handleIntersection, options);

  // Function to initialize observation of elements
  const initObserver = () => {
    // Select all elements with data-scroll attribute
    const scrollElements = document.querySelectorAll('[data-scroll]');
    
    // Set initial styles
    scrollElements.forEach(element => {
      element.style.opacity = '0';
      observer.observe(element);
    });
  };

  // Initialize on load
  if (document.readyState === 'complete') {
    initObserver();
  } else {
    window.addEventListener('load', initObserver);
  }
  
  // Add a mutation observer to detect new elements added to the DOM
  const mutationObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.addedNodes.length) {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === 1) { // Element node
            if (node.hasAttribute('data-scroll')) {
              node.style.opacity = '0';
              observer.observe(node);
            }
            
            // Check for child elements with data-scroll
            const childScrollElements = node.querySelectorAll('[data-scroll]');
            childScrollElements.forEach(element => {
              element.style.opacity = '0';
              observer.observe(element);
            });
          }
        });
      }
    });
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
    window.removeEventListener('load', initObserver);
  };
}; 