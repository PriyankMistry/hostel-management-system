import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";




export default function Leaveapplications() {

  let navigate = useNavigate();

  const [data, setData] = useState([])

  useEffect(() => {
    const receiveForm = async () => {
      try {
        const res = await fetch('http://localhost:5000/warden/leaveapplications')
        setData(await res.json())
      } catch (err) {
        console.log(err)
      }
    };

    receiveForm();
  }, []);

  const Yo = () => {
    
    return (
      <>

        {

    data.map((user) => (
        <div className='col mb-4'>
          <div className="card h-100">
            <div className="card-header">
              <h4>{user.leaveform.type}</h4>
            </div>
            <div className="card-body">
              <h6 className="card-title">Name : {user.name}</h6>
              <h6 className="card-title">Application Date : {user.leaveform.appdate}</h6>
              <h6 style={{color: user.leaveform.status === "Approved" ? "#00ab66" : user.leaveform.status === "Pending" ? null :  "#d11a2a"}}>{user.leaveform.status}</h6>

              {user.leaveform.status === "Approved" ? (null) : (
                <button type="submit" onClick={() => {
                  
                  navigate(`/warden/leaveapplications/${user.name}`, { state: user });
                }} className="btn btn-primary my-3">Review</button>
              )
              }
            </div>
          </div>
        </div>
        )
        )
        }
      </>

    )

  }

  return (
    <div className='row row-cols-1 row-cols-md-4 my-3 mx-3'>
      <Yo />
    </div>
  )

}
