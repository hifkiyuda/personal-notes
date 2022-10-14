import React from 'react';
import PropTypes from 'prop-types';
import LocaleContext from '../context/LocaleContext';
 
function SearchBar({ keyword, keywordChange }) {
  const { locale } = React.useContext(LocaleContext);

  return (
    <input
      className='search-bar'
      type='text'
      placeholder={locale === 'en' ? 'Search notes...' : 'Cari catatan...'}
      value={keyword}
      onChange={(event) => keywordChange(event.target.value)} 
    />
  )
}
 
SearchBar.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
}
 
export default SearchBar;