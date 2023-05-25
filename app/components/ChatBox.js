"use client";

import React, { useEffect, useState } from "react";
import Chat from "./Chat";

const ChatBox = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="flex flex-col items-center w-full h-full overflow-y-scroll">
      {posts.slice(0, 30).map((post) => {
        return <Chat post={post} />;
      })}
    </div>
  );
};

export default ChatBox;
