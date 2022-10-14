import React from 'react';
import ArchiveButton from './ArchiveButton';
import DeleteButton from './DeleteButton';
import UnarchiveButton from './UnarchiveButton';
import PropTypes from 'prop-types';

function NoteButtons({ isArchived, id }) {
  if (isArchived) {
    return (
      <>
        <DeleteButton id={id} isArchived={isArchived} />
        <UnarchiveButton id={id} />
      </>
    );
  } else {
    return (
      <>
        <DeleteButton id={id} isArchived={isArchived} />
        <ArchiveButton id={id} />
      </>
    );
  }
}

NoteButtons.propTypes = {
  isArchived: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
}

export default NoteButtons;