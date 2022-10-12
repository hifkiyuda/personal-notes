import React from 'react';
import { useNavigate } from 'react-router-dom';
import { archiveNote } from '../utils/api';
import PropTypes from 'prop-types';
import { RiInboxArchiveFill } from "react-icons/ri";

function ArchiveButton({ id }) {
  const navigate = useNavigate();

  async function onArchiveNote(id) {
    const { error } = await archiveNote(id);

    if(!error) {
      navigate('/');
    }
  }
  
  return (
    <button className='note-detail__archive' onClick={() => onArchiveNote(id)}><RiInboxArchiveFill /></button>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
}

export default ArchiveButton;