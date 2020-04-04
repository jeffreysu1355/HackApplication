import React, { Component } from 'react';
import axios from "axios";
import { Container, Row, Col, Form, Button, Toast } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import '../css/Form.css';


{/* <Row className="justify-content-md-center" sm={1} md={1}>
                    <Col>
                    <Toast className="Toast-Style" onClose={() => setShow(false)} show={show} delay={5000} autohide>
                            
                        <Toast.Body>Succesfully Submitted!</Toast.Body>
                    </Toast>
                    </Col>
                </Row> */}
function CustomForm(props){

    const [validated, setValidated] = React.useState(false);
    const [show, setShow] = React.useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        }else{
            event.preventDefault();
            event.stopPropagation();
            setShow(true);
            axios.get(`https://hack-uci-test-endpoint.herokuapp.com/test`, { 
                params: {
                    name: form.elements.name.value,
                    email: form.elements.email.value,
                    funfact: form.elements.fact.value
                }
            })
            .then(res => {
                console.log(res.data);
            });
            //since forms automatically refresh browser and console, workaround.
            setValidated(false);
            form.elements.name.value = "";
            form.elements.email.value = "";
            form.elements.fact.value = "";
            toast.success('Submission Success!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
                });
        }
    };
    
    return(
        <div className="CustomForm">
            <Container className="CustomForm-Container" >
                <Row>
                    <Col>
                        <h4 style={{marginTop: '20px'}}>Hack UCI Application</h4>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" sm={1} md={1}>
                
                    <Col >
                    
                        <Form noValidate className="CustomForm-Form" validated={validated} onSubmit={handleSubmit}>
                            
                            <Form.Group controlId="name">
                                <Form.Label className="CustomForm-Label">Name</Form.Label>
                                <Form.Control required type="input" placeholder="Name" />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a name.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label className="CustomForm-Label">Email</Form.Label>
                                <Form.Control required type="email" placeholder="Email" />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a valid email.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="fact">
                                <Form.Label className="CustomForm-Label">Fact</Form.Label>
                                <Form.Control required as="textarea" rows="3" placeholder="Fun Fact"/>
                                <Form.Control.Feedback type="invalid">
                                    Please enter a fact.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button style={{backgroundColor: "#ff6c81"}} variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange
                draggable
                pauseOnHover
                />
            
            <ToastContainer />
        </div>
    );
    
    
}

export default CustomForm;