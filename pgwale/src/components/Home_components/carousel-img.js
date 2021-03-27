import React from "react";
import { Col } from "react-bootstrap";
import "./safety.css";

export default function images(props) {
  const value = "/image/" + props.value + ".png";
  return (
    <Col>
      <div>
        <img className="img-icon" src={value} alt={props.value} />
        <div>
          <span>{props.fname}</span>
        </div>
      </div>
    </Col>
  );
}
