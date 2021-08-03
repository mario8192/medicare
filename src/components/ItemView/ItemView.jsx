import React, { Component, Fragment } from "react";
import SearchInput from "../SearchInput/SearchInput";
import ItemGrid from "./ItemGrid/ItemGrid";
import "./ItemView.css";

const ItemView = () => {
  const items = [
    {
      name: "Syringes",
      imgURL:
        "https://www.saintyco.com/wp-content/uploads/2020/04/Figure-2-Disposable-syringes.jpg",
    },
    {
      name: "Cotton balls",
      imgURL:
        "http://1.bp.blogspot.com/-2mwWa8rg-8U/Tq7mA8DpSVI/AAAAAAAAAJc/1vaWqPBn5l8/s1600/cotton-balls.jpg",
    },
    {
      name: "Stethoscope",
      imgURL: "https://www.picserver.org/pictures/stethoscope01-lg.jpg",
    },
    {
      name: "Paracetamol",
      imgURL:
        "https://www.primehealthpharmacy.co.uk/wp-content/uploads/2020/03/paraC.jpg",
    },
    {
      name: "Pulse oximeter",
      imgURL:
        "http://www.jziki.com/Sources/Images/Web/2020/0826/20200826173258981.jpg",
    },
    {
      name: "Blood pressure monitor",
      imgURL:
        "http://www.thermometerguide.com/wp-content/uploads/2015/05/omron-5-blood-pressure-monitor.jpg",
    },
    {
      name: "Iron supplements",
      imgURL: "https://i.ebayimg.com/images/i/321559935637-0-1/s-l1000.jpg",
    },
    {
      name: "CPR kit",
      imgURL:
        "https://image.tigermedical.com/Products/LargeImages/HSMHSRK-10.jpg",
    },
  ];
  return (
    <div className="item-view-container">
      <div className="item-view-search-input">
        <SearchInput />
      </div>
      <ItemGrid items={items} />
    </div>
  );
};

export default ItemView;
