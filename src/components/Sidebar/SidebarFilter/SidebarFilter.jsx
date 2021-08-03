import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import "./SidebarFilter.css";

const SidebarFilter = (props) => {
  return (
    <Dropdown autoClose={false}>
      <Dropdown.Toggle variant="transparent" id="dropdown-basic">
        {props.title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {props.items.map((item) => {
          return <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>;
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SidebarFilter;
