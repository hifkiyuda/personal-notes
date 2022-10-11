import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function Register({ register }) {
  const [name, onNameChange] = useInput();
  const [email, onEmailChange] = useInput();
  const [password, onPasswordChange] = useInput();

  const registerSubmitHandler = (event) => {
    event.preventDefault();

    register({
      name: name,
      email: email,
      password: password,
    });
  }

  return (
    <form className='register-form' onSubmit={registerSubmitHandler}>
      <input type='text' placeholder='Name' value={name} onChange={onNameChange} />
      <br/>
      <input type='email' placeholder='Email' value={email} onChange={onEmailChange} />
      <br/>
      <input type='password' placeholder='Password' value={password} onChange={onPasswordChange} />
      <br/>
      <button>Register</button>
    </form>
  );
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
}

export default Register;