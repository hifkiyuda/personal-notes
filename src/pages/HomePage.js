import React from 'react';
import NoteList from '../components/NoteList';
import LocaleContext from '../context/LocaleContext';
import { getActiveNotes } from '../utils/api';

function HomePage() {
  const { locale } = React.useContext(LocaleContext);

  return (
    <section className='home-page'>
      <h1>{locale === 'en' ? 'Active Notes' : 'Catatan Aktif'}</h1>
        <NoteList activeOrArchived={getActiveNotes()} />
    </section>
  );
}

export default HomePage;