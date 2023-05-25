import React from "react";
import ChatBoxInput from "./ChatBoxInput";
import ChatBox from "./ChatBox";

const Chatcontainer = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full bg-gray-500">
      <ChatBox />
      <ChatBoxInput />
    </div>
  );
};

export default Chatcontainer;
