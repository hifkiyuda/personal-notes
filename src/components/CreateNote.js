import React from 'react';
import useInput from '../hooks/useInput';
// import parser from 'html-react-parser';

function CreateNote({ createNote }) {
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
        placeholder='Enter note title...' 
        value={title} 
        onChange={onTitleChange} 
        required 
      />
      <br/>
      <div
        className='input-body'
        data-placeholder='Enter your note here...'
        value={body}
        onInput={onBodyChange}
        contentEditable
      />
      <button type='submit'>Create</button>
    </form>
  );
}

export default CreateNote;