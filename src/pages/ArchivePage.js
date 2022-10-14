import React from 'react';
import { getArchivedNotes } from '../utils/api';
import LocaleContext from '../context/LocaleContext';
import NoteList from '../components/NoteList';

function ArchivePage() {
  const { locale } = React.useContext(LocaleContext);
  return (
    <section className='archive-page'>
      <h1>{locale === 'en' ? 'Archived Notes' : 'Catatan Terarsip'}</h1>
      <NoteList activeOrArchived={getArchivedNotes()} />
    </section>
  );
}

export default ArchivePage;