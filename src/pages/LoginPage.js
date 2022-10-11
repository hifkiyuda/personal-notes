import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/Login';
import { login } from '../utils/api';
import PropTypes from 'prop-types';

function LoginPage({ loginSuccess }) {
  async function onLoginHandler({ email, password }) {
    const { error, data } = await login({ email, password });
 
    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <section className='login-page'>
      <h1>Login</h1>
      <i>Please login to continue...</i>
      <Login login={onLoginHandler} />
      <p>Don't have an account? Register <Link to="/register">here.</Link></p>
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
}

export default LoginPage;