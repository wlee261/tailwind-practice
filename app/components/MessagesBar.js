"use client";

import React, { useState } from "react";
import MessageBarItem from "./MessageBarItem";

import { IoIosPerson } from "react-icons/io";

const users = [
  "barry allen",
  "naruto uzumaki",
  "ray allen",
  "tiger woods",
  "el tigre",
];

const MessagesBar = () => {
  const [selected, setSelected] = useState(users[0]);

  return (
    <div className="left-16 h-screen w-60 absolute bg-gray-700 text-center">
      <div className="my-3 text-gray-200 hover:text-white">Direct Messages</div>
      {users.map((user) => {
        return (
          <MessageBarItem
            icon={<IoIosPerson />}
            key={user}
            username={user}
            selected={selected === user}
            onClick={() => {
              setSelected(user);
            }}
          />
        );
      })}
    </div>
  );
};

export default MessagesBar;
