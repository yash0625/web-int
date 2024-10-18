// src/pages/SignUpPage.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";
import { useAuth } from "../context/authContext";

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { token } = await register({ email, password });
      auth.login(token); // Save token in context
      navigate("/dashboard"); // Redirect to dashboard
    } catch (err) {
      setError("Registration failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl mb-6">Sign Up</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-4 py-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-4 py-2 rounded"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded"
        >
          Sign Up
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default SignUpPage;
