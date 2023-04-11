import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../NavBar/navbar-module.scss";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "../../assets/icons/logo.svg";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('')

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="Navbar container">
      <div className="Navbar-content">
        <img className="Navbar-logo" src={logo} alt="Logo" />
        <div className="Navbar-text">
          <h1>MEDKIT.COM</h1>
          <p>Health is wealth</p>
        </div>
      </div>

      <ul className={isOpen ? "Navbar-menu open" : "Navbar-menu"}>
        <li>
          <Link onClick={()=>{
            setActiveItem('home')
          }} className={activeItem === 'home' ? ' nav_item active' : ' nav_item'} to={`/`}>HOME</Link>
        </li>
        <li>
          <Link onClick={()=>{
            setActiveItem('about')
          }} className={activeItem === 'about' ? 'active nav_item' : 'nav_item'} to={`/about`}>ABOUT</Link>
        </li>
        <li>
          <Link onClick={()=>{
            setActiveItem('services')
          }} className={activeItem === 'services' ? 'active nav_item' : 'nav_item'} to={`/services`}>SERVICES</Link>
        </li>
        <li>
          <Link onClick={()=>{
            setActiveItem('contact')
          }} className={activeItem === 'contact' ? 'active nav_item' : 'nav_item'} to={`/contact`}>CONTACT</Link>
        </li>
        <li className="Navbar-auth">
          <Link onClick={()=>{
            setActiveItem('log in')
          }} className={activeItem === 'log in' ? 'active nav_item' : 'nav_item'} to={`/login`}>Log In</Link>
        </li>
        <li className="Navbar-auth">
          <Link onClick={()=>{
            setActiveItem('sign up')
          }} className={activeItem === 'sign up' ? 'active nav_item' : 'nav_item'} to={`/signup`}>
            <button>Sign Up</button>
          </Link>
        </li>
      </ul>

      <button className="Navbar-toggle" onClick={toggleNavbar}>
        {isOpen ? <FaTimes size={24} color={`#2f98c2`} /> : <FaBars size={24} color={`#2f98c2`} />}
      </button>
    </nav>
  );
};

export default Navbar;

