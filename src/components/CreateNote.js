import React from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';
import LocaleContext from '../context/LocaleContext';

function CreateNote({ createNote }) {
  const { locale } = React.useContext(LocaleContext);
  const [ title, onTitleChange ] = useInput();
  const [ body, setBody ] = React.useState('');

  const onBodyChange = (event) => {
    setBody(event.target.innerHTML);
  }

  const createNoteSubmitHandler = (event) => {
    event.preventDefault();
    
    createNote({
      title: title,
      body: body,
    });
  }

  return (
    <form className='create-form' onSubmit={createNoteSubmitHandler}>
      <input 
        className='input-title'
        type='text' 
        placeholder={locale === 'en' ? 'Enter note title...' : 'Masukkan judul catatan...'} 
        value={title} 
        onChange={onTitleChange} 
        required 
      />
      <br/>
      <div
        className='input-body'
        data-placeholder={locale === 'en' ? 'Enter your note here...' : 'Masukkan catatanmu disini...'}
        value={body}
        onInput={onBodyChange}
        contentEditable
      />
      <button type='submit'>{locale === 'en' ? 'Create' : 'Buat'}</button>
    </form>
  );
}

CreateNote.propTypes = {
  createNote: PropTypes.func.isRequired,
}

export default CreateNote;