import React, { useEffect, useState } from 'react'
import errorgif2 from "../Assets/Images/errorgif2.gif"

export default function Error() {
  const [check, setCheck] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setCheck(true)
    }, 500)
  })
  return check ? (
    <div style={{ textAlign: "center", margin: "auto" }}>
      <img src={errorgif2} alt="errorgif" style={{ width: "50%" }} />
    </div>
  ) : null
}
