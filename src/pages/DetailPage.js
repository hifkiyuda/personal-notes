import React from 'react';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/api';
import NoteDetail from '../components/NoteDetail';
import PageNotFound from '../pages/PageNotFound';

function DetailPage() {
  const { id } = useParams();
  const [ note, setNote ] = React.useState();
  const [initial, setInitial] = React.useState(true);

  React.useEffect(() => {
    async function fetchDetailNote() {
      const { error, data } = await getNote(String(id));

      if(!error) {
        setNote(data);
        setInitial(false);
      }
    }

    fetchDetailNote();

    return () => {
      setNote();
      setInitial(true);
    }
  }, [id]);

  if (initial) {
    return null;
  }

  if (note === undefined) {
    return <PageNotFound />;
  } else {
    return (
      <section className='detail-page'>
        <NoteDetail  
          {...note} 
          isArchived={note.archived}
        />
      </section>
    );
  }
}

export default DetailPage;