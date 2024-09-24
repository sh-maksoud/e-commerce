
import React, { useEffect } from 'react';
import useThemeStore from '../store/useThemeStore';

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useThemeStore();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]); 

  return (
    <button onClick={toggleDarkMode} className="theme-toggle-button">
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
