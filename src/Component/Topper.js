import React from "react";
import { Col, Row } from "react-bootstrap";

const Topper = () => {
  return (
    <Row className="topper pt-4">
      <Col>Support : +91 - 9090909090</Col>
      <Col className="text-danger ">Book a FREE Test Ride Now </Col>
      <Col>
        <ul className=" Topper-nav ml-auto d-flex">
          <ul className="nav-item active">
            <a className="nav-link" href="#">
              Contact
            </a>
          </ul>
          <ul className="nav-item">
            <a className="nav-link" href="#">
              Career
            </a>
          </ul>

          <ul className="nav-item">
            <a className="nav-link" href="#">
              Media
            </a>
          </ul>
        </ul>
      </Col>
    </Row>
  );
};

export default Topper;
