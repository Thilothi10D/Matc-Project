import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainDrawer from '../Dashboard/Drawer';
import Dashboard from '../Dashboard/Dashboard';
import Contact from '../Contact/Contact';
import About from '../About/About';
import EmployeeTable from '../Tables/EmployeeTable';
import HrTable from '../Tables/HrTable';
import FeedbackConcerns from '../Feedback/FeedbackConcerns';
import Login from '../Login/Login';
import { useSelector } from "react-redux";
import { AppState } from "../../Store/Index";
import ViewCard from '../Pages/View';
import AddUser from '../Pages/AddUser';
import EditUser from '../Pages/Edituser';

export default function AppRoutes() {
  const login  = useSelector((state: AppState) => state.loggin);
  console.log('loggedin-->', login.login);
  const islogin = login.login ;
  return (
    <BrowserRouter>
    
      {islogin && <MainDrawer/>}
      <Routes>
      <Route path="/" element={< Login/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/employees" element={<EmployeeTable islogin={islogin}/>} />
        <Route path="/hr" element={<HrTable islogin={islogin}/>} />
        <Route path="/feedback" element={<FeedbackConcerns />} />
        <Route path="/view" element={<ViewCard />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/edituser" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

