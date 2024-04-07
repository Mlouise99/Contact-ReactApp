// LoginPage.jsx
import React from 'react';
import LoginForm from '../components/LoginForm';

function LoginPage() {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Login</h1>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
