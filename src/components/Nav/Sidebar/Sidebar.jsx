

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useStore from '../../../store/useStore';
import animation from '../../../assets/Animation.mp4';
import './sidebar.css';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar, cart, removeFromCart } = useStore();
  const [closeTimeout, setCloseTimeout] = useState(null);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
  };

  if (!isSidebarOpen) return null;

  const handleMouseLeave = () => {
    const timeoutId = setTimeout(() => {
      closeSidebar();
    }, 200);
    setCloseTimeout(timeoutId);
  };

  const handleMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
  };

  return (
    <div
      className="sidebar open"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="close-btn"
        onClick={closeSidebar}
        aria-label="Close sidebar"
      >
        Close X
      </button>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <video
            src={animation} 
            autoPlay
            loop
            muted
            className="empty-cart-video"
          />
        </div>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <p className="item-title">{item.title}</p>
                <p className="item-quantity-price">
                  <span>Quantity: {item.quantity}</span>
                  <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                </p>
              </div>
              <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                X
              </button>
            </div>
          ))}
          <div className="subtotal">
            <p>Subtotal:</p>
            <p>${calculateTotal()}</p>
          </div>
          <div className="cart-actions">
            <Link to="/checkout" className="btn-proceed">Proceed to Checkout</Link>
            <Link to="/shop" className="btn-shop">Back to Shop</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
