import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import LeaveApplication from './pages/LeaveApplication';
import LeaveForm from './pages/LeaveForm';
import Complaints from './pages/Complaints';
import Attendance  from './pages/Attendance';
import PageCTA from './pages/PageCTA';
import Header from './Components/Navbar/Header';


export default function App() {

  return (
    <BrowserRouter>
    <Header/>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/studenthome" element={<Home/>}/>
          <Route path="/studenthome/leaveapplication" element={<LeaveApplication/>}/>
          <Route path="/studenthome/leaveapplication/leaveform" element={<LeaveForm/>}/>
          <Route path="/studenthome/Complaints" element={<Complaints/>}/>
          <Route path="/studenthome/Attendance" element={<Attendance/>}/>
          <Route path="/studenthome/pagecta" element={<PageCTA/>}/>
        </Routes>
    </BrowserRouter>
  )
}

