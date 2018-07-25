import React from 'react';

const SearchBox = ({searchChange}) => {
  return(
    <div className='pa2'>
      <input className='pa1 tc ba bg-lightest-blue' type='search' placeholder='enter a number'
      onChange={searchChange}/>
    </div>
  );
}

export default SearchBox;