import React from "react";
import "./safety.css";
import Images from "./carousel-img";
import { Container, Row } from "react-bootstrap";

function Safety() {
  const list = [
    "SANITISATION",
    "THERMAL_MONITORING",
    "TRAVEL_HISTORY",
    "DISINFECTING",
    "DISPENSER",
    "contactless_food",
    "Covid_Icons-Frontline_Ecosystem-01_Mandatory_PPE_for_Staff_2x",
    "ICONS_ROOM_FEATURES_03_Storage_Space_2x",
  ];

  return (
    <Container className="top" data-aos="flip-right">
      <h1>We Care about your safety!!</h1>
      <p>
        Yeah, you read it right. In one particular case, we have a strict
        no-entry policy. And it's for the coronavirus. Ever since the news
        broke, we have implemented our best in class ‘COVID-19 Combat-ready
        Framework’ to protect our residents.
      </p>
      <hr />
      <Container fluid className="icons" data-aos="fade-up">
        <Row xs={4} md={4} lg={8}>
          <Images value={list[0]} fname="Residences Sanitisation" />
          <Images value={list[1]} fname="Thermal Monitoring at Entry/Exit" />
          <Images value={list[2]} fname="Medical & Travel History" />
          <Images value={list[3]} fname="24x7 Quick Response Teams" />
          <Images value={list[4]} fname="Daily Disinfecting High Touch Areas" />
          <Images value={list[5]} fname="Sanitisers Placed at Multiple Areas" />
          <Images value={list[6]} fname="No-Touch Dining Facility" />
          <Images value={list[7]} fname="Training As per WHO norms" />
        </Row>
      </Container>
      <hr />
    </Container>
  );
}

export default Safety;
