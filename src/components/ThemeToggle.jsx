

// import React from 'react';
// import useThemeStore from '../store/useThemeStore' 

// const ThemeToggle = () => {
//   const { isDarkMode, toggleDarkMode } = useThemeStore();

//   return (
//     <button onClick={toggleDarkMode} className="theme-toggle-button">
//       {isDarkMode ? 'Light Mode' : 'Dark Mode'}
//     </button>
//   );
// };

// export default ThemeToggle;



import React, { useEffect } from 'react';
import useThemeStore from '../store/useThemeStore';

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useThemeStore();

  // Apply the theme to the document body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]); // Re-run when isDarkMode changes

  return (
    <button onClick={toggleDarkMode} className="theme-toggle-button">
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
