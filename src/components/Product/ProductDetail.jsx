import React, { useEffect, useState } from 'react';
import { getProductById, deleteProduct } from '../../services/productService';
import { useParams, useNavigate } from 'react-router-dom';
import ConfirmationModal from '../ConfirmationModal';

const ProductDetail = () => {
  const { id } = useParams();
  const history = useNavigate();
  const [product, setProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(id);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteProduct(id);
      history.push('/products');
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h2>Product Detail</h2>
      <p>Name: {product.name}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => history.push(`/products/edit/${id}`)}>Edit</button>
      <button onClick={() => setShowModal(true)}>Delete</button>
      <ConfirmationModal 
        show={showModal} 
        onConfirm={handleDelete} 
        onCancel={() => setShowModal(false)} 
      />
    </div>
  );
};

export default ProductDetail;


