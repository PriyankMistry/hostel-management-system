import React from 'react'

export default function Leavereview() {
  return (
    <div className="d-flex align-items-center light-blue-gradient" style={{height: "150vh"}}>
    <div className="container" >
      <div className="d-flex justify-content-center">
        <div className="col-md-25">
          <div className="card rounded-0 shadow">
            <div className="card-body">
                <div className="col"><h3>Leave Review</h3></div>
              <hr />
                <div className="row">
                  <div className="col">
                    <p><h5>Name :</h5>Prakhar Chaman</p>
                  </div>
                  <div className="col">
                    <p><h5>Course :</h5>Btech</p>
                  </div>
                  <div className="col">
                    <p><h5>Roll Number :</h5>19BCP094</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col my-2">
                    <p><h5>Application Date :</h5>25/04/2022</p>
                  </div>
                  <div className="col my-2">
                    <p><h5>Block :</h5>B2</p>
                  </div>
                  <div className="col my-2">
                    <p><h5>Room Number :</h5>613</p>
                  </div>
                </div>
                <hr />
                <p className="my-2"><h6>Dear Sir/Madam kindly allow me to take leave from the hostel from:</h6></p>
                <div className="row">
                  <div className="col my-2 ">
                    <p><h5>Depature Date :</h5>25/04/2022</p>
                  </div>
                  <div className="col my-2">
                    <p><h5>Arival Date :</h5>28/04/2022</p>
                  </div>
                  <div className="col my-2">
                    <p><h5>Reason :</h5>Home Visit</p>
                  </div>
                </div>
                <hr />
                <p className="my-2"><h6>The details of my travel are as follows:</h6></p>
                <div className="row">
                  <div className="col my-2">
                    <p><h5>Going to :</h5>Ahmedabad</p>
                  </div>
                  <div className="col my-2">
                    <p><h5>Leaving on :</h5>1:08 PM</p>
                  </div>
                  <div className="col my-2">
                    <p><h5>Back on :</h5>10:30 PM</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col my-2">
                    <p><h5>Contact Person :</h5>Senior Jajoo</p>
                  </div>
                  <div className="col my-2">
                    <p><h5>Relation :</h5>Father</p>
                  </div>
                  <div className="col my-2">
                    <p><h5>Contact Number :</h5>9090909090</p>
                  </div>
                </div>
                <hr/>
                <p><h6>Further, during the period of my absense from PDEU campus, I take sole responsibility of myself.</h6></p>
                <div className="col">
                    <p style={{color: "#D22B2B"}}><h6>*I agree to abide by the rules</h6></p>
                    <p>I agree to abide by the rules</p>
                  </div>
                <button type="submit" className="btn btn-primary my-3">Approve</button>              
                <button type="submit" className="btn btn-primary my-3 mx-3">Decline</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

//     <div className="card text-center" style={{width:"50rem"}}>
//     <div className="card-header">
//       <h4>Leave Review</h4>
//     </div>
//     <div className="card-body">
//       <h5 className="card-title">Special title treatment</h5>
//       <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//       <a href="#" className="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>
  )
}
