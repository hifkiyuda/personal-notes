import React from 'react';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils/index';
import parser from 'html-react-parser';
import PropTypes from 'prop-types';

function NoteItem({ id, title, body, createdAt }) {
  return (
    <article className='note-item'>
      <h2><Link to={`/notes/${id}`} className='note-item__link'>{title}</Link></h2>
      <p className='note-item__date'>{showFormattedDate(createdAt)}</p>
      <div className='note-item__body'>{parser(body)}</div>
    </article>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
}

export default NoteItem;