import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { useNavigate } from 'react-router-dom';

function Register({ register }) {
  const navigate = useNavigate();
  const [ name, onNameChange ] = useInput();
  const [ email, onEmailChange ] = useInput();
  const [ password, onPasswordChange ] = useInput();
  const [ passwordValidation, onPasswordValidationChange ] = useInput();

  const registerSubmitHandler = (event) => {
    event.preventDefault();
    if (password !== passwordValidation) {
      alert("Passwords do not match.");
      navigate('/register');
      return false;
    } else {
      register({
        name: name,
        email: email,
        password: password,
      });
    }
  }

  return (
    <form className='register-form' onSubmit={registerSubmitHandler}>
      <input type='text' placeholder='Name' value={name} onChange={onNameChange} required />
      <br/>
      <input type='email' placeholder='Email' value={email} onChange={onEmailChange} required />
      <br/>
      <input type='password' placeholder='Password' value={password} onChange={onPasswordChange} required />
      <br/>
      <input type='password' placeholder='Password Validation' value={passwordValidation} onChange={onPasswordValidationChange} required />
      <br/>
      <button type='submit'>Register</button>
    </form>
  );
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
}

export default Register;