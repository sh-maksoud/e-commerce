

import React from 'react';
import useThemeStore from '../../store/useThemeStore';
import './Modal.css';

const Modal = ({ show, onClose, product }) => {
  const { isDarkMode } = useThemeStore(state => state);

  if (!show) {
    return null;
  }

  return (
    <div className={`modal-overlay ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className={`modal-content ${isDarkMode ? 'dark-mode' : ''}`}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <img src={product.image} alt={product.title} className="modal-image" />
        <h2>{product.title}</h2>
        <p className="price">₹ {product.price}</p>
        <div className="ratings">
          <span>⭐⭐⭐⭐⭐</span>
          <p>({product.rating?.count} reviews)</p>
        </div>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default Modal;
