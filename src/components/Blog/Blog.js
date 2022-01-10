import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import blogOne from "../../images/blog/blogOne.jpg";
import blogTwo from "../../images/blog/blogTwo.jpg";
import blogThree from "../../images/blog/blogThree.jpg";
import calender from "../../images/blog/calendar.png";
import paper from "../../images/blog/paper.png";
import userLogo from "../../images/blog/user.png";
import "./Blog.css";
const Blog = () => {
  return (
    <div className="container blog-main-section">
      <h3 className="text-center blog-heading" data-aos="fade-up">Recent from Blog</h3>
      <p className="text-center blog-title" data-aos="fade-up">
        Find out our latest news, promotions and professional tips.
      </p>

      <div className="blog-feature mt-5">
        <Row xs={1} md={3} className="g-4">
          <Col className="blog-col">
            <Card className="blog-card" data-aos="fade-up">
              <Card.Img variant="top" src={blogOne} />
              <Card.Body>
                <Card.Title>Try Living A Simple Life</Card.Title>
                <div className="d-flex justify-content-between mt-2">
                  <div>
                    {" "}
                    <img src={calender} alt="" /> <span>January 9, 2022</span>
                  </div>
                  <div>
                    <img src={paper} alt="" /> <span> Improve Life</span>
                  </div>
                </div>
                <Card.Text className="blog-info-text mt-3">
                  Many people want a simple life away from all the...
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <div>
                    {" "}
                    <img src={userLogo} alt="" /> <span>John Dev</span>
                  </div>
                  <span>
                    <Button variant="info">More...</Button>
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>


          <Col>
            <Card className="blog-card" data-aos="fade-up">
              <Card.Img variant="top" src={blogThree} />
              <Card.Body>
                <Card.Title>Start Writing A Journal</Card.Title>
                <div className="d-flex justify-content-between mt-2">
                  <div>
                    {" "}
                    <img src={calender} alt="" /> <span>January 12, 2022</span>
                  </div>
                  <div>
                    <img src={paper} alt="" /> <span> Improve Life</span>
                  </div>
                </div>
                <Card.Text className="blog-info-text mt-3">
                An ideal time to write, comfortable digs, a great...
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <div>
                    {" "}
                    <img src={userLogo} alt="" /> <span>Alex Charry</span>
                  </div>
                  <span>
                    <Button variant="info">More...</Button>
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="blog-card" data-aos="fade-up">
              <Card.Img variant="top" src={blogTwo} />
              <Card.Body>
                <Card.Title>Make Running A Part of Life</Card.Title>
                <div className="d-flex justify-content-between mt-2">
                  <div>
                    {" "}
                    <img src={calender} alt="" /> <span>January 13, 2022</span>
                  </div>
                  <div>
                    <img src={paper} alt="" /> <span> Improve Life</span>
                  </div>
                </div>
                <Card.Text className="blog-info-text mt-3">
                Running improves your cardiovascular strength, lowers bad cholesterol and...
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <div>
                    {" "}
                    <img src={userLogo} alt="" /> <span>Nabila Nur</span>
                  </div>
                  <span>
                    <Button variant="info">More...</Button>
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
     
    </div>
  );
};

export default Blog;
