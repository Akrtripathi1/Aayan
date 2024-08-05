import React from "react";
import "./Services.scss";
// import image2 from "./image/image2.png";
import image1 from "./image/image1.png"
import image2 from "./image/image2.png"
import image3 from "./image/image3.png"
import image4 from "./image/image4.png"
import image5 from "./image/image5.png"
import image6 from "./image/image6.png"
import image7 from "./image/image7.png"
import image9 from "./image/image9.png"
import image10 from "./image/image10.png"
import image11 from "./image/image11.png"
import image12 from "./image/image12.png"
import image13 from "./image/image13.png"
import image17 from "./image/image 17.png"
import image18 from "./image/image 18.png"
import image19 from "./image/image 19.png"
import image20 from "./image/image 20.png"
import image21 from "./image/image 21.png"
import image22 from "./image/image 22.png"
import image23 from "./image/image 23.png"
import service1 from "./image/service1.png"
import service2 from "./image/service2.png"
import service3 from "./image/service3.png"
import service4 from "./image/service4.png"
import service5 from "./image/service5.png"
import service6 from "./image/service6.png"
import service7 from "./image/service7.png"
import service8 from "./image/service8.png"
import video1 from "./image/video1.mp4"
import { Link } from "react-router-dom";


function Services() {
  return (
    <div className="services">

      <div className='service1'>
        <div className="video">
          <video className="video-bg" autoPlay muted loop src={video1}></video>
        </div>
        <div className="overlay"> </div>
        <div className="center">
          <h1> Services</h1>
          <h3>We are Offering</h3>
          <Link to='/contact-us'>
            <button>Contact now</button>
          </Link>


        </div>

      </div>

      <div className="service2">
        <div class="grid-item">
          <Link to='/web-service ' style={{ textDecoration: 'none' }}>
            <img src={service1} alt="" />
            <div className="web-development">
              <h4 className="header-card"> Web Development</h4>
              <p>
                We explore, identify and implement all
                possible ways to create and develop
                conversion-optimized websites.
              </p>
            </div>
          </Link>
        </div>
        <div class="grid-item">
          <Link to='/design-service ' style={{ textDecoration: 'none' }}>
            <img src={service2} alt="" />
            <div className="web-development">
              <h4 className="header-card"> Design</h4>
              <p>
                Aayan Infotech aims to provide user-friendly
                and responsive website design for enhancing
                our clients’ online presence.

              </p>
            </div>
          </Link>
        </div>
        <div class="grid-item">
          <Link to='/software-service ' style={{ textDecoration: 'none' }}>
            <img src={service3} alt="" />
            <div className="web-development">
              <h4 className="header-card">Software Development</h4>
              <p>
                Our rich skillset and hands-on experience
                are capable of developing software and satp
                customer requirements.


              </p>
            </div>
          </Link>
        </div>
        <div class="grid-item">
          <Link to='/appDev-service ' style={{ textDecoration: 'none' }}>
            <img src={service4} alt="" />
            <div className="web-development">
              <h4 className="header-card">Application Development</h4>
              <p>
                With brilliant minds and creative
                designers, Aayan India builds smarter
                solutions for all smartphone users.

              </p>
            </div>
          </Link>
        </div>
        <div class="grid-item">
          <Link to='/game-service ' style={{ textDecoration: 'none' }}>
            <img src={service5} alt="" />
            <div className="web-development">
              <h4 className="header-card"> Game Development</h4>
              <p>
                For your concept of desired gaming
                app, we are here at Aayan India to
                give an edge to it. We have team of
                game app developers,
              </p>



            </div>
          </Link>

        </div>
        <div class="grid-item">
          <Link to='/digital-service ' style={{ textDecoration: 'none' }}>
            <img src={service6} alt="" />
            <div className="web-development">
              <h4 className="header-card">Digital Marketing</h4>
              <p>
                Aayan Infotech is a progressive, ROI-
                focused Digital Marketing Company where
                we tailor our result-driven approaches.
              </p>
            </div>
          </Link>
        </div>
        <div class="grid-item">
          <Link to='/iot-service ' style={{ textDecoration: 'none' }}>
            <img src={service7} alt="" />
            <div className="web-development">
              <h4 className="header-card"> IOT Apps</h4>
              <p>
                For your concept of desired gaming
                app, we are here at Aayan India to give
                an edge to it. We have team of game app
                developers,
              </p>
            </div>
          </Link>
        </div>
        <div class="grid-item">
          <Link to='/blockchain-service ' style={{ textDecoration: 'none' }}>
            <img src={service8} alt="" />
            <div className="web-development">
              <h4 className="header-card"> Blockchain Development</h4>
              <p>
                Aayan Infotech is a progressive, ROI
                -focused Blockchain Company where we
                tailor our result-driven approaches.
              </p>
            </div>
          </Link>
        </div>


      </div>

      <div className="service6">
        <div className="service6-left">
          <img src={image5} alt="" />
        </div>

        <div className="service6-right">
          <h2 className="one">Our Services</h2>
          <p className="two">Welcome to Aayan Infotech,
            your trusted IT partner.
            We specialize in website design,
            development, and application creation to
            enhance your online presence. Our expertise
            extends to software and game development,
            providing innovative solutions across different
            platforms. With our tailored digital marketing
            strategies, we drive traffic and conversions
            for businesses of all sizes and domains.</p>

          <div className="three">
            360-degree solution
          </div>

          <div className="four">
            Website, Wellness, Social Media, Logistics,
            Insurance, Healthcare, Finance, Entertainment,
            Sports, Foot & Restaurant, All set
          </div>
          <Link to='/contact-us ' style={{ textDecoration: 'none' }}>

            <button className="button1">Contact us</button>
          </Link>

        </div>

      </div>

      <div className="service7">
        <h2 className="service7-head">Our Clients</h2>
        <p className="service7-p">We pride ourselves in being trusted and having the opportunity to work with leading companies in their respective fields.</p>
        <div className="service7-card-container">
          <div className="service7-card">
            <button><img src={image7} alt="" /></button>
          </div>
          <div className="service7-card">
            <button><img src={image9} alt="" /></button>
          </div>
          <div className="service7-card">
            <button><img src={image10} alt="" /></button>
          </div>
          <div className="service7-card">
            <button><img src={image11} alt="" /></button>
          </div>
          <div className="service7-card">
            <button><img src={image12} alt="" /></button>
          </div>
        </div>
        <div className="service7-card-container">
          <div className="service7-card">
            <button><img src={image13} alt="" /></button>
          </div>
          <div className="service7-card">
            <button><img src={image17} alt="" /></button>
          </div>
          <div className="service7-card">
            <button><img src={image18} alt="" /></button>
          </div>
          <div className="service7-card">
            <button><img src={image19} alt="" /></button>
          </div>
          <div className="service7-card">
            <button><img src={image20} alt="" /></button>
          </div>
        </div>
        <div className="service7-card-container">
          <div className="service7-card">
            <button><img src={image21} alt="" /></button>
          </div>
          <div className="service7-card">
            <button><img src={image22} alt="" /></button>
          </div>
          <div className="service7-card">
            <button><img src={image23} alt="" /></button>
          </div>
          <div className="service7-card">
            <button><img src={image7} alt="" /></button>
          </div>
          <div className="service7-card">
            <button><img src={image7} alt="" /></button>
          </div>
        </div>

        <div className="button-service7">
          <Link to='/case-study'>
            <button className="button2">
              View More
            </button>
          </Link>
        </div>
      </div>

    </div>
  );
}

export default Services;
