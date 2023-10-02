import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SEARCH_RESULT_API } from '../utils/contants';
import VideoCard from './VideoCard';
import SearchResultsCard from './SearchResultCard';

import { useDispatch } from 'react-redux';
import { openMenu } from '../utils/SideBarSlice';
import { closeSearch } from '../utils/searchOpen';

const SearchResult = () => {

 const [query] = useSearchParams();
 const [searchVideos,setSearchVideos] = useState([]);

  const dispatch = useDispatch();

   dispatch(openMenu()); 
   dispatch(closeSearch());
  
useEffect(()=>{
  getResult();
},[])

const getResult = async ()=>{
  const data = await fetch(SEARCH_RESULT_API +query.get("s"));
  const json = await data.json();
   setSearchVideos(json.items);
  // console.log(json.items);
}
   
 if(searchVideos.length<=0){
  return null;
 }

  return (
    <div className="">
      {console.log(searchVideos[4])}
      {searchVideos.map((r,i) => (
        <Link key={i}  to={"/watch?v=" + r.id.videoId}>
          <SearchResultsCard info={r} />
        </Link>
      ))}
    </div>
  );
}

export default SearchResult