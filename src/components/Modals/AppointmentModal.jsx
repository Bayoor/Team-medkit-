import React, { useState } from "react";

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
} from "@chakra-ui/react";

const AppointmentModal = ({ isOpen, onClose }) => {
  const handleClose = () => {
    history.push("/");
    onClose();
  };

 
  

  return (
    <>
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>My Modal</ModalHeader>
        <ModalBody>
          This is the content of my modal.
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    </>
  );
};

export default AppointmentModal;
