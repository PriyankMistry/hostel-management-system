import React from 'react'
import { Outlet } from "react-router-dom";
import Header from "../Components/Navbar/Header";
import { FaUserTie } from "react-icons/fa";

export default function Warden() {
  return (
    <>
    <Header 
    Headertitle="Warden"
    Headericon={<FaUserTie/>}
    titlelink="/warden"
    content1="Leave Applications"
    content1link="/warden/leaveapplications"
    content2="Complaints"
    content2link="/warden/complaints"
    content3="Attendance"
    content3link="/warden/attendance"
    /> 

    <Outlet/>
    {/* whatever the nested url is, Outlet allows it to render along with the parent component */}
   </>
  )
}
