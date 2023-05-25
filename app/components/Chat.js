import React from "react";

const Chat = ({ post }) => {
  return (
    <div className="flex flex-col bg-gray-500 text-white w-4/5 my-4">
      <span className="font-bold">user: {post.userId}</span>
      <span>title: {post.title}</span>
      <span>{post.body}</span>
    </div>
  );
};

export default Chat;
