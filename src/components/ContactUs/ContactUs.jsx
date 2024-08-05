import React from 'react'
import './ContactUs.scss'
import contact1 from './image/contact1.png';
import contact2 from './image/contact2.png';
import contact4 from './image/contact4.png';
import call from './image/call.png';
import contact3 from './image/contact3.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Location from '../Location/Location.jsx';
import art from './image/art.png'
import Flow from './image/Flow.mp4'
import Form1 from './Form1.jsx';


function ContactUs() {
  return (
    <div className='contact'>
      <div className='contact1'>

        <div className='contact-left'>
          <h2 className='first'>Get in touch with us</h2>
          <p>We appreciate your interest in connecting with us. Whether you have a question,
            a suggestion, or a project you’d like to discuss, we are here to assist you.
            Please use the contact information provided below or fill out the form,
            and we will respond promptly.</p>

        </div>
       

        <div className="contact-right">
        <div className='shape'></div>
          
          <img src={contact1} alt="" />
       
        
          
        </div>

      </div>


      <div className="contact2">
        <Location />
      </div>
      <div className="contact3">
        <img src={contact2} alt="" />
      </div>

     <div>
      <Form1/>
     </div>
    </div>
  )
}

export default ContactUs