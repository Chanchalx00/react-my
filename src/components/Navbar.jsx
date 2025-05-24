import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar({ cartItemCount, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    onLogout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <h2 className="nav-logo">MyCart</h2>
      </div>
      <div className="nav-right">
        <Link to="/home">Home</Link>
        <Link to="/cart">Cart ({cartItemCount})</Link>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
