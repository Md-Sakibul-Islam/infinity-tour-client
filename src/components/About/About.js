import React from "react";
import { Card, Col, ProgressBar, Row } from "react-bootstrap";
import aboutImg from "../../images/about1.jpg";
import rightArrow from "../../images/right-arrow.png";
import teamOne from  '../../images/team/team-1.jpg'
import teamTwo from  '../../images/team/team-2.jpg'
import teamThree from  '../../images/team/team-3.jpg'
import teamFour from  '../../images/team/team-4.jpg'

import "./About.css";
const About = () => {
  return (
    <div className="container-fluid about-container">
      <div className="container">
        <h1>
          About <span className="text-danger">Infinity Tour</span>
        </h1>
        <Row className="mt-5">
          <Col sm={12} md={6} lg={6}>
            <img src={aboutImg} className="img-fluid about-img" alt="" />
          </Col>
          <Col className="" sm={12} md={6} lg={6}>
            <div>
              <h2>
                Welcome to{" "}
                <span className="text-danger">Infinity Tour Inc</span> .
              </h2>
              <p className="about-para">
                We are trusted by our clients and have a reputation for the best
                services in the field. Lorem ipsum is simply free text dolor sit
                amett consectetur adipiscing elit. It is a long established fact
                that a reader will be distracted by the readable content of a
                page.
              </p>
              <h4>Best Services</h4>
              <ProgressBar now={80} label={`${80}%`} />
              <h4>Tour Agents</h4>
              <ProgressBar now={90} label={`${90}%`} />
            </div>
          </Col>
        </Row>
        <div className="mt-5 about-info text-center">
          <p className="about-title">
            Top Tour Operators and Travel Agency. We offering in total 793 tours
            and holidays through-out the world. Combined we have received 1532
            customer reviews.
          </p>
          <p className="about-paragraph">
            Travel has helped us to understand the meaning of life and it has
            helped us become better people. Each time we travel, we see the
            world with new eyes.Travel has helped us to understand the meaning
            of life and it has helped us become better people. Each time we
            travel, we see the world with new eyes.Travel has helped us to
            understand the meaning of life and it has helped us.
          </p>
          <div>
            <Row>
              <Col
                className="mt-4 d-flex justify-content-start"
                sm={12}
                md={4}
                lg={4}
              >
                <span>
                  <img src={rightArrow} alt="" />
                </span>

                <span className="ms-1 about-feature">
                  {" "}
                  Safety Travel System
                </span>
              </Col>
              <Col
                className="mt-4 d-flex justify-content-start"
                sm={12}
                md={4}
                lg={4}
              >
                <span>
                  <img src={rightArrow} alt="" />
                </span>

                <span className="ms-1 about-feature">
                  {" "}
                  Budget-Friendly Tour
                </span>
              </Col>
              <Col
                className="mt-4 d-flex justify-content-start"
                sm={12}
                md={4}
                lg={4}
              >
                <span>
                  <img src={rightArrow} alt="" />
                </span>

                <span className="ms-1 about-feature">
                  {" "}
                  24/7 Customer Support
                </span>
              </Col>
              <Col
                className="d-flex justify-content-start mt-4"
                sm={12}
                md={4}
                lg={4}
              >
                <span>
                  <img src={rightArrow} alt="" />
                </span>

                <span className="ms-1 about-feature">
                  {" "}
                  Expert Trip Planning
                </span>
              </Col>
              <Col
                className="d-flex justify-content-start mt-4"
                sm={12}
                md={4}
                lg={4}
              >
                <span>
                  <img src={rightArrow} alt="" />
                </span>

                <span className="ms-1 about-feature">Fast Communication</span>
              </Col>
              <Col
                className="d-flex justify-content-start mt-4"
                sm={12}
                md={4}
                lg={4}
              >
                <span>
                  <img src={rightArrow} alt="" />
                </span>

                <span className="ms-1 about-feature">
                  Right Solution & Guide
                </span>
              </Col>
            </Row>
          </div>
        </div>

        <div className="team mt-5">
          <div className="text-center">
            <small className="text-danger">professional people</small>
            <h2>Meat The Team</h2>
          </div>

          <div className="team-member mt-5">
            <Row xs={1} md={4} className="g-4">
              <Col>
                <Card className="team-card">
                  <Card.Img variant="top" src={teamOne} className="img-fluid" />
                  <Card.Body>
                    <Card.Title className="text-center">Fread Andrew</Card.Title>
                    <Card.Text className="text-center text-danger">
                    CEO & FOUNDER 
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className="team-card">
                  <Card.Img variant="top" src={teamTwo} className="img-fluid" />
                  <Card.Body>
                    <Card.Title className="text-center">Jessica Brown</Card.Title>
                    <Card.Text className="text-center text-danger">
                    CONSULTANT
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="team-card">
                  <Card.Img variant="top" src={teamThree} className="img-fluid" />
                  <Card.Body>
                    <Card.Title className="text-center"> David Hardson</Card.Title>
                    <Card.Text className="text-center text-danger">
                    CONSULTANT
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="team-card">
                  <Card.Img variant="top" src={teamFour} className="img-fluid" />
                  <Card.Body>
                    <Card.Title className="text-center">samantha dorrance</Card.Title>
                    <Card.Text className="text-center text-danger">
                    CONSULTANT
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
