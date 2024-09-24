import React from 'react';
import './PaymentOptions.css'; 
import card from '../../assets/card.jpeg';
import paypal from '../../assets/paypal.jpg';
import bank from '../../assets/bank.jpg';
import cash from '../../assets/cash.png';


const PaymentOptions = () => {
  return (
    <div className="payment-options-page">
      <h1>Payment Options</h1>
      <div className="payment-options-summary">
        <h2>Select Your Payment Method</h2>
        <div className="payment-methods">
          <div className="payment-method">
            <h3>Credit/Debit Card</h3>
            <p>Pay securely with your credit or debit card.</p>
            <img src={card} alt="Card Icon" className="payment-icon" />
          </div>
          <div className="payment-method">
            <h3>PayPal</h3>
            <p>Use your PayPal account for secure payments.</p>
            <img src={paypal} alt="PayPal Icon" className="payment-icon" />
          </div>
          <div className="payment-method">
            <h3>Bank Transfer</h3>
            <p>Transfer funds directly from your bank account.</p>
            <img src={bank} alt="Bank Icon" className="payment-icon" />
          </div>
          <div className="payment-method">
            <h3>Cash on Delivery</h3>
            <p>Pay with cash when your order is delivered.</p>
            <img src={cash} alt="Cash Icon" className="payment-icon" />
          </div>
        </div>
        <button className="confirm-button" onClick={() => alert('Payment method selected!')}>
          Confirm Payment Method
        </button>
      </div>
    </div>
  );
};

export default PaymentOptions;
