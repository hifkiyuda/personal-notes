import React from 'react';
import { showFormattedDate } from '../utils/index';
import parser from 'html-react-parser';

function NoteDetailContent({ title, body, createdAt }) {
  return (
    <div className='note-detail__content'>
      <h2 className='note-detail__title'>{title}</h2>
      <p className='note-detail__date'>{showFormattedDate(createdAt)}</p>
      <p className='note-detail__body'>{parser(body)}</p>
    </div>
  );
}

export default NoteDetailContent;