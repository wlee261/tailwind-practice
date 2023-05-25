import React from "react";
import {
  IoIosBowtie,
  IoIosCafe,
  IoIosBrowsers,
  IoIosCalendar,
} from "react-icons/io";
import SideBarIcon from "./SideBarIcon";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white shadow-lg">
      <SideBarIcon>
        <IoIosBowtie />
      </SideBarIcon>
      <SideBarIcon>
        <IoIosCafe />
      </SideBarIcon>
      <SideBarIcon>
        <IoIosBrowsers />
      </SideBarIcon>
      <SideBarIcon>
        <IoIosCalendar />
      </SideBarIcon>
    </div>
  );
};

export default SideBar;
