// src/HomePage.jsx

import React from 'react';

function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 text-black dark:text-white flex justify-center items-center">
      <div className="w-full max-w-4xl p-8">
        <h1 className="text-3xl font-semibold mb-6">Welcome to the Home Page!</h1>
        <div className="grid grid-cols-3 gap-6">
          {/* Example Product Card */}
          <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Product 1</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Product description goes here.</p>
          </div>
          <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Product 2</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Product description goes here.</p>
          </div>
          <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Product 3</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Product description goes here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
