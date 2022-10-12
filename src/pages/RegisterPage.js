import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Register from '../components/Register';
import { register } from '../utils/api';

function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  }

  return (
    <section className='register-page'>
      <h1>Register</h1>
      <i>Register to make an account...</i>
      <Register register={onRegisterHandler} />
      <p>Back to <Link to="/">login.</Link></p>
    </section>

  );
}

export default RegisterPage;