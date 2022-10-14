import React from 'react';
import { useNavigate } from 'react-router-dom';
import CreateNote from '../components/CreateNote';
import LocaleContext from '../context/LocaleContext';
import { addNote } from '../utils/api';

function CreatePage() {
  const navigate = useNavigate();
  const { locale } = React.useContext(LocaleContext);

  async function onCreateNoteHandler(notes) {
    await addNote(notes);
    navigate('/');
  }

  return (
    <section className='create-page'>
      <h1>{locale === 'en' ? 'Create Note' : 'Buat Catatan'}</h1>
      <CreateNote createNote={onCreateNoteHandler} />
    </section>
  );
}

export default CreatePage;