import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from './SearchBar';
import PropTypes from 'prop-types';
import LocaleContext from '../context/LocaleContext';
import NoteItem from './NoteItem';

function NoteList({ activeOrArchived }) {
  const { locale } = React.useContext(LocaleContext);
  const [ notes, setNotes ] = React.useState(null);
  const [ searchParams, setSearchParams ] = useSearchParams();
  const [ keyword, setKeyword ] = React.useState(() => {
    return searchParams.get('keyword') || '';
  });

  React.useEffect(() => {
    async function fetchActiveNotes() {
      const { error, data } = await activeOrArchived;

      if(!error) {
        setNotes(data);
      }
    }

    fetchActiveNotes();

    return () => {
      setNotes(null);
    }
  }, [activeOrArchived]);

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = notes?.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  if(notes === null) {
    return <p className='loading'>Loading...</p>
  }

  return (
    <>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      {notes?.length === 0 ? (
        <p className='conditional-rendering'>{locale === 'en' ? 'Notes is empty...' : 'Catatan kosong...'}</p>
      ) : (
        <div className='note-list'>
          {filteredNotes.map((note) => (
            <NoteItem key={note.id} {...note} />
          ))}
        </div>
      )}
    </>
  );
}

NoteList.propTypes = {
  activeOrArchived: PropTypes.object.isRequired,
}

export default NoteList;