// src/App.tsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import DashboardPage from "./pages/DashboardPage";
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signin" />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />

      {/* Protected Route Middleware for the Dashboard */}
      <Route path="/dashboard" element={<ProtectedRoute />}>
        <Route path="" element={<DashboardPage />} />{" "}
        {/* Dashboard inside ProtectedRoute */}
      </Route>
    </Routes>
  );
};

export default App;
