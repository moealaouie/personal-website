import React from "react";
import Card from "react-bootstrap/Card";
import { GiModernCity } from "react-icons/gi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Thank you for spending the time to check out my site! <br></br> I'm{" "}
            <span className="purple">Mohamed Alaouie </span> - a developer
            from <span className="purple"> Metro Detroit. 🧑🏻‍💻🌆</span>
            <br />
            <br></br>
            I love soccer, fitness, and video games. I like to combine some of my interests with my technical
            skills to create fun, unique apps that anyone can enjoy!
            <br />
            <br></br>
            I am especially passionate about crafting solutions that make life
            easier. Head over to my Projects page to see what I have been
            working on!
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
