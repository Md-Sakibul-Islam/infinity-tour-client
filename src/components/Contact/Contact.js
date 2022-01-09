import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import sOne from "../../images/social/fb.png";
import sTwo from "../../images/social/instra.png";
import sThree from "../../images/social/pin.png";
import sFour from "../../images/social/twit.png";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="container contact-container">
      <div className="container mt-5">
          
        <Row>
          <Col sm={12} md={5} lg={5}>
            <small className="text-danger">Talk with our Team</small>
            <h1>Any Question? Feel Free to Contact</h1>
            <p className="contact-info">
              Infinity Software Ai Park Rajshahi,Bangladesh .
              infinity.info@gmail.com +8801705544150
            </p>
            <div className="social-media-container">
              <span className="s-icon">
                <img src={sOne} alt="" />
              </span>
              <span className="s-icon">
                <img src={sTwo} alt="" />
              </span>
              <span className="s-icon">
                <img src={sThree} alt="" />
              </span>
              <span className="s-icon">
                <img src={sFour} alt="" />
              </span>
            </div>
          </Col>
          <Col className="ms-auto" sm={12} md={7} lg={7}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control type="text"  placeholder="Enter Your Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter Your Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control type="text" placeholder="Enter Your Subject" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                
                <Form.Control placeholder="Write Your Message" as="textarea" rows={5} />
              </Form.Group>
             

              <Button variant="success" type="submit">
                Send A Message
              </Button>
            </Form>
          </Col>
        </Row>
      </div>

    </div>
  );
};

export default Contact;
