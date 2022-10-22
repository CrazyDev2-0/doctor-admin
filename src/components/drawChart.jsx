import React from "react";
import { Line } from "react-chartjs-2";
import { faker } from '@faker-js/faker';

const options = {
  responsive: true,
  plugins: {
    legend: {
        display: false
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    }
  ],
};

const Drawchart = () => {
  return <div className="chartDesign">
     <Line options={options} data={data} />
  </div>
};

export default Drawchart;
