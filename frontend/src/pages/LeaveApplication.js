import React from "react";
import "../Assets/Styles/NavPages.css";
import { Link } from "react-router-dom";

const LeaveApplication = () => {
    return (
            <div className="container">
                <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                    <div className="card" style={{ width: "100%", margin: "auto", marginBottom: 10 }}>
                        <div className="card-body">
                            <h5 className="card-title">Long Leave</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to="/studenthome/leaveapplication/longleave" className="btn btn-primary">
                                Apply
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                    <div className="card" style={{ width: "100%", margin: "auto", marginBottom: 10 }}>
                        <div className="card-body">
                            <h5 className="card-title">Short Leave</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to="/studenthome/leaveapplication/shortleave" className="btn btn-primary">
                                Apply
                            </Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>

    ) 
};

export default LeaveApplication;