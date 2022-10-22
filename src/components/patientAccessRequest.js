import React from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  FormControl,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormLabel,
  ModalFooter,
  Button,
  Input
} from "@chakra-ui/react";



const PatientAccessRequestModal = ({ formRef, disclosure, requestOnClick }) => {
  return (
    <>
      <Modal
        isOpen={disclosure.isOpen}
        onClose={disclosure.onClose}
        isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Send request to access data </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl >
              <FormLabel><i>Enter userid of patient</i></FormLabel>
              <Input placeholder="i.e ae56sdsr" onChange={(e)=>formRef.current.userid=e.target.value}></Input>              
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={disclosure.onClose} mr={3}>Dismiss</Button>
            <Button colorScheme="teal" onClick={requestOnClick} >Submit Request</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};


export default PatientAccessRequestModal;