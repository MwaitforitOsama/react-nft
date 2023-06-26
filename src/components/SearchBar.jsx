import React, { useState } from 'react';

const SearchBar =({search, setSearch}) => {



  return (
    <form className={'search-form'}>
      <input
        type="text"
        placeholder="Enter Name to Search;..."
        value={search}
        onChange = {(e)=>{setSearch(e.target.value)}}
        className='search-input'
      />
      <button type="submit" className='search-btn'>Search</button>
    </form>
  );
};

export default SearchBar;
