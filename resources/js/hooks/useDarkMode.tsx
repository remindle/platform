import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(
      localStorage.getItem("theme") === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");

      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");

      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return [darkMode, toggleDarkMode];
}
