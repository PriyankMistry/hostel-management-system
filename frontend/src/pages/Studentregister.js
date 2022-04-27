import {React, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom';

const Studentregister = () => {

  const navigate = useNavigate();

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

    let flag=[]

    const valid = new RegExp('^[0-9]*$')
    valid.test(name) ? toast.error("Invalid name!") : flag.push(1)
    valid.test(course) ? toast.error("Invalid course name!") : flag.push(1)
    valid.test(quota) ? toast.error("Invalid quota!") : flag.push(1)

    if(flag.length==3){
    
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
      navigate('/admin')
    }
  }

}

  return (
    <div className="d-flex align-items-center light-blue-gradient" style={{height: "50em"}}>
    <ToastContainer/>
    <div className="container" >
      <div className="d-flex justify-content-center">
        <div className="col-md-25">
          <div className="card rounded-0 shadow">
            <div className="card-body">
                <div className="col"><h3>Student Registration</h3></div>
              <hr />
              <form onSubmit={handleSubmit}>
                <p><h6>Personal Details :</h6></p>
                <div className="row">
                  <div className="col">
                    <label for="exampleInputEmail1">Full Name: </label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter full name" value={name} onChange={e => setName(e.target.value)}/>
                  </div>
                  <div className="col">
                    <label for="exampleInputEmail1"> Contact Number: </label>
                    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter contact number" onChange={e => setPhone(e.target.value)} />
                  </div>
                </div>
                <div className="row">
                  <div className="col my-2">
                    <label for="exampleInputEmail1">Course: </label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter course name" onChange={e => setCourse(e.target.value)} />
                  </div>
                  <div className="col my-2">
                    <label for="exampleInputEmail1"> Roll Number: </label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter roll number" onChange={e => setRollno(e.target.value)} />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label for="exampleInputEmail1">Email ID: </label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter college email id" onChange={e => setEmail(e.target.value)}/>
                  </div>
                  <div className="col">
                    <label for="exampleInputEmail1"> Quota: </label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter admission quota" onChange={e => setQuota(e.target.value)}/>
                  </div>
                </div>
                <hr className="my-3"/>
                <p><h6>Room Alloted :</h6></p>
                <div className="row">
                  <div className="col">
                    <label for="exampleInputEmail1">Block: </label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter hostel block" onChange={e => setBlock(e.target.value) }/>
                  </div>
                  <div className="col">
                    <label for="exampleInputEmail1"> Room Number: </label>
                    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter room number" onChange={e => setRoom(e.target.value)}/>
                  </div>
                </div>
                <hr className="my-3" />
                <div className="col my-2">
                    <label for="exampleInputEmail1">Password: </label>
                    <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="col my-2">
                    <label for="exampleInputEmail1">Confirm Password: </label>
                    <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Please confirm password" onChange={e => setCpassword(e.target.value)}/>
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

export default Studentregister;