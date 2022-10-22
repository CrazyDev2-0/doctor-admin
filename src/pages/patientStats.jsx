import React, { useEffect, useRef, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
  const BASEURL = 'https://d2a6-103-171-246-169.in.ngrok.io';
  const modalUseDisclosureForSetupPersonalizeMonitoring = useDisclosure();

  let vitalInfo = JSON.parse(localStorage.getItem('vitalInfo'));
  const [patient, setPatient] = useState({})
  const { id } = useParams();
  const functionCallbackRef = useRef({

  });
  useEffect(() => { getPatient(id); }, [id]);

  const getPatient = async (id) => {
    const data = await axios({
        method: 'get',
        url: `${BASEURL}/doctor/patients/details/${id}`,
        headers: { 
            'authorization': localStorage.getItem('token')
          }
    });
    // console.log(id);
    // console.log(data.data.payload);
    setPatient(data.data.payload);
  } 

  const getVitalInfo = async () => {
    const data = await axios({
        method: 'get',
        url: `${BASEURL}/doctor/vitals/info`,
        headers: { 
            'authorization': localStorage.getItem('token')
          }
    });
    // console.log(id);
    console.log(data.data.payload);    
    localStorage.setItem('vitalInfo', JSON.stringify(data.data.payload));
    vitalInfo = data.data.payload;
  } 

  const refreshVitals = async()=>{
    const index = [0,3,4];
    for (let i = 0; i < index.length; i++) {
      const vital = vitalInfo[index[i]];
      functionCallbackRef.current[vital.code]();
    }
  }

  useEffect(() => { 
    if(vitalInfo === null)    {
      getVitalInfo(); 
    }
    // console.log("VINFO",vitalInfo);
  }, []);

  return (
    <>
      <SetupPersonalizedMonitoringModal patientId={id}
        disclosure={modalUseDisclosureForSetupPersonalizeMonitoring}
      />
      <div className="patientStats">
        <div className="header">
          <HStack spacing={20}>
            <Text fontWeight={600}>{patient.name}</Text>
            <HStack>
              <Text fontWeight={600}>Age</Text>
              <Text>{patient.profile?.age}</Text>
            </HStack>
            <HStack>
              <Text fontWeight={600}>Sex</Text>
              <Text>{patient.profile?.gender}</Text>
            </HStack>
            <HStack>
              <Text fontWeight={600}>Blood Group</Text>
              <Text>{patient.profile?.bloodGroup}</Text>
            </HStack>
          </HStack>
          <HStack>
            <Button colorScheme="teal" onClick={modalUseDisclosureForSetupPersonalizeMonitoring.onOpen}>
                <AddIcon />
                &nbsp;&nbsp;&nbsp;Setup New Monitoring
            </Button>
            <Button colorScheme="teal" onClick={refreshVitals}>
                <RepeatIcon />
                &nbsp;&nbsp;&nbsp;Refresh
            </Button>
          </HStack>
        </div>
        <div className="content">
          <Drawchart vital = {vitalInfo[0]} functionRef={functionCallbackRef} />
          <Drawchart vital = {vitalInfo[3]} functionRef={functionCallbackRef}/>
          <Drawchart vital = {vitalInfo[4]} functionRef={functionCallbackRef}/>
          <Drawchart vital = {vitalInfo[3]} functionRef={functionCallbackRef}/>
        </div>
      </div>
    </>
  );
};

export default PatientStatsPage;
