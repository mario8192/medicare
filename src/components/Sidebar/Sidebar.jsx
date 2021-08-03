import React, { Component } from "react";
import "./Sidebar.css";
import SidebarFilter from "./SidebarFilter/SidebarFilter";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <SidebarFilter
        title={"Sort"}
        items={["Relevance", "Price", "Availability"]}
      />
      <SidebarFilter
        title={"Filter"}
        items={["Supplies", "Medication", "Equipment", "Kits"]}
      />
    </div>
  );
};

export default Sidebar;
