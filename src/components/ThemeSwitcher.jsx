import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "./Icons";

const ThemeSwitcher = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Use local storage to remember the user's theme preference
    const storedTheme = localStorage.getItem("theme");
    
    // Check for system's preferred theme
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else if (storedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else if (prefersDarkMode) {
      // Set theme based on system preference
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex items-center space-x-2">

      <button
        className=" p-2 btn-menu focus:ring-1 border border-gray-300 dark:border-gray-600"
        onClick={toggleTheme}
      >
        {isDarkMode ? (
            // Render the first path(sun) when toggle is true
            <SunIcon />
         ) : (
            // Render the second path(moon) when toggle is false
            <MoonIcon />
        )}        
      </button>      
    </div>
  )
}

export default ThemeSwitcher
