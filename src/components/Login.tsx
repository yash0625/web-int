// src/components/Login.tsx
import React, { useState } from "react";
import { login } from "../services/authService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await login({ email, password });
      setToken(response.token);
      setError("");
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-2xl">Login</h1>
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
        onClick={handleLogin}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Login
      </button>
      {token && <p className="text-green-500">Logged in! Token: {token}</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Login;
