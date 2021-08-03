import React, { Component } from "react";

const TableRow = (props) => {
  return (
    <tr>
      {props.columns.map((el) => {
        return <td>{el}</td>;
      })}
    </tr>
  );
};

export default TableRow;
