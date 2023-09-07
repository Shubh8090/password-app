import React, { useState } from 'react';
import axios from 'axios';

const ResetPasswordForm = ({ token }) => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/reset-password/${token}`, { newPassword: password });
      setMessage('Password updated successfully.');
    } catch (error) {
      setMessage('Invalid or expired token.');
    }
  };

  return (
    <div className="container">
      <h2 className="mb-4">Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>New Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Reset Password
        </button>
        <p className="mt-2">{message}</p>
      </form>
    </div>
  );
};

export default ResetPasswordForm;