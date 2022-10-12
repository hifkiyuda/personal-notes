import React from 'react';
import NoteList from '../components/NoteList';
import { getActiveNotes } from '../utils/api';

function HomePage() {
  const [ notes, setNotes ] = React.useState(null);

  React.useEffect(() => {
    async function fetchActiveNotes() {
      const { error, data } = await getActiveNotes();

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
      <section className='home-page'>
        <h1>Active Notes</h1>
        <p className='conditional-rendering'>Notes is empty</p>
      </section>
    );
  }

  return (
    <section className='home-page'>
      <h1>Active Notes</h1>
      {notes === null ? <p>Loading...</p> : <NoteList notes={notes} />}
    </section>
  );
}

export default HomePage;