import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import { MoonIcon } from './icons/Moon';
import useDarkMode from './utils/useDarkMode';

function App() {
  const [darkMode, toggleDarkMode] = useDarkMode();

  useEffect(() => {
    //
  }, [darkMode]);

  return (
    <div className="flex flex-col min-h-screen text-center bg-white dark:bg-tetriary-dark">
      <nav className="flex items-center justify-between h-16 px-4">
        <a href="#">
          <img
            src={`/src/logo_text${darkMode ? "_white" : ""}.svg`}
            alt="remindle logo"
            className="w-32"
          />
        </a>
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
            <Route path="register" element={<Register />} />
            <Route path="*" element={<Navigate to="login" />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
