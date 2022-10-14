import React from 'react';
import { TbError404 } from 'react-icons/tb';

function PageNotFound() {
  return (
    <section className='page-not-found'>
      <h1><TbError404 className='error' /></h1>
      <code>Page Not Found</code>
    </section>
  );
}

export default PageNotFound;