import SearchBar from "./components/SearchBar.jsx";
import NFTList from "./components/NFTfetch";
import { useState } from "react";

function App() {
  const [nftList, setNFTList] = useState([]);
  const [search, setSearch] = useState('');

  
  
  return (
    <div >
      <div className="search-container">  <SearchBar search={search} setSearch={setSearch} />
      </div>

       <NFTList nftList={nftList} setNFTList={setNFTList} search={search} setSearch={setSearch} />
    
     
     
    </div>
  );
}

export default App;
