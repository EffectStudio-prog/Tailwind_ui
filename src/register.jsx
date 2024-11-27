import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <form className="bg-white dark:bg-gray-800 shadow-md p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-4 border rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
        />
        <button className="w-full bg-blue-500 dark:bg-blue-600 text-white py-2 rounded">
          Register
        </button>
        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <span className="text-blue-500 cursor-pointer" onClick={() => navigate("/")}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
