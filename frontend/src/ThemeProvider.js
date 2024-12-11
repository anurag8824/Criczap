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
      <header className="fixed bottom-1/3 -right-32 z-50 bg-blue-950 text-white transition-all duration-700 dark:text-white dark:bg-gray-300 pt-2.5 pb-1 rounded-l-full pl-3 hover:right-0">
        {/* You can place your theme toggle button here */}


        <label class="inline-flex gap-2 items-center cursor-pointer">
          <input onClick={toggleTheme} type="checkbox" value="" checked={theme === 'dark'} class="sr-only peer" />
          <div class="relative w-11 h-6  bg-gray-200 peer-focus:outline-none   rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-950">


          </div>
          {theme === 'light' ?
            <span>Enable Dark Mode</span>

            :
            <span>Disable Dark Mode</span>
          }
        </label>


        <button
          onClick={toggleTheme}
          className=" py-2 hidden  dark:text-black"
        >
          {theme === 'light' ? <div className='flex items-center p-1 text-sm font-medium text-white bg-gray-800 rounded-l-xl gap-1'><img src='https://cdn-icons-png.flaticon.com/512/4906/4906399.png' alt='Light' className='size-6' /><span>Enable Dark</span></div> : <img className='size-6' src='https://cdn-icons-png.flaticon.com/512/2698/2698194.png
'/>}
        </button>
      </header>
      {children}
    </div>
  );
};

export default ThemeProvider;
