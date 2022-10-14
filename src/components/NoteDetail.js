import React from 'react';
import { showFormattedDate } from '../utils/index';
import parser from 'html-react-parser';
import NoteButtons from './NoteButtons';
import PropTypes from 'prop-types';

function NoteDetail({ title, body, createdAt, isArchived, id }) {
  return (
    <section className='note-detail'>
      <div className='note-detail__content'>
        <h2 className='note-detail__title'>{title}</h2>
        <p className='note-detail__date'>{showFormattedDate(createdAt)}</p>
        <div className='note-detail__body'>{parser(body)}</div>
      </div>
    <div className='note-detail__buttons'>
      <NoteButtons isArchived={isArchived} id={id} />
    </div>
  </section>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  isArchived: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
}

export default NoteDetail;