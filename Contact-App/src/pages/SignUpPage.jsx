// SignUpPage.jsx
import React from 'react';
import SignUpForm from '../components/SignUpForm';

function SignUpPage() {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Sign Up</h1>
      <SignUpForm />
    </div>
  );
}

export default SignUpPage;
