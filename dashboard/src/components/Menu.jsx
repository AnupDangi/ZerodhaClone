import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Menu = ({ username }) => {
  const [selectedMenu, setSelectedMenu]                = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => setSelectedMenu(index);
  const toggleProfile   = () => setIsProfileDropdownOpen((o) => !o);

  const handleSignOut = async () => {
    try {
      // 1) Tell backend to clear the cookie
      await axios.post(
        "http://localhost:5002/auth/logout",
        {},
        { withCredentials: true }
      );
      console.log("Logout request sent");
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      // 2) Redirect back to login app
      window.location.href = "http://localhost:5173/login";
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" alt="Logo" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          {["/", "/orders", "/holdings", "/positions", "/funds", "/apps"].map((path, i) => (
            <li key={i}>
              <Link
                to={path}
                onClick={() => handleMenuClick(i)}
                style={{ textDecoration: "none" }}
              >
                <p className={selectedMenu === i ? activeMenuClass : menuClass}>
                  {["Dashboard","Orders","Holdings","Positions","Funds","Apps"][i]}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <hr />
        <div className="profile" onClick={toggleProfile} style={{ cursor: "pointer" }}>
          <div className="avatar">👤</div>
          <p className="username">{username}</p>
        </div>

        {isProfileDropdownOpen && (
          <div className="profile-dropdown">
            <button
              onClick={handleSignOut}
              className="btn btn-link"
              style={{ padding: "0.5rem", textAlign: "left", width: "100%" }}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
