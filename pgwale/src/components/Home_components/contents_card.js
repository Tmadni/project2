import React, { useEffect } from "react";
import { Container, CardDeck, Card } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import "./contents.css";

function Contents_card() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 250,
    });
  }, []);
  return (
    <Container className="card">
      <div data-aos="flip-down">
        <h1>Living the OYO LIFE</h1>
      </div>
      <CardDeck>
        <Card data-aos="flip-right">
          <Card.Img variant="top" src="/image/Comfort_Convenience.png" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card data-aos="flip-left">
          <Card.Img variant="top" src="/image/Security.png" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card data-aos="flip-right">
          <Card.Img variant="top" src="/image/Pocket_Friendly.png" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card data-aos="flip-left">
          <Card.Img
            className="proximity"
            variant="top"
            src="/image/Proximity_to_workspace_Web.png"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  );
}

export default Contents_card;
