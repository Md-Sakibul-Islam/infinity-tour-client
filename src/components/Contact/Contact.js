import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import sOne from "../../images/social/fb.png";
import sTwo from "../../images/social/instra.png";
import sThree from "../../images/social/pin.png";
import sFour from "../../images/social/twit.png";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="container-fluid contact-container">
      <div className="container mt-5">
          
        <div className="container">
        <Row>
          <Col className="ms-1" sm={12} md={5} lg={5}>
            <div data-aos="fade-right">
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
            </div>
          </Col>
          <Col className="me-auto" sm={12} md={6} lg={6} >
            <div data-aos="fade-left">
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
            </div>
          </Col>
        </Row>
        </div>
      </div>

    </div>
  );
};

export default Contact;
