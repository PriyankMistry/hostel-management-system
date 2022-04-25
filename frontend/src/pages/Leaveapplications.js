import React from 'react'
import { Link } from "react-router-dom";

export default function Leaveapplications() {
  return (
      <div class="card" style={{width: "18rem"}}>
          <div class="card-header">
              <h4>Long Leave</h4>
          </div>
          <div class="card-body">
              <h6 class="card-title">Name : Prakhar Chaman</h6>
              <Link to="/warden/leaveapplications/leavereview" class="btn btn-primary">
                        Review
                </Link>
          </div>
      </div>
  )
}
