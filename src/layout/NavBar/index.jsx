import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../NavBar/navbar-module.scss";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "../../assets/icons/logo.svg";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    console.log(location);
  }, [location]);

  const setActiveState = (route) => {
    return location.pathname.includes(route);
  };

  return (
    <nav className="Navbar container section__padding">
      <div className="Navbar-content">
        <img className="Navbar-logo" src={logo} alt="Logo" />
        <div className="Navbar-text">
          <h1>
            <Link to={`/`}>MEDKIT.COM</Link>
          </h1>
          <p>Health is wealth</p>
        </div>
      </div>

      <ul className={isOpen ? "Navbar-menu open" : "Navbar-menu"}>
        <div className="Navbar-links">
          <li>
            <Link className={setActiveState(`/`) ? `active` : null} to={`/`}>
              HOME
            </Link>
          </li>
          <li>
            <Link
              className={setActiveState(`/about`) ? `active` : null}
              to={`/about`}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              className={setActiveState(`/services`) ? `active` : null}
              to={`/services`}
            >
              SERVICES
            </Link>
          </li>
          <li>
            <Link
              className={setActiveState(`/contact`) ? `active` : null}
              to={`/contact`}
            >
              CONTACT
            </Link>
          </li>
        </div>

        <div className="Navbar-auth">
          <li>
            <Link
              className={setActiveState(`/login`) ? `active` : null}
              to={`/login`}
            >
              Log In
            </Link>
          </li>
          <li>
            <Link
              className={setActiveState(`/signup`) ? `active` : null}
              to={`/signup`}
            >
              <button>Sign Up</button>
            </Link>
          </li>
        </div>
      </ul>

      <button className="Navbar-toggle" onClick={toggleNavbar}>
        {isOpen ? (
          <FaTimes size={24} color={`#2f98c2`} />
        ) : (
          <FaBars size={24} color={`#2f98c2`} />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
