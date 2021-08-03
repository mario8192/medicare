import React, { Component, Fragment } from "react";
import InventoryTable from "../../components/InventoryTable/InventoryTable";
import "./InventoryPage.css";

const InventoryPage = () => {
  return (
    <Fragment>
      <div className="inventory-table-container">
        <InventoryTable />
      </div>
    </Fragment>
  );
};

export default InventoryPage;
