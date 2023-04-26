import React from "react";
// import axios from "axios";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
import Layout from "../../layout/Layout";
import ContactContent from "./component/ContactContent";
import ContactHeader from "./component/ContactHeader";
import ContactSubscribe from "./component/ContactSubscribe";
// import location from "../../assets/icons/location.svg";
// import phone_icon from "../../assets/icons/phone_icon.svg";
// import email from "../../assets/icons/email.svg";
// import time from "../../assets/icons/time.svg";
// import map from "../../assets/images/map.png";
// import contact_bg from "../../assets/images/contact_bg.png";

const ContactUs = () => {
  
  return (
    <Layout>
      <ContactHeader />
      <ContactContent />
      <ContactSubscribe />
     
          
    </Layout>
  );
};

export default ContactUs;
