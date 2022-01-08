import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './TravelBooking.css'
const TravelBooking = () => {
    const history = useHistory();
    const[booked,setBooking] = useState({});
    const {id}= useParams();
    const url = `http://localhost:5000/travelbooking/${id}`;
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setBooking(data))
    },[])
   
const handleBooking =() =>{
history.push(`/booking/${id}`)
}

    return (
        <div className='container travel-booking'>
            <div className='mt-4'>
                <div className='text-center'>
                    <h2><span className='text-danger'>Infinity</span> Tour</h2>
                    <h4 className='ms-5'>A Destination For The  <span className='text-danger'> New Millennium</span>.</h4>
                </div>

            </div>

            <div className='mt-5'>
            <Row className='m-2'>
                <Col sm={12} md={5} lg={5}>
                    <div className='mt-4 booking-info'>
                        <h2>{booked?.title}</h2>
                        <p>{booked?.describe}</p>
                        <h5> Price: $ {booked?.price}</h5>
                        <Button onClick={handleBooking} variant="outline-dark">Book Now</Button>
                    </div>
                </Col>
                <Col className='mt-4'  sm={12} md={6} lg={6}>
                    <div className='ms-4'>
                        <img src={booked.img}  className='img-fluid tour-img' alt="" />
                    </div>
                </Col>
               
            </Row>
            </div>
        </div>
    );
};

export default TravelBooking;