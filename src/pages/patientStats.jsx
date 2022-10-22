import React, { useEffect } from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { RepeatIcon, AddIcon } from "@chakra-ui/icons";

import PatientSearchModal from "../components/patientSearchModal";
import PatientAccessRequestModal from "../components/patientAccessRequest";
import Drawchart from "../components/drawChart";
import SetupPersonalizedMonitoringModal from "../components/setupPersonalizedMonitoringModal";

const PatientStatsPage = () => {
  const modalUseDisclosureForSetupPersonalizeMonitoring = useDisclosure();

  return (
    <>
      <SetupPersonalizedMonitoringModal
        disclosure={modalUseDisclosureForSetupPersonalizeMonitoring}
      />
      <div className="patientStats">
        <div className="header">
          <HStack spacing={20}>
            <Text fontWeight={600}>Tanmoy Sarkar</Text>
            <HStack>
              <Text fontWeight={600}>Age</Text>
              <Text>15 yr</Text>
            </HStack>
            <HStack>
              <Text fontWeight={600}>Sex</Text>
              <Text>Female</Text>
            </HStack>
            <HStack>
              <Text fontWeight={600}>Blood Group</Text>
              <Text>A Positive</Text>
            </HStack>
          </HStack>
          <HStack>
            <Button colorScheme="teal" onClick={modalUseDisclosureForSetupPersonalizeMonitoring.onOpen}>
                <AddIcon />
                &nbsp;&nbsp;&nbsp;Setup New Monitoring
            </Button>
            <Button colorScheme="teal" >
                <RepeatIcon />
                &nbsp;&nbsp;&nbsp;Refresh
            </Button>
          </HStack>
        </div>
        <div className="content">
          <Drawchart />
          <Drawchart />
          <Drawchart />
          <Drawchart />
        </div>
      </div>
    </>
  );
};

export default PatientStatsPage;
