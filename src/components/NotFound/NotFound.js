import React from 'react';
import { Col, Row } from 'react-bootstrap';
import notFound from '../../images/not-found.jpg'
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='container not-found-container'>
            <div className="container">
                <Row>
                    <Col className='mx-auto' sm={12} md={7} lg={7}>
                        <img src={notFound} className='img-fluid' alt="" />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default NotFound;