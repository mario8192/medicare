import React, { Component } from "react";
import ItemCard from "./ItemCard/ItemCard";
import "./ItemGrid.css";

const ItemGrid = (props) => {
  return (
    <div className="item-grid-container">
      {props.items.map((item) => {
        return <ItemCard name={item.name} imgURL={item.imgURL} />;
      })}
    </div>
  );
};

export default ItemGrid;
