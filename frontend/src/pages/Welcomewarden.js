import React from 'react'
import wardengif2 from "../Assets/Images/wardengif2.gif"

export default function Welcomewarden() {
  return (
    <>  
    <div style={{fontFamily: "poppins", color : "#191970" ,textAlign: "center" , marginTop: 20}}><h1>Hey Warden !! Welcome back </h1></div>   
    <div style={{marginTop : 30, textAlign: "center"}}>
      <img src={wardengif2} alt="welcome warden" className='center' style={{width: "45%", height: "54%"}}/>
    </div>
    </>
  )
}
