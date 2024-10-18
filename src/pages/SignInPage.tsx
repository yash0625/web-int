import React, { useState } from "react";
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../composables/useAuth";
import { login as loginService } from "../services/authService";

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigate = useNavigate();
  const { handleLogin } = useAuth(); // Using the composable

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Show loading state
    setError("");
    try {
      const { token } = await loginService({ email, password });
      handleLogin(token); // Dispatch action to login
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid credentials");
    } finally {
      setIsLoading(false); // Remove loading state
    }
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Form
        onSubmit={handleSubmit}
        title={<h1 className="text-2xl font-bold mb-4">Sign In</h1>} // Named slot for title
        actions={
          <div className="mt-4">
            <Button
              //   disabled={isLoading}
              className={`px-6 py-2 ${
                isLoading ? "bg-gray-400" : "bg-blue-500"
              } text-white rounded hover:bg-blue-600 transition`}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </Button>
            <Button
              onClick={handleSignUp}
              className="mt-4 px-6 py-2 bg-green-500 text-white rounded transition"
            >
              Sign Up
            </Button>
          </div>
        } // Named slot for actions (buttons)
      >
        {/* Named slot for body (inputs) */}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border border-gray-300 rounded px-4 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border border-gray-300 rounded px-4 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </Form>
    </div>
  );
};

export default SignInPage;
