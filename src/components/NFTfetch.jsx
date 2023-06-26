import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';

function NFTList({nftList, setNFTList, search, setSearch}) {

  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  console.log('offset :', offset);
  const containerRef = useRef(null);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api-mainnet.magiceden.io/idxv2/getListedNftsByCollectionSymbol?collectionSymbol=okay_bears&limit=20&offset=${offset}`);
      const data = await response.json();
      const processedData = data.results.map(item => ({
        image: item.img,
        name: item.title,
        price: item.price,
      }));
      setNFTList(prevList => [...prevList, ...processedData]);
      //setNFTList(nftList.filter(item => ((item.title).toLowerCase()).includes(search.toLowerCase())))
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleScroll = () => {
    console.log('handleScroll')
    const container = containerRef.current;
    const { scrollTop, scrollHeight, clientHeight } = container;
    console.log('clientHeight :', clientHeight);
    console.log('scrollTop :', scrollTop);
    console.log('scrollHeight :', scrollHeight);

    console.log('scrollHeight - scrollTop :', scrollHeight - scrollTop);
    console.log('loading :', loading);
    if (scrollHeight - scrollTop === clientHeight && !loading) {
      setOffset(prevOffset => prevOffset + 20);
    }
  };

  return (
    <div className="grid-container" ref={containerRef}>
      {nftList.filter(item => ((item.name).toLowerCase()).includes(search.toLowerCase())).map((item, index) => (
        <div key={index}>
          <Card title={item.name} image={item.image} description={item.price} />
        </div>
      ))}
      {loading && <div className="loading">Loading...</div>}
    </div>
  );
}

export default NFTList;
