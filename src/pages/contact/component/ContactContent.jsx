import React from "react";
import axios from "axios";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Textarea,
  Heading,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import location from "../../../assets/icons/location.svg";
import phone_icon from "../../../assets/icons/phone_icon.svg";
import email from "../../../assets/icons/email.svg";
import time from "../../../assets/icons/time.svg";
import map from "../../../assets/images/map.png";

const ContactContent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const toast = useToast({ position: `top` });

  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmitForm = async (data) => {
    try {
      setIsLoading(true);

      const response = await axios.post(
        `https://medkit.onrender.com/messages`,
        data
      );
      console.log(response);
      toast({
        title: "Successful",
        description: " Message Sent",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      if (response.status === 200) {
        navigate("/signup", { replace: true });
      }
    } catch (error) {
      toast({
        title: "Error!",
        description: " Message not sent. Try again",
        status: "warning",
        duration: 1000,
        isClosable: true,
      });
    }

    setIsLoading(false);
  };

  return (
    <Box bgColor={`#DEF1F9`}>
      <div className="cc-container">
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
              padding={[`.5rem 0`, `1rem 0`]}
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
              padding={[`.5rem 0`, `1rem 0`]}
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
              padding={[`.5rem 0`, `1rem 0`]}
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
          m={`0 auto`}
          bgColor={`#f5f5f5`}
          borderRadius={{base:`1rem`, lg:`2rem`}}
          position={`relative`}
          top={[`-7rem`, `-12.8rem`]}
          w={{base:`32.5rem`, md: `65.5rem`, lg: `124rem` }}
          h={{base:`38.7rem`, md:`50rem`, lg: `65.4rem` }}
        >
          <Heading
            fontSize={[`2rem`, `3.2rem`]}
            fontWeight={700}
            lineHeight={[`2.684rem`, `4.294rem`]}
            mt={{base: `-4.8rem`}}
            mb={{base: `2rem`}}
           
          >
            Send us a message
          </Heading>

          <FormControl
            onSubmit={handleSubmit(handleSubmitForm)}
            as={`form`}
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
              gap={[`1.8rem`, `3rem`]}
             
            >
              <Box display={`flex`} flexDir={`column`} mb={{base: `1rem` , lg: `2rem`}}>
                <Text color={`red`} fontSize={[`1.2rem`, `1.6rem`]}>
                  {errors?.name?.message}
                </Text>
                <Input
                  type={`text`}
                  name={`name`}
                  {...register("name", {
                    required: "Field can't be empty",
                    message: "Enter a Name",
                  })}
                  placeholder={`Your Name*`}
                  _placeholder={{ opacity: 0.5, color: `#000` }}
                  fontSize={[`1.2rem`, `2rem`]}
                  fontWeight={400}
                  lineHeight={[`1.406rem`, `2.344rem`]}
                  w={{base:`11.8rem`, md:`25rem`, lg:`39rem`}}
                  h={[`3.9rem`, `6rem`]}
                  outline={`1px solid #2f98c2`}
                  borderRadius={[`1rem`, `2rem`]}
                  textIndent={[`1rem`, `2rem`]}
                  // mt={{base: `1.1rem`}}
                />
              </Box>

              <Box display={`flex`} flexDir={`column`}  mb={{base: `1rem` , lg: `2rem`}}>
                <Text color={`red`} fontSize={[`1.2rem`, `1.6rem`]}>
                  {errors?.phoneNo?.message}
                </Text>
                <Input
                  type={`tel`}
                  name={`phoneNo`}
                  {...register("phoneNo", {
                    required: "Enter a phone number",
                    pattern: {
                      value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s\./0-9]*$/,
                      message: "Phone number must not contain text",
                    },
                  })}
                  placeholder={`Phone*`}
                  _placeholder={{ opacity: 0.5, color: `#000` }}
                  fontSize={[`1.2rem`, `2rem`]}
                  fontWeight={400}
                  lineHeight={[`1.406rem`, `2.344rem`]}
                  w={{base:`11.8rem`, md:`25rem`, lg:`39rem`}}
                  h={[`3.9rem`, `6rem`]}
                  outline={`1px solid #2f98c2`}
                  borderRadius={[`1rem`, `2rem`]}
                  textIndent={[`1rem`, `2rem`]}
                  // mt={{base: `1.1rem`}}
                />
              </Box>
            </Box>

            <Box  mb={{base: `1rem`, lg: `2rem`}}>
              <Text color={`red`} m={`.5rem`} fontSize={[`1.2rem`, `1.6rem`]} >
                {errors?.email?.message}
              </Text>
              <Input
                type={`email`}
                name={`email`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@]+@[^@]+\.[^@ .]{2,}$/,
                    message: "Email is not valid.",
                  },
                })}
                placeholder={`Email*`}
                _placeholder={{ opacity: 0.5, color: `#000` }}
                fontSize={[`1.2rem`, `2rem`]}
                fontWeight={400}
                lineHeight={[`1.406rem`, `2.344rem`]}
                w={{base:`24.6rem`, md:`52rem`, lg: `81.3rem`}}
                h={[`3.9rem`, `6rem`]}
                outline={`1px solid #2f98c2`}
                borderRadius={[`1rem`, `2rem`]}
                textIndent={[`1rem`, `2rem`]}
              
              />
              
            </Box>

            <Box>
              <Text color={`red`} fontSize={[`1.2rem`, `1.6rem`]}  m={`.5rem`}>
                {errors?.message?.message}
              </Text>
              <Textarea
                type={`text`}
                name={`message`}
                {...register("message", {
                  required: "Field can't be empty",
                  message: "Enter a message",
                })}
                placeholder={`Message*`}
                _placeholder={{ opacity: .5, color: `#000` }}
                fontSize={[`1.2rem`, `2rem`]}
                fontWeight={400}
                lineHeight={[`1.406rem`, `2.344rem`]}
                w={{base:`24.6rem`, md:`52rem`, lg: `81.3rem`}}
                h={[`11.15rem`, `20rem`]}
                border={`1px solid #2f98c2`}
                borderRadius={[`1rem`, `2rem`]}
                textIndent={[`1rem`, `2rem`]}
                zIndex={1}
               
              />
            </Box>
            <Button
              fontSize={[`1.2rem`, `2rem`]}
              fontWeight={500}
              lineHeight={[`1.406rem`, `2.3rem`]}
              bgGradient="linear(123.09deg, #2f98c2 -7.49%, #1e3673 78.8%)"
              color={`white`}
              borderRadius={[`1rem`, `2rem`]}
              w={{base:`10.3rem`, md:`18rem`, lg: `22rem`}}
              h={[`3.537rem`, `6rem`]}
              postion={`relative`}
              top={[`-2rem`, `-3rem`]}
             
              type={`submit`}
              isLoading={isLoading}
              loadingText="Sending"
              variant="outline"
              _hover={{ bg: `#1e3542`, opacity: 1 }}
              zIndex={1}
            >
              Send Message
            </Button>
          </FormControl>
        </Box>
      </div>
    </Box>
  );
};

export default ContactContent;
