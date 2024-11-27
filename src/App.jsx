import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./HomePage";
import Login from "./login";
import Register from "./register";
import ProtectedRoute from "./ProtectedRoute";
import DarkModeToggle from "./DarkModeContext";

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <DarkModeToggle />
      <Routes>
        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
