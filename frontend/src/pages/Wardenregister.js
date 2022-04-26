import {React, useState} from 'react';


const Wardenregister = () => {

  
  const [name,setName] = useState('')
  const [phone,setPhone] = useState('')
  const [email,setEmail] = useState('')
  const [block,setBlock] = useState('')
  const [password,setPassword] = useState('')
  const [cpassword,setCpassword] = useState('')

  const handleSubmit = async (e) =>{

    e.preventDefault()

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
    }
  }


  return (
    <div class="d-flex align-items-center light-blue-gradient" style={{height: "100vh"}}>
    <div class="container" >
      <div class="d-flex justify-content-center">
        <div class="col-md-25">
          <div class="card rounded-0 shadow">
            <div class="card-body">
                <div class="col"><h3>Warden Registration</h3></div>
              <hr />
              <form onSubmit={handleSubmit}>
                <p><h6>Personal Details :</h6></p>
                <div class="row">
                  <div class="col">
                    <label for="exampleInputEmail1">Full Name: </label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter full name" onChange={e => setName(e.target.value)} />
                  </div>
                  <div class="col">
                    <label for="exampleInputEmail1"> Contact Number: </label>
                    <input type="tel" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter contact number" onChange={e => setPhone(e.target.value)} />
                  </div>
                </div>
                <div class="row">
                  <div class="col my-2">
                    <label for="exampleInputEmail1">Email ID: </label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter warden email id" onChange={e => setEmail(e.target.value)}/>
                  </div>
                  <div class="col my-2">
                    <label for="exampleInputEmail1"> Block Alloted: </label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter block alloted" onChange={e => setBlock(e.target.value)} />
                  </div>
                </div>
                <hr class="my-3" />
                <div class="col my-2">
                    <label for="exampleInputEmail1">Password: </label>
                    <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter password" onChange={e => setPassword(e.target.value)}/>
                </div>
                <div class="col my-2">
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