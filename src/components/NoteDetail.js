import React from 'react';
import ArchiveButton from './ArchiveButton';
import DeleteButton from './DeleteButton';
import NoteDetailContent from './NoteDetailContent';
import UnarchiveButton from './UnarchiveButton';

function NoteDetail({ title, body, createdAt, isArchived, id }) {
  if (isArchived) {
    return (
      <section className='note-detail'>
        <NoteDetailContent title={title} body={body} createdAt={createdAt} />
        <div className='note-detail__buttons'>
          <DeleteButton id={id} isArchived={isArchived} />
          <UnarchiveButton id={id} />
        </div>
      </section>
    );
  } else {
    return (
      <section className='note-detail'>
        <NoteDetailContent title={title} body={body} createdAt={createdAt} />
        <div className='note-detail__buttons'>
          <DeleteButton id={id} isArchived={isArchived} />
          <ArchiveButton id={id} />
        </div>
      </section>
    );
  }
}

export default NoteDetail;