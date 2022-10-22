import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import "./sass/dashboard.scss";

// Pages
import LoginPage from './pages/login';
import PatientListPage from './pages/patientList';
import Navbar from './components/navbar';
import TopBar from './components/topBar';
import AlertBar from './components/alertbar';
import PatientStatsPage from './pages/patientStats';

const root = ReactDOM.createRoot(document.getElementById('root'));

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

root.render(
  <React.StrictMode>
    {/* <ChakraProvider>
      <BrowserRouter>
        <Routes>
        <Route path="/login" element={<LoginPage />} replace />
        <Route path="/patients" element={<PatientListPage />} replace />          
        </Routes>
      </BrowserRouter>
    </ChakraProvider> */}
  {/* </React.StrictMode>
  <React.StrictMode> */}
    <ChakraProvider>
      <div className="dashboardContainer">
        <BrowserRouter>
          <Navbar />
          <TopBar />
          <AlertBar />
          <div className="containerContent">
            <Routes>
            <Route path="/" element={<PatientListPage />} />
            <Route path="/stat" element={<PatientStatsPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  </React.StrictMode>
);

