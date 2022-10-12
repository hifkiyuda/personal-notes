import React from 'react';
import { useNavigate } from 'react-router-dom';
import { unarchiveNote } from '../utils/api';
import PropTypes from 'prop-types';
import { RiInboxUnarchiveFill } from "react-icons/ri";

function UnarchiveButton({ id }) {
  const navigate = useNavigate();

  async function onUnarchiveNote(id) {
    const { error } = await unarchiveNote(id);

    if(!error) {
      navigate('/archive');
    }
  }

  return (
    <button className='note-detail__unarchive' onClick={() => onUnarchiveNote(id)}><RiInboxUnarchiveFill /></button>
  );
}

UnarchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
}

export default UnarchiveButton;