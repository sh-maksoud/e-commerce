// utils.js
export const calculateTotal = (cartData) => {
    if (!cartData) return 0;
    return cartData.products.reduce((total, item) => {
      return total + (item.quantity * 20); 
    }, 0).toFixed(2);
  };
  