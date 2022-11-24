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
import { useSelector, useDispatch } from "react-redux";
import { admin, hr,employee,logedin } from "../../Store/LoginReducers";
import { AppState } from "../../Store/Index";
import { Navigate } from 'react-router-dom';
import ViewCard from '../Pages/View';

// function PrivateRoute() {
//   const login  = useSelector((state: AppState) => state.loggin); 
//   if (!login.login) {
//     // not logged in so redirect to login page with the return url
//     return <Navigate to="/login"/>
// }
//   return(
// <></>
//   )
// }
export default function AppRoutes() {
  const login  = useSelector((state: AppState) => state.loggin); // see store.ts
  console.log('loggedin-->', login.login);
  const islogin = login.login ;
  return (
    <BrowserRouter>
    
      {islogin && <MainDrawer/>}
      {/* {!islogin && < Login/>} */}
      <Routes>
      <Route path="/" element={< Login/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/employees" element={<EmployeeTable islogin={islogin}/>} />
        <Route path="/hr" element={<HrTable />} />
        <Route path="/feedback" element={<FeedbackConcerns />} />
        <Route path="/view" element={<ViewCard />} />
      </Routes>
    </BrowserRouter>
  );
}

