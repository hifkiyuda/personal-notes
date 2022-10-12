import React from 'react';
import NoteList from '../components/NoteList';
import { getArchivedNotes } from '../utils/api';

function ArchivePage() {
  const [ notes, setNotes ] = React.useState(null);

  React.useEffect(() => {
    async function fetchActiveNotes() {
      const { error, data } = await getArchivedNotes();

      if(!error) {
        setNotes(data);
      }
    }

    fetchActiveNotes();

    return () => {
      setNotes(null);
    }
  }, []);

  if (notes?.length === 0) {
    return (
      <section className='archive-page'>
      <h1>Archived Notes</h1>
      <p className='conditional-rendering'>Archive is empty</p>
    </section>
    );
  }
  
  return (
    <section className='archive-page'>
      <h1>Archived Notes</h1>
      {notes === null ? <p>Loading...</p> : <NoteList notes={notes} />}
    </section>
  );
}

export default ArchivePage;