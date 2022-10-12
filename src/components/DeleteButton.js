import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteNote } from '../utils/api';
import PropTypes from 'prop-types';
import { RiDeleteBinFill } from 'react-icons/ri';

function DeleteButton({ id, isArchived }) {
  const navigate = useNavigate();

  async function onDeleteHandler(id) {
    const { error } = await deleteNote(id);

    if(!error) {
      if (isArchived) {
        navigate('/archive');
      } else {
        navigate('/');
      }
    }
  }

  // function onDeleteNote(id) {
  //   deleteNote(id);
    
  //   if (isArchived) {
  //     navigate('/archived');
  //   } else {
  //     navigate('/');
  //   }
  // }

  return (
    <button className='note-detail__delete' onClick={() => onDeleteHandler(id)}><RiDeleteBinFill /></button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  isArchived: PropTypes.bool.isRequired,
}

export default DeleteButton;