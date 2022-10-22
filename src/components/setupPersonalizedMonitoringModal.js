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
  Input,
  HStack,
  Checkbox,
  Select,
  Text
} from "@chakra-ui/react";



const SetupPersonalizedMonitoringModal = ({ formRef, disclosure }) => {
  return (
    <>
      <Modal
        isOpen={disclosure.isOpen}
        onClose={disclosure.onClose}
        size="xl"
        isCentered>
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
        <ModalContent>
          <ModalHeader>Setup Personalize Monitoring</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl pb={5} >
              <FormLabel>Enter Title</FormLabel>
              <Input placeholder="i.e Heart Rate Monitoring" ></Input>
            </FormControl>
            <FormControl pb={5}>
              <FormLabel>Description regarding monitoring (Not Mandatory)</FormLabel>
              <Input placeholder="description" ></Input>
            </FormControl>
            <FormControl pb={5}>
              <FormLabel>Monitoring Interval (seconds)</FormLabel>
              <Input placeholder="Enter monitoring time interval" ></Input>
            </FormControl>
            <HStack pb={6}>
              <FormControl>
                <FormLabel>Disease (Not mandatory)</FormLabel>
                <Select>
                  <option selected disabled>Select</option>
                  <option>Diabetes</option>
                  <option>Heart Attack</option>
                  <option>Fever</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>AI Model (Not mandatory)</FormLabel>
                <Select>
                  <option selected disabled>Select</option>
                  <option>Heart Rate Advanced Monitor</option>
                  <option>Heart Failure Prediction</option>
                  <option>Fever</option>
                </Select>
              </FormControl>
            </HStack>
            <HStack pb={5}>
              <Checkbox colorScheme="green" mr="auto">Step Count Monito</Checkbox>
              <Input placeholder="Taget count" width="45%"></Input>
            </HStack>
            <HStack pb={5}>
              <Checkbox colorScheme="green" mr="auto">Calorie Burnt Monitor</Checkbox>
              <Input placeholder="Target count" width="45%"></Input>
            </HStack>
            <Text mb={5}>Choose Vitals to set threshold</Text>
            {/* Vital threhsolds */}
            <HStack>
              <Select >
                <option selected disabled>Choose Vital</option>
                <option>Heart Rate</option>
                <option>SPO2</option>
                <option>BP</option>
              </Select>
              <Input placeholder="Min" type="number"></Input>
              <Input placeholder="Max" type="number"></Input>
              <Input placeholder="Threshold" type="number"></Input>
              <Checkbox colorScheme="green" mr="auto">Negative</Checkbox>
            </HStack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={disclosure.onClose} mr={3}>Dismiss</Button>
            <Button colorScheme="teal" >Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};


export default SetupPersonalizedMonitoringModal;