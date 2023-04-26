import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Heading,
  FormControl,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";

const ContactSubscribe = () => {
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
        `https://medkit.onrender.com/subscribe`,
        data
      );
      console.log(response);
      toast({
        title: "Successful",
        description: " Subscription Successful",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      if (response.status === 200) {
        navigate("/signup", { replace: true });
      }
    } catch (error) {
      toast({
        title: "Error!",
        description: " Try again",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    }

    setIsLoading(false);
  };

  return (
    <Box
      bgColor={`#f5f5f5`}
      p={{base: `1rem 2.5rem`, lg: `1rem 6rem` }}
    >
      <Box className="cc-container" >

        <FormControl
          display={`flex`}
          flexDir={{base:`column`, lg:`row`}}
          justifyContent={`center`}
          alignItems={`center`}
          gap={{lg:`10.2rem`}}
          m={`0 auto`}

          onSubmit={handleSubmit(handleSubmitForm)}
          as={`form`}
        >
          {/* <Box
            display={`flex`}
            justifyContent={`center`}
            alignItems={`center`}
            gap={`3rem`}
            p={`7rem 0`}
            outline={`1px red solid`}
          > */}
            <Box
              display={[`flex`]}
              flexDir={[`column`]}
              justifyContent={[`center`, `center`]}
              alignItems={[`center`, `flex-start`]}
              h={{base:`14.8rem`, lg:`22.8rem`}}
            >
              <Heading
                fontSize={[`2rem`, `3.2rem`]}
                fontWeight={700}
                lineHeight={[`2.648rem`, `4.237rem`]}
                mt={{base: `2.1rem` ,lg: `4.3rem`}}
                textAlign={`center`}
                m={`0 auto`}
               
              >
                Subscribe
              </Heading>
              <Text
                fontSize={[`1.2rem`, `2rem`]}
                fontWeight={700}
                lineHeight={[`1.589rem`, `2.648rem`]}
              
               
              >
                Get our latest news & update regularly
              </Text>
            </Box>

            <Box display={`flex`} justifyContent={{lg: `center`}} alignItems={{lg: `center`}} pos={{lg: `relative`}} gap={{lg: `8rem`}}>

            <Box>
              <Input
                type={`email`}
                name={`email`}
                {...register("email", {
                  required: "Enter email address",
                  pattern: {
                    value: /^[^@]+@[^@]+\.[^@ .]{2,}$/,
                    message: "Email is not valid.",
                  },
                })}
                placeholder={`Type Email Address`}
                fontSize={[`1.2rem`, `2rem`]}
                fontWeight={400}
                lineHeight={[`1.589rem`, `2.644rem`]}
                textIndent={`1rem`}
                borderRadius={[`1rem`, `2rem`]}
                border={`1px solid #2F98C2`}
                w={[`24rem`, `46.3rem`]}
                h={[`3.9rem`, `6.1rem`]}
                mt={{base: `-4rem`,lg: `8.7rem`}}
                right={[`-3rem`, `-13rem`]}
                top={{base:`.2rem`, lg:`.3rem`}}
                
              />
              <Text color={`red`} m={`.5rem`} fontSize={[`1.2rem`, `1.6rem`]}>
                {errors?.email?.message}
              </Text>
            </Box>

            <Box>
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
              // position={`relative`}
              mt={{base:`-.5rem`, md:`-2rem`, lg: `8.7rem`}}

              
              type={`submit`}
              isLoading={isLoading}
              loadingText="Subscribing"
              variant="outline"
              _hover={{ bg: `#1e3542`, opacity: 1 }}
              zIndex={1}
            >
              Subscribe
            </Button>


            </Box>

            </Box>

           

                    
        </FormControl>
      </Box>
    </Box>
  );
};

export default ContactSubscribe;
