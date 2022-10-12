import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function Login({ login }) {
  const [ email, onEmailChange ] = useInput();
  const [ password, onPasswordChange ] = useInput();

  const loginSubmitHandler = (event) => {
    event.preventDefault();

    login({
      email: email,
      password: password,
    });
  }

  return (
    <form className='login-form' onSubmit={loginSubmitHandler}>
      <input type='email' placeholder='Email' value={email} onChange={onEmailChange} />
      <br/>
      <input type='password' placeholder='Password' value={password} onChange={onPasswordChange} />
      <br/>
      <button type='submit'>Login</button>
    </form>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
}

export default Login;