import React from "react";
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import service_bg from "../../../assets/images/service_bg.png";

const ServicesHeading = () => {
  return (
    <Box bgColor={`#DEF1F9`}>
      <Box
       
        bgImage={service_bg}
        bgRepeat={`no-repeat`}
        bgSize={{base:`contain`,  lg: `cover` }}
        h={{base: `18.6rem`, lg: `43.5rem`}}
       
        mt={{base: `-8rem`, lg: `-3rem`}}
        // style={{height: '43.5rem'}}
      >
        <Box
        className="cc-container" 
          display={`flex`}
          flexDir={`column`}
          justifyContent={[`center`]}
          alignItems={[`center`]}
          padding={`8rem 0`}
          w={[`100%`, `40%`]}
          margin={`8rem auto`}
          marginBottom={`12rem`}
        >
          <Heading
            color={`#2f98c2`}
            fontSize={{base: `2rem`, lg: `3.2rem`}}
            fontWeight={700}
            lineHeight={{base: `2.684rem`, lg:`4.3rem`}}
            mt={{base: `-6rem`, lg: `0`}}
          >
            Services
          </Heading>
          <Text
            fontSize={[`1.2rem`, `1.6rem`, `2rem`]}
            fontWeight={400}
            lineHeight={[`1.61rem`, `2.684rem`]}
            marginTop={[`1rem`, `3rem`]}
            textAlign={[`center`]}
            p={{base:`0 3rem`, md: `0`}}
          >
            Lorem ipsum dolor sit amet consectetur. Ac tellus sed proin
            ullamcorper arcu ut eget augue. Fermentum eget id massa morbi risus.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ServicesHeading;
