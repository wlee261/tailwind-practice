import React from "react";

const SideBarIcon = ({ children, tooltip = "tooltip text" }) => {
  return (
    <div className="sidebar-icon group">
      {children}
      <span className="sidebar-tooltip group-hover:scale-100">{tooltip}</span>
    </div>
  );
};

export default SideBarIcon;
