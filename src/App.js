import React from 'react';
import Login from './Components/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import "./Components/Dashboards/DashComponents/Sidebar/Sidebar.css";
import Dashboard from './Components/Dashboards/DashComponents/Sidebar/SidebarPages/Dashboard';
import Leaves from './Components/Dashboards/DashComponents/Sidebar/SidebarPages/Leaves';
import Messages from './Components/Dashboards/DashComponents/Sidebar/SidebarPages/Messages';
import Analytics from './Components/Dashboards/DashComponents/Sidebar/SidebarPages/Analytics';
import FileManager from './Components/Dashboards/DashComponents/Sidebar/SidebarPages/FileManager';
import Order from './Components/Dashboards/DashComponents/Sidebar/SidebarPages/Order';
import Saved from './Components/Dashboards/DashComponents/Sidebar/SidebarPages/Saved';
import Setting from './Components/Dashboards/DashComponents/Sidebar/SidebarPages/Setting';
import Longleave from './Components/Dashboards/DashComponents/Sidebar/SidebarPages/Longleave';



export default function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/studentdashboard" element={<Dashboard />} />
          <Route path="/studentdashboard/leaveapplication" element={<Leaves />} />
          <Route path="/studentdashboard/messages" element={<Messages />} />
          <Route path="studentdashboard/analytics" element={<Analytics />} />
          <Route path="/studentdashboard/file-manager" element={<FileManager />} />
          <Route path="/studentdashboard/order" element={<Order />} />
          <Route path="/studentdashboard/saved" element={<Saved />} />
          <Route path="/studentdashboard/settings" element={<Setting />} />
          <Route path="*" element={<> not found</>} />
          <Route path="/studentdashboard/leaveapplication/longleave" element={<Longleave />}/>
        </Routes>
      </BrowserRouter>
  )
}

