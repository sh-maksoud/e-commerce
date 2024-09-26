

import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useStore from '../../../store/useStore';
import empty from '../../../assets/empty.jpeg';
import './Sidebar.css';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar, cart, removeFromCart, updateQuantity } = useStore();
  const [closeTimeout, setCloseTimeout] = useState(null);
  const sidebarRef = useRef(null); 
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(isSidebarOpen);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
  };

  useEffect(() => {
    setIsVisible(isSidebarOpen);
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen, closeSidebar]);

 
  useEffect(() => {
    if (sidebarRef.current) {
      sidebarRef.current.scrollTop = 0;  
    }
  }, [cart]);  

  const handleMouseLeave = () => {
    const timeoutId = setTimeout(() => {
      closeSidebar();
      setIsVisible(false); 
    }, 200);
    setCloseTimeout(timeoutId);
  };

  const handleMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setIsHovered(true);
    setIsVisible(true);
  };

  const handleGoToCart = () => {
    closeSidebar();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCheckout = () => {
    closeSidebar();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/checkout');
  };

  const handleQuantityChange = (item, quantity) => {
    if (quantity === 0) {
      removeFromCart(item.id);
    } else {
      updateQuantity(item.id, quantity);
    }
  };

  return (
    isVisible && (
      <div
        className={`sidebar ${isSidebarOpen ? 'open' : ''} ${isHovered ? 'hovered' : ''}`}
        ref={sidebarRef}  
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="close-btn" onClick={closeSidebar} aria-label="Close sidebar">
          Close X
        </button>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <img src={empty} alt="empty" className="empty-cart-image" />
          </div>
        ) : (
          <div className="cart-items">
           
            {cart.slice().reverse().map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <p className="item-title">{item.title}</p>
                  <div className="item-quantity-price">
                    <div className="quantity-selector">
                      <select
                        className="quantity-dropdown"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item, Number(e.target.value))}
                      >
                        {[...Array(11).keys()].map((num) => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </div>
                    <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                    <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                      X
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="subtotal">
              <p>Subtotal:</p>
              <p>${calculateTotal()}</p>
            </div>
            <div className="cart-actions">
              <Link to="/cart" className="btn-go-cart" onClick={handleGoToCart}>
                Go to Cart
              </Link>
              <Link to="/shop" className="btn-shop" onClick={closeSidebar}>
                Shop More
              </Link>
              <button className="btn-proceed" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default Sidebar;
