// src/ThemeProvider.js
import { useState, useEffect } from 'react';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Check if the theme is already stored in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme); // Apply class to <html>
      document.body.classList.add(savedTheme); // Apply class to <body>
    } else {
      setTheme('light'); // Default theme
      document.body.classList.add('light'); // Add light mode class to <body>
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.body.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    document.body.classList.add(newTheme);
    localStorage.setItem('theme', newTheme); // Persist theme
  };

  return (
    <div>
      <header className="">
        {/* You can place your theme toggle button here */}
        
        <button
          onClick={toggleTheme}
          className=" py-2   dark:text-black"
        >
          {theme === 'light' ? <img src='https://cdn-icons-png.flaticon.com/512/4906/4906399.png' alt='Light' className='size-6' /> : <img className='size-6' src='https://cdn-icons-png.flaticon.com/512/2698/2698194.png
'/>}
        </button>
      </header>
      {children}
    </div>
  );
};

export default ThemeProvider;
