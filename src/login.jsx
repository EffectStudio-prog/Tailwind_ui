import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password123") {
      setIsAuthenticated(true);
      navigate("/home");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white dark:bg-gray-800 shadow-md p-8 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-4 border rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-blue-500 dark:bg-blue-600 text-white py-2 rounded">
          Login
        </button>
        <p className="mt-4 text-sm">
          Don't have an account?{" "}
          <span className="text-blue-500 cursor-pointer" onClick={() => navigate("/register")}>
            Register
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
