import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  IoCarSportSharp,
  IoFitnessSharp,
  IoBook,
} from "react-icons/io5";
import { GiSoccerBall, GiGamepad, GiWeightLiftingUp, GiAirplaneDeparture} from "react-icons/gi";

function InterestStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <GiAirplaneDeparture />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiSoccerBall />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoBook/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiGamepad />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiWeightLiftingUp />
      </Col>
      
    </Row>
  );
}

export default InterestStack;
