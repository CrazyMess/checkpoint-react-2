import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";


export const Player = (props) => {
  return (
    <div className="mt-1 m-2">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.firstName} {props.lastName}</Card.Title>
          <ListGroup className="list-group-flush">
          <ListGroup.Item>team: {props.team}</ListGroup.Item>
          <ListGroup.Item>position: {props.position}</ListGroup.Item>
        </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};
