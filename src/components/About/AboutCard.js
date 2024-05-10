import React from "react";
import Card from "react-bootstrap/Card";
import { GiModernCity } from "react-icons/gi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", fontSize: "24px" }}>
            Thank you for spending the time to check out my site! <br></br> I'm{" "}
            <span className="purple">Mohamed Alaouie </span> - a Test Automation Engineer 
            from <span className="purple"> Metro Detroit.</span>
            <br />
            <br></br>
            I love traveling the world, lifting weights, playing soccer, video games, but I especially enjoy coding!
             I like to combine my interests with my technical skills to try and make a positive impact on society.
            <br />
            <br></br>
            I am intellectually curious about everything in tech, so I am always thriving to learn more and do more.
            Head over to my Projects page to see what I have been
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
