

import React from 'react';
import useThemeStore from '../store/useThemeStore' 

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useThemeStore();

  return (
    <button onClick={toggleDarkMode} className="theme-toggle-button">
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
