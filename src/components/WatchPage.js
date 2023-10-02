import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/SideBarSlice';
import { useSearchParams } from 'react-router-dom';
import LiveChat from './LiveChat';
const Watch = () => {
 const [searchParams] = useSearchParams();
//  console.log(searchParams.get("v"));
const dispatch = useDispatch();

useEffect(()=>{

 dispatch(closeMenu());

},[]);

  return (
    <div className='flex flex-wrap 100vw'>
      <div className="">
        <iframe
          className="rounded-xl mx-8 my-5"
          width="782"
          height="400"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <LiveChat />
      </div>
    </div>
  );
}

export default Watch