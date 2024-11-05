import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import players from "./players";
import { Player } from "./Player";

const PlayersList = () => {
  return (
    <Container>
      <Row>
        
          {players.map((player) => (
            <Col xs={13} sm={7} md={5} lg={4}>
            <Player
              firstName={player.first_name}
              lastName={player.last_name}
              team={player.team}
              position={player.position}
              image={player.image}
            />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default PlayersList;
