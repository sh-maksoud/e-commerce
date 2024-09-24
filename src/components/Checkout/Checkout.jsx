
import React from 'react';
import useStore from '../../store/useStore';
import './Checkout.css'; 

const Checkout = () => {
  const { cart } = useStore();

  const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="checkout-summary">
        <h2>Your Order</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <table className="checkout-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                  
                    <td>{item.name || item.productName || item.title}</td>
                    <td>{item.quantity}</td>
                    <td>Rs. {item.price.toFixed(2)}</td>
                    <td>Rs. {(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="checkout-total">
              <span>Total:</span>
              <span>Rs. {total.toFixed(2)}</span>
            </div>
            <button className="confirm-button" onClick={() => alert('Order confirmed!')}>
              Confirm Order
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
