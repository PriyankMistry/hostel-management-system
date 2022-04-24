import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Studenthome from './pages/Studenthome';
import LeaveForm from './pages/LeaveForm';
import Complaints from './pages/Complaints';
import Attendance  from './pages/Attendance';
import PageCTA from './pages/PageCTA';
import Header from './Components/Navbar/Header';
import Adminhome from './pages/Adminhome';
import Studentregister from "./pages/Studentregister"


export default function App() {

  return (
    <BrowserRouter>
    <Header/>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/student" element={<Studenthome/>}/>
          <Route path="/student/leaveform" element={<LeaveForm/>}/>
          <Route path="/student/Complaints" element={<Complaints/>}/>
          <Route path="/student/Attendance" element={<Attendance/>}/>
          <Route path="/student/pagecta" element={<PageCTA/>}/>
          <Route exact path="/admin" element={<Adminhome/>}/>
          <Route path="/admin/studentregister" element={<Studentregister/>}/>
        </Routes>
    </BrowserRouter>
  )
}

