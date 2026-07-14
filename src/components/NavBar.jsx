import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Hackathon
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/">
              Add Team
            </Link>

            <Link className="nav-link" to="/view">
              View Teams
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;