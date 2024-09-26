


import React from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../../store/useStore';
import cartIcon from '../../assets/cart.png';
import './CartButton.css';

const CartButton = ({ cartItemsCount }) => {
  const navigate = useNavigate();
  const { openSidebar } = useStore();

  const handleCartClick = () => {
    openSidebar(); 
    navigate('/cart');
  };

  return (
    <div className="nav-cart" onClick={handleCartClick}>
      <img className="cart-img" src={cartIcon} alt="Cart" />
      {cartItemsCount > 0 && (
        <div className="cart-badge">{cartItemsCount}</div>
      )}
    </div>
  );
};

export default CartButton;
