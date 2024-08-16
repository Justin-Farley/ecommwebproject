import React, { useState } from 'react';
import { createProduct } from '../../services/productService';
import { useNavigate } from 'react-router-dom';

const CreateProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProduct({ name, price });
      history.push('/products');
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Product</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Price:
        <input type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} required />
      </label>
      <button type="submit">Create Product</button>
    </form>
  );
};

export default CreateProductForm;
