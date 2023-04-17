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
} from "@chakra-ui/react";
import React from "react";
import Layout from "../../layout/Layout";
import location from "../../assets/icons/location.svg";
import phone_icon from "../../assets/icons/phone_icon.svg";
import email from "../../assets/icons/email.svg";
import time from "../../assets/icons/time.svg";
import map from "../../assets/images/map.png";

const ContactUs = () => {
  return (
    <Layout>
      <Box bgColor={`#DEF1F9`}>
        <Box
          display={`flex`}
          justifyContent={`center`}
          alignItems={`center`}
          padding={`4rem 0`}
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

        <Flex
          justifyContent={`space-evenly`}
          alignItems={`center`}
          position={`relative`}
        >
          <Box
            fontSize={[`1.2rem`, `2rem`]}
            fontWeight={400}
            lineHeight={[`1.406rem`, `2.3rem`]}
            border={`none`}
            borderRadius={[`1rem`, `2rem`]}
            w={[`10rem`, `26.5rem`]}
            h={[`6rem`, `20.8rem`]}
            bgColor={`#F5F5F5`}
            display={`flex`}
            flexDir={`column`}
            alignItems={`center`}
            justifyContent={`center`}
            position={`relative`}
            top={[`.8rem`, `3rem`]}
          >
            <Image
              w={[`1.664rem`, `6rem`]}
              h={[`auto`, `6rem`]}
              src={location}
              alt=""
              padding={[`.5rem 0`,`1rem 0`]}
            />
            <Text textAlign={`center`}>1, Ogunlesi str, onipanu, Lagos.</Text>
          </Box>

          <Box
            fontSize={[`1.2rem`, `2rem`]}
            fontWeight={400}
            lineHeight={[`1.406rem`, `2.3rem`]}
            border={`none`}
            borderRadius={[`1rem`, `2rem`]}
            w={[`10rem`, `26.5rem`]}
            h={[`6rem`, `20.8rem`]}
            bgColor={`#F5F5F5`}
            display={`flex`}
            flexDir={`column`}
            alignItems={`center`}
            justifyContent={`center`}
            position={`relative`}
            top={[`.8rem`, `3rem`]}
          >
            <Image
              w={[`1.664rem`, `6rem`]}
              h={[`auto`, `6rem`]}
              src={phone_icon}
              alt=""
              padding={[`.5rem 0`,`1rem 0`]}
            />
            <Text>(233) 768-0202</Text>
            <Text>(234) 799-1020</Text>
          </Box>

          <Box
            fontSize={[`1.2rem`, `2rem`]}
            fontWeight={400}
            lineHeight={[`1.406rem`, `2.3rem`]}
            border={`none`}
            borderRadius={[`1rem`, `2rem`]}
            w={[`10rem`, `26.5rem`]}
            h={[`6rem`, `20.8rem`]}
            bgColor={`#F5F5F5`}
            display={`flex`}
            flexDir={`column`}
            alignItems={`center`}
            justifyContent={`center`}
            position={`relative`}
            top={[`.8rem`, `3rem`]}
          >
            <Image
              w={[`1.664rem`, `6rem`]}
              h={[`auto`, `6rem`]}
              src={email}
              alt=""
              padding={[`.5rem 0`,`1rem 0`]}
            />
            <Text>www.medkit.com</Text>
            <Text>info@medkit.com</Text>
          </Box>

          <Box
            fontSize={[`1.2rem`, `2rem`]}
            fontWeight={400}
            lineHeight={[`1.406rem`, `2.3rem`]}
            border={`none`}
            borderRadius={[`1rem`, `2rem`]}
            w={[`10rem`, `26.5rem`]}
            h={[`6rem`, `20.8rem`]}
            bgColor={`#F5F5F5`}
            display={[`none`, `flex`]}
            flexDir={`column`}
            alignItems={`center`}
            justifyContent={`center`}
            position={`relative`}
            top={`3rem`}
          >
            <Image
              w={[`1.664rem`, `6rem`]}
              h={[`1.626rem`, `6rem`]}
              src={time}
              alt=""
              padding={`1rem 0`}
            />
            <Text>24 Hours a Day</Text>
            <Text>7 Days a Week</Text>
          </Box>
        </Flex>

        <Box marginBottom={`5rem`}>
          <Image src={map} alt={`A map`} />
        </Box>

        <Box
          display={`flex`}
          flexDir={`column`}
          justifyContent={`center`}
          alignItems={`center`}
          padding={[`3rem 0`, `6rem 0`]}
          bgColor={`#f5f5f5`}
          borderRadius={`2rem`}
          margin={[`0 2.9rem`, `0 10rem`]}
          position={`relative`}
          top={[`-7rem`, `-12.8rem`]}
        >
          <Heading
            fontSize={[`2rem`, `3.2rem`]}
            fontWeight={700}
            lineHeight={[`2.684rem`, `4.294rem`]}
            margin={`4rem`}
          >
            Send us a message
          </Heading>

          <FormControl
            isRequired
            display={`flex`}
            flexDir={`column`}
            justifyContent={`center`}
            alignItems={`center`}
          >
            <Box
              display={`flex`}
              flexDir={`row`}
              alignItems={`center`}
              justifyContent={`center`}
              gap={[`1rem`, `3rem`]}
            >
              <Input
                type={`text`}
                name={`username`}
                placeholder={`Your Name*`}
                _placeholder={{ opacity: 0.5, color: `#000` }}
                fontSize={[`1.2rem`, `2rem`]}
                fontWeight={400}
                lineHeight={[`1.406rem`, `2.344rem`]}
                w={[`11.8rem`, `39rem`]}
                h={[`3.9rem`, `6rem`]}
                outline={`1px solid #2f98c2`}
                borderRadius={[`1rem`, `2rem`]}
                textIndent={[`.1rem`, `2rem`]}
              />
              <Input
                type={`tel`}
                name={`phone`}
                placeholder={`Phone*`}
                _placeholder={{ opacity: 0.5, color: `#000` }}
                fontSize={[`1.2rem`, `2rem`]}
                fontWeight={400}
                lineHeight={[`1.406rem`, `2.344rem`]}
                w={[`11.8rem`, `39rem`]}
                h={[`3.9rem`, `6rem`]}
                outline={`1px solid #2f98c2`}
                borderRadius={[`1rem`, `2rem`]}
                textIndent={[`-.1rem`, `2rem`]}
              />
            </Box>

            <Box display={`flex`}>
              <Input
                type={`email`}
                name={`email`}
                placeholder={`Email*`}
                _placeholder={{ opacity: 0.5, color: `#000` }}
                fontSize={[`1.2rem`, `2rem`]}
                fontWeight={400}
                lineHeight={[`1.406rem`, `2.344rem`]}
                marginTop={`3rem`}
                w={[`24.6rem`, `81.3rem`]}
                h={[`3.9rem`, `6rem`]}
                outline={`1px solid #2f98c2`}
                borderRadius={[`1rem`, `2rem`]}
                textIndent={[`-.1rem`, `2rem`]}
              />
            </Box>

            <Box>
              <Textarea
                placeholder={`Message*`}
                _placeholder={{ opacity: 0.5, color: `#000` }}
                fontSize={[`1.2rem`, `2rem`]}
                fontWeight={400}
                lineHeight={[`1.406rem`, `2.344rem`]}
                marginTop={`3rem`}
                w={[`24.25rem`, `81.3rem`]}
                h={[`11.15rem`, `20rem`]}
                outline={`1px solid #2f98c2`}
                borderRadius={[`1rem`, `2rem`]}
                padding={[`1rem 0`, `2rem 0`]}
                textIndent={[`.3rem`, `2rem`]}
              />
            </Box>
            <Button
              fontSize={[`1.2rem`, `2rem`]}
              fontWeight={500}
              lineHeight={[`1.406rem`, `2.3rem`]}
              bgGradient="linear(123.09deg, #2f98c2 -7.49%, #1e3673 78.8%)"
              color={`white`}
              borderRadius={[`1rem`, `2rem`]}
              w={[`10.3rem`, `22rem`]}
              h={[`3.537rem`, `6rem`]}
              // padding={[`1rem 1rem`,`4rem 6rem`]}
              postion={`relative`}
              top={[`-2rem`, `-3rem`]}
              _hover={{ bg: `#2f98c2` }}
            >
              Send Message
            </Button>
          </FormControl>
        </Box>

        <Flex
          flexDir={[`column`, `row`]}
          justifyContent={`space-around`}
          alignItems={`center`}
          bgColor={`#f5f5f5`}
          padding={`9rem 0`}
        >
          <Box
            display={[`flex`]}
            flexDir={[`column`]}
            justifyContent={[`center`, `start`]}
            alignItems={[`center`, `flex-start`]}
          >
            <Heading
              fontSize={[`2rem`, `3.2rem`]}
              fontWeight={700}
              lineHeight={[`2.648rem`, `4.237rem`]}
              m={[`1rem`]}
            >
              Subscribe
            </Heading>
            <Text
              fontSize={[`1.2rem`, `2rem`]}
              fontWeight={700}
              lineHeight={[`1.589rem`, `2.648rem`]}
              m={[`1rem`]}
            >
              Get our latest news & update regularly
            </Text>
          </Box>

          <Box display={`flex`} justifyContent={`center`} alignItems={`center`}>
            <Box>
              <Input
                type={`email`}
                name={`email`}
                placeholder={`Type Email Address`}
                fontSize={[`1.2rem`, `2rem`]}
                fontWeight={400}
                lineHeight={[`1.589rem`, `2.644rem`]}
                textIndent={`1rem`}
                borderRadius={[`1rem`, `2rem`]}
                border={`1px solid #2F98C2`}
                w={[`24rem`, `46.3rem`]}
                h={[`3.9rem`, `6.1rem`]}
              />
            </Box>

            <Button
              fontSize={[`1.2rem`, `2rem`]}
              fontWeight={500}
              lineHeight={[`1.589rem`, `2.6rem`]}
              bgGradient="linear(123.09deg, #2f98c2 -7.49%, #1e3673 78.8%)"
              color={`white`}
              borderRadius={[`1rem`, `2rem`]}
              border={`1px solid #2F98C2`}
              w={[`10.8rem`, `17.5rem`]}
              h={[`3.9rem`, `6.2rem`]}
              position={`relative`}
              right={[`1rem`, `3rem`]}
              _hover={{ bg: `#1e3673` }}
            >
              Subscribe
            </Button>
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
};

export default ContactUs;
