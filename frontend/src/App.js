import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Student from './pages/Student';
import LeaveForm from './pages/LeaveForm';
import Complaints from './pages/Complaints';
import Attendance  from './pages/Attendance';
import PageCTA from './pages/PageCTA';
import Admin from './pages/Admin';
import Studentregister from "./pages/Studentregister"
import Wardenregister from './pages/Wardenregister';
import Warden from './pages/Warden';


export default function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="student" element={<Student/>}>
            <Route path="leaveform" element={<LeaveForm/>}/>
            <Route path="complaints" element={<Complaints/>}/>
            <Route path="attendance" element={<Attendance/>}/>
          </Route>
          <Route exact path="warden" element={<Warden/>}>
            <Route path="leaveform" element={<LeaveForm/>}/>
            <Route path="Complaints" element={<Complaints/>}/>
            <Route path="Attendance" element={<Attendance/>}/>
          </Route>
          <Route exact path="admin" element={<Admin/>}>
            <Route path="studentregister" element={<Studentregister/>}/>
            <Route path="wardenregister" element={<Wardenregister/>}/>
          </Route>
          <Route path="/" element={<PageCTA/>}/>
        </Routes>
    </BrowserRouter>
  )
}

