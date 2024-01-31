// Navbar.jsx

import { useState } from "react";
import "./navbar.css";
import downloadIcon from './../assets/Borcell.png';
import { Link } from "react-router-dom";
function Navbar() {
  const [active, setActive] = useState(false);

  const navToggle = () => {
    setActive(!active);
  };

  return (
    <nav className={`nav ${active ? "nav__active" : ""}`}>
       <div className="nav__brand">
        <div className="na">
        Borcelle
        </div>
        <img src={downloadIcon} alt="Download Icon" className="download-icon" />
      </div>
      <div onClick={navToggle} className={`nav__toggler ${active ? "toggle" : ""}`}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className={`nav__menu ${active ? "show" : ""}`}>
        <li className="nav__item">
          <a href="Home" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
         <Link to="/AllEventuser"> <a href="#" className="nav__link">
           All Events
          </a>
          </Link>
        </li>
        <li className="nav__item">
         <Link to="/MyBooking"> <a href="#" className="nav__link">
           MyBooking
          </a></Link>
        </li>
        <li className="log">
         <Link to='/LoginPageuser'> <a href="#" className="nav__link">
           <button type="log">Logout</button> 
          </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
