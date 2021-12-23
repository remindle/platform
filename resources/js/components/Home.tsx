import React, { useState } from 'react';

import logo from '../logo.svg';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <header className="flex flex-col items-center justify-center flex-grow text-2xl text-gray-700 dark:text-white">
      <img src={logo} className="animate-spin-slow h-72" alt="remindle logo" />
      <p>Hello Vite + React!</p>
      <p className="my-8">
        <button
          className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-teal-600 border border-transparent rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is: {count}
        </button>
      </p>
      <p>
        Edit <code>App.tsx</code> and save to test HMR updates.
      </p>
      <p>
        <a
          className="text-blue-400"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {" | "}
        <a
          className="text-blue-400"
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite Docs
        </a>
      </p>
    </header>
  );
}

export default Home;
