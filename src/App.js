import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ArchivePage from './pages/ArchivePage';
import CreatePage from './pages/CreatePage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PageNotFound from './pages/PageNotFound';
import RegisterPage from './pages/RegisterPage';
import { getUserLogged, putAccessToken } from './utils/api';

function App() {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [initial, setInitial] = React.useState(true);

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
      <>
        <header>
          <Navigation authedUser={authedUser} />
        </header>
        <main>
          <Routes>
            <Route path='/*' element={<LoginPage loginSuccess={onLoginSuccess} />} />
            <Route path='/register' element={<RegisterPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <>
      <header>
        <Navigation authedUser={authedUser} logout={onLogout} name={authedUser.name} />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/archive' element={<ArchivePage />} />
          <Route path='/create' element={<CreatePage />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
