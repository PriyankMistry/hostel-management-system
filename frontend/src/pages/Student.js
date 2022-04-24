import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Navbar/Header";
import { FaUserGraduate } from "react-icons/fa";

const Student = () => {
    return (
        <>
        <Header 
        Headertitle="Student"
        Headericon={<FaUserGraduate/>}
        titlelink="/student"
        content1="Leave Application"
        content1link="/student/leaveform"
        content2="Complaints"
        content2link="/student/complaints"
        content3="Attendance"
        content3link="/student/attendance"
        />
        <Outlet/> 
        {/* whatever the nested url is, Outlet allows it to render along with the parent component */}
       </>
    )
};

export default Student;