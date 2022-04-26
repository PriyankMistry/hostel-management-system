import React from 'react'
import wardengif from "../Assets/Images/wardengif.gif"

export default function Welcomeadmin() {
  return (
    <>  
    <div style={{fontFamily: "poppins", color : "#191970" ,textAlign: "center" , marginTop: 20}}><h1>Hey Admin !! Welcome back </h1></div>   
    <div style={{marginTop : 30, textAlign: "center"}}>
      <img src={wardengif} alt="welcome warden" className='center' style={{width: "45%", height: "54%"}}/>
    </div>
    </>
  )
}
