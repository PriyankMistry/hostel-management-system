import React from 'react'
import { Outlet } from "react-router-dom";
import Header from "../Components/Navbar/Header";
import { MdAdminPanelSettings } from "react-icons/md";

export default function Admin() {
  return (
    <>
      <Header
        Headertitle="Admin"
        Headericon={<MdAdminPanelSettings />}
        titlelink="/admin"
        content1="Student Register"
        content1link="/admin/studentregister"
        content2="Warden Register"
        content2link="/admin/wardenregister"
        content3=""
        content3link=""
      />
      <Outlet />
      {/* whatever the nested url is, Outlet allows it to render along with the parent component */}
    </>
  )
}
