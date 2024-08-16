import React, { useState, useEffect } from 'react';
import { getCustomerById, updateCustomer } from '../../services/customerService';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateCustomerForm = () => {
  const { id } = useParams();
  const history = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await getCustomerById(id);
        setName(response.data.name);
        setEmail(response.data.email);
        setPhone(response.data.phone);
      } catch (error) {
        console.error('Error fetching customer:', error);
      }
    };
    fetchCustomer();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateCustomer(id, { name, email, phone });
      history.push('/customers');
    } catch (error) {
      console.error('Error updating customer:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Customer</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Phone:
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </label>
      <button type="submit">Update Customer</button>
    </form>
  );
};

export default UpdateCustomerForm;
