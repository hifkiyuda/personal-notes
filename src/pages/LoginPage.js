import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/Login';
import { login } from '../utils/api';
import PropTypes from 'prop-types';
import LocaleContext from '../context/LocaleContext';

function LoginPage({ loginSuccess }) {
  const { locale } = React.useContext(LocaleContext);

  async function onLoginHandler({ email, password }) {
    const { error, data } = await login({ email, password });
 
    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <section className='login-page'>
      <h1>Login</h1>
      <i>{locale === 'en' ? 'Please login to continue...' : 'Silakan masuk untuk melanjutkan...'}</i>
      <Login login={onLoginHandler} />
      <p>
        {locale === 'en' ? 
        'Don\'t have an account? Register ' 
        : 
        'Belum mempunyai akun? Registrasi '}
        <Link to="/register">{locale === 'en' ? 'here.' : 'disini.'}</Link></p>
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
}

export default LoginPage;