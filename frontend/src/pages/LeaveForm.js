import React, { useState } from "react";
import "../Assets/Styles/LeaveForm.css";
import "../Assets/Styles/NavPages.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'

const LeaveForm = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [appdate, setAppdate] = useState("");
  const [depdate, setDepdate] = useState("");
  const [arrdate, setArrdate] = useState("");
  const [deptime, setDeptime] = useState("");
  const [arrtime, setArrtime] = useState("");
  const [reason, setReason] = useState("");
  const [destination, setDestination] = useState("");
  const [cpersonName, setCpersonName] = useState("");
  const [cpersonRelation, setCpersonRelation] = useState("");
  const [cpersonPhone, setCpersonPhone] = useState("");
  const [statement, setStatement] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    let flag = []
    // setFormErrors(validate(values)) 
    const valid = new RegExp('^[0-9]*$')
    valid.test(reason) ? toast.error("Invalid reason!") : flag.push(1)
    valid.test(cpersonName) ? toast.error("Invalid reason!") : flag.push(1)
    valid.test(cpersonRelation) ? toast.error("Invalid reason!") : flag.push(1)
    statement!='I agree to abide by the rules' ? toast.error("match the statement") : flag.push(1)

    if(flag.length==4){
      try{
    const i = await fetch("http://localhost:5000/student/leaveform", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        appdate,
        depdate,
        deptime,
        arrdate,
        arrtime,
        reason,
        destination,
        cpersonName,
        cpersonRelation,
        cpersonPhone,
      }),
    });

    const res = await i.json()

    if (i.status === 201) {
      alert("Leave Form Submitted!");
      navigate('/student')
    }
    else{
      toast.error(res.error);

    }
  }catch(err){
    console.log(err)
  }
  };
}
  // const validate = (values) => {
  //   const errors= {};
  //   const regex = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
  //   if (!values.email){
  //     errors.email =" Email ID required";
  //   }
  // }
  return (
    <div
      className="d-flex align-items-center light-blue-gradient"
      style={{ height: "50em" }}
    >
      <ToastContainer />
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="col-md-25">
            <div className="card rounded-0 shadow">
              <div className="card-body">
                <div className="col">
                  <h3>Leave Form</h3>
                </div>
                <hr />
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col my-2">
                      <label htmlFor="appdate"> Application Date: </label>
                      <input
                        type="date"
                        className="form-control"
                        id="appdate"
                        aria-describedby="appdate"
                        placeholder="Enter application date"
                        value={appdate}
                        onChange={(e) => setAppdate(e.target.value)}
                        required={true}
                      />
                    </div>
                    <div className="col my-2">
                      <label htmlFor="email"> Email </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required={true}
                      />
                    </div>
                  </div>
                  <hr />
                  <p className="my-2">
                    <h6>
                      Dear Sir/Madam kindly allow me to take leave from the
                      hostel from:
                    </h6>
                  </p>
                  <div className="row">
                    <div className="col my-2 ">
                      <label htmlFor="depdatetime"> Depature Date: </label>
                      <input
                        type="date"
                        className="form-control"
                        id="depdate"
                        aria-describedby="depdate"
                        placeholder="Enter depature date"
                        value={depdate}
                        onChange={(e) => setDepdate(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col my-2">
                      <label htmlFor="arrdatetime">Arrival Date: </label>
                      <input
                        type="date"
                        className="form-control"
                        id="arrdate"
                        aria-describedby="arrdate"
                        placeholder="Enter arrival date"
                        value={arrdate}
                        onChange={(e) => setArrdate(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col my-2">
                      <label htmlFor="reason">Reason: </label>
                      <input
                        type="text"
                        className="form-control"
                        id="reason"
                        aria-describedby="reason"
                        placeholder="Enter reason for going"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <hr />
                  <p className="my-2">
                    <h6>The details of my travel are as follows:</h6>
                  </p>
                  <div className="row">
                    <div className="col my-2">
                      <label htmlFor="destination"> Going to: </label>
                      <input
                        type="text"
                        className="form-control"
                        id="destination"
                        aria-describedby="destination"
                        placeholder="Enter place"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col my-2 ">
                      <label htmlFor="depdatetime"> Leaving on: </label>
                      <input
                        type="time"
                        className="form-control"
                        id="depdate"
                        aria-describedby="deptime"
                        placeholder="Enter depature time"
                        value={deptime}
                        onChange={(e) => setDeptime(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col my-2 ">
                      <label htmlFor="depdatetime"> Back on: </label>
                      <input
                        type="time"
                        className="form-control"
                        id="depdate"
                        aria-describedby="arrtime"
                        placeholder="Enter arrival time"
                        value={arrtime}
                        onChange={(e) => setArrtime(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col my-2">
                      <label htmlFor="cpersonName"> Contact Person: </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cpersonName"
                        aria-describedby="cpersonName"
                        placeholder="Enter name"
                        value={cpersonName}
                        onChange={(e) => setCpersonName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col my-2">
                      <label htmlFor="cpersonRelation">Relation: </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cpersonRelation"
                        aria-describedby="cpersonRelation"
                        placeholder="Enter relation"
                        value={cpersonRelation}
                        onChange={(e) => setCpersonRelation(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col my-2">
                      <label htmlFor="cpersonPhone">Contact Number: </label>
                      <input
                        type="number"
                        className="form-control"
                        id="cpersonPhone"
                        aria-describedby="cpersonPhone"
                        placeholder="Enter contact number"
                        value={cpersonPhone}
                        onChange={(e) => setCpersonPhone(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <hr />
                  <p>
                    <h6>
                      Further, during the period of my absense from PDEU campus,
                      I take sole responsibility of myself.
                    </h6>
                  </p>
                  <div className="col">
                    <p style={{ color: "#D22B2B" }}>
                      <h6>*I agree to abide by the rules</h6>
                    </p>
                    <input
                      onChange={(e)=>setStatement(e.target.value)}
                      required="true"
                      type="text"
                      className="form-control"
                      id="statement"
                      aria-describedby="statement"
                      placeholder="Enter the above sentence"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary my-3">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveForm;
