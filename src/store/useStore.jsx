
import { create } from 'zustand';

const useStore = create((set) => ({
  products: [],
  categories: [],
  cart: [],
  isDarkMode: false,
  isSidebarOpen: false,

  addToCart: (product) => set((state) => {
    const existingItem = state.cart.find(item => item.id === product.id);
    const quantityToAdd = product.quantity || 1;  

    if (existingItem) {
      return {
        cart: state.cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantityToAdd }
            : item
        ),
        isSidebarOpen: true,  
      };
    } else {
      return {
        cart: [...state.cart, { ...product, quantity: quantityToAdd }],
        isSidebarOpen: true, 
      };
    }
  }),

   removeFromCart: (id) => set((state) => ({
    cart: state.cart.filter(item => item.id !== id),
  })),

   
  fetchProducts: async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) throw new Error('Failed to fetch products');
      const data = await response.json();
      set({ products: data });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  },

   fetchCategories: async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      if (!response.ok) throw new Error('Failed to fetch categories');
      const data = await response.json();
      set({ categories: data });
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  },

   toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),

   toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  openSidebar: () => set({ isSidebarOpen: true }),
  closeSidebar: () => {
     set({ isSidebarOpen: false });
  },
}));

export default useStore;
