import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

import "./Booking.css";

const Booking = () => {
  const history = useHistory();
  //
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");

  //
  const { user } = useAuth();
  const [booked, setBooked] = useState({});
  const { id } = useParams();
  const url = `https://ancient-scrubland-42936.herokuapp.com/travelbooking/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooked(data));
  }, []);

  // onSubmit handler
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const booking = {
      name: user.displayName,
      email: user.email,
      title: booked.title,
      date: date,
      address: address,
    };

    // hitting post api
    fetch("https://ancient-scrubland-42936.herokuapp.com/booking", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Booking Successfully");
          history.push("/mybooking");
        }
      });
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  // function for address input field
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <div className="container-fluid booking">
      <div data-aos="fade-up">
        {/* Booking form Area start */}
        <Row>
          <Col className="mx-auto" sm={12} md={5} lg={5}>
            <div className="container main-form-div">
              <div className="text-center mb-2">
                <h4>
                  Infinity <span className="text-danger">Tour</span>
                </h4>
              </div>
              <Form onSubmit={handleSubmitForm} className="form-container">
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Control
                    type="text"
                    readOnly
                    value={user.displayName || ""}
                    placeholder="Name"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    readOnly
                    value={user.email || ""}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Control
                    type="text"
                    readOnly
                    value={booked.title || ""}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Control
                    type="text"
                    onChange={handleDateChange}
                    placeholder="dd/mm/yyyy"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    onChange={handleAddressChange}
                    placeholder="Address"
                  />
                </Form.Group>
                <Button variant="success" type="submit">
                  Submit
                </Button>
              </Form>
             
            </div>
           
            {/* Booking form Area End */}
          </Col>
         
        </Row>
        
      </div>
    </div>
  );
};

export default Booking;
