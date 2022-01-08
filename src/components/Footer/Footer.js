import React from "react";
import { Col, Row } from "react-bootstrap";

import "./Footer.css";
const Footer = () => {
  return (
    <div className="container-fluid footer">
      <Row>
        <Col className="" sm={12} md={4} lg={4}>
          <div className="container  address-contact">
            <div className="footer-info">
              <h4>Address & Contact</h4>
              <p>Infinity Software Ai Park Rajshahi,Bangladesh .</p>
              <p>infinity.info@gmail.com</p>
              <p>+8801705544150</p>
            </div>
          </div>
        </Col>
        <Col sm={12} md={4} lg={4}>
          <div className="container  address-contact">
            <div className="footer-info">
              <h4>Travel Destinations</h4>
              <p>United Arab Emirates</p>
              <p>United Kingdom</p>
              <p>Australia</p>
              <p>Maldives</p>
              <p>Turkey</p>
            </div>
          </div>
        </Col>
        <Col sm={12} md={4} lg={4}>
        <div className="container  address-contact">
            <div className="footer-info">
              <h4>Blog Categories</h4>
              <p>Improve Life</p>
              <p>Productivity</p>
              <p>Sport</p>
              <p>Self Discipline</p>
              <p>Technology</p>
            </div>
          </div>

        </Col>
      </Row>
    </div>
  );
};

export default Footer;
