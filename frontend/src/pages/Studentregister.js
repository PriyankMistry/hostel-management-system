import {React, useState} from 'react';
const Studentregister = () => {

  const [name,setName] = useState('')
  const [phone,setPhone] = useState('')
  const [course,setCourse] = useState('')
  const [rollno,setRollno] = useState('')
  const [email,setEmail] = useState('')
  const [quota,setQuota] = useState('')
  const [block,setBlock] = useState('')
  const [room,setRoom] = useState('')
  const [password,setPassword] = useState('')
  const [cpassword,setCpassword] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault()

    const i = await fetch('http://localhost:5000/admin/student',
    {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        name, phone, course, rollno, email, quota, block, room, password, cpassword
      })
    })

    if(i.status===201){
      alert("Registered!")
    }
  }


  return (
    <div class="d-flex align-items-center light-blue-gradient" style={{height: "130vh"}}>
    <div class="container" >
      <div class="d-flex justify-content-center">
        <div class="col-md-25">
          <div class="card rounded-0 shadow">
            <div class="card-body">
                <div class="col"><h3>Student Registration</h3></div>
              <hr />
              <form onSubmit={handleSubmit}>
                <p><h6>Personal Details :</h6></p>
                <div class="row">
                  <div class="col">
                    <label for="exampleInputEmail1">Full Name: </label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter full name" onChange={e => setName(e.target.value)}/>
                  </div>
                  <div class="col">
                    <label for="exampleInputEmail1"> Contact Number: </label>
                    <input type="tel" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter contact number" onChange={e => setPhone(e.target.value)} />
                  </div>
                </div>
                <div class="row">
                  <div class="col my-2">
                    <label for="exampleInputEmail1">Course: </label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter course name" onChange={e => setCourse(e.target.value)} />
                  </div>
                  <div class="col my-2">
                    <label for="exampleInputEmail1"> Roll Number: </label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter roll number" onChange={e => setRollno(e.target.value)} />
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <label for="exampleInputEmail1">Email ID: </label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter college email id" onChange={e => setEmail(e.target.value)}/>
                  </div>
                  <div class="col">
                    <label for="exampleInputEmail1"> Quota: </label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter admission quota" onChange={e => setQuota(e.target.value)}/>
                  </div>
                </div>
                <hr class="my-3"/>
                <p><h6>Room Alloted :</h6></p>
                <div class="row">
                  <div class="col">
                    <label for="exampleInputEmail1">Block: </label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter hostel block" onChange={e => setBlock(e.target.value) }/>
                  </div>
                  <div class="col">
                    <label for="exampleInputEmail1"> Room Number: </label>
                    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter room number" onChange={e => setRoom(e.target.value)}/>
                  </div>
                </div>
                <hr class="my-3" />
                <div class="col my-2">
                    <label for="exampleInputEmail1">Password: </label>
                    <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
                </div>
                <div class="col my-2">
                    <label for="exampleInputEmail1">Confirm Password: </label>
                    <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Please confirm password" onChange={e => setCpassword(e.target.value)}/>
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

export default Studentregister;