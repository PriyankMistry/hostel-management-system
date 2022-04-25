import React, { useState } from 'react';
import "../Assets/Styles/LeaveForm.css";
import "../Assets/Styles/NavPages.css"


const LeaveForm = () => {

  const [email,setEmail] = useState('')
  const [appdate,setAppdate] = useState('')
  const [depdate,setDepdate] = useState('')
  const [arrdate,setArrdate] = useState('')
  const [deptime,setDeptime] = useState('')
  const [arrtime,setArrtime] = useState('')
  const [reason,setReason] = useState('')
  const [destination,setDestination] = useState('')
  const [cpersonName,setCpersonName] = useState('')
  const [cpersonRelation,setCpersonRelation] = useState('')
  const [cpersonPhone,setCpersonPhone] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const i = await fetch("http://localhost:5000/student/leaveform", {
      method:"POST",
      headers:{
        'Content-Type':'application/json'
          },
      body: JSON.stringify({
        email, appdate, depdate, deptime, arrdate, arrtime, reason, destination, cpersonName, cpersonRelation, cpersonPhone
      })
    })

    if(i.status === 201){
      alert("Leave Form Submitted!")
    }
  }

  return (
      <div class="d-flex align-items-center light-blue-gradient" style={{height: "150vh"}}>
        <div class="container" >
          <div class="d-flex justify-content-center">
            <div class="col-md-25">
              <div class="card rounded-0 shadow">
                <div class="card-body">
                    <div class="col"><h3>Leave Form</h3></div>
                  <hr />
                  <form onSubmit={handleSubmit}>
                    <div class="row">
                      <div class="col my-2">
                        <label for="appdate"> Application Date: </label>
                        <input type="date" class="form-control" id="appdate" aria-describedby="appdate" placeholder="Enter application date" onChange={e => setAppdate(e.target.value)}/>
                      </div>
                      <div class="col my-2">
                        <label for="email"> Email </label>
                        <input type="email" class="form-control" id="email" aria-describedby="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                      </div>
                    </div>
                    <div class="col my-2 ">
                        <label for="depdatetime"> Depature time: </label>
                        <input type="time" class="form-control" id="depdate" aria-describedby="deptime" placeholder="Enter depature time" onChange={e => setDeptime(e.target.value)} />
                    </div>
                    <div class="col my-2 ">
                        <label for="depdatetime"> Arrival time: </label>
                        <input type="time" class="form-control" id="depdate" aria-describedby="arrtime" placeholder="Enter arrival time" onChange={e => setArrtime(e.target.value)} />
                    </div>
                    <hr />
                    <p class="my-2"><h6>Dear Sir/Madam kindly allow me to take leave from the hostel from:</h6></p>
                    <div class="row">
                      <div class="col my-2 ">
                        <label for="depdatetime"> Depature Date: </label>
                        <input type="date" class="form-control" id="depdate" aria-describedby="depdate" placeholder="Enter depature date" onChange={e => setDepdate(e.target.value)} />
                      </div>
                      <div class="col my-2">
                        <label for="arrdatetime">Arrival Date: </label>
                        <input type="date" class="form-control" id="arrdate" aria-describedby="arrdate" placeholder="Enter arrival date" onChange={e => setArrdate(e.target.value)}/>
                      </div>
                      <div class="col my-2">
                        <label for="reason">Reason: </label>
                        <input type="text" class="form-control" id="reason" aria-describedby="reason" placeholder="Enter reason for going" onChange={e => setReason(e.target.value)}/>
                      </div>
                    </div>
                    <hr />
                    <p class="my-2"><h6>The details of my travel are as follows:</h6></p>
                    <div class="row">
                      <div class="col my-2">
                        <label for="destination"> Going to: </label>
                        <input type="text" class="form-control" id="destination" aria-describedby="destination" placeholder="Enter place" onChange={e => setDestination(e.target.value)}/>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col my-2">
                        <label for="cpersonName"> Contact Person: </label>
                        <input type="text" class="form-control" id="cpersonName" aria-describedby="cpersonName" placeholder="Enter name" onChange={e => setCpersonName(e.target.value)}/>
                      </div>
                      <div class="col my-2">
                        <label for="cpersonRelation">Relation: </label>
                        <input type="text" class="form-control" id="cpersonRelation" aria-describedby="cpersonRelation" placeholder="Enter relation" onChange={e => setCpersonRelation(e.target.value)} />
                      </div>
                      <div class="col my-2">
                        <label for="cpersonPhone">Contact Number: </label>
                        <input type="tel" class="form-control" id="cpersonPhone" aria-describedby="cpersonPhone" placeholder="Enter contact number" onChange={e => setCpersonPhone(e.target.value)} />
                      </div>
                    </div>
                    <hr/>
                     <p><h6>Further, during the period of my absense from PDEU campus, I take sole responsibility of myself.</h6></p>
                    <div class="col">
                        <p style={{color: "#D22B2B"}}><h6>*I agree to abide by the rules</h6></p>
                        <input required='true' type="text" class="form-control" id="statement" aria-describedby="statement" placeholder="Enter the above sentence" />
                      </div>
                    <button type="submit" onClick={handleSubmit} class="btn btn-primary my-3">Submit</button> 
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}


export default LeaveForm;