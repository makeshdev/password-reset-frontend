import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h1 className="mb-4">
            <FaHome className="me-2" />
            Welcome to Our App
          </h1>
          <p className="lead">
            This is the home page of our password reset application.
          </p>
          <div className="mt-4">
            <Link to="/forgot-password" className="btn btn-primary me-2">
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
