import React from 'react'
import errorgif2 from "../Assets/Images/errorgif2.gif"

export default function Error() {
  return (
    <div style={{textAlign: "center", margin: "auto"}}>
      <img src={errorgif2} alt="errorgif" style={{width: "50%"}} />
    </div>
  )
}
