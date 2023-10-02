import React, { useEffect, useState } from "react";
import { USER_PROFILE,MsgGenerator,UserGenerator } from "../utils/contants";
import { useDispatch, useSelector } from "react-redux";
import { addChat,clearChat } from "../utils/chatSlice";
import { Link } from "react-router-dom";
//! we should use loacal storage for this live chat. i use redux for my practice----

const Message = ({ name, mess }) => {
    return (
      <div className="flex gap-2 items-center p-1 border-y-2 shadow-md m-1">
        <img className="w-11" src={USER_PROFILE} alt="img"></img>
        <span className="font-medium">{name}</span>
        <p className="">{mess}</p>
      </div>
    );
  };

const LiveChat = () => {
 
  const dispatch = useDispatch();
  // const chatInfo = useSelector((store)=>store.liveChat.messages);
  const [chatInfo,addChat] = useState([])

  useEffect(()=>{

    const i = setInterval(()=>{
      // dispatch(addChat({
      //   name:UserGenerator(),
      //   mess:MsgGenerator(7),
      //   id:Math.floor(Math.random()*100+23),
      // }));

      let arr = [...chatInfo];
      (arr.length > 20) && arr.splice(20, 1);
      addChat([
        {
          name: UserGenerator(),
          mess: MsgGenerator(6) + "helo ji ❤️",
          id: Math.floor(Math.random() * 1000 + 63),
        },
        ...arr,
      ]);

    },1000);

      return () => {
        console.log("i am return of use effect");
        clearInterval(i);
      }
    
  },[chatInfo])

 
  return (
    <div className="w-96 h-96 mx-auto mt-6 border-2 border-gray-400 rounded-md">
      <h1 className="text-lg pt-2 pl-2 border-b-2 border-gray-400 font-medium">
        Live Chats
      </h1>
      <div className="flex flex-col-reverse h-80 overflow-y-scroll mx-3">
        {/* <div className="flex gap-1 items-center p-1 border-y-2 shadow-md m-1">
          <img className="w-11" src={USER_PROFILE} alt="img"></img>
          <span className="font-medium"> tushar khatri - </span>
          <p className="">jkhdfkjsdkjfndkjnkckfn</p>
        </div> */}
        {console.log("i am")}
       { chatInfo.map((c)=> (<Message key={c.id} name={c.name} mess={c.mess} />) )}
      </div>
       
    </div>
  );
};

export default LiveChat;
