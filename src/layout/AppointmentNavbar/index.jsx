import React from "react";
import "../AppointmentNavbar/appointmentNavbar-module.scss";
import logo from "../../assets/icons/logo.svg";
import { Link } from "react-router-dom";

const AppointmentNavbar = () => {
  return (
    <nav className="AppointmentNavbar section__padding">
      <div className="AppointmentNavbar-content">
        <img className="AppointmentNavbar-logo" src={logo} alt="Logo" />
        <div className="AppointmentNavbar-text">
          <h2>
            {" "}
            <Link to={`/`}>MEDKIT.COM </Link>
          </h2>
          <p>Health is wealth</p>
        </div>
      </div>

      <ul className="AppointmentNavbar-links">
        <li>My Appointments</li>
        <li><Link to={`/`}>Log Out</Link></li>
      </ul>
    </nav>
  );
};

export default AppointmentNavbar;
