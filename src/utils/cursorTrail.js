/**
 * Cursor Trail Effect
 * Creates a dynamic trail effect that follows the cursor movement
 */

export const initCursorTrail = () => {
  // Check if we're on a touch device - don't apply effect on touch devices
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    return;
  }

  // Create trail particles
  const numParticles = 15;
  const particles = [];
  const container = document.createElement('div');
  container.className = 'cursor-trail-container';
  container.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
    overflow: hidden;
  `;
  document.body.appendChild(container);

  // Create individual particles
  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('div');
    particle.className = 'cursor-trail';
    particle.style.cssText = `
      position: fixed;
      width: ${8 - (i * 0.3)}px;
      height: ${8 - (i * 0.3)}px;
      border-radius: 50%;
      background-color: rgba(166, 124, 82, ${0.7 - (i * 0.04)});
      pointer-events: none;
      z-index: 9999;
      opacity: ${1 - (i * 0.06)};
      transform: translate(-50%, -50%);
      transition: width 0.2s, height 0.2s, opacity 0.2s;
      box-shadow: 0 0 ${10 - (i * 0.5)}px rgba(166, 124, 82, ${0.4 - (i * 0.02)});
    `;
    container.appendChild(particle);
    particles.push({
      element: particle,
      x: 0,
      y: 0,
      delay: i * 2
    });
  }

  // Mouse position
  let mouseX = 0;
  let mouseY = 0;
  let isMoving = false;
  let timeout;

  // Update mouse position
  const updateMousePosition = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    isMoving = true;
    clearTimeout(timeout);
    
    // Set a timeout to detect when mouse stops moving
    timeout = setTimeout(() => {
      isMoving = false;
    }, 100);
  };

  // Animation frame
  const animate = () => {
    // Update each particle position with delay
    particles.forEach((particle, index) => {
      // Calculate target position with easing
      const targetX = mouseX;
      const targetY = mouseY;
      
      // Apply easing based on particle index (creates trailing effect)
      const ease = 0.1 - (index * 0.005);
      
      // Update particle position with easing
      particle.x += (targetX - particle.x) * ease;
      particle.y += (targetY - particle.y) * ease;
      
      // Position the element
      particle.element.style.transform = `translate(${particle.x}px, ${particle.y}px)`;
      
      // Apply scale/opacity based on movement
      if (isMoving) {
        particle.element.style.opacity = `${1 - (index * 0.06)}`;
        particle.element.style.width = `${8 - (index * 0.3)}px`;
        particle.element.style.height = `${8 - (index * 0.3)}px`;
      } else {
        // Gradually fade out when not moving
        particle.element.style.opacity = `${(1 - (index * 0.06)) * 0.5}`;
        particle.element.style.width = `${(8 - (index * 0.3)) * 0.8}px`;
        particle.element.style.height = `${(8 - (index * 0.3)) * 0.8}px`;
      }
    });
    
    requestAnimationFrame(animate);
  };

  // Add event listeners
  document.addEventListener('mousemove', updateMousePosition);
  
  // Special effect on interactive elements
  const addHoverEffect = () => {
    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        particles.forEach(particle => {
          particle.element.style.backgroundColor = 'rgba(236, 231, 208, 0.7)';
          particle.element.style.boxShadow = '0 0 10px rgba(236, 231, 208, 0.4)';
          particle.element.style.width = `${parseInt(particle.element.style.width) * 1.5}px`;
          particle.element.style.height = `${parseInt(particle.element.style.height) * 1.5}px`;
        });
      });
      
      el.addEventListener('mouseleave', () => {
        particles.forEach((particle, index) => {
          particle.element.style.backgroundColor = `rgba(166, 124, 82, ${0.7 - (index * 0.04)})`;
          particle.element.style.boxShadow = `0 0 ${10 - (index * 0.5)}px rgba(166, 124, 82, ${0.4 - (index * 0.02)})`;
          particle.element.style.width = `${8 - (index * 0.3)}px`;
          particle.element.style.height = `${8 - (index * 0.3)}px`;
        });
      });
    });
  };

  // Start animation
  animate();
  
  // Add hover effects after a short delay to ensure DOM is ready
  setTimeout(addHoverEffect, 1000);
  
  // Cleanup function
  return () => {
    document.removeEventListener('mousemove', updateMousePosition);
    document.body.removeChild(container);
  };
}; 