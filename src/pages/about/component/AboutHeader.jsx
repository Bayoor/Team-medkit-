import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";
import image from "../../../assets/images/background_image.png";

const AboutHeader = () => {
  return (
    <Box
      display={`flex`}
      flexDir={`column`}
      justifyContent={`center`}
      alignItems={`center`}
      color={`white`}
      bgColor={`red`}
      padding={`7rem 0rem`}
      bgImage={image}
    >
      <Heading
        as={`h2`}
        marginBottom={`1.6rem`}
        fontWeight={700}
        fontSize={[`2rem`, `3.2rem`]}
        lineHeight={[`2.684rem`, `4.3rem`]}
      >
        Health is Wealth
      </Heading>
      <Text
        textAlign={`center`}
        fontWeight={500}
        fontSize={[`1.2rem`, `2rem`]}
        lineHeight={[`1.61rem`, `134.19%`]}
      >
        Health is most important in your daily life. We
        <br /> strive to offer nothing but quality healthcare.
        <br /> You are rest assured your wellbeing and health
        <br /> are in safe hands.
      </Text>
      <Button
        rightIcon={<BiChevronRight />}
        borderRadius={[`1.5rem`, `2rem`]}
        w={[`11.4rem`, `19.2rem`]}
        h={[`3.9rem`, `6rem`]}
        fontWeight={400}
        fontSize={[`1.2rem`, `2rem`]}
        lineHeight={[`1.406rem`, `2.3rem`]}
        margin={`2rem 0`}
        color={`#1E3673`}
        _hover={{ bg: `#1E3673`, color: `#fff`}}
      >
        Find a Doctor
      </Button>
    </Box>
  );
};

export default AboutHeader;
