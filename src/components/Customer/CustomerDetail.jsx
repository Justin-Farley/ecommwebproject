import React, { useEffect, useState } from 'react';
import { getCustomerById, deleteCustomer } from '../../services/customerService';
import { useParams, useNavigate } from 'react-router-dom';
import ConfirmationModal from '../ConfirmationModal';

const CustomerDetail = () => {
  const { id } = useParams();
  const history = useNavigate();
  const [customer, setCustomer] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await getCustomerById(id);
        setCustomer(response.data);
      } catch (error) {
        console.error('Error fetching customer:', error);
      }
    };
    fetchCustomer();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteCustomer(id);
      history.push('/customers');
    } catch (error) {
      console.error('Error deleting customer:', error);
    }
  };

  if (!customer) return <p>Loading...</p>;

  return (
    <div>
      <h2>Customer Detail</h2>
      <p>Name: {customer.name}</p>
      <p>Email: {customer.email}</p>
      <p>Phone: {customer.phone}</p>
      <button onClick={() => history.push(`/customers/edit/${id}`)}>Edit</button>
      <button onClick={() => setShowModal(true)}>Delete</button>
      <ConfirmationModal 
        show={showModal} 
        onConfirm={handleDelete} 
        onCancel={() => setShowModal(false)} 
      />
    </div>
  );
};

export default CustomerDetail;
