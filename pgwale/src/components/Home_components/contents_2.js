import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import "./contents.css";
export default function Contents_2() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 300,
    });
  }, []);
  return (
    <Container>
      <Row>
        <Col data-aos="fade-right">
          <img className="content-img" src="/image/bed-desktop.png" alt="bed" />
        </Col>
        <Col className="content-main" data-aos="fade-left">
          <h1>MAKE ROOM FOR COMFORT</h1>
          <p>
            Your room will have all the furniture and facilities you need for a
            comfortable stay. Because your chair shouldn’t multitask as a
            clothes rack. And your bed is not meant to be a study table
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="content-main" data-aos="fade-right">
          <h1>AN UNCOMMON COMMON AREA</h1>
          <p>
            From breaking a sweat at the fitness zone to breaking the record for
            most time spent on a bean bag - it’s your common area and whatever
            you need, it’s got you sorted.
          </p>
        </Col>
        <Col data-aos="fade-left">
          <img className="content-img" src="/image/prime.png" alt="prime" />
        </Col>
      </Row>
      <Row>
        <Col data-aos="fade-right">
          <img className="content-img" src="/image/food.jpg" alt="food" />
        </Col>
        <Col className="content-main" data-aos="fade-left">
          <h1>AT YOUR SERVICE</h1>
          <p>
            No excuse for postponing laundry day. No waiting in the sun for an
            auto. Doorstep laundry, transport and other essential services are
            just a tap away.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="content-main" data-aos="fade-right">
          <h1>IN IT TOGETHER</h1>
          <p>
            Watching that epic comeback in the World Cup finals, embarrassing
            yourself at dance night, or celebrating a festival together like a
            family should - your stay will be full of memories made with your
            Stanza Living family.
          </p>
        </Col>
        <Col data-aos="fade-left">
          <img className="content-img" src="/image/ps5.jpg" alt="gaming" />
        </Col>
      </Row>
    </Container>
  );
}
