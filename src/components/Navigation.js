import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import  { RiTranslate, RiLightbulbFill, RiLightbulbLine, RiLogoutBoxFill, RiLogoutBoxLine } from 'react-icons/ri';

function Navigation({ authedUser, logout, name }) {
  const [ theme, setTheme ] = React.useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      setTheme(newTheme);
    })
  }

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  if (authedUser === null) {
    return (
      <>
        <p className='home'><Link to='/'>Personal Notes</Link></p>
        <nav className='navigation'>
          <ul>
            <li><button><RiTranslate className='icon' /></button></li>
            <li>
              <button onClick={toggleTheme}>
                {theme === 'light' ? 
                <RiLightbulbFill className='icon' /> 
                : 
                <RiLightbulbLine className='icon' />}
              </button>
            </li>
          </ul>
        </nav>
      </>
    );
  }
  return (
    <>
      <p className='home'><Link to='/'>Personal Notes</Link></p>
      <nav className='navigation'>
        <ul>
          <li className='create'><Link to='/create'>Create</Link></li>
          <li className='archive'><Link to='/archive'>Archive</Link></li>
          <li><button><RiTranslate className='icon' /></button></li>
          <li>
            <button onClick={toggleTheme}>
              {theme === 'light' ? 
              <RiLightbulbFill className='icon' /> 
              : 
              <RiLightbulbLine className='icon' />}
            </button>
          </li>
          <li>
            <button className='logout' onClick={logout}>
              {theme === 'light' ?
                <RiLogoutBoxFill className='icon' />
                :
                <RiLogoutBoxLine className='icon' />}
              {name}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

Navigation.propTypes = {
  authedUser: PropTypes.object,
  logout: PropTypes.func,
  name: PropTypes.string,
}

export default Navigation;