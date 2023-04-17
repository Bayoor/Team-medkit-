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
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import facebook from "../../assets/images/facebook.png";
import gmail from "../../assets/images/gmail.png";
import linkedIn from "../../assets/images/linkedIn.png";
import healthWorker from "../../assets/images/health-worker2.png";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleSubmitForm = (data) => {
    reset();
    console.log(data);
  };

  return (
    <Flex
      justifyContent={`space-around`}
      className="section__padding"
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
              fontSize={[`1.846rem`, `3.2rem`]}
              fontWeight={700}
              lineHeight={[`2.163rem`, `3.75rem`]}
            >
              MEDKIT.COM
            </Heading>
            <Text
              fontSize={[`1.154rem`, `2rem`]}
              fontWeight={400}
              lineHeight={[`1.352rem`, `2.344rem`]}
              textAlign={`center`}
            >
              Health is wealth
            </Text>
          </Box>
        </Box>
        <Box>
          <Heading
            fontSize={[`2rem`, `3.2rem`]}
            fontWeight={600}
            lineHeight={[`2.684rem`, `4.294rem`]}
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
            fontSize={[`1.2rem`, `2rem`]}
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
            >
              Full Name
            </FormLabel>
            <Input
              type={`text`}
              name={`name`}
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/,
                  message:
                    "Name must start with capital letter, special character is allowed but optional and it must not end with an hyphen.",
                },
              })}
              id={`full name`}
              placeholder={`Aisha Oyelola`}
              fontSize={[`1.2rem`, `2rem`]}
              fontWeight={400}
              lineHeight={[`1,586rem`, `2.644rem`]}
              w={[`32.5rem`, `46.7rem`]}
              h={[`3.9rem`, `6rem`]}
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
              {errors?.name?.message}
            </span>
          </Box>

          <Box marginBottom={`3rem`}>
            <FormLabel
              fontSize={[`1.2rem`, `2rem`]}
              fontWeight={400}
              lineHeight={[`1,586rem`, `2.644rem`]}
              textAlign={`center`}
            >
              Email
            </FormLabel>
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
              id={`Email`}
              placeholder={`Or use your email address:`}
              fontSize={[`1.2rem`, `2rem`]}
              fontWeight={400}
              lineHeight={[`1,586rem`, `2.644rem`]}
              w={[`32.5rem`, `46.7rem`]}
              h={[`3.9rem`, `6rem`]}
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
            >
              Password
            </FormLabel>
            <Input
              type={`password`}
              name={`password`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password should be at least 8 characters",
                },
                pattern: {
                  value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/,
                  message:
                    "Password must have 1 uppercase, 1 lowercase and a special character",
                },
              })}
              id={`Password`}
              placeholder={`Min 8 characters`}
              fontSize={[`1.2rem`, `2rem`]}
              fontWeight={400}
              lineHeight={[`1,586rem`, `2.644rem`]}
              w={[`32.5rem`, `46.7rem`]}
              h={[`3.9rem`, `6rem`]}
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
              w={[`32.5rem`, `46.7rem`]}
              h={[`3.9rem`, `6rem`]}
              borderRadius={`2rem`}
              bgColor={`#1e3673`}
              textAlign={`center`}
              color={`#fff`}
              type={`submit`}
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
        <Image src={healthWorker} alt={`A picture of a female Doctor`} />
      </Box>
    </Flex>
  );
};

export default SignUp;
