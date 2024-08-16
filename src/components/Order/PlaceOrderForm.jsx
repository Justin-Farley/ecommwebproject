import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlaceOrderForm = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [customerId, setCustomerId] = useState('');
  const [orderDate, setOrderDate] = useState(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    // Fetch products from the API
    axios.get('http://localhost:5000/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      productId: selectedProduct,
      quantity,
      customerId,
      orderDate,
    };

    axios.post('http://localhost:5000/orders', order)
      .then(response => alert('Order placed successfully!'))
      .catch(error => console.error('Error placing order:', error));
  };

  return (
    <div>
      <h2>Place Order</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="customerId">Customer ID:</label>
          <input
            type="text"
            id="customerId"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="product">Select Product:</label>
          <select
            id="product"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            required
          >
            <option value="">Select a product</option>
            {products.map(product => (
              <option key={product.id} value={product.id}>
                {product.name} - ${product.price}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min="1"
            required
          />
        </div>
        <div>
          <label htmlFor="orderDate">Order Date:</label>
          <input
            type="date"
            id="orderDate"
            value={orderDate}
            onChange={(e) => setOrderDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default PlaceOrderForm;
