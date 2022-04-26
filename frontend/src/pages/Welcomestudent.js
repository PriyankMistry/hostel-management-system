import React, {useEffect, useState} from 'react'

const Welcomestudent = () => {

  // const [email, setEmail] = useState('')
  const [leaveforms, setLeaveforms] = useState([])

  useEffect(()=>{

    const receiveForm = async () =>{
      try{
        const i = await fetch('http://localhost:5000/student',
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({email: localStorage.getItem("email")})
          }) //end of fetch

        setLeaveforms( await i.json())

      }catch(err){
        console.log(err)
      }
    
}
  receiveForm()

},[])


const Yo = () =>{

  return(
  leaveforms.map((leaveform) => (
    <div className='col mb-4'>
        <div className="card h-100">
        <div className="card-header">
            <h4>{leaveform.type}</h4>
        </div>
        <div className="card-body">
            <h6 className="card-title">Application Date : {leaveform.appdate}</h6>
            <h6 style={{color: leaveform.status === "Approved" ? "#00ab66" : leaveform.status === "Pending" ? null :  "#d11a2a"}}>{leaveform.status}</h6>
        </div>
        </div>
    </div>
  )
  ))

}

return (
      <div className='row row-cols-1 row-cols-md-4 my-3 mx-3'>
        <Yo/>
      </div>
  )

}

export default Welcomestudent