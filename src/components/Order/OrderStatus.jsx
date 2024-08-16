import React, { useState, } from 'react';
import axios from 'axios';

const OrderStatus = () => {
  const [orderId, setOrderId] = useState('');
  const [order, setOrder] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:5000/orders/${orderId}`)
      .then(response => setOrder(response.data))
      .catch(error => console.error('Error fetching order status:', error));
  };

  return (
    <div>
      <h2>Track Order Status</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="orderId">Order ID:</label>
          <input
            type="text"
            id="orderId"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            required
          />
        </div>
        <button type="submit">Track Order</button>
      </form>
      {order && (
        <div>
          <h3>Order Status</h3>
          <p><strong>Order ID:</strong> {order.id}</p>
          <p><strong>Order Date:</strong> {order.orderDate}</p>
          <p><strong>Status:</strong> {order.status}</p>
          <p><strong>Expected Delivery:</strong> {order.expectedDeliveryDate}</p>
        </div>
      )}
    </div>
  );
};

export default OrderStatus;
