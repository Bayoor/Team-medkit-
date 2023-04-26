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
      <div className="cc-container footer-wrapper  section__padding">
        <div className="footer__content">
          <div className="footer__content-item">
            <img className="footer-logo" src={logo} alt="Logo" />
            <div className="footer-text">
              <h2><Link to={`/`}>MEDKIT.COM</Link></h2>
              <p>Health is wealth</p>
            </div>
          </div>
          <div className="footer__content-text">
            <p>
              Access to medical services with Certified Medical
              <br /> Consultants on Medkit.
            </p>
            <span>Contact@medkit.com</span>
            <span>(233) 678-0202</span>
          </div>

          <div className="footer__icons">
          <Link to={`/404page`}> <img src={Twitter} alt={`Twitter icon`} /></Link>
          <Link to={`/404page`}> <img src={Facebook} alt={`Facebook icon`} /></Link>
          <Link to={`/404page`}> <img src={Instagram} alt={`Instagram icon`} /></Link>
          </div>
        </div>

        <div className="footer__content">
         <h2><Link to={`/404page`}>Information</Link></h2>
         <p><Link to={`/404page`}>Blog</Link></p>
         <p><Link to={`/404page`}>Special Offers</Link></p>
         <p><Link to={`/404page`}>F.A.Q</Link></p>
         <p><Link to={`/404page`}>Privacy Policy</Link></p>
         <p><Link to={`/404page`}>Terms and Conditions</Link></p>
         
        
        </div>

        <div className="footer__content">
        <h2><Link to={`/404page`}>Quick Links</Link></h2>
          <p>
            <Link to={`/appointment`}>Book an Appointment</Link>
          </p>
          <p><Link to={`/404page`}>Free Consultation</Link></p>
        </div>

        <div className="footer__content">
          <h2>Company</h2>
          <p>
            <Link to={`/about`}>About Us</Link>
          </p>
          <p><Link to={`/404page`}>Help Center</Link></p>
          <p><Link to={`/404page`}>Privacy Policy</Link></p>
        </div>

        <div className="footer__mobile-content">
        <p><Link to={`/404page`}>Find & follow us</Link></p>
         
          <div className="footer__mobile-icons">
            <Link to={`/404page`}> <img src={Twitter} alt={`Twitter icon`} /></Link>
            <Link to={`/404page`}> <img src={Facebook} alt={`Facebook icon`} /></Link>
          <Link to={`/404page`}> <img src={Instagram} alt={`Instagram icon`} /></Link>
          </div>

          <div className="footer__mobile-contact">
          <p><Link to={`/404page`}>Tel: (233) 678-0202</Link></p>
          <p><Link to={`/404page`}>Fax: 0300000025</Link></p>
          <p><Link to={`/404page`}>Email: medkit@gmail.com</Link></p>
          </div>
          <hr />

          <div className="span">
            <span>Copyright &copy; </span>
            <span>2023 All Rights Reserved</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
