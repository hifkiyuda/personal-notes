import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import  { RiTranslate, RiLightbulbFill, RiLightbulbLine, RiLogoutBoxFill, RiLogoutBoxLine } from 'react-icons/ri';
import ThemeContext from '../context/ThemeContext';
import LocaleContext from '../context/LocaleContext';

function Header({ authedUser, logout, name }) {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const { locale, toggleLocale } = React.useContext(LocaleContext);

  if (authedUser === null) {
    return (
      <>
        <p className='home'><Link to='/'>{locale === 'en' ? 'Notes App' : 'Aplikasi Catatan'}</Link></p>
        <nav className='navigation'>
          <ul>
            <li><button onClick={toggleLocale}><RiTranslate className='icon' /></button></li>
            <li>
              <button onClick={toggleTheme}>
                {theme === 'light' ? <RiLightbulbFill className='icon' /> : <RiLightbulbLine className='icon' />}
              </button>
            </li>
          </ul>
        </nav>
      </>
    );
  }

  return (
    <>
      <p className='home'><Link to='/'>{locale === 'en' ? 'Notes App' : 'Aplikasi Catatan'}</Link></p>
      <nav className='navigation'>
        <ul>
          <li className='create'><Link to='/create'>{locale === 'en' ? 'Create note' : 'Buat catatan'}</Link></li>
          <li className='archive'><Link to='/archive'>{locale === 'en' ? 'Archive' : 'Arsip'}</Link></li>
          <li><button onClick={toggleLocale}><RiTranslate className='icon' /></button></li>
          <li>
            <button onClick={toggleTheme}>
              {theme === 'light' ? <RiLightbulbFill className='icon' /> : <RiLightbulbLine className='icon' />}
            </button>
          </li>
          <li>
            <button className='logout' onClick={logout}>
              {theme === 'light' ? <RiLogoutBoxFill className='icon' /> : <RiLogoutBoxLine className='icon' />}
              {name}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

Header.propTypes = {
  authedUser: PropTypes.object,
  logout: PropTypes.func,
  name: PropTypes.string,
}

export default Header;