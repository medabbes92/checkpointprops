import React from "react";
import { Card } from "react-bootstrap";

const Player = ({el}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img style={{height:"358px"}} variant="top" src={el.imageUrl} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
          Team: {el.team}
          <br />
          Nationality: {el.nationality}
          <br />
          Jersey Number: {el.jerseyNumber}
          <br />
          Age: {el.age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
