import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Line } from "react-chartjs-2";

const BASEURL = 'https://d2a6-103-171-246-169.in.ngrok.io';

const Drawchart = ({vital, functionRef}) => {  
  const { id } = useParams();

  const refresh = async () => {
    console.log('refresh'+vital.code);
    const data = await axios({
      method: 'get',
      url: `${BASEURL}/doctor/patients/data/new/${vital.code}/${id}`,
      headers: { 
          'authorization': localStorage.getItem('token')
        }
    });
    let tmp1 = (data.data.payload).map(elem => elem.val);
    let tmp2 = (data.data.payload).map(elem => {
      let myDate = new Date(elem.timestamp * 1000);
      return myDate.toLocaleTimeString().substring(0,5);
    });    
    tmp1.reverse();
    tmp2.reverse();
    setValues([...values, ...tmp1]);  
    setLabels([...values, ...tmp2]);
  }
  const options = {
    responsive: true,
    plugins: {
      legend: {
          display: false
      },
      title: {
        display: true,
        text: vital.name,
      },
    },
  };
  
  const [labels, setLabels] = useState([]);
  const [values, setValues] = useState([]);
  const getOldVital = async (id, vitalCode) => {
    const data = await axios({
        method: 'get',
        url: `${BASEURL}/doctor/patients/data/old/${vitalCode}/${id}`,
        headers: { 
            'authorization': localStorage.getItem('token')
          }
    });
    // console.log(id);
    // console.log("VITALSDATA", data.data.payload); 
    let tmp1 = (data.data.payload).map(elem => elem.val);
    let tmp2 = (data.data.payload).map(elem => {
      let myDate = new Date(elem.timestamp * 1000);
      // console.log(myDate.toLocaleTimeString());
      return myDate.toLocaleTimeString().substring(0,5);
      // return elem.timestamp;
    });    
    tmp1.reverse();
    tmp2.reverse();
    setValues(tmp1);  
    setLabels(tmp2);
  } 
  
  useEffect(() => {
    functionRef.current[`${vital.code}`] = refresh;
     getOldVital(id, vital.code); 
    }, []);  
  
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: values,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      }
    ],
  };
  return (
    <div className="chartDesign">
      <Line options={options} data={data} />
    </div>
  )
};

export default Drawchart;
