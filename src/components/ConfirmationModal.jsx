import React from 'react';
import ReactDOM from 'react-dom';

const ConfirmationModal = ({ show, onConfirm, onCancel }) => {
  if (!show) return null;

  return ReactDOM.createPortal(
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <h3>Are you sure?</h3>
        <button onClick={onConfirm}>Confirm</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>,
    document.body
  );
};

const modalStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const modalContentStyle = {
  background: 'white',
  padding: '20px',
  borderRadius: '8px',
};

export default ConfirmationModal;
