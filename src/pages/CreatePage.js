import React from 'react';
import { useNavigate } from 'react-router-dom';
import CreateNote from '../components/CreateNote';
import { addNote } from '../utils/api';

function CreatePage() {
  const navigate = useNavigate();

  async function onCreateNoteHandler(notes) {
    await addNote(notes);
    navigate('/');
  }

  return (
    <section className='create-page'>
      <h1>Create Note</h1>
      <CreateNote createNote={onCreateNoteHandler} />
    </section>
  );
}

export default CreatePage;