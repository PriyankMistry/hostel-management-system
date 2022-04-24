import React from 'react'

export default function Studentregister() {
  return (
    <div class="d-flex align-items-center light-blue-gradient" style={{height: "130vh"}}>
    <div class="container" >
      <div class="d-flex justify-content-center">
        <div class="col-md-25">
          <div class="card rounded-0 shadow">
            <div class="card-body">
                <div class="col"><h3>Student Registration</h3></div>
              <hr />
              <form>
                <p><h6>Personal Details :</h6></p>
                <div class="row">
                  <div class="col">
                    <label for="exampleInputEmail1">Full Name: </label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter full name" />
                  </div>
                  <div class="col">
                    <label for="exampleInputEmail1"> Contact Number: </label>
                    <input type="tel" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter contact number" />
                  </div>
                </div>
                <div class="row">
                  <div class="col my-2">
                    <label for="exampleInputEmail1">Course: </label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter course name" />
                  </div>
                  <div class="col my-2">
                    <label for="exampleInputEmail1"> Roll Number: </label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter roll number" />
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <label for="exampleInputEmail1">Email ID: </label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter college email id" />
                  </div>
                  <div class="col">
                    <label for="exampleInputEmail1"> Quota: </label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter admission quota" />
                  </div>
                </div>
                <hr class="my-3"/>
                <p><h6>Room Alloted :</h6></p>
                <div class="row">
                  <div class="col">
                    <label for="exampleInputEmail1">Block: </label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter hostel block" />
                  </div>
                  <div class="col">
                    <label for="exampleInputEmail1"> Room Number: </label>
                    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter room number" />
                  </div>
                </div>
                <hr class="my-3" />
                <div class="col my-2">
                    <label for="exampleInputEmail1">Password: </label>
                    <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter password" />
                </div>
                <div class="col my-2">
                    <label for="exampleInputEmail1">Confirm Password: </label>
                    <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Please confirm password" />
                </div>               
                <button type="submit" class="btn btn-primary my-3">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
