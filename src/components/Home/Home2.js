import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WELCOME! LET ME <span className="purple"> SHOW YOU AROUND. </span>
            </h1>
            <p className="home-about-body">
              As a recent graduate from Eastern Michigan University with
              a BS in Computer Science, I have a strong foundation in full-stack
              development and IT support. I have experience working with various
              employers:{" "}
              <b className="purple">Ally Financial, Career Now Brands, and Secure-24</b>.
              <br />
              <br />I am passionate about creating intuitive and secure apps
              solving real, everyday problems, using languages such as
              <i>
                <b className="purple"> JavaScript, Python, and C#. </b>
              </i>
              <br />
              <br />
              My most recent role was as a Software Test Automation Engineer at&nbsp;
              <i>
                <b className="purple">Ally Financial </b>{" "}
                where I contribute to the design, development, and testing of
                automation solutions for various business processes. I leverage
                my skills in <b className="purple">Java and Selenium</b>{" "}
                to create and maintain automation CI/CD workflows that help improve
                efficiency and accuracy in the workplace.
              </i>
              <br />
              <br />I am constantly trying to find new ways to make technology
              serve us and make our lives easier. Currently, I am improving my skills with{" "}
              <i>
              <b className="purple">Python</b>,
              </i>
              <i>
                <b className="purple">
                  {" "}
                  Neural Networks and Deep Learning
                </b>,
                <b className="purple">
                  {" "}
                   Automation technologies
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Playwright and Cypress</b>,
              </i>
              &nbsp; and
              <i>
                <b className="purple"> AWS Cloud Computing</b>.
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Connect with me</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/moealaouie"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/moealaouie"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:moealaouie@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
