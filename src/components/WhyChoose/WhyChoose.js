import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import featureOne from "../../images/feature/feature-1.png";
import featureTwo from "../../images/feature/feature-2.png";
import featureThree from "../../images/feature/feature-3.png";
import featureFour from "../../images/feature/feature-4.png";
import featureFive from "../../images/feature/feature-5.png";
import featureSix from "../../images/feature/feature-6.png";
import "./WhyChoose.css";
const WhyChoose = () => {
  return (
    <div className="container why-choose">
      <div className="container">
        <h3 className="text-center" data-aos="fade-up">
          Why Choose <span className="text-danger">Infinity Tour</span>{" "}
        </h3>
        <p className="text-center offer-text" data-aos="fade-up">
          We offer most competitive rates and offers for wonderful and beautiful
          places.
        </p>

        <div className="choose-card-container">
          <Row xs={1} md={3} className="g-4">
            <Col>
              <Card className="feature-card" data-aos="fade-up">
                <div className="mx-auto">
                  <Card.Img
                    variant="top"
                    className="img-fluid text-center"
                    src={featureOne}
                  />
                </div>

                <Card.Body>
                  <Card.Title className="text-center">
                    Unique Destinations
                  </Card.Title>
                  <Card.Text className="feature-info">
                    Looking for a unique vacation destination? Then maybe a trip
                    to one of the 10 most unique tourist destinations might.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="feature-card" data-aos="fade-up">
                <div className="mx-auto">
                  <Card.Img
                    variant="top"
                    className="img-fluid"
                    src={featureTwo}
                  />
                </div>

                <Card.Body>
                  <Card.Title className="text-center">
                    Worth of Money
                  </Card.Title>
                  <Card.Text className="feature-info">
                    There is not a better way to spend money, than spending
                    money on travel. This is what we say, others and science.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="feature-card" data-aos="fade-up">
                <div className="mx-auto">
                  <Card.Img
                    variant="top"
                    className="img-fluid"
                    src={featureThree}
                  />
                </div>

                <Card.Body>
                  <Card.Title className="text-center">
                    Wonderful Places
                  </Card.Title>
                  <Card.Text className="feature-info">
                    We do our best to have you a wonderful experience by taking
                    you to the wonderful and amazing places around the world.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="feature-card" data-aos="fade-up">
                <div className="mx-auto">
                  <Card.Img
                    variant="top"
                    className="img-fluid"
                    src={featureFour}
                  />
                </div>

                <Card.Body>
                  <Card.Title className="text-center">
                  Quick Booking
                  </Card.Title>
                  <Card.Text className="feature-info">
                  Booking is quick as clicking a few clicks. We take care of all transportation and accommodations during your journey
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="feature-card" data-aos="fade-up">
                <div className="mx-auto">
                  <Card.Img
                    variant="top"
                    className="img-fluid"
                    src={featureFive}
                  />
                </div>

                <Card.Body>
                  <Card.Title className="text-center">
                  Backup Team
                  </Card.Title>
                  <Card.Text className="feature-info">
                  We have staff to assist in all stages of your holiday, from travel advice & best prices to ground handling & support during your holiday.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="feature-card" data-aos="fade-up">
                <div className="mx-auto">
                  <Card.Img
                    variant="top"
                    className="img-fluid"
                    src={featureSix}
                  />
                </div>

                <Card.Body>
                  <Card.Title className="text-center">
                  Exciting Travel
                  </Card.Title>
                  <Card.Text className="feature-info">
                  We have a wide range of expertise and knowledge in our services. So we can provide you an exciting travel experience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
