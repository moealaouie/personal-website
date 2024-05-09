import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import speedle from "../../Assets/Projects/speedle-logo.png";
import foodfight from "../../Assets/Projects/food-fight-logo-rounded.png";
import projecthush from "../../Assets/Projects/project-hush-logo-v2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Noteworthy <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I've been working on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodfight}
              isBlog={false}
              title=""
              description=""
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projecthush}
              isBlog={false}
              title=""
              description=""
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={speedle}
              isBlog={false}
              title="Autoparts"
              description="Automotive Website"
              ghLink="#"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
