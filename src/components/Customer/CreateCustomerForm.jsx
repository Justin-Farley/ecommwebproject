import React, { useState } from 'react';
import { createCustomer } from '../../services/customerService';
import { useNavigate } from 'react-router-dom';

const CreateCustomerForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCustomer({ name, email, phone });
      history.push('/customers');
    } catch (error) {
      console.error('Error creating customer:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Customer</h2>
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
      <button type="submit">Create Customer</button>
    </form>
  );
};

export default CreateCustomerForm;
