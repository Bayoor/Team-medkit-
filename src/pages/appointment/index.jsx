import {
  Box,
  Button,
  Flex,
  FormControl,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import AppointmentLayout from "../../layout/AppointmentLayout";
import line from "../../assets/icons/line_1.svg";
import Doc from "../../assets/images/doc3.png";
import AppointmentModal from "../../components/Modals/AppointmentModal";

const Appointment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const toast = useToast({ position: `top` });

  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmitForm = async (data) => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `https://medkit.onrender.com/appointments`,
        data
      );
      console.log(response);
      toast({
        title: "Successful",
        description: " Appointment Booked",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      // if (response.status === 200) {
      //   navigate("/", { replace: true });
      // }
    } catch (error) {
      toast({
        title: "Error!",
        description: " Failed. Try again",
        status: "warning",
        duration: 1000,
        isClosable: true,
      });
    }

    setIsLoading(false);
  };

  // const location = useLocation();
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // useEffect(() => {
  //   if (location.submit === "successful") {
  //     setIsModalOpen(true);
  //   }
  // }, [location.search]);

  // const handleButtonClick = () => {
  //   setIsModalOpen(true);
  // };

  // const AppointmentModalWithRouter = withRouter(AppointmentModal);

  // const history = useHistory();

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDQxMmI5Yjc3NWYzZjQ3M2UxNjZhMmUiLCJpYXQiOjE2ODI0NDU0OTAsImV4cCI6MTY4MjUzMTg5MH0.BPJHjf-yKsnF_BieG4ZWp6RktttY_nDiH5GDQjx8Gfs";

  // localStorage.setItem(token);

  return (
    <AppointmentLayout>
      <AppointmentModal  />
      <Flex
        justifyContent={`center`}
        alignItems={`center`}
        bgColor={`#DEF1F9`}
        padding={[`4rem 0`, `8rem 0`]}
      >
        <Box
          display={`flex`}
          flexDir={`column`}
          justifyContent={`center`}
          alignItems={`center`}
          bgColor={[`#DEF1F9`, `#fff`]}
          w={`61.9rem`}
          h={`63.3rem`}
        >
          <FormControl onSubmit={handleSubmit(handleSubmitForm)} as={`form`}>
            <Text
              fontSize={[`2rem`, `3.2rem`]}
              fontWeight={600}
              lineHeight={[`2.344rem`, `3.8rem`]}
              textAlign={`center`}
              margin={[`2rem 0`, `1rem 0`]}
            >
              MAKE AN APPOINTMENT
            </Text>

            <Box
              display={`flex`}
              justifyContent={`center`}
              alignItems={`center`}
              gap={`1.6rem`}
              padding={[`2rem 0`, `1rem 0`]}
            >
              <Image src={line} alt={`A line`} />
              <Image src={line} alt={`A line`} />
              <Image src={line} alt={`A line`} />
            </Box>

            <Box
              display={`flex`}
              flexDir={`column`}
              justifyContent={`center`}
              alignItems={`center`}
              padding={[`1rem 0`, `.5rem 0`]}
            >
              <Input
                type={`text`}
                name={`firstname`}
                {...register("firstname", {
                  required: "Enter Name",
                  pattern: {
                    value: /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/,
                    message: "Name must start with capital letter",
                  },
                })}
                placeholder={`First Name*`}
                w={[`32.5rem`, `51rem`]}
                h={[`3.9rem`, `7.4rem`]}
                borderRadius={[`2rem`, `5rem`]}
                fontSize={[`1.2rem`, `2rem`]}
                fontWeight={400}
                lineHeight={[`1.406rem`, `2.3rem`]}
                textIndent={`1rem`}
                bgColor={[`#fff`]}
              />
              <Text
                color={`red`}
                display={`flex`}
                flexDir={`column`}
                justifyContent={`start`}
                alignSelf={`flex-start`}
                margin={[`1rem 5rem`, `.5rem 7rem`]}
              >
                {errors?.firstname?.message}
              </Text>
            </Box>

            <Box
              display={`flex`}
              flexDir={`column`}
              justifyContent={`center`}
              alignItems={`center`}
              padding={[`1rem 0`, `.5rem 0`]}
            >
              <Input
                type={`text`}
                name={`lastname`}
                {...register("lastname", {
                  required: "Enter Name",
                  pattern: {
                    value: /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/,
                    message: "Name must start with capital letter",
                  },
                })}
                placeholder={`Last Name*`}
                w={[`32.5rem`, `51rem`]}
                h={[`3.9rem`, `7.4rem`]}
                borderRadius={[`2rem`, `5rem`]}
                fontSize={[`1.2rem`, `2rem`]}
                fontWeight={400}
                lineHeight={[`1.406rem`, `2.3rem`]}
                textIndent={`1rem`}
                bgColor={[`#fff`]}
              />
              <Text
                color={`red`}
                display={`flex`}
                flexDir={`column`}
                justifyContent={`start`}
                alignSelf={`flex-start`}
                margin={[`1rem 5rem`, `.5rem 7rem`]}
              >
                {errors?.lastname?.message}
              </Text>
            </Box>

            <Box
              display={`flex`}
              flexDir={`column`}
              justifyContent={`center`}
              alignItems={`center`}
              padding={[`1rem 0`, `.5rem 0`]}
            >
              <Input
                type={`tel`}
                name={`phoneNo`}
                {...register("phoneNo", {
                  required: "Enter phone number",
                  pattern: {
                    value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s\./0-9]*$/,
                    message: "Phone number must not contain text",
                  },
                })}
                placeholder={`Phone no*`}
                w={[`32.5rem`, `51rem`]}
                h={[`3.9rem`, `7.4rem`]}
                borderRadius={[`2rem`, `5rem`]}
                fontSize={[`1.2rem`, `2rem`]}
                fontWeight={400}
                lineHeight={[`1.406rem`, `2.3rem`]}
                textIndent={`1rem`}
                bgColor={[`#fff`]}
              />
              <Text
                color={`red`}
                display={`flex`}
                flexDir={`column`}
                justifyContent={`start`}
                alignSelf={`flex-start`}
                margin={[`1rem 5rem`, `.5rem 7rem`]}
              >
                {errors?.phoneNo?.message}
              </Text>
            </Box>

            <Box
              display={`flex`}
              flexDir={`column`}
              justifyContent={`center`}
              alignItems={`center`}
              padding={[`1rem 0`, `.5rem 0`]}
            >
              <Input
                type={`date`}
                name={`appointmentDate`}
                {...register("appointmentDate", {
                  required: "Choose a date",
                  pattern: {
                    value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s\./0-9]*$/,
                    message: "Date must not contain text",
                  },
                })}
                placeholder={`Appointment Date*`}
                w={[`32.5rem`, `51rem`]}
                h={[`3.9rem`, `7.4rem`]}
                borderRadius={[`2rem`, `5rem`]}
                fontSize={[`1.2rem`, `2rem`]}
                fontWeight={400}
                lineHeight={[`1.406rem`, `2.3rem`]}
                textIndent={`1rem`}
                bgColor={[`#fff`]}
              />
            </Box>
            <Text
              color={`red`}
              display={`flex`}
              flexDir={`column`}
              justifyContent={`start`}
              alignSelf={`flex-start`}
              margin={[`1rem 5rem`, `.5rem 7rem`]}
            >
              {errors?.appointmentDate?.message}
            </Text>

            <Box display={`flex`} justifyContent={`center`} padding={`2rem 0`}>
              <Button
                fontSize={[`1.2rem`, `2rem`]}
                fontWeight={700}
                lineHeight={[`1.406rem`, `2.3rem`]}
                w={[`8.9rem`, `26.5rem`]}
                h={[`3.9rem`, `7.4rem`]}
                color={`#fff`}
                bgColor={`#2f98c2`}
                borderRadius={[`2rem`, `5rem`]}
                type={`submit`}
                // onClick={handleButtonClick}
                isLoading={isLoading}
                loadingText="Subscribing"
                variant="outline"
                _hover={{ bg: `#1e3542`, opacity: 1 }}
              >
                REQUEST
              </Button>
            </Box>
          </FormControl>
        </Box>

        <Box
          display={[`none`, `none`, `none`, `flex`]}
          flexDir={`row`}
          justifyContent={`center`}
          alignItems={`center`}
          marg={`0 auto`}
        >
          <Image src={Doc} alt={` A female Doctor with a patient`} />
        </Box>
      </Flex>
    </AppointmentLayout>
  );
};

export default Appointment;
