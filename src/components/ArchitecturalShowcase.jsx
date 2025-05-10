import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/ArchitecturalShowcase.css';

const ArchitecturalShowcase = () => {
  const [litWindows, setLitWindows] = useState([]);

  // Randomly light some windows
  useEffect(() => {
    const windowCount = {
      main: 20,
      left: 12,
      right: 9,
      farLeft: 8,
      farRight: 8,
      bg1: 8,
      bg2: 8,
      bg3: 6
    };
    
    // Generate random lit windows
    const generateLitWindows = () => {
      const newLitWindows = {};
      
      // For each building, randomly decide which windows are lit
      Object.entries(windowCount).forEach(([building, count]) => {
        newLitWindows[building] = [];
        // Light roughly 30% of windows
        const litCount = Math.floor(count * 0.3);
        while (newLitWindows[building].length < litCount) {
          const random = Math.floor(Math.random() * count);
          if (!newLitWindows[building].includes(random)) {
            newLitWindows[building].push(random);
          }
        }
      });
      
      return newLitWindows;
    };
    
    // Initial lit windows
    setLitWindows(generateLitWindows());
    
    // Change lit windows periodically
    const interval = setInterval(() => {
      setLitWindows(generateLitWindows());
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="architectural-showcase">
      {/* Sky elements */}
      <motion.div
        className="cloud cloud-1"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 0.2, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      />
      <motion.div
        className="cloud cloud-2"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 0.15, x: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true }}
      />
      <motion.div
        className="cloud cloud-3"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        viewport={{ once: true }}
      />
      <div className="shooting-star" />
      
      <div className="building-container">
        {/* Background buildings */}
        <motion.div 
          className="building building-bg-1"
          initial={{ height: 0 }}
          whileInView={{ height: '180px' }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="windows-grid windows-grid-bg">
            {Array(8).fill().map((_, i) => (
              <motion.div 
                key={i} 
                className={`window ${litWindows.bg1?.includes(i) ? 'lit' : ''}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 + (i * 0.05), duration: 0.3 }}
                viewport={{ once: true }}
              />
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="building building-bg-2"
          initial={{ height: 0 }}
          whileInView={{ height: '210px' }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="windows-grid windows-grid-bg">
            {Array(8).fill().map((_, i) => (
              <motion.div 
                key={i} 
                className={`window ${litWindows.bg2?.includes(i) ? 'lit' : ''}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.2 + (i * 0.05), duration: 0.3 }}
                viewport={{ once: true }}
              />
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="building building-bg-3"
          initial={{ height: 0 }}
          whileInView={{ height: '160px' }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="windows-grid windows-grid-bg">
            {Array(6).fill().map((_, i) => (
              <motion.div 
                key={i} 
                className={`window ${litWindows.bg3?.includes(i) ? 'lit' : ''}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.1 + (i * 0.05), duration: 0.3 }}
                viewport={{ once: true }}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Far left building */}
        <motion.div 
          className="building building-far-left"
          initial={{ height: 0 }}
          whileInView={{ height: '250px' }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.9 }}
          viewport={{ once: true }}
        >
          <div className="windows-grid windows-grid-tiny">
            {Array(8).fill().map((_, i) => (
              <motion.div 
                key={i} 
                className={`window ${litWindows.farLeft?.includes(i) ? 'lit' : ''}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.8 + (i * 0.06), duration: 0.3 }}
                viewport={{ once: true }}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Far right building */}
        <motion.div 
          className="building building-far-right"
          initial={{ height: 0 }}
          whileInView={{ height: '230px' }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="windows-grid windows-grid-tiny">
            {Array(8).fill().map((_, i) => (
              <motion.div 
                key={i} 
                className={`window ${litWindows.farRight?.includes(i) ? 'lit' : ''}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 2 + (i * 0.06), duration: 0.3 }}
                viewport={{ once: true }}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Left building */}
        <motion.div 
          className="building building-left"
          initial={{ height: 0 }}
          whileInView={{ height: '380px' }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="windows-grid windows-grid-small">
            {Array(12).fill().map((_, i) => (
              <motion.div 
                key={i} 
                className={`window ${litWindows.left?.includes(i) ? 'lit' : ''}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.8 + (i * 0.05), duration: 0.3 }}
                viewport={{ once: true }}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Right building */}
        <motion.div 
          className="building building-right"
          initial={{ height: 0 }}
          whileInView={{ height: '340px' }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="windows-grid windows-grid-small">
            {Array(9).fill().map((_, i) => (
              <motion.div 
                key={i} 
                className={`window ${litWindows.right?.includes(i) ? 'lit' : ''}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.9 + (i * 0.05), duration: 0.3 }}
                viewport={{ once: true }}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Main building */}
        <motion.div 
          className="building building-main"
          initial={{ height: 0 }}
          whileInView={{ height: '450px' }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="windows-grid">
            {Array(20).fill().map((_, i) => (
              <motion.div 
                key={i} 
                className={`window ${litWindows.main?.includes(i) ? 'lit' : ''}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 2 + (i * 0.03), duration: 0.3 }}
                viewport={{ once: true }}
              />
            ))}
          </div>
          <motion.div 
            className="building-entrance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="door" />
            <motion.div
              className="entrance-steps"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 2.8, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="entrance-step" />
              <div className="entrance-step" />
              <div className="entrance-step" />
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Ground elements */}
        <motion.div 
          className="ground-element"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
        />
        
        <motion.div
          className="road-element"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="road-marking" />
        </motion.div>
        
        {/* Trees */}
        <motion.div
          className="tree tree-1"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3, duration: 0.5 }}
          viewport={{ once: true }}
        />
        
        <motion.div
          className="tree tree-2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.1, duration: 0.5 }}
          viewport={{ once: true }}
        />
        
        <motion.div
          className="tree tree-3"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.2, duration: 0.5 }}
          viewport={{ once: true }}
        />
        
        <motion.div
          className="tree tree-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.3, duration: 0.5 }}
          viewport={{ once: true }}
        />
        
        {/* Construction site elements */}
        <motion.div
          className="site-element site-element-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 3.4, duration: 0.3 }}
          viewport={{ once: true }}
        />
        
        <motion.div
          className="site-element site-element-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 0.3 }}
          viewport={{ once: true }}
        />
        
        <motion.div
          className="site-element site-element-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 3.6, duration: 0.3 }}
          viewport={{ once: true }}
        />
      </div>
      
      {/* Architectural elements */}
      <motion.div 
        className="architectural-elements"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="blueprint-overlay"
          initial={{ opacity: 0, rotate: -5 }}
          whileInView={{ opacity: 0.7, rotate: 0 }}
          transition={{ delay: 3.2, duration: 0.8 }}
          viewport={{ once: true }}
        />
        
        <motion.div 
          className="compass-element"
          initial={{ opacity: 0, rotate: 30 }}
          whileInView={{ opacity: 0.7, rotate: 0 }}
          transition={{ delay: 3.4, duration: 0.8 }}
          viewport={{ once: true }}
        />
        
        <motion.div 
          className="ruler-element"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 0.7, x: 0 }}
          transition={{ delay: 3.6, duration: 0.8 }}
          viewport={{ once: true }}
        />
        
        <motion.div 
          className="crane-element-main"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 0.6, x: 0 }}
          transition={{ delay: 2.7, duration: 0.8 }}
          viewport={{ once: true }}
        />
        
        <motion.div 
          className="crane-element-secondary"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 0.5, x: 0 }}
          transition={{ delay: 2.9, duration: 0.8 }}
          viewport={{ once: true }}
        />
      </motion.div>
      
      {/* Company name overlay */}
      <motion.div 
        className="company-name-overlay"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.8, duration: 0.8, type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
      >
        <h2>Stella Di Pietra</h2>
        <p>Premium Construction Materials</p>
      </motion.div>
    </div>
  );
};

export default ArchitecturalShowcase; 