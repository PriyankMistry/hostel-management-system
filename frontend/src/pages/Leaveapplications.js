import React from 'react'
import { Link } from "react-router-dom";

export default function Leaveapplications() {
  return (
    <div className="row row-cols-1 row-cols-md-4 my-3 mx-3">
         <div className="col mb-4">
            <div className="card h-100">
                <div className="card-header">
                    <h4>Long Leave</h4>
                </div>
                <div className="card-body">
                    <h6 className="card-title">Name : Prakhar Chaman</h6>
                    <Link to="/warden/leaveapplications/leavereview" className="btn btn-primary">
                                Review
                    </Link>
                </div>
            </div>
        </div>
      </div>
  )
}
