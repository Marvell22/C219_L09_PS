import React from "react";
import { Link } from "react-router-dom";

function Confirmation() {
  return (
    <div className="confirmation">
      <h1>Registration Successful!</h1>
      <p>Thank you for registering your interest in our course. We will contact you soon with more details.</p>

      <div className="actions">
        <Link to="/" className="btn btn-primary">Return to Home</Link>
        <Link to="/Diplomas" className="btn btn-secondary">Explore More Courses</Link>
      </div>
    </div>
  );
}

export default Confirmation;
