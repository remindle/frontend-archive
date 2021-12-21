import React, { useEffect, useState } from 'react';

import { MoonIcon } from '../components/icons/Moon';
import useDarkMode from '../hooks/useDarkMode';
import { Link } from '../renderer/Link';
import { PageContext } from '../renderer/types';

function Header() {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const [state, setState] = useState(false);

  useEffect(() => {
    //
  }, [darkMode]);

  return (
    <nav className="flex items-center justify-between h-16 px-4">
      <a href="#">
        <img
          src={`/assets/logo_text${darkMode ? "_white" : ""}.svg`}
          alt="remindle logo"
          className="w-32"
        />
      </a>
      <ul className="flex w-auto space-x-12">
        <li>
          <Link className="text-sm font-medium" href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="text-sm font-medium" href="/auth/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="text-sm font-medium" href="/auth/register">
            Register
          </Link>
        </li>
      </ul>
      <button
        className="flex p-2 text-tetriary rounded hover:text-secondary dark:text-white focus:outline-none hover:bg-tetriary dark:hover:bg-gray-500 dark:hover:text-secondary"
        onClick={toggleDarkMode}
      >
        <MoonIcon />
      </button>
    </nav>
  );
}

export default Header;
