import React from "react";

const MessageBarItem = ({ icon, username, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex justify-left items-center w-auto h-12 rounded-md text-gray-300 hover:bg-gray-500 m-1 ${
        selected ? "bg-gray-400" : "bg-gray-700"
      }`}
    >
      <div className="pl-3">{icon}</div>
      <div className="pl-3">{username}</div>
    </div>
  );
};

export default MessageBarItem;
