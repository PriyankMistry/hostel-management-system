import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Student from './pages/Student';
import LeaveForm from './pages/LeaveForm';
import Complaints from './pages/Complaints';
import Attendance  from './pages/Attendance';
import PageCTA from './pages/PageCTA';



export default function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="student" element={<Student/>}>
            <Route path="leaveform" element={<LeaveForm/>}/>
            <Route path="Complaints" element={<Complaints/>}/>
            <Route path="Attendance" element={<Attendance/>}/>
          </Route>
          {/* <Route exact path="warden" element={<Studenthome/>}>
            <Route path="leaveform" element={<LeaveForm/>}/>
            <Route path="Complaints" element={<Complaints/>}/>
            <Route path="Attendance" element={<Attendance/>}/>
          </Route>
          <Route exact path="admin" element={<Studenthome/>}>
            <Route path="leaveform" element={<LeaveForm/>}/>
            <Route path="Complaints" element={<Complaints/>}/>
          </Route> */}
          <Route path="/" element={<PageCTA/>}/>
        </Routes>
    </BrowserRouter>
  )
}

