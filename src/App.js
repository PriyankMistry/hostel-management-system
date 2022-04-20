import React from 'react';
import Login from './Components/login';
import Dashboard from './Components/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login/>}/>
        <Route path="dashboard" element={<Dashboard/>}/> 

      </Routes>
    </BrowserRouter>
  )
}

