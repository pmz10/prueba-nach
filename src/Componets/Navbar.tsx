import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Nach
      </Link>
      <div>
        <div className="d-flex">
          <Link className="btn btn-dark mr-2" to="/login">
            Login
          </Link>
          <Link className="btn btn-dark mr-2" to="/employees">
            Employees
          </Link>
          <Link className="btn btn-dark mr-2" to="/upload">
            Upload
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
