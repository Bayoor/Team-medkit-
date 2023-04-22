// import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import "../scss/SectionOne-module.scss";
import Doc from "../../../assets/images/doc2.png";
import { Link } from "react-router-dom";

const SectionOne = () => {
  return (
    <section className="hero section__padding cc-container">
      <div className="hero-content ">
        <div className="hero-image">
          <img src={Doc} alt={`Doc`} />
        </div>

        <div className="hero-text">
          <h2>
            {" "}
            Get Access to Quick and
            <br /> Confidential Medical Services
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur. Ante est ulmcorper nullam
            lacus tristique diam. Nulla sed rhoncus cras neque pulvinar. Pretium
            et adipiscing sociis commodo sit sem. Ac fusce vel facilisis
            pellentesque aliquam elentum. Massa morbi phasellus viverra nisi id.
          </p>
          <button>Get Started</button>

          <div className="hero-service">
            <h2>Dr. Raj Spencer</h2>
            <span>Consultant</span>
            <button>
              <Link to={`/appointment`}>Book Appointment</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
