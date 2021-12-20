import React, { Suspense, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import { MoonIcon } from './icons/Moon';

function App() {
  const [count, setCount] = useState(0);

  function toggleDarkMode() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  }

  return (
    <div className="flex flex-col min-h-screen text-center bg-white dark:bg-tetriary-dark">
      <nav className="flex items-center justify-end h-16 px-4">
        <button
          className="flex p-2 text-tetriary rounded hover:text-secondary dark:text-white focus:outline-none hover:bg-tetriary dark:hover:bg-gray-500 dark:hover:text-secondary"
          onClick={toggleDarkMode}
        >
          <MoonIcon />
        </button>
      </nav>
      <BrowserRouter>
        <Suspense fallback="Loading...">
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="*" element={<Navigate to="home" />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
