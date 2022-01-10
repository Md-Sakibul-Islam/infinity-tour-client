import React, { useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./AddNewTour.css";
const AddNewTour = () => {

    const titleRef = useRef();
    const describeRef = useRef();
    const imgRef = useRef();
    const priceRef = useRef();


    const handleSubmit = e =>{
        e.preventDefault();
        const title = titleRef.current.value;
        const describe = describeRef.current.value;
        const img = imgRef.current.value;
        const price = priceRef.current.value;
        const tour = {title,describe,img,price};
        fetch('https://ancient-scrubland-42936.herokuapp.com/tours',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(tour)
        })
        .then(res => res.json())
        .then(data => {
           if(data.insertedId){
               alert('New Tour Successfully Added')
               titleRef.current.value=''
               describeRef.current.value=''
               imgRef.current.value=''
               priceRef.current.value=''
           }
        })

    }


  return (
    <div className="container-fluid add-tour">
      <div className="add-tour-form">
          
        <Row>
          <Col className="mx-auto" sm={12} md={5} lg={5}>
           <div className="main-form-container" data-aos="fade-up">
           <div className="text-center">
              <h3>Add New <span className="text-danger"> Tour</span> </h3>
          </div>
           <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control type="text" required ref={titleRef} placeholder="Tour Place Title" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control
                required
                ref={describeRef}
                  as="textarea"
                  rows={3}
                  placeholder="Description"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control ref={imgRef} required type="text" placeholder="Image URL" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control required ref={priceRef} type="number" placeholder="Price" />
              </Form.Group>

             
             
              <Button variant="success" type="submit">
                Submit
              </Button>
            </Form>
           </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AddNewTour;
