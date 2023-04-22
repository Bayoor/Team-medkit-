// REACT DEFAULTS'

// COMPONENTS
// import Container from '../Container'
// import Logo_dark from '../../assets/images/ticked_logo_light.png'

import Twitter from "../../assets/icons/twitter.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Instagram from "../../assets/icons/instagram.svg";
import logo from "../../assets/icons/logo.svg";
import "./footer-module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__content">
        <div className="footer__content-item">
          <img className="footer-logo" src={logo} alt="Logo" />
          <div className="footer-text">
            <h2>MEDKIT.COM</h2>
            <p>Health is wealth</p>
          </div>
        </div>
        <div className="footer__content-text">
          <p>
            Access to medical services with Certified Medical<br/> Consultants on
            Medkit.
          </p>
          <span>Contact@medkit.com</span>
          <span>(233) 678-0202</span>
        </div>

        <div className="footer__icons">
          <img src={Twitter} alt={`Twitter icon`} />
          <img src={Facebook} alt={`Facebook icon`} />
          <img src={Instagram} alt={`Instagram icon`} />
        </div>
      </div>

      <div className="footer__content">
        <h2>Information</h2>
        <p>Blog</p>
        <p>Special Offers</p>
        <p>F.A.Q</p>
        <p>Privacy Policy</p>
        <p>Terms and Conditions</p>
      </div>

      <div className="footer__content">
        <h2>Quick Links</h2>
        <p><Link to={`/appointment`}>Book an Appointment</Link></p>
        <p>Free Consultation</p>
      </div>

      <div className="footer__content">
        <h2>Company</h2>
        <p><Link to={`/about`}>About Us</Link></p>
        <p>Help Center</p>
        <p>Privacy Policy</p>
      </div>
  

      <div className="footer__mobile-content">
        <p>Find & follow us</p>

        <div className="footer__mobile-icons">
          <img src={Twitter} alt={`Twitter icon`} />
          <img src={Facebook} alt={`Facebook icon`} />
          <img src={Instagram} alt={`Instagram icon`} />
        </div>

        <div className="footer__mobile-contact">
          <p>Tel: (233) 678-0202</p>
          <p>Fax: 0300000025</p>
          <p>Email: medkit@gmail.com</p>
        </div>
        <hr/>

          <div className="span">
          <span>Copyright  &copy; </span>
          <span>2023 All Rights Reserved</span>
           </div>        
      </div>



    </section>
  );
};

export default Footer;

