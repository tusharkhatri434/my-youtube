import React, { useEffect,useState } from 'react'
import { YOUTUBE_SEARCH_API } from "../utils/contants";
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
     
    </div>
  )
}

export default Demo