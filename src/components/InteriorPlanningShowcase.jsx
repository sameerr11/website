import React, { useState, useEffect } from 'react';
import '../styles/InteriorPlanningShowcase.css';

const InteriorPlanningShowcase = () => {
  const [activeRoom, setActiveRoom] = useState(null);
  
  // Function to randomly light up interactive elements
  useEffect(() => {
    const interval = setInterval(() => {
      const elements = document.querySelectorAll('.interactive-element');
      const randomIndex = Math.floor(Math.random() * elements.length);
      
      elements.forEach((el, index) => {
        if (index === randomIndex) {
          el.style.backgroundColor = 'rgba(166, 124, 82, 0.5)';
          el.style.transform = 'scale(1.2)';
          
          setTimeout(() => {
            el.style.backgroundColor = 'rgba(166, 124, 82, 0.2)';
            el.style.transform = 'scale(1)';
          }, 1000);
        }
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handleRoomClick = (room) => {
    setActiveRoom(room === activeRoom ? null : room);
  };
  
  // Room data with just titles
  const roomData = {
    living: { title: "Living Space Design" },
    kitchen: { title: "Kitchen Planning" },
    bathroom: { title: "Bathroom Solutions" },
    bedroom: { title: "Bedroom Design" },
    office: { title: "Office & Work Spaces" }
  };
  
  return (
    <div className="interior-planning-showcase">
      <div className="interior-grid">
        <div 
          className={`room-element living-room ${activeRoom === 'living' ? 'active' : ''}`}
          onClick={() => handleRoomClick('living')}
        >
          <div className="room-content">
            <div className="room-title">{roomData.living.title}</div>
          </div>
        </div>
        
        <div 
          className={`room-element kitchen ${activeRoom === 'kitchen' ? 'active' : ''}`}
          onClick={() => handleRoomClick('kitchen')}
        >
          <div className="room-content">
            <div className="room-title">{roomData.kitchen.title}</div>
          </div>
        </div>
        
        <div 
          className={`room-element bathroom ${activeRoom === 'bathroom' ? 'active' : ''}`}
          onClick={() => handleRoomClick('bathroom')}
        >
          <div className="room-content">
            <div className="room-title">{roomData.bathroom.title}</div>
          </div>
        </div>
        
        <div 
          className={`room-element bedroom ${activeRoom === 'bedroom' ? 'active' : ''}`}
          onClick={() => handleRoomClick('bedroom')}
        >
          <div className="room-content">
            <div className="room-title">{roomData.bedroom.title}</div>
          </div>
        </div>
        
        <div 
          className={`room-element office ${activeRoom === 'office' ? 'active' : ''}`}
          onClick={() => handleRoomClick('office')}
        >
          <div className="room-content">
            <div className="room-title">{roomData.office.title}</div>
          </div>
        </div>
      </div>
      
      <div className="design-elements">
        <div className="compass"></div>
        <div className="ruler"></div>
        <div className="pencil"></div>
        
        <div className="furniture-icon sofa-icon"></div>
        <div className="furniture-icon table-icon"></div>
        <div className="furniture-icon bed-icon"></div>
        
        <div className="color-palette">
          <div className="color-sample"></div>
          <div className="color-sample"></div>
          <div className="color-sample"></div>
          <div className="color-sample"></div>
          <div className="color-sample"></div>
        </div>
      </div>
      
      <div className="interactive-elements">
        <div className="interactive-element">+</div>
        <div className="interactive-element">+</div>
        <div className="interactive-element">+</div>
      </div>
    </div>
  );
};

export default InteriorPlanningShowcase; 