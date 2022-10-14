import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ArchivePage from './pages/ArchivePage';
import CreatePage from './pages/CreatePage';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PageNotFound from './pages/PageNotFound';
import RegisterPage from './pages/RegisterPage';
import { getUserLogged, putAccessToken } from './utils/api';
import ThemeContext from './context/ThemeContext';
import LocaleContext from './context/LocaleContext';

function App() {
  const [ authedUser, setAuthedUser ] = React.useState(null);
  const [ initial, setInitial ] = React.useState(true);
  const [ theme, setTheme ] = React.useState(localStorage.getItem('theme') || 'light');
  const [locale, setLocale] = React.useState(localStorage.getItem('locale') || 'en');

  const themeValue = React.useMemo(() => {
    return {
      theme,
      toggleTheme: () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
      }
    };
  }, [theme]);

  const localeValue = React.useMemo(() => {
    return {
      locale,
      toggleLocale: () => {
        const newLocale = locale === 'en' ? 'id' : 'en';
        localStorage.setItem('locale', newLocale);
        setLocale(newLocale);
      }
    };
  }, [locale]);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  React.useEffect(() => {
    async function fetchAuthedUser() {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitial(false);
    }
    
    fetchAuthedUser();

    return () => {
      setAuthedUser(null);
      setInitial(true);
    }
  }, []);

  function onLogout() {
    setAuthedUser(null);
    putAccessToken('');
  }

  if (initial) {
    return null;
  }

  if (authedUser === null) {
    return (
      <ThemeContext.Provider value={themeValue}>
        <LocaleContext.Provider value={localeValue}>
          <header>
            <Header authedUser={authedUser} />
          </header>
          <main>
            <Routes>
              <Route path='/*' element={<LoginPage loginSuccess={onLoginSuccess} />} />
              <Route path='/register' element={<RegisterPage />} />
            </Routes>
          </main>
        </LocaleContext.Provider>
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={themeValue}>
      <LocaleContext.Provider value={localeValue}>
        <header>
          <Header authedUser={authedUser} logout={onLogout} name={authedUser.name} />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/archive' element={<ArchivePage />} />
            <Route path='/create' element={<CreatePage />} />
            <Route path='/notes/:id' element={<DetailPage />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </main>
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
