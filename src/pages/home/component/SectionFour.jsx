import React from "react";
import "../scss/SectionFour-module.scss";
import line from "../../../assets/icons/line.svg";
import people from "../../../assets/images/people.png";
import people_1 from "../../../assets/images/people_1.png";
import people_2 from "../../../assets/images/people_2.png";
import people_3 from "../../../assets/images/people_3.png";
import chat from "../../../assets/icons/chat.svg";
import call from "../../../assets/icons/call.svg";
import Live_Chat from "../../../assets/icons/Live_Chat.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

const SectionFour = () => {
  return (
    <section className="SectionFour section__padding">
      <div className="cc-container">
        <div className="SectionFour-wrapper">
          <h2>MEET OUR DOCTORS</h2>
          <img src={line} alt={`Line`} />
        </div>

        <div className="SectionFour-container">
          <div className="SectionFour-content">
            <img src={people} alt={`Picture of a bus`} />
            <h2>Dr. Jay Stephen</h2>
            <p>Optometrist</p>

            <div className="icons">
            <Link to={`/404page`}><img src={chat} alt="social_icon" /></Link>
              <Link to={`/404page`}><img src={call} alt="social_icon" /></Link>
              <Link to={`/404page`}><img src={Live_Chat} alt="social_icon" /></Link>
            </div>
          </div>

          <div className="SectionFour-content">
            <img src={people_1} alt={`Avatar`} />
            <h2>Dr. Ajay Verma</h2>
            <p>Gynecologist</p>

            <div className="icons">
            <Link to={`/404page`}><img src={chat} alt="social_icon" /></Link>
              <Link to={`/404page`}><img src={call} alt="social_icon" /></Link>
              <Link to={`/404page`}><img src={Live_Chat} alt="social_icon" /></Link>
            </div>
          </div>

          <div className="SectionFour-content">
            <img src={people_2} alt={`Picture of a clock`} />
            <h2>Dr. Aisha Joe</h2>
            <p>Paediatrician</p>

            <div className="icons">
              <Link to={`/404page`}><img src={chat} alt="social_icon" /></Link>
              <Link to={`/404page`}><img src={call} alt="social_icon" /></Link>
              <Link to={`/404page`}><img src={Live_Chat} alt="social_icon" /></Link>
              
             
              
            </div>
          </div>

          <div className="SectionFour-content">
            <img src={people_3} alt={`Picture of a clock`} />
            <h2>Dr. Stella Maris</h2>
            <p>General Physician</p>

            <div className="icons">
            <Link to={`/404page`}><img src={chat} alt="social_icon" /></Link>
              <Link to={`/404page`}><img src={call} alt="social_icon" /></Link>
              <Link to={`/404page`}><img src={Live_Chat} alt="social_icon" /></Link>
            </div>
          </div>
        </div>

        <div className="swipper">
          <Swiper slidesPerView={`auto`} spaceBetween={1} centeredSlides={true}>
            <SwiperSlide>
              <div className="pipper-content">
                <img src={people} alt={`Picture of a bus`} />
                <h2>Dr. Jay Stephen</h2>
                <p>Optometrist</p>
              </div>

              <div className="micons">
              <Link to={`/404page`}><img src={chat} alt="social_icon" /></Link>
              <Link to={`/404page`}><img src={call} alt="social_icon" /></Link>
              <Link to={`/404page`}><img src={Live_Chat} alt="social_icon" /></Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="pipper-content">
              <img src={people_1} alt={`Avatar`} />
              <h2>Dr. Ajay Verma</h2>
              <p>Gynecologist</p>

              </div>

              <div className="micons">
              <Link to={`/404page`}><img src={chat} alt="social_icon" /></Link>
              <Link to={`/404page`}><img src={call} alt="social_icon" /></Link>
              <Link to={`/404page`}><img src={Live_Chat} alt="social_icon" /></Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="pipper-content">
              <img src={people_2} alt={`Picture of a clock`} />
              <h2>Dr. Aisha Joe</h2>
              <p>Paediatrician</p>

              </div>

              <div className="micons">
              <Link to={`/404page`}><img src={chat} alt="social_icon" /></Link>
              <Link to={`/404page`}><img src={call} alt="social_icon" /></Link>
              <Link to={`/404page`}><img src={Live_Chat} alt="social_icon" /></Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="pipper-content">
              <img src={people_3} alt={`Picture of a clock`} />
              <h2>Dr. Stella Maris</h2>
              <p>General Physician</p>

              </div>

              <div className="micons">
              <Link to={`/404page`}><img src={chat} alt="social_icon" /></Link>
              <Link to={`/404page`}><img src={call} alt="social_icon" /></Link>
              <Link to={`/404page`}><img src={Live_Chat} alt="social_icon" /></Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="SectionFour-header">
          <h2>Patients Say</h2>
          <div className="SectionFour-heading">
            <div className="SectionFour-heading_content">
              <p>
                “I had a wonderful experience with Medkit. They ensured my
                health was greatly taken care of. I highly recommend Medkit.”
              </p>
              <p className="SectionFour-para">Aliya Roll</p>
            </div>

            <div className="SectionFour-heading_content">
              <p>
                “My treatment was second to none and the staffs of Medkit were
                polite and caring”
              </p>
              <p className="SectionFour-para space">Elo Zona</p>
            </div>
          </div>
        </div>

        <div className="SectionFour-wrapper mobile">
          <img src={line} alt={`Line`} />
        </div>

      </div>
        <div className="SectionFour-background">
          <h2>We Operate 24h a day - 7 days a week!</h2>
          <p ><Link to={`/404page`}>REPORT A PROBLEM</Link></p>
        </div>

    </section>
  );
};

export default SectionFour;
