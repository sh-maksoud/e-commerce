// import { create } from 'zustand';

// const useThemeStore = create((set) => ({
//   isDarkMode: false,
//   toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
// }));

// export default useThemeStore;




import { create } from 'zustand';

// Create Zustand store for theme management
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
