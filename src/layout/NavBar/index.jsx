import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "../NavBar/navbar-module.scss";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "../../assets/icons/logo.svg";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [whenActive, setWhenActive] = useState(0);

  // const isActive = (index)=> {
  //   setIsOpen(index)

  // }
  // const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   console.log(location);
  // }, [location]);

  const setActiveState = (index) => {
    setWhenActive(index)

    // return location.pathname.includes(route);
  };

  return (
    <nav className="Navbar section__padding" >
      <div className="Navbar-content">
        <img className="Navbar-logo" src={logo} alt="Logo" />
        <div className="Navbar-text">
          <h1>
            <Link to={`/`}>MEDKIT.COM</Link>
          </h1>
          <p>Health is wealth</p>
        </div>
      </div>

      <ul className={isOpen ? "Navbar-menu open" : "Navbar-menu"} onClick={() => toggleNavbar()}>
        <div className="Navbar-links">
          <li>
            <NavLink className={whenActive == 1 ? `active` : ''}
             onClick={() => setActiveState(1)} 
            to={`/`}>
              HOME
            </NavLink>
          </li>
          <li className={whenActive == 2 ? `active` : ''}
              onClick={() => setActiveState(2)}
              to={`/about`}>
            <NavLink
              className={whenActive == 2 ? `active` : ''}
              onClick={() => setActiveState(2)}
              to={`/about`}
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              className={whenActive == 3 ? `active` : ''}
              onClick={() => setActiveState(3)}
              to={`/services`}
            >
              SERVICES
            </NavLink>
          </li>
          <li>
            <NavLink
              className={whenActive == 4 ? `active` : ''}
              onClick={() => setActiveState(4)}
              to={`/contact`}
            >
              CONTACT
            </NavLink>
          </li>
        </div>

        <div className="Navbar-auth">
          <li>
            <NavLink
              className={whenActive == 5 ? `active` : ''} 
              onClick={() => setActiveState(5)}
              to={`/login`}
            >
              Log In
            </NavLink>
          </li>
          <li>
            <NavLink
              className={whenActive == 6 ? `active` : ''} 
              onClick={() => setActiveState(6)}
              to={`/signup`}
            >
              <button>Sign Up</button>
            </NavLink>
          </li>
        </div>
      </ul>

      <button
        className="Navbar-toggle"
        onFocus={() => {
          setIsOpen(true);
        }}
        // onBlur={() => {
        //  setIsOpen(false)
        // }}
      >
        {isOpen ? (
          null
          ) : (
            <FaBars size={24} color={`#2f98c2`} padding={`1rem`}/>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
