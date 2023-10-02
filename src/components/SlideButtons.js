import React from 'react'
import { Link } from 'react-router-dom';

const SlideButtons = () => {
  return (
    <div className=" w-fit mx-auto bg-white pt-4  pb-2">
      <ul className="flex m-1">
       <Link to={"/"} > <li className='px-3 text-sm py-1 bg-black text-white ml-2 rounded-lg cursor-pointer '>All</li></Link>
       <Link to={"/search?s=Cricket"} > <li className='px-3 text-sm py-1 bg-black/5 mx-2 rounded-lg cursor-pointer '>Cricket</li></Link>
       <Link to={"/search?s=Trending"} > <li className='px-3 text-sm py-1 bg-black/5 mx-2 rounded-lg cursor-pointer '>Trending</li></Link>
       <Link to={"/search?s=Songs"} > <li className='px-3 text-sm py-1 bg-black/5 mx-2 rounded-lg cursor-pointer '>Songs</li></Link>
       <Link to={"/search?s=Love"} > <li className='px-3 text-sm py-1 bg-black/5 mx-2 rounded-lg cursor-pointer '>Love</li></Link>
       <Link to={"/search?s=Comedy"} > <li className='px-3 text-sm py-1 bg-black/5 mx-2 rounded-lg cursor-pointer '>Comedy</li></Link>
       <Link to={"/search?s=Football"} > <li className='px-3 text-sm py-1 bg-black/5 mx-2 rounded-lg cursor-pointer '>Football</li></Link>
       <Link to={"/search?s=Divine"} > <li className='px-3 text-sm py-1 bg-black/5 mx-2 rounded-lg cursor-pointer '>Divine</li></Link>
       <Link to={"/search?s=Play"} > <li className='px-3 text-sm py-1 bg-black/5 mx-2 rounded-lg cursor-pointer '>Play</li></Link>
       <Link to={"/search?s=Mobiles"} > <li className='px-3 text-sm py-1 bg-black/5 mx-2 rounded-lg cursor-pointer '>Mobiles</li></Link>
       <Link to={"/search?s=Sad song"} > <li className='px-3 text-sm py-1 bg-black/5 mx-2 rounded-lg cursor-pointer '>Sad Song</li></Link>
       <Link to={"/search?s=Movies"} > <li className='px-3 text-sm py-1 bg-black/5 mx-2 rounded-lg cursor-pointer '>Movies</li> </Link>
      </ul>
    </div>
  )
}

export default SlideButtons;