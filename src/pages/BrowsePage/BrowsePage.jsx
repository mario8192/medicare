import React, { Component, Fragment } from "react";
import ItemView from "../../components/ItemView/ItemView";
import Sidebar from "../../components/Sidebar/Sidebar";

const BrowsePage = () => {
  return (
    <Fragment>
      <Sidebar />
      <ItemView />
    </Fragment>
  );
};

export default BrowsePage;
