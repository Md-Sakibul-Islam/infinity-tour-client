import React from "react";
import { Carousel } from "react-bootstrap";
import dubai from "../../images/slider/dubai-slider-img.jpg";
import maldive from "../../images/slider/maldives-slider-img.jpg";
import sydney from "../../images/slider/sydney-slider-img.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="mt-5">
      <div>
        <Carousel>
          <Carousel.Item className="item-container">
            {/* first slide  */}
            <img className="d-block w-100" src={dubai} alt="First slide" />
            <Carousel.Caption className="carousel-caption">
              <div className="info">
                <h4>Destination of Distinction</h4>
                <h3>Fabulous Dubai</h3>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="item-container">
            {/* second slide  */}
            <img className="d-block w-100" src={maldive} alt="Second slide" />

            <Carousel.Caption>
              <div className="info">
                <h4>White Sand Beaches of</h4> <h3>MAGICAL MALDIVES</h3>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="opera-container">
            {/* third slide */}
            <img className="d-block w-100" src={sydney} alt="Third slide" />

            <Carousel.Caption>
              <div className="opera-info">
                <h4>Opera House in</h4>
                <h3>MODERN SYDNEY</h3>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
