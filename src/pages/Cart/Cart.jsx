

// import React from 'react';
// import { Link } from 'react-router-dom';
// import useStore from '../../store/useStore';
// import logo from '../../assets/logo.png';
// import './Cart.css';

// const calculateTotal = (cart) => {
//   return cart.reduce((total, item) => total + item.price * item.quantity, 0);
// };

// const Cart = () => {
//   const { cart, removeFromCart, darkMode } = useStore();
//   const total = calculateTotal(cart);
//   const isCartEmpty = cart.length === 0;

//   return (
//     <div className={`cart-page ${darkMode ? 'dark-mode' : ''}`}>
//       <div className="cart-container">
//         <div className="cart-header">
//           <img className="cart-logo" src={logo} alt="logo" />
//           <h2>Cart</h2>
//           <p>
//             <Link to="/" className="home-link">Home</Link> &gt; Cart
//           </p>
//         </div>
//         <div className="cart-content">
//           <div className="cart-items">
//             <h1>Cart</h1>
//             {isCartEmpty ? (
//               <p>Your cart is empty</p>
//             ) : (
//               <div className="cart-table-wrapper">
//                 <table className="cart-table">
//                   <thead>
//                     <tr>
//                       <th>Product</th>
//                       <th>Price</th>
//                       <th>Quantity</th>
//                       <th>Subtotal</th>
//                       <th>Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {cart.map((item) => (
//                       <tr key={item.id}>
//                         <td className="cart-product">
//                           <img src={item.image} alt={item.name} className="cart-product-image" />
//                           <p>{item.name}</p>
//                         </td>
//                         <td>Rs. {item.price.toFixed(2)}</td>
//                         <td>{item.quantity}</td>
//                         <td>Rs. {(item.price * item.quantity).toFixed(2)}</td>
//                         <td>
//                           <button onClick={() => removeFromCart(item.id)} className="cart-remove">
//                             🗑️
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
//           {!isCartEmpty && (
//             <div className="cart-summary">
//               <h2>Cart Totals</h2>
//               <div className="summary-item">
//                 <span>Subtotal</span>
//                 <span>Rs. {total.toFixed(2)}</span>
//               </div>
//               <div className="summary-item total">
//                 <span>Total</span>
//                 <span>Rs. {total.toFixed(2)}</span>
//               </div>
//               <button className="checkout-button" disabled={isCartEmpty}>
//                 <Link to="/checkout" className="checkout-link">
//                   Check Out
//                 </Link>
//               </button>
//               <Link to="/shop" className="back-to-shop-button">
//                 Back to Shop
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;







import React from 'react';
import { Link } from 'react-router-dom';
import useStore from '../../store/useStore';
import logo from '../../assets/logo.png';
import './Cart.css';

const calculateTotal = (cart) => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

const Cart = () => {
  const { cart, removeFromCart, darkMode } = useStore();
  const total = calculateTotal(cart);
  const isCartEmpty = cart.length === 0;

  // Scroll to the top of the page function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`cart-page ${darkMode ? 'dark-mode' : ''}`}>
      <div className="cart-container">
        <div className="cart-header">
          <img className="cart-logo" src={logo} alt="logo" />
          <h2>Cart</h2>
          <p>
            <Link to="/" className="home-link">Home</Link> &gt; Cart
          </p>
        </div>
        <div className="cart-content">
          <div className="cart-items">
            <h1>Cart</h1>
            {isCartEmpty ? (
              <p>Your cart is empty</p>
            ) : (
              <div className="cart-table-wrapper">
                <table className="cart-table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td className="cart-product">
                          <img src={item.image} alt={item.name} className="cart-product-image" />
                          <p>{item.name}</p>
                        </td>
                        <td>Rs. {item.price.toFixed(2)}</td>
                        <td>{item.quantity}</td>
                        <td>Rs. {(item.price * item.quantity).toFixed(2)}</td>
                        <td>
                          <button onClick={() => removeFromCart(item.id)} className="cart-remove">
                            🗑️
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          {!isCartEmpty && (
            <div className="cart-summary">
              <h2>Cart Totals</h2>
              <div className="summary-item">
                <span>Subtotal</span>
                <span>Rs. {total.toFixed(2)}</span>
              </div>
              <div className="summary-item total">
                <span>Total</span>
                <span>Rs. {total.toFixed(2)}</span>
              </div>
              <button
                className="checkout-button"
                onClick={scrollToTop}
                disabled={isCartEmpty}
              >
                <Link to="/checkout" className="checkout-link">
                  Check Out
                </Link>
              </button>
              <Link to="/shop" className="back-to-shop-button">
                Back to Shop
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
