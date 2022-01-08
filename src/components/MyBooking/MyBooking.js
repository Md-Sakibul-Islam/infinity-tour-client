import React, { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import deleteLogo from "../../images/delete.png";
import "./MyBooking.css";
const MyBooking = () => {
  const { user } = useAuth();
  const [myBooking, setMyBooking] = useState([]);

  const url = `http://localhost:5000/mybooking/${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyBooking(data));
  }, [url]);

  //delete api
  const handleDelete = (id) => {
    const proceed= window.confirm('Are Your Sure, You Want to delete?')
    if(proceed){
      fetch(`http://localhost:5000/mybooking/${user.email}/${id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const oldBooking = myBooking.filter((booking) => booking._id !== id);
            setMyBooking(oldBooking);
          }
        });
    }
    
  };
  return (
    <div className="container my-booking">
      <div className="text-center text-danger mb-2">
        <h5>My Booking List</h5>
      </div>
      <div className="my-booking-table">
      <Row>
        <Col sm={12} md={12} lg={12}>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th> Name</th>
            <th>Email</th>
            <th>Booking</th>
            <th>Date</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myBooking.map((booking) => (
            <tr key={booking._id}>
              <td>{}</td>
              <td>{booking.name}</td>
              <td>{booking.email}</td>
              <td>{booking.title}</td>
              <td>{booking.date}</td>
              <td>{booking.address}</td>
              <td>
                <Button
                  onClick={() => handleDelete(booking._id)}
                  variant="light"
                >
                  <img src={deleteLogo} alt="" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
        </Col>
      </Row>
      </div>
    </div>
  );
};

export default MyBooking;
