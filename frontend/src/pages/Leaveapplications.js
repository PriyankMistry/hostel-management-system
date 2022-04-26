import React, {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom";


export default function Leaveapplications() {

  let navigate = useNavigate();

  const [data, setData] = useState([])

  useEffect(()=>{
    const receiveForm = async () =>{
        try{
        const res = await fetch('http://localhost:5000/warden/leaveapplications')
        setData(await res.json())
      }catch(err){
        console.log(err)
      }
    };

    receiveForm();
  },[]);

  return (
        
    data.map((user) => (
        <div>
            <div className="card" style={{width: "18rem"}}>
            <div className="card-header">
                <h4>{user.leaveform.type}</h4>
            </div>
            <div className="card-body">
                <h6 className="card-title">Name : {user.name}</h6>
                <h6 className="card-title">Application Date : {user.leaveform.appdate}</h6>
                <button type="submit" onClick={()=>navigate(`/warden/leaveapplications/${user.name}`,{state:user})} className="btn btn-primary my-3">Review</button>              
            </div>
            </div>
        </div>
    ))  
  )
}
