import React from "react";
import "../scss/SectionThree-module.scss";
import line from "../../../assets/icons/line.svg";
import bus from "../../../assets/icons/bus.svg";
import avatar from "../../../assets/icons/avatar.svg";
import clock from "../../../assets/icons/clock.svg";



const SectionThree = () => {
  return (
    <section className="SectionThree section__padding ">
      <div className="SectionThree-wrapper">
        <h2>MEDKIT SPECIALITIES</h2>
        <img src={line} alt={`Line`} />
      </div>

      <div className="SectionThree-container">
        <div className="SectionThree-content first">
          <img src={bus} alt={`Picture of a bus`} />
          <h2>FASTEST AMBULANCE</h2>
          <p>We provide you with experienced and highly professional doctors with the aim of providing exceptional care.</p>
        </div>

        <div className="SectionThree-content second">
          <img src={avatar} alt={`Avatar`} />
          <h2>PROFESSIONAL DOCTORS</h2>
          <p>We provide you with experienced and highly professional doctors with the aim of providing exceptional care.</p>
        </div>

        <div className="SectionThree-content third">
          <img src={clock} alt={`Picture of a clock`} />
          <h2>BEST SERVICES</h2>
          <p>We are committed to providing healthcare services with the consideration of patients satisfaction. Our patients come first!</p>
        </div>

      </div>

    </section>
  )
}

export default SectionThree