import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthForm.css";
import loginLogo from "./images/logomain.png";

function AuthForm({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      setError("Please enter both email and password");
      return;
    }

    
    localStorage.setItem("isLoggedIn", "true");
    onLogin();
    navigate("/home"); 
  };
  const backgroundStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to bottom, #2e005f, #7b2fb2, #d47cda, #f9b18d, #fcd17d)",
    fontFamily: "'Jost', 'Poppins', sans-serif",
  };

  return (<div style={backgroundStyle}>

    <div className="login-container">
      <div className="login-card">
        <img src={loginLogo} alt="" className="login-logo" />
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error-text">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
            </div>
  );
}

export default AuthForm;
