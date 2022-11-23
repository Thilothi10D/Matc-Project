import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MainDrawer from '../Dashboard/Drawer';
import Dashboard from '../Dashboard/Dashboard';
import Contact from '../Contact/Contact';
import About from '../About/About';
import EmployeeTable from '../Tables/EmployeeTable';
import HrTable from '../Tables/HrTable';
import FeedbackConcerns from '../Feedback/FeedbackConcerns';
import Login from '../Login/Login';
function AppRoutes() {
  return (
    <BrowserRouter>
    
      {<MainDrawer/>}
      <Routes>
      <Route path="/" element={< Login/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/employees" element={<EmployeeTable />} />
        <Route path="/hr" element={<HrTable />} />
        <Route path="/feedback" element={<FeedbackConcerns />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
