import React, { useState } from 'react';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import ResetPasswordForm from './components/ResetPasswordForm';

const App = () => {
  const [resetToken, setResetToken] = useState('');

  return (
    <div className="container">
      {/* <h1>Password Reset App</h1> */}
      {resetToken ? (
        <ResetPasswordForm token={resetToken} />
      ) : (
        <ForgotPasswordForm setResetToken={setResetToken} />
      )}
    </div>
  );
};

export default App;