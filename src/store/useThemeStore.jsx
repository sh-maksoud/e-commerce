
import { create } from 'zustand';

const useThemeStore = create((set) => ({
  // Initialize with localStorage value or default to false
  isDarkMode: localStorage.getItem('theme') === 'dark',

  // Function to toggle dark mode
  toggleDarkMode: () => set((state) => {
    const newTheme = !state.isDarkMode;
    localStorage.setItem('theme', newTheme ? 'dark' : 'light'); // Save preference to localStorage
    return { isDarkMode: newTheme };
  }),
}));

export default useThemeStore;
