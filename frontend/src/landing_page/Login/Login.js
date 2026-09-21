import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
      "https://zerodha-backend-yu0p.onrender.com/auth/login" ,
        {
          email: email,
          password: password,
        }
      );

      // Save JWT token
      localStorage.setItem("token", response.data.token);

      alert("Login successful");

    window.location.href = "https://zerodha-five-mu.vercel.app/";
    } catch (error) {
      alert(
        error.response?.data?.message || "Login failed"
      );
    }
  };

  return (
    <div className="signup-container">
      <h2>Login to Zerodha</h2>

      <p className="signup-subtitle">
        Welcome back
      </p>

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

        <button type="submit">
          Login
        </button>
      </form>

      <div className="signup-divider">
        <span>OR</span>
      </div>

      <button
        type="button"
        className="google-button"
        onClick={() =>
          alert("Google login will be connected next.")
        }
      >
        Continue with Google
      </button>

      <p className="login-link">
        Don't have an account?{" "}
        <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;