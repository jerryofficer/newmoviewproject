import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

const AdminLogin = ({ setIsAdmin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        if (username === "Divyathapa" && password === "Divya@1234") {
            localStorage.setItem("adminToken", "valid-token");
            setIsAdmin(true);
            navigate("/list"); // Redirect to admin dashboard
        } else {
            setError("Invalid credentials");
        }
    };

    return (
        <div className="wrapper">
            <div className="login_box">
                <div className="login-header">
                    <span>Login</span>
                </div>
                {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
                <form onSubmit={handleLogin}>
                    <div className="input_box">
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input_box">
                        <input
                            type="password"
                            className="input-field"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="input-submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
