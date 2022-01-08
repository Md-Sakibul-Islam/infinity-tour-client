import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import deleteLogo from '../../images/delete.png'
import './AllBooking.css'
const AllBooking = () => {
const[allBooking,setAllBooking]= useState([]);
useEffect(()=>{
    fetch('http://localhost:5000/allbooking')
    .then(res => res.json())
    .then(data => setAllBooking(data))
},[])

const handleDelete = id => {
    const proceed = window.confirm('Are You Sure, You want to Delete ?');
    if(proceed){
        fetch(`http://localhost:5000/allbooking/${id}`,{
            method:'delete'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                alert('Deleted Successfully')
                const oldBookingList = allBooking.filter(book => book._id !== id);
                setAllBooking(oldBookingList)
            }
    
        })
    }
    
}
  return (
    <div className="container all-booking-list">
      <div className="text-center text-danger mb-2">
        <h5>All Booking List</h5>
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
         
           {
               allBooking.map(booking =>  <tr key={booking._id}>
                   <td></td>
                <td>{booking.name}</td>
                <td>{booking.email}</td>
                <td>{booking.title}</td>
                <td>{booking.date}</td>
                <td>{booking.address}</td>
                <td>
                  <Button
                    onClick={()=> handleDelete(booking._id)}
                    variant="light"
                  >
                    <img src={deleteLogo} alt="" />
                  </Button>
                </td>
              </tr>)
           }
        
        </tbody>
      </Table>



      </div>
    </div>
  );
};

export default AllBooking;
