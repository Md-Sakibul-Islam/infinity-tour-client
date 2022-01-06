import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './ShowDestination.css'
const ShowDestination = (props) => {
    const{img,title,price,describe,_id}= props.tour;
    const history = useHistory();
    const handleTravelBooking = ()=>{
      history.push(`/travelbooking/${_id}`)
    }
    return (
        <div>
            <Col>
            <Card className='tour-card'>
              <Card.Img variant="top" src={img} className='img-fluid' />
              <Card.Body>
                <Card.Title className='tour-title'>{title}</Card.Title>
                <Card.Text className='tour-describe'>
                 {describe.slice(0,70)}
                </Card.Text>

               <div className='d-flex justify-content-between align-items-end'>
               <h5 className='price'>$ {price}</h5>
               <Button onClick={handleTravelBooking} variant='secondary'>Travel Booking</Button>
               
               </div>
              </Card.Body>
            </Card>
          </Col>
        </div>
    );
};

export default ShowDestination;