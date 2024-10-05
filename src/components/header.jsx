import React, { useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

import { changeLanguage } from "../config/actions";


function Header() {
  
  const dayNightRef = useRef(null);
  
  const langue = useSelector((data) => data.langue);
  
  
  const dispatch = useDispatch();

  
  const handleChange = (event) => {
    
    dispatch(changeLanguage(event.target.value));
    
  };

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
    <div className="header">
      <div className="container">
        <div className="row justify-contant-between">
          <div className="logo">
            <Link to="/">BD</Link>
          </div>
          
          <div>
            <select onChange={handleChange} value={langue}  className="btntraslation" style={{ marginLeft: "8px",marginTop: "8px",padding: "5px", borderRadius: "5px", border: "1px solid gray", }}>
              <option value="fr" >Français</option>
              <option value="en" >English</option>
              <option value="de" >Deutsch</option>
            </select>
          </div>
          <div className="switcher-btn">
            <div
              className="style-switcher outer-shadow"
              onClick={toggleDarkMode}
            >
              <div
                ref={dayNightRef}
                className="day-night s-icon outer-shadow hover-in-shadow"
              >
                <i className="fas fa-moon"></i>
              </div>
            </div>
          </div>
          <Link to="/menu">
            <div className="hamburger-btn outer-shadow hover-in-shadow ">
              <span></span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
