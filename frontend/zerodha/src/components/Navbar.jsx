import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div class="container">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="logo"
            style={{ width: "50%" }}
          />
          </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0">
            
            <li class="nav-item">
              <Link className="nav-link active" to="/signup">
                Signup
              </Link>
            </li>
            
            <li class="nav-item">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
            
            <li class="nav-item">
              <Link className="nav-link active" to="/products">
                Product
              </Link>
            </li>
            
            <li class="nav-item">
              <Link className="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>

            <li class="nav-item">
              <Link className="nav-link active" to="/support">
                Support
              </Link>
            </li>

            <li class="nav-item dropdown">
              <ul class="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/signup">
                    Signup
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/products">
                    Product
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/pricing">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/support">
                    Support
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
