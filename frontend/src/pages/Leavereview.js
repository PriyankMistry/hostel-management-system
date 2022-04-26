import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Leavereview = () => {

  const {name} = useParams();
  const {state}= useLocation();
  const {block, rollno, room, course} = state
  const {appdate, arrdate, arrtime, depdate, deptime, destination, email, reason, type} = state.leaveform
  const {name: cname, relation, phone} = state.leaveform.cperson

  return (
    <div className="d-flex align-items-center light-blue-gradient" style={{height: "60em"}}>
    <div className="container" >
      <div className="d-flex justify-content-center">
        <div className="col-md-25">
          <div className="card rounded-0 shadow">
            <div className="card-body">
                <div className="col"><h3>Leave Review</h3></div>
              <hr />
                <div className="row">
                  <div className="col">
                    <p><h5>Name :</h5>{name}</p>
                  </div>
                  <div className="col">
                    <p><h5>Course :</h5>{course}</p>
                  </div>
                  <div className="col">
                    <p><h5>Roll Number :</h5>{rollno}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col my-2">
                    <p><h5>Application Date :</h5>{appdate}</p>
                  </div>
                  <div className="col my-2">
                    <p><h5>Block :</h5>{block}</p>
                  </div>
                  <div className="col my-2">
                    <p><h5>Room Number :</h5>{room}</p>
                  </div>
                </div>
                <hr />
                <p className="my-2"><h6>Dear Sir/Madam kindly allow me to take leave from the hostel from:</h6></p>
                <div className="row">
                  <div className="col my-2 ">
                    <p><h5>Depature Date :</h5>{depdate}</p>
                  </div>
                  <div className="col my-2">
                    <p><h5>Arival Date :</h5>{arrdate}</p>
                  </div>
                  <div className="col my-2">
                    <p><h5>Reason :</h5>{reason}</p>
                  </div>
                </div>
                <hr />
                <p className="my-2"><h6>The details of my travel are as follows:</h6></p>
                <div className="row">
                  <div className="col my-2">
                    <p><h5>Going to :</h5>{destination}</p>
                  </div>
                  <div className="col my-2">
                    <p><h5>Leaving on :</h5>{deptime}</p>
                  </div>
                  <div className="col my-2">
                    <p><h5>Back on :</h5>{arrtime}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col my-2">
                    <p><h5>Contact Person :</h5>{cname}</p>
                  </div>
                  <div className="col my-2">
                    <p><h5>Relation :</h5>{relation}</p>
                  </div>
                  <div className="col my-2">
                    <p><h5>Contact Num :</h5>{phone}</p>
                  </div>
                </div>
                <hr/>
                <button type="submit" className="btn btn-primary my-3">Approve</button>              
                <button type="submit" className="btn btn-danger my-3 mx-3">Decline</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Leavereview;