import React, { useState } from 'react';
import './Return.css'; 

const Return = () => {
  const [returnRequest, setReturnRequest] = useState({
    orderId: '',
    reason: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReturnRequest((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Return request submitted:', returnRequest);
    
  };

  return (
    <div className="return-page">
      <h1>Return Request</h1>
      <p>Please fill out the form below to request a product return.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="orderId">Order ID:</label>
          <input
            type="text"
            id="orderId"
            name="orderId"
            value={returnRequest.orderId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="reason">Reason for Return:</label>
          <select
            id="reason"
            name="reason"
            value={returnRequest.reason}
            onChange={handleChange}
            required
          >
            <option value="">Select a reason</option>
            <option value="defective">Defective product</option>
            <option value="wrong-item">Wrong item received</option>
            <option value="no-longer-needed">No longer needed</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="comments">Additional Comments:</label>
          <textarea
            id="comments"
            name="comments"
            value={returnRequest.comments}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">Submit Request</button>
      </form>
    </div>
  );
};

export default Return;
