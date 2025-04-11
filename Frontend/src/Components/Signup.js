import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Sign.css";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:6060/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password })
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("Signup successful! Redirecting to login...");
                setTimeout(() => navigate("/"), 2000); // Redirect after 2s
            } else {
                setMessage(data.message || "Signup failed!");
            }
        } catch (error) {
            setMessage("Error signing up. Please try again.");
        }
    };

    return (
        <div className="signup">
            <form className="wrapper" onSubmit={handleSubmit}>
                <div className="signup_box">
                    <div className="signup-header">
                        <span>Sign Up</span>
                    </div>
                    {/* Username Field */}
                    <div className="input_box">
                        <input
                            type="text"
                            className="input-field"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <label className="label">Username</label>
                    </div>
                    {/* Email Field */}
                    <div className="input_box">
                        <input
                            type="email"
                            className="input-field"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label className="label">Email</label>
                    </div>
                    {/* Password Field */}
                    <div className="input_box">
                        <input
                            type="password"
                            className="input-field"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label className="label">Password</label>
                    </div>
                    {/* Terms and Conditions */}
                    <div className="remember-forgot">
                        <input type="checkbox" id="terms" required />
                        <label htmlFor="terms">I agree to the Terms and Conditions</label>
                    </div>
                    {/* Submit Button */}
                    <div className="input_box">
                        <input type="submit" className="input-submit" value="Sign Up" />
                    </div>
                    {/* Success or Error Message */}
                    {message && <p className="success">{message}</p>}
                </div>
            </form>
        </div>
    );
};

export default Signup;
