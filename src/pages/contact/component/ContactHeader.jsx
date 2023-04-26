import React from 'react';
import {
    Box,
    Button,
    Flex,
    FormControl,
    Heading,
    Image,
    Input,
    Text,
    Textarea,
    useToast,
  } from "@chakra-ui/react";

  import contact_bg from "../../../assets/images/contact_bg.png";
  

const ContactHeader = () => {
  return (
   <Box bgColor={`#DEF1F9`}>
     <Box
          display={`flex`}
          justifyContent={`center`}
          alignItems={`center`}
          // padding={[`6rem 0rem`, `8rem 0`]}
          bgImage={contact_bg}
          bgSize={{base:`cover`,lg:`cover`}}
          bgRepeat={`no-repeat`}
          h={{base:`11.9rem`, md: `28.4rem`}}

          // mt={`6rem`}
        >
          <Heading
            fontSize={[`2rem`, `3.2rem`]}
            fontWeight={700}
            lineHeight={[`2.3rem`, `3.8rem`]}
            color={`#2f98c2`}
          >
            Contact Us
          </Heading>
        </Box>


   </Box>
  )
}

export default ContactHeader