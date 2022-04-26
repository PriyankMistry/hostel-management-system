import {React, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import '../Assets/Styles/Login.css'
import pdeulogo from '../Assets/Images/pdeulogo.jpg';


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const onLogin = async (e) => {
        e.preventDefault();
        const i = await fetch('http://localhost:5000/login', 
        {method: "POST",
        headers: {
        'Content-Type':'application/json'
        },
        body: JSON.stringify({
        email,
        password
        })
    })

    const res = await i.json()  //.json() is an async operation

    if(i.status === 201){
        navigate(`/${res.role}`)
    }
    else{
        alert(res.error)
    }

    };
    const stylelogo = {
             width: "100%",
             margin: "auto",
             borderRadius: 7,
             marginTop : "-2em"
       }
    const fontstyle = {
             fontWeight: 600,
             fontFamily: "poppins",
             fontSize: 40,
             color: "#191970"
           }
  return (
    <div className="maincontainer">
         <div className="container-fluid">
             <div className="row no-gutter">
               
                 <div className="col-md-6 d-none d-md-flex bg-image"></div>
                
                 <div className="col-md-6 bg-light">
                     <div className="login d-flex align-items-center py-5">
                       
                         <div className="container">
                         <img src={pdeulogo} alt="pdeulogo" style={stylelogo} />
                             <div className="row mb-5">
                                 <div className="col-lg-10 col-xl-10 mx-auto">
                                     <h3 className="display-6 mb-5 mt-5" style={fontstyle}>Highrise Hostel Sign in</h3>
                                     <form>
                                         <div className="mb-3">
                                             <input id="inputEmail" type="email" placeholder="Email address" autofocus="" className="form-control border-0 shadow-sm px-4"  onChange={e => setEmail(e.target.value)} value={email} required={true} />
                                         </div>
                                         <div className="mb-3">
                                             <input id="inputPassword" type="password" placeholder="Password"  className="form-control border-0 shadow-sm px-4 text-primary"  onChange={e => setPassword(e.target.value)} value={password} required={true} />
                                         </div>
                                         <div className="d-grid gap-2 mt-2">
                                         <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 shadow-sm"  onClick={onLogin}>Sign in</button>
                                         </div>                                      
                                     </form>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
       </div>
      
  )
}
