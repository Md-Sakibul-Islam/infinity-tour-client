import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import ShowDestination from "../ShowDestination/ShowDestination";
import './Destination.css'
const Destination = () => {
  // tours state
  const [tours, setTours] = useState([]);
// fetch tours all data
  useEffect(() => {
    fetch("http://localhost:5000/tours")
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);
 
  return (
    <div className="container destination-container">
      <div className="text-center">
        <h5 className="text-danger">Find Your Tour</h5>
        <h4>Here is Destination</h4>
        {/* showing all destination  */}
            <Row xs={1} md={3} className="mt-3 g-4">
                {
                    tours.map(tour => <ShowDestination key={tour._id} tour={tour}></ShowDestination>)
                }
          </Row>
        
        
      </div>
    </div>
  );
};

export default Destination;
