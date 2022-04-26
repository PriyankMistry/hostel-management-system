import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Student from './pages/Student';
import LeaveForm from './pages/LeaveForm';
import Complaints from './pages/Complaints';
import Attendance  from './pages/Attendance';
import Admin from './pages/Admin';
import Studentregister from "./pages/Studentregister"
import Wardenregister from './pages/Wardenregister';
import Warden from './pages/Warden';
import Leaveapplications from './pages/Leaveapplications';
import Leavereview from './pages/Leavereview';
import Welcomewarden from './pages/Welcomewarden';
import Welcomestudent from './pages/Welcomestudent';


export default function App() {

  return (
    <>
      <Routes>
        {!localStorage.getItem('email') && 
        (<Route path="/" element={<Login/>}/>)} 
        
        {localStorage &&
        ( 
          <>
            <Route path="/student" element={<Student/>}>
              <Route path='' element={<Welcomestudent/>}/>
              <Route path="leaveform" element={<LeaveForm/>}/>
              <Route path="complaints" element={<Complaints/>}/>
              <Route path="attendance" element={<Attendance/>}/>
            </Route>
            <Route path="warden" element={<Warden/>}>
              <Route path="" element={<Welcomewarden/>}/>
              <Route path="leaveapplications" element={<Leaveapplications/>}/>
              <Route path="leaveapplications/:name" element={<Leavereview/>}/>
              <Route path="Complaints" element={<Complaints/>}/>
              <Route path="Attendance" element={<Attendance/>}/>
            </Route>
            <Route path="admin" element={<Admin/>}>
              <Route path="studentregister" element={<Studentregister/>}/>
              <Route path="wardenregister" element={<Wardenregister/>}/>
            </Route>
        </>
        )}
      </Routes>

      </>
               
  )
}

