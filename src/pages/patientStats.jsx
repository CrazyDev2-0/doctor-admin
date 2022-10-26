import React, { useEffect, useRef, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

import {
  HStack,
  Button,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { RepeatIcon, AddIcon } from "@chakra-ui/icons";

import Drawchart from "../components/drawChart";
import SetupPersonalizedMonitoringModal from "../components/setupPersonalizedMonitoringModal";

const PatientStatsPage = () => {
  const BASEURL = 'https://stratathonapi.tanmoy.codes';
  const modalUseDisclosureForSetupPersonalizeMonitoring = useDisclosure();

  const [vitalInfo, setVitalInfo] = useState([]);
  const [patient, setPatient] = useState({})
  const { id } = useParams();
  const functionCallbackRef = useRef({ });
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
    var tmp = JSON.parse(localStorage.getItem('vitalInfo'));
    if(tmp != null){
      setVitalInfo(tmp);
      return;
    }
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
    setVitalInfo(data.data.payload);
  } 

  const refreshVitals = async()=>{
    const index = [0,3,4];
    for (let i = 0; i < index.length; i++) {
      const vital = vitalInfo[index[i]];
      functionCallbackRef.current[vital.code]();
    }
  }

  const getEle = (str) => vitalInfo.find(e => e.code === str);

  useEffect(() => { 
    document.showLoadingScreen();
    getVitalInfo()
    .finally(()=>{
      document.hideLoadingScreen();
    })
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
        {
            vitalInfo.length > 0 ? 
            <div className="content">
              <Drawchart vital = {getEle('hr')} functionRef={functionCallbackRef} />
              <Drawchart vital = {getEle('spo2')} functionRef={functionCallbackRef} />
              <Drawchart vital = {getEle('temperature')} functionRef={functionCallbackRef} />
              <Drawchart vital = {getEle('steps_walked')} functionRef={functionCallbackRef} />
            </div>
            : ""
          }

      </div>
    </>
  );
};

export default PatientStatsPage;
