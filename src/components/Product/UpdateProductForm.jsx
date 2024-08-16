import React, { useState, useEffect } from 'react';
import { getProductById, updateProduct } from '../../services/productService';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProductForm = () => {
  const { id } = useParams();
  const history = useNavigate();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(id);
        setName(response.data.name);
        setPrice(response.data.price);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProduct(id, { name, price });
      history.push('/products');
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Product</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Price:
        <input type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} required />
      </label>
      <button type="submit">Update Product</button>
    </form>
  );
};

export default UpdateProductForm;
