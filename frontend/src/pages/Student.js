import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Navbar/Header";

const Student = () => {
    return (
        <>
        <Header/>
        <Outlet/> 
        {/* whatever the nested url is, Outlet allows it to render along with the parent component */}
       </>
    )
};

export default Student;