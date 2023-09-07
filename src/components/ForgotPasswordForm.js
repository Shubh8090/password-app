import React, { useState } from 'react';
import axios from 'axios';

const ForgotPasswordForm = ({ setResetToken }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/forgot-password', { email });
      setMessage('Password reset email sent.');
    } catch (error) {
      setMessage('User not found.');
    }
  };

  return (
    <div className="containerOne">
      <h2 className="mb-4">Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Send Reset Email
        </button>
        <p className="mt-2">{message}</p>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;