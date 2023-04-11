// import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import "../scss/SectionOne-module.scss";
import Doc from "../../../assets/images/doc2.png";

const SectionOne = () => {
  return (
    <section className="hero container section__padding">
      <div className="hero-content">
        <div className="hero-image">
          <img src={Doc} alt={`Doc`} />
        </div>

        <div className="hero-text">
          <h2> Get Access to Quick and<br/> Confidential Medical Services</h2>

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
            <button>Book Appointment</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;

{
  /* <Box
display={`flex`}
justifyContent={`center`}
alignItems={`center`}
gap={`5rem`}
backgroundImage='url("../../../assets/images/rectangle.png")'
>
  <Box>
    <Image src={Doc} alt={`Doc`} />
  </Box>

  <Box
  display={`flex`}
  flexDirection={`column`}
  justifyContent={`flex-start`}
  alignItems={`flex-start`}
  // padding={`0 3rem`}
  
  >
    <Heading 
    as={`h2`} 
    // size={`lg`} 
    fontSize={`2rem`} 
    fontWeight={700}
    // width={`460px`}
    lineHeight={`44px`}
    outline={`1px solid red`}
    
    >
      Get Access to Quick and<br/> Confidential Medical Services
    </Heading>
    <Text
    width={`542px`}
    >
      Lorem ipsum dolor sit amet consectetur. Ante est ulmcorper<br/> nullam
      lacus tristique diam. Nulla sed rhoncus cras neque<br/> pulvinar. Pretium
      et adipiscing sociis commodo sit sem. Ac<br/> fusce vel facilisis
      pellentesque aliquam elentum. Massa<br/> morbi phasellus viverra nisi id.
    </Text>
  </Box>
</Box> */
}
