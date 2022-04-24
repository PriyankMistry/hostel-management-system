import React from 'react';
import Login from './Components/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import "./Components/Dashboards/DashComponents/Sidebar/Sidebar.css";
// import Dashboard from './Components/Dashboards/DashComponents/Sidebar/SidebarPages/Dashboard';
// import Leaves from './Components/Dashboards/DashComponents/Sidebar/SidebarPages/Leaves';
// import Messages from './Components/Dashboards/DashComponents/Sidebar/SidebarPages/Messages';
// import Analytics from './Components/Dashboards/DashComponents/Sidebar/SidebarPages/Analytics';
// import FileManager from './Components/Dashboards/DashComponents/Sidebar/SidebarPages/FileManager';
// import Order from './Components/Dashboards/DashComponents/Sidebar/SidebarPages/Order';
// import Saved from './Components/Dashboards/DashComponents/Sidebar/SidebarPages/Saved';
// import Setting from './Components/Dashboards/DashComponents/Sidebar/SidebarPages/Setting';
// import Longleave from './Components/Dashboards/DashComponents/Sidebar/SidebarPages/Longleave';
import Home from "./Components/Navbar/Navpages/Home";
import PageTwo from "./Components/Navbar/Navpages/PageTwo";
import PageThree from "./Components/Navbar/Navpages/PageThree";
import PageCTA from "./Components/Navbar/Navpages/PageCTA";
import LeaveApplication from './Components/Navbar/Navpages/LeaveApplication';
import LongLeave from './Components/Navbar/Navpages/LongLeave';
import ShortLeave from './Components/Navbar/Navpages/ShortLeave';
import Layout from './Components/Navbar/Navcomponents/Layout';



export default function App() {

  return (
    <BrowserRouter>
    <Layout>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/studenthome" element={<Home/>}/>
          <Route path="/studenthome/leaveapplication" element={<LeaveApplication/>}/>
          <Route path="/studenthome/leaveapplication/longleave" element={<LongLeave/>}/>
          <Route path="/studenthome/leaveapplication/shortleave" element={<ShortLeave/>}/>
          <Route path="/studenthome/pagetwo" element={<PageTwo/>}/>
          <Route path="/studenthome/pagethree" element={<PageThree/>}/>
          <Route path="/studenthome/pagecta" element={<PageCTA/>}/>
        </Routes>
    </Layout>
    </BrowserRouter>
  )
}

