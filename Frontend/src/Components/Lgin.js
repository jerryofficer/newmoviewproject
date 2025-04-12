import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents page reload

    console.log(email , password)
    try {
      const response = await fetch("https://newmoviewproject.onrender.com/login", {
        method: "POST", // Fixed typo
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        console.log(data)
        setMessage("Login successful!");
        
        window.location.reload()      // Change "/home" to the correct route where your Navbar is displayed
      } else {
        setMessage(data.message || "Login failed!");
      }
    } catch (error) {
      console.error("Error on login:", error);
      setMessage("Cannot login");
    }
  };

  return (
    <div className="login">
      <form className="wrapper" onSubmit={handleSubmit}>
        <div className="login_box">
          <div className="login-header">
            <span>Login</span>
          </div>
          <div className="input_box">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />
            <label className="label">Email</label>
          </div>
          <div className="input_box">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
            />
            <label className="label">Password</label>
          </div>
          <div className="input_box">
            <input type="submit" className="input-submit" value="Login" />
          </div>
          <div className="register">
            <span>
              Don't have an account? <NavLink to="/Signup">SignUp</NavLink><br></br>
            </span>
          </div>
        </div>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Login;
