
const SearchBar =({search, setSearch}) => {
const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Perform any necessary logic or actions here
    };


  return (
    <form className={'search-form'} onSubmit={handleSubmit}>
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
