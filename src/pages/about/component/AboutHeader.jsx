import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";
import image from "../../../assets/images/background_image.png";
import { Link } from "react-router-dom";

const AboutHeader = () => {
  return (
    <Box
      display={`flex`}
      flexDir={`column`}
      justifyContent={`center`}
      alignItems={`center`}
      color={`white`}
      bgImage={image}
      backgroundRepeat={`no-repeat`}
      backgroundSize={{base:`cover`, md: `contain`, xxl: `cover`}}
      h={{base:`100%`, md:`28rem`,  lg: `52.6rem`}}
      w={{base:`100%`}}
      pb={{base: `2.4rem`}}
    
    >
      <Heading
        as={`h2`}
        paddingTop={{base:`2.4rem`, md:`1.2rem`, lg:`1.6rem`}}
        fontWeight={700}
        fontSize={{ base:`2rem`,lg: `3.2rem`}}
        lineHeight={{base:`2.684rem`, md:`2.8rem`, lg:`4.3rem`}}
      >
        Health is Wealth
      </Heading>
      <Text
        textAlign={`center`}
        fontWeight={500}
        fontSize={{base:`1.2rem`, md:`1.6rem`, lg:`2rem`}}
        lineHeight={{base:`1.61rem`, md:`2rem`, lg:`134.19%`}}
      >
        Health is most important in your daily life. We
        <br /> strive to offer nothing but quality healthcare.
        <br /> You are rest assured your wellbeing and health
        <br /> are in safe hands.
      </Text>
      <Button
        rightIcon={<BiChevronRight />}
        borderRadius={[`1.5rem`, `2rem`]}
        w={{base:`11.4rem`, md: `15rem`, lg:`19.2rem`}}
        h={{base:`3.9rem`, md:`5.2rem`, lg:`6rem`}}
        fontWeight={400}
        fontSize={{base:`1.2rem`, md:`1.6rem`, lg:`2rem`}}
        lineHeight={{base:`1.406rem`, md:`1.8rem`, lg:`2.3rem`}}
        p={{base:`1rem 0`, md:`1.3rem 0`, lg:`2rem 0`}}
        mt={{base:`1rem`, lg:`2rem`}}
        color={`#1E3673`}
        _hover={{ bg: `#1E3673`, color: `#fff`}}
      >
        <Link to={`/404page`}> Find a Doctor</Link>
      </Button>
    </Box>
  );
};

export default AboutHeader;
