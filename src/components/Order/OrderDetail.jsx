import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const OrderDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/orders/${id}`)
      .then(response => setOrder(response.data))
      .catch(error => console.error('Error fetching order details:', error));
  }, [id]);

  if (!order) return <p>Loading...</p>;

  return (
    <div>
      <h2>Order Details</h2>
      <p><strong>Order ID:</strong> {order.id}</p>
      <p><strong>Order Date:</strong> {order.orderDate}</p>
      <p><strong>Customer ID:</strong> {order.customerId}</p>
      <h3>Products</h3>
      <ul>
        {order.products.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price} x {product.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderDetail;
