import React from 'react';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils/index';
import parser from 'html-react-parser';

function NoteItem({ id, title, body, createdAt }) {
  return (
    <article className='note-item'>
      <h2><Link to={`/notes/${id}`} className='note-item__link'>{title}</Link></h2>
      <p className='note-item__date'>{showFormattedDate(createdAt)}</p>
      <p className='note-item__body'>{parser(body)}</p>
    </article>
  );
}

export default NoteItem;