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
import Welcomeadmin from './pages/Welcomeadmin';
import Welcomestudent from './pages/Welcomestudent';
import Error from './pages/Error';


export default function App() {

  return (
    <>
      <Routes>
        {!localStorage.getItem('email') && 
        (<Route path="/" element={<Login/>}/>)} 
        
        {(localStorage.role === 'student') &&
        ( 
          <>
            <Route path="/student" element={<Student/>}>
              <Route path='' element={<Welcomestudent/>}/>
              <Route path="leaveform" element={<LeaveForm/>}/>
              <Route path="complaints" element={<Complaints/>}/>
              <Route path="attendance" element={<Attendance/>}/>
            </Route>
          </>
        )}

        {(localStorage.role === 'warden') &&
        ( 
          <>
            <Route path="warden" element={<Warden/>}>
              <Route path="" element={<Welcomewarden/>}/>
              <Route path="leaveapplications" element={<Leaveapplications/>}/>
              <Route path="leaveapplications/:name" element={<Leavereview/>}/>
              <Route path="Complaints" element={<Complaints/>}/>
              <Route path="Attendance" element={<Attendance/>}/>
            </Route>
            </>
        )}

        {(localStorage.role === 'admin') &&
        ( 
          <>
            <Route path="admin" element={<Admin/>}>
              <Route path='' element={<Welcomeadmin/>}/>
              <Route path="studentregister" element={<Studentregister/>}/>
              <Route path="wardenregister" element={<Wardenregister/>}/>
            </Route>
          </>
        )}

        <Route path='*' element={<Error/>}/>


      </Routes>

      </>
               
  )
}

