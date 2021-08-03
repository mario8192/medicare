import React, { Component } from "react";
import { Table } from "react-bootstrap";
import "./InventoryTable.css";
import TableRow from "./TableRow/TableRow";

const InventoryTable = () => {
  return (
    <div className="inventory-table-container">
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Type</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <TableRow columns={["1", "Syringes", "Supplies", "5"]} />
          <TableRow columns={["2", "Cotton balls", "Supplies", "15"]} />
          <TableRow columns={["3", "Iron Supplements", "Medication", "8"]} />
          <TableRow columns={["4", "Pulse oximeter", "Equipment", "2"]} />
        </tbody>
      </Table>
    </div>
  );
};

export default InventoryTable;
