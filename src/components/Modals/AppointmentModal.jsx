import React from "react";
import { Link } from "react-router-dom";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";

import notify_icon from "../../assets/icons/notify_icon.svg";
import line_4 from "../../assets/images/line_4.png";

const AppointmentModal = ({ isOpen, onClose }) => {
  // const handleClose = () => {
  //   history.push("/");
  //   onClose();
  // };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          w={`37.5rem`}
          h={`22.6rem`}
          borderRadius={{ lg: `10px 10px 0px 0px` }}
        >
          <ModalHeader
            bgColor={`#2f98c2`}
            fontSize={{ lg: `2rem` }}
            fontWeight={400}
            lineHeight={{ lg: `2.684rem` }}
            textAlign={`center`}
            color={`#fff`}
            mb={{ lg: `2.1rem` }}
          >
            Appointment Successful!
          </ModalHeader>
          <ModalBody
            fontSize={`1.2rem`}
            fontWeight={400}
            lineHeight={`1.61rem`}
            textAlign={`center`}
            color={`#1E3673`}
            borderBottom={`1px solid rgba(0, 0, 0, 0.3)`}
            mb={`3rem`}
           
            >
            <Box display={`flex`} flexDir={`column`} justifyContent={`center`} alignItems={`center`}  >
              <img src={notify_icon} alt=""  />
              <Text mt={{lg: `1.219rem`}}><Link to={`/`}>Go back to home page</Link></Text >
             
            </Box>
            

          </ModalBody>
          <ModalFooter>
            <Button
              onClick={onClose}
              fontSize={`1.2rem`}
              fontWeight={400}
              lineHeight={`1.61rem`}
              textAlign={`center`}
              bgColor={`#1E3673`}
              color={`#fff`}
              m={`0 auto`}
              w={{ lg: `9.7rem` }}
              h={{ lg: `3.9rem` }}
              borderRadius={{ lg: `1rem` }}
              // mt={{lg:`-2.7rem`}}
            >
              <Link to={`/`}>Continue</Link>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AppointmentModal;
