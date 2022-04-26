import React from 'react'

export default function Wardenregister() {
  return (
    <div className="d-flex align-items-center light-blue-gradient" style={{height: "38em"}}>
    <div className="container" >
      <div className="d-flex justify-content-center">
        <div className="col-md-25">
          <div className="card rounded-0 shadow">
            <div className="card-body">
                <div className="col"><h3>Warden Registration</h3></div>
              <hr />
              <form>
                <p><h6>Personal Details :</h6></p>
                <div className="row">
                  <div className="col">
                    <label for="exampleInputEmail1">Full Name: </label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter full name" />
                  </div>
                  <div className="col">
                    <label for="exampleInputEmail1"> Contact Number: </label>
                    <input type="tel" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter contact number" />
                  </div>
                </div>
                <div className="row">
                  <div className="col my-2">
                    <label for="exampleInputEmail1">Email ID: </label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter warden email id" />
                  </div>
                  <div className="col my-2">
                    <label for="exampleInputEmail1"> Block Alloted: </label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter block alloted" />
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
