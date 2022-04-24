import React, { useEffect, useState } from 'react';
import "../Assets/Styles/LeaveForm.css";
import "../Assets/Styles/NavPages.css"


const LeaveForm = () => {
  return (
      <div class="d-flex align-items-center light-blue-gradient" style={{height: "150vh"}}>
        <div class="container" >
          <div class="d-flex justify-content-center">
            <div class="col-md-25">
              <div class="card rounded-0 shadow">
                <div class="card-body">
                    <div class="col"><h3>Leave Form</h3></div>
                  <hr />
                  <form>
                    <div class="row">
                      <div class="col">
                        <label for="exampleInputEmail1">Full Name: </label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter full name" />
                      </div>
                      <div class="col">
                        <label for="exampleInputEmail1">Course: </label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter course name" />
                      </div>
                      <div class="col">
                        <label for="exampleInputEmail1">Roll No: </label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter roll number" />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col my-2">
                        <label for="exampleInputEmail1"> Application Date: </label>
                        <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter application date" />
                      </div>
                      <div class="col my-2">
                        <label for="exampleInputEmail1">Block Number: </label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter block number" />
                      </div>
                      <div class="col my-2">
                        <label for="exampleInputEmail1">Room Number: </label>
                        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter room number" />
                      </div>
                    </div>
                    <hr />
                    <p class="my-2"><h6>Dear Sir/Madam kindly allow me to take leave from the hostel from:</h6></p>
                    <div class="row">
                      <div class="col my-2 ">
                        <label for="exampleInputEmail1"> Depature Date: </label>
                        <input type="datetime-local" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter depature date"/>
                      </div>
                      <div class="col my-2">
                        <label for="exampleInputEmail1">Arrival Date: </label>
                        <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter arrival date" />
                      </div>
                      <div class="col my-2">
                        <label for="exampleInputEmail1">Reason: </label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter reason for going" />
                      </div>
                    </div>
                    <hr />
                    <p class="my-2"><h6>The details of my travel are as follows:</h6></p>
                    <div class="row">
                      <div class="col my-2">
                        <label for="exampleInputEmail1"> Going to: </label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter place" />
                      </div>
                      <div class="col my-2">
                        <label for="exampleInputEmail1">Leaving on: </label>
                        <input type="time" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter depature date & time" />
                      </div>
                      <div class="col my-2">
                        <label for="exampleInputEmail1">Back on: </label>
                        <input type="time" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter arrival date & time" />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col my-2">
                        <label for="exampleInputEmail1"> Contact Person: </label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
                      </div>
                      <div class="col my-2">
                        <label for="exampleInputEmail1">Relation: </label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter relation" />
                      </div>
                      <div class="col my-2">
                        <label for="exampleInputEmail1">Contact Number: </label>
                        <input type="tel" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter contact number" />
                      </div>
                    </div>
                    <hr/>
                    <p><h6>Further, during the period of my absense from PDEU campus, I take sole responsibility of myself.</h6></p>
                    <div class="col">
                        <p style={{color: "#D22B2B"}}><h6>*I agree to abide by the rules</h6></p>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter the above sentence" />
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


export default LeaveForm;