import React from 'react'

export default function Studentregister() {
  return (
    <div className="d-flex align-items-center light-blue-gradient" style={{height: "50em"}}>
    <div className="container" >
      <div className="d-flex justify-content-center">
        <div className="col-md-25">
          <div className="card rounded-0 shadow">
            <div className="card-body">
                <div className="col"><h3>Student Registration</h3></div>
              <hr />
              <form>
                <p><h6>Personal Details :</h6></p>
                <div className="row">
                  <div className="col">
                    <label for="exampleInputEmail1">Full Name: </label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter full name"  />
                  </div>
                  <div className="col">
                    <label for="exampleInputEmail1"> Contact Number: </label>
                    <input type="tel" className="form-control" id="exampleInputnumber" aria-describedby="emailHelp" placeholder="Enter contact number" />
                  </div>
                </div>
                <div className="row">
                  <div className="col my-2">
                    <label for="exampleInputEmail1">Course: </label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter course name" />
                  </div>
                  <div className="col my-2">
                    <label for="exampleInputEmail1"> Roll Number: </label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter roll number" />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label for="exampleInputEmail1">Email ID: </label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter college email id" />
                  </div>
                  <div className="col">
                    <label for="exampleInputEmail1"> Quota: </label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter admission quota" />
                  </div>
                </div>
                <hr className="my-3"/>
                <p><h6>Room Alloted :</h6></p>
                <div className="row">
                  <div className="col">
                    <label for="exampleInputEmail1">Block: </label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter hostel block" />
                  </div>
                  <div className="col">
                    <label for="exampleInputEmail1"> Room Number: </label>
                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter room number" />
                  </div>
                </div>
                <hr className="my-3" />
                <div className="col my-2">
                    <label for="exampleInputEmail1">Password: </label>
                    <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter password" />
                </div>
                <div className="col my-2">
                    <label for="exampleInputEmail1">Confirm Password: </label>
                    <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Please confirm password" />
                </div>               
                <button type="submit" className="btn btn-primary my-3">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
