import React, { useEffect,useState } from 'react'
import { YOUTUBE_SEARCH_API } from "../utils/contants";
import { Link, Outlet } from 'react-router-dom';
const Demo = () => {

  useEffect(() => {
    getResults();
  }, []);

  const getResults = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + "tushar");
    const json = await data.json();
    console.log(json[1]);
  };
  return (
    <div>
      <h1 className='bg-gray-400'>hello worls first demo</h1>
    </div>
  )
}

export default Demo