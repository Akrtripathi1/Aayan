import React from 'react'
import art from './image/art.png'
import { Row, Col, Form, Button } from 'react-bootstrap'
import './Form1.scss'



const Form1 = () => {
    return (
        <div className="contact4">
            <Row>
                <Col md={6} className="d-flex flex-column align-items-start justify-content-center">
                    <h3>Reach Us Directly</h3>
                    <Form className="w-100">
                        <Form.Group controlId="formName" className="mb-3">
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group controlId="formSubject" className="mb-3">
                            <Form.Control type="text" placeholder="Subject" />
                        </Form.Group>
                        <Form.Group controlId="formMessage" className="mb-3">
                            <Form.Control as="textarea" placeholder="Type Your Message Here..." />
                        </Form.Group>
                        <Button variant="dark" type="submit" className="w-100">
                            Send
                        </Button>
                    </Form>
                </Col>
                <Col md={6} className="contact-right d-flex flex-column align-items-center justify-content-center">
                    <h3>Contact us</h3>
                    <img src={art} alt="Call Us" />
                    <div className="contact-right1 text-center">
                        <p>+44 7827 814437</p>
                        <p>+91 522 319 5400</p>
                        <span>
                            info@aayanindia.in<br />
                            business@aayanindia.in<br />
                            info.aayanindia@gmail.com
                        </span>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Form1
