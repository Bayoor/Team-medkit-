import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import facebook from "../../assets/images/facebook.png";
import gmail from "../../assets/images/gmail.png";
import linkedIn from "../../assets/images/linkedIn.png";
import healthWorker from "../../assets/images/health-worker2.png";

const SignUp = () => {
 
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const toast = useToast({ position: " top" });

  const [isLoading, setIsLoading] = React.useState(false);

  const baseUrl =  `https://medkit.onrender.com/signup`

  const handleSubmitForm = async (data) => {
    try {
      setIsLoading(true);

      const res = await axios.post(baseUrl, data);
      console.log(res);
      toast({
        title: "Successful",
        description: " Registration Successful",
        status: "success",
        duration: 9000,
        isClosable: true,
       
      });
      if(staus===200) {
        nagivate(`/login`)
      }
    } catch(error) {
      toast({
        title: "Error!",
        description: " Email or Password not correct",
        status: "warning",
        duration: 9000,
        isClosable: true,
       
      });
    }

    setIsLoading(false);
  };

  return (
    <Box  bgColor={`#def1f9`} p={{base: `1rem 2.5rem`, lg: `1rem 6rem`}}>

<Flex
      justifyContent={`space-around`}
      className={`cc-container`}
      bgColor={`#def1f9`}
      paddingTop={`5rem`}
      paddingBottom={`5rem`}
    >
      <Box
        display={`flex`}
        flexDir={`column`}
        alignItems={`center`}
        justifyContent={`center`}
      >
        <Box
          display={`flex`}
          flexDir={`row`}
          alignItems={`center`}
          justifyContent={`center`}
          marginTop={`-2rem`}
          marginBottom={`2rem`}
        >
          <Box>
            <Image marginTop={`1.5rem`} src={logo} alt={`Logo`} />
          </Box>

          <Box
            display={`flex`}
            flexDir={`column`}
            justifyContent={`center`}
            alignContent={`center`}
          >
            <Heading
              fontSize={[`1.846rem`, `2.2rem`, `2.8rem`, `3.2rem`]}
              fontWeight={700}
              lineHeight={[`2.163rem`, `3.75rem`]}
            >
              MEDKIT.COM
            </Heading>
            <Text
              fontSize={[`1.154rem`, `1.7rem`, `2rem`]}
              fontWeight={400}
              lineHeight={[`1.352rem`, `2rem`, `2.344rem`]}
              textAlign={`center`}
            >
              Health is wealth
            </Text>
          </Box>
        </Box>
        <Box>
          <Heading
            fontSize={[`2rem`, `2.6rem`, `3rem`, `3.2rem`]}
            fontWeight={600}
            lineHeight={[`2.684rem`, `3.2rem`, `4.294rem`]}
            marginBottom={`2rem`}
          >
            Create an Account
          </Heading>
          <Box
            display={`flex`}
            justifyContent={`space-evenly`}
            alignItems={`center`}
            marginBottom={`2rem`}
          >
            <Image src={facebook} alt={`Facebook logo`} />
            <Image src={gmail} alt={`Gmail logo`} />
            <Image src={linkedIn} alt={`LinkedIn`} />
          </Box>
          <Text
            fontSize={[`1.2rem`, `1.6rem`, `1.8rem`, `2rem`]}
            fontWeight={400}
            lineHeight={[`1,586rem`, `2.644rem`]}
            marginBottom={`2rem`}
          >
            Or use your email address:
          </Text>
        </Box>

        <FormControl
          onSubmit={handleSubmit(handleSubmitForm)}
          as={`form`}
          display={`flex`}
          flexDir={`column`}
          alignItems={`center`}
          justifyContent={`center`}
        >
          <Box marginBottom={`3rem`}>
            <FormLabel
              fontSize={[`1.2rem`, `2rem`]}
              fontWeight={400}
              lineHeight={[`1,586rem`, `2.644rem`]}
              textAlign={`center`}
              htmlFor={`fullname`}
            >
              Full Name
            </FormLabel>
            <Input
              type={`text`}
              id={`fullname`}
              name={`fullname`}
              {...register("fullname", {
                required: "Name is required",
                pattern: {
                  value: /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/,
                  message: (
                    <Text>
                      Name must start with capital letter, special character is
                      allowed <br /> but optional and it must not end with an
                      hyphen
                    </Text>
                  ),
                },
              })}
              placeholder={`Aisha Oyelola`}
              fontSize={[`1.2rem`, `1.6rem`, `2rem`]}
              fontWeight={400}
              lineHeight={[`1,586rem`, `2.644rem`]}
              w={[`32.5rem`, `30rem`, `46.7rem`]}
              h={[`3.9rem`, `3.9rem`, `6rem`]}
              borderRadius={[`2rem`, `3rem`]}
              bgColor={`#fff`}
              textAlign={`center`}
              outline={`2px solid  rgba(0, 0, 0, 0.2)`}
            />
            <Text
              color={`red`}
              display={`flex`}
              // flexDir={`column`}
              justifyContent={`start`}
              alignItems={`flex-start`}
              margin={"1rem ,  1rem"}
            >
              {errors?.fullname?.message}
            </Text>
          </Box>

          <Box marginBottom={`3rem`}>
            <FormLabel
              fontSize={[`1.2rem`, `2rem`]}
              fontWeight={400}
              lineHeight={[`1,586rem`, `2.644rem`]}
              textAlign={`center`}
              htmlFor={`email`}
            >
              Email
            </FormLabel>
            <Input
              type={`email`}
              id={`email`}
              name={`email`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@]+@[^@]+\.[^@ .]{2,}$/,
                  message: "Email is not valid.",
                },
              })}
              placeholder={`Or use your email address:`}
              fontSize={[`1.2rem`, `2rem`]}
              fontWeight={400}
              lineHeight={[`1,586rem`, `2.644rem`]}
              w={[`32.5rem`, `30rem`, `46.7rem`]}
              h={[`3.9rem`, `3.9rem`, `6rem`]}
              borderRadius={[`2rem`, `3rem`]}
              bgColor={`#fff`}
              textAlign={`center`}
              outline={`2px solid  rgba(0, 0, 0, 0.2)`}
            />
            <span
              style={{
                color: "red",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                margin: "1rem   1rem",
              }}
            >
              {errors?.email?.message}
            </span>
          </Box>

          <Box marginBottom={`2rem`}>
            <FormLabel
              fontSize={[`1.2rem`, `2rem`]}
              fontWeight={400}
              lineHeight={[`1,586rem`, `2.644rem`]}
              textAlign={`center`}
              htmlFor={`password`}
            >
              Password
            </FormLabel>
            <Input
              type={`password`}
              id={`password`}
              name={`password`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password should be at least 8 characters",
                },
                pattern: {
                  value:
                    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                  message: (
                    <Text>
                      Password must have 1 uppercase, 1 lowercase and
                      <br /> a special character
                    </Text>
                  ),
                },
              })}
              placeholder={`Min 8 characters`}
              fontSize={[`1.2rem`, `2rem`]}
              fontWeight={400}
              lineHeight={[`1,586rem`, `2.644rem`]}
              w={[`32.5rem`, `30rem`, `46.7rem`]}
              h={[`3.9rem`, `3.9rem`, `6rem`]}
              borderRadius={[`2rem`, `3rem`]}
              bgColor={`#fff`}
              textAlign={`center`}
              outline={`2px solid  rgba(0, 0, 0, 0.2)`}
            />
            <span
              style={{
                color: "red",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                margin: "1rem   1rem",
              }}
            >
              {errors?.password?.message}
            </span>
          </Box>

          <Box marginBottom={`3rem`}>
            <Button
              fontSize={[`1.2rem`, `2rem`]}
              fontWeight={400}
              lineHeight={[`1,586rem`, `2.644rem`]}
              w={[`32.5rem`, `30rem`, `46.7rem`]}
              h={[`3.9rem`, `3.9rem`, `6rem`]}
              borderRadius={`2rem`}
              bgColor={`#1e3673`}
              textAlign={`center`}
              color={`#fff`}
              type={`submit`}
              isLoading={isLoading}
              loadingText="Signing Up"
              // colorScheme='teal'
              variant="outline"
              _hover={{ bg: `#1e3542`, opacity: 1 }}
            >
              Sign Up
            </Button>
          </Box>

          <Box
            display={`flex`}
            justifyContent={`space-evenly`}
            alignItems={`center`}
            gap={`1.6rem`}
          >
            <Text
              fontSize={[`1.2rem`, `2rem`]}
              fontWeight={400}
              lineHeight={[`1,586rem`, `2.644rem`]}
            >
              Already a user?
            </Text>
            <Text
              fontSize={[`1.2rem`, `2rem`]}
              fontWeight={400}
              lineHeight={[`1,586rem`, `2.644rem`]}
              color={`#2f98c2`}
            >
              <Link to={`/login`}>Log In</Link>
            </Text>
          </Box>
        </FormControl>
      </Box>

      <Box>
        <Image
          src={healthWorker}
          display={{ base: `none`, md: `none`, lg: `flex` }}
          alt={`A picture of a female Doctor`}
        />
      </Box>
    </Flex>


      </Box>


     );
};

export default SignUp;
