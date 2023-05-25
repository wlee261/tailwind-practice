import Image from "next/image";
import SideBar from "./components/SideBar";
import MessagesBar from "./components/MessagesBar";

export default function Home() {
  return (
    <div className="flex">
      <SideBar />
      <MessagesBar />
    </div>
  );
}
