
import React from 'react';
import { useNavigate } from 'react-router-dom';
import cartIcon from '../../assets/cart.png';
import './CartButton.css';

const CartButton = ({ cartItemsCount, toggleSidebar }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    toggleSidebar(); 
    navigate('/cart'); 
  };

  return (
    <div
      className="nav-cart"
      onMouseEnter={toggleSidebar} 
      onClick={handleNavigate}
    >
      <img className="cart-img" src={cartIcon} alt="Cart" />
      {cartItemsCount > 0 && (
        <div className="cart-badge">{cartItemsCount}</div>
      )}
    </div>
  );
};

export default CartButton;
