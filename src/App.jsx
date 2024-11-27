// src/App.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);  // Dark Mode Toggle
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic authentication
    if (username === 'admin' && password === 'password123') {
      setIsAuthenticated(true);
      setError('');
      navigate('/home'); // Redirect to home page
    } else {
      setError('Invalid username or password');
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (isAuthenticated) {
    return (
      <div className={`min-h-screen ${isDarkMode ? 'dark' : ''} bg-gray-900 text-white flex justify-center items-center`}>
        <h2 className="text-2xl">Welcome, {username}!</h2>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''} bg-white dark:bg-gray-900 text-black dark:text-white flex justify-center items-center`}>
      {/* Dark Mode Button at Top Right Corner */}
      <button 
        onClick={toggleDarkMode} 
        className="absolute top-4 right-4 p-2 text-gray-600 dark:text-gray-300">
        Toggle Dark Mode
      </button>

      <div className="bg-gray-200 dark:bg-gray-800 p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Don't have an account? <span className="text-blue-600 dark:text-blue-400 cursor-pointer" onClick={() => navigate('/register')}>Register</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
