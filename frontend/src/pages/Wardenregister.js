import {React, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'


const Wardenregister = () => {

  const navigate = useNavigate();

  
  const [name,setName] = useState('')
  const [phone,setPhone] = useState('')
  const [email,setEmail] = useState('')
  const [block,setBlock] = useState('')
  const [password,setPassword] = useState('')
  const [cpassword,setCpassword] = useState('')

  const handleSubmit = async (e) =>{

    e.preventDefault()
    let flag = []
    const valid = new RegExp('^[0-9]*$')
    valid.test(name) ? toast.error("Invalid name!") : flag.push(1)
    
   if(flag.length == 1){

    const i = await fetch('http://localhost:5000/admin/warden',
    {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        name, phone, email, block, password, cpassword
      })
    })

    if(i.status===201){
      alert("Registered!")
      navigate('/admin')
    }
  }
}


  return (
    <div className="d-flex align-items-center light-blue-gradient" style={{height: "38em"}}>
    <ToastContainer/>
    <div className="container" >
      <div className="d-flex justify-content-center">
        <div className="col-md-25">
          <div className="card rounded-0 shadow">
            <div className="card-body">
                <div className="col"><h3>Warden Registration</h3></div>
              <hr />
              <form onSubmit={handleSubmit}>
                <p><h6>Personal Details :</h6></p>
                <div className="row">
                  <div className="col">
                    <label for="exampleInputEmail1">Full Name: </label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter full name" onChange={e => setName(e.target.value)} />
                  </div>
                  <div className="col">
                    <label for="exampleInputEmail1"> Contact Number: </label>
                    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter contact number" onChange={e => setPhone(e.target.value)} />
                  </div>
                </div>
                <div className="row">
                  <div className="col my-2">
                    <label for="exampleInputEmail1">Email ID: </label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter warden email id" onChange={e => setEmail(e.target.value)}/>
                  </div>
                  <div className="col my-2">
                    <label for="exampleInputEmail1"> Block Alloted: </label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter block alloted" onChange={e => setBlock(e.target.value)} />
                  </div>
                </div>
                <hr className="my-3" />
                <div className="col my-2">
                    <label for="exampleInputEmail1">Password: </label>
                    <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter password" onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="col my-2">
                    <label for="exampleInputEmail1">Confirm Password: </label>
                    <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Please confirm password" onChange={e => setCpassword(e.target.value)} />
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


export default Wardenregister;