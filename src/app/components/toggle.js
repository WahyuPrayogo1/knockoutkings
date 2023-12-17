"use client"
import React, { useState, useEffect } from 'react';

function ToggleSwitcher() {
  const [isDark, setIsDark] = useState(false);

  // Load user preference from localStorage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDark(true);
    }
  }, []);

  // Set user preference and update localStorage
  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  };

  useEffect(() => {
    // Apply the 'dark' class to the HTML element when in dark mode
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className='lg:mr-10'>
      <label htmlFor="theme-switch" className="cursor-pointer">
        <input
          id="theme-switch"
          type="checkbox"
          className="hidden"
          checked={isDark}
          onChange={toggleTheme}
        />
        <div className="absolute w-14 h-6 bg-white dark:bg-black transition duration-500 rounded-full flex justify-between items-center px-0.5">
          <i>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black dark:text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
          </i>
          <i>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black dark:text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          </i>
        </div>
        <div className="w-6 h-6 bg-red-600 dark:bg-white transition duration-200 rounded-full shadow-md transform ease-in-out translate-x-0 dark:translate-x-9"></div>
      </label>
    </div>
  );
}

export default ToggleSwitcher;
