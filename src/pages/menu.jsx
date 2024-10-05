import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Menu() {
  
  const langue = useSelector((data) => data.langue);
  const menu = useSelector((data) => data.menu);
  return (
    <nav className="nav-menu">
      {/* <Link to="/">
        <div className="close-nav-menu outer-shadow hover-in-shadow ">
          &times;
        </div>
      </Link> */}
      <div className="nav-menu-inner">
        <ul>
          <li>
            <Link to="/" className="link-item outer-shadow hover-in-shadow">
            {menu[langue][0]}
            </Link>
          </li>
          <li>
            <Link to="/about" className="link-item outer-shadow hover-in-shadow">
            {menu[langue][1]}
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="link-item outer-shadow hover-in-shadow"
            >
               {menu[langue][2]}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="link-item outer-shadow hover-in-shadow"
            >
              {menu[langue][3]}
            </Link>
          </li>
        </ul>
      </div>
      <p className="copyright-text">&copy; 2024 Bilal DAOUDI</p>
    </nav>
  );
}

export default Menu;
