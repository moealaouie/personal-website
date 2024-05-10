import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import auto from "../../Assets/Projects/limelightpic.png";
import snake from "../../Assets/Projects/snake.png";
import computer from "../../Assets/Projects/computer.png";

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
              imgPath={snake}
              isBlog={false}
              title="The Python Python"
              description="An interactive Snake game made using the turtle library in Python. Challenge yourself to achieve a high score!" 
              ghLink="https://github.com/moealaouie/thepythonpython"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={computer}
              isBlog={false}
              title="Dynamoe's Computer Shop"
              description="An E-Commerce Computer Shop for Computers and hardware. Explored how to create sessions in PHP for cart and checkout"
              ghLink="https://github.com/moealaouie/ComputerPartsShop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={auto}
              isBlog={false}
              title="Limelight Auto Shop"
              description="An automotive restoration website designed for a client who wanted to take their business online."
              ghLink="https://github.com/moealaouie/AutomotiveRestorationWebsite"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
