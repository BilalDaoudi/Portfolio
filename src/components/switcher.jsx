import React, { useRef, useEffect } from "react";

import Header from "./header";


function Switcher() {
  
  const dayNightRef = useRef(null);
  

  const toggleDarkMode = () => {
    
    if (dayNightRef.current) {
      
      dayNightRef.current.querySelector("i").classList.toggle("fa-sun");
      dayNightRef.current.querySelector("i").classList.toggle("fa-moon");
      document.body.classList.toggle("dark");
      
    }
    
  };

  
  useEffect(() => {
    
    if (document.body.classList.contains("dark")) {
      dayNightRef.current.querySelector("i").classList.add("fa-sun");

      
    } else {
      dayNightRef.current.querySelector("i").classList.add("fa-moon");

      
    }
  }, []);

  
  return (
    <div className="style-switcher outer-shadow" onClick={toggleDarkMode}>
      <div
        ref={dayNightRef}
        className="day-night s-icon outer-shadow hover-in-shadow"
      >
        <i className="fas fa-moon"></i>
      </div>
    </div>
  );
}

export default Switcher;
