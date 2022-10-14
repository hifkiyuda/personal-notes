import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Register from '../components/Register';
import LocaleContext from '../context/LocaleContext';
import { register } from '../utils/api';

function RegisterPage() {
  const { locale } = React.useContext(LocaleContext);
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
      <i>{locale === 'en' ? 'Register to make an account...' : 'Registrasi untuk membuat akun...'}</i>
      <Register register={onRegisterHandler} />
      <p>{locale === 'en' ? 'Back to ' : 'Kembali ke '}<Link to='/'>login.</Link></p>
    </section>
  );
}

export default RegisterPage;