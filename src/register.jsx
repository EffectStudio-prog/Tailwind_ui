// src/RegisterPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark Mode Toggle

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Basic validation for the register form
    if (username && password && email) {
      // Here you would typically call an API to register the user
      console.log('User Registered:', { username, email, password });
      navigate('/home'); // After successful registration, navigate to the home page
    } else {
      setError('Please fill in all fields');
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''} bg-white dark:bg-gray-900 text-black dark:text-white flex justify-center items-center`}>
      {/* Dark Mode Button at Top Right Corner */}
      <button 
        onClick={toggleDarkMode} 
        className="absolute top-4 right-4 p-2 text-gray-600 dark:text-gray-300">
        Toggle Dark Mode
      </button>

      <div className="bg-gray-200 dark:bg-gray-800 p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 rounded-md border dark:bg-gray-800 dark:border-gray-600 dark:text-white mb-4"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded-md border dark:bg-gray-800 dark:border-gray-600 dark:text-white mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded-md border dark:bg-gray-800 dark:border-gray-600 dark:text-white mb-4"
          />
          <button type="submit" className="w-full p-2 bg-black text-white rounded-md">
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Already have an account? <span className="text-blue-600 dark:text-blue-400 cursor-pointer" onClick={() => navigate('/')}>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
