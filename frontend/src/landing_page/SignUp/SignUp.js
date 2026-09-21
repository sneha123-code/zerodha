import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://zerodha-backend-yu0p.onrender.com/auth/signup",
        {
          username: username,
          email: email,
          password: password,
        }
      );

      alert(response.data.message);

      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(
        error.response?.data?.message || "Signup failed"
      );
    }
  };

  return (
    <div className="signup-container">
      <h2>Create your Zerodha account</h2>

      <p className="signup-subtitle">
        Start your paper-trading journey
      </p>

      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

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

        <button type="submit">
          Sign Up
        </button>
      </form>

      <div className="signup-divider">
        <span>OR</span>
      </div>

      <button
        type="button"
        className="google-button"
        onClick={() => alert("Google login will be connected next.")}
      >
        Continue with Google
      </button>

      <p className="login-link">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signup;