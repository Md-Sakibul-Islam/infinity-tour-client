import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import ShowDestination from "../ShowDestination/ShowDestination";
import "./Destination.css";
const Destination = () => {
  // tours state
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // fetch tours all data

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
      fetch("https://ancient-scrubland-42936.herokuapp.com/tours")
        .then((res) => res.json())
        .then((data) => {
          setTours(data);
          setIsLoading(false);
        });
    }, 100);
  }, []);

  return (
    <div className="container destination-container">
      <div className="text-center">
        <h5 className="text-danger">Find Your Tour</h5>
        <h4>Here is Destination</h4>
        {/* showing all destination  */}
        <Row xs={1} md={3} className="mt-3 g-4">
          {isLoading ? (
            <div className="mx-auto"><Spinner  animation="grow" variant="dark" /></div>
          ) : (
            tours.map((tour) => (
              <ShowDestination key={tour._id} tour={tour}></ShowDestination>
            ))
          )}
        </Row>
      </div>
    </div>
  );
};

export default Destination;
