import Image from "next/image";
import SideBar from "./components/SideBar";
import MessagesBar from "./components/MessagesBar";
import ChatContainer from "./components/ChatContainer";

export default function Home() {
  return (
    <div className="flex w-screen h-screen">
      <SideBar />
      <MessagesBar />
      <ChatContainer />
    </div>
  );
}
