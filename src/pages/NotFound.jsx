import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <div className="card shadow">
            <div className="card-body">
              <h1 className="text-danger mb-4">
                <FaExclamationTriangle className="me-2" />
                404 - Page Not Found
              </h1>
              <p className="lead">The page you're looking for doesn't exist.</p>
              <Link to="/" className="btn btn-primary mt-3">
                <FaHome className="me-2" />
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
