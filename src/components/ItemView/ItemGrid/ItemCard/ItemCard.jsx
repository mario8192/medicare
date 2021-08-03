import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "./ItemCard.css";

const ItemCard = (props) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        as="div"
        style={{ backgroundImage: "url(" + props.imgURL + ")" }}
      />
      <Card.Body>
        <div className="card-content">
          <Card.Title>{props.name}</Card.Title>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
        </div>
        <Button variant="primary">ADD</Button>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
