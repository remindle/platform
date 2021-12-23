import React, { useEffect, useState } from 'react';

import { MoonIcon } from '../components/icons/Moon';
import useDarkMode from '../hooks/useDarkMode';

function Header() {
    const [darkMode, toggleDarkMode] = useDarkMode();
    const [state, setState] = useState(false);

    useEffect(() => {
        //
    }, [darkMode]);

    return (
        <nav className="flex items-center justify-between h-16 px-4">
            <a href="/">
                <img
                    src={`/logo_text${darkMode ? "_white" : ""}.svg`}
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
    );
}

export default Header;
