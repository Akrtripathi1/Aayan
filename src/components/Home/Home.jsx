import React from "react";
import logo from "./img/logo.png";
import video1 from "./img/video1.mp4";
import video2 from "./img/video2.mp4";
import video3 from "./img/video3.mp4";
import chart from "./img/chart.png";
import chartt2 from "./img/chartt2.png";
import chart3 from "./img/chart3.png";
import chart4 from "./img/chart4.png";
import chart5 from "./img/chart5.png";
import Group from "./img/Group.png";
import Group1 from "./img/Group1.png";
import certification from "./img/certification.png";
import "./Home.scss";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import Home1 from "../Home1/Home1";
import Home3 from "../Home3/Home3";
import Oservice from '../Oservice/Oservice'
import OurServices from "../OurServices/OurServices";
import Hoo from "./Hoo";
import Hoop from "./Hoop";


import ReactStars from "react-rating-stars-component";


import Test1 from "../Test1/Test1"
import Test2 from "../Test2/Test2"
import Test8 from "../Test8/Test8"
import Test from "../Test9/Test"


function Home() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };


  return (
    <div className="home">
    <div>
      <Home1/>
    </div>
    <div className="og2">
      <Hoo/>
    </div>
      
      <div className="og">
        <OurServices/>
      </div>
      <div className="og1">
        <Oservice/>
      </div>
      <div className="home4">
        <Test1 />
      </div>
      <div >
        <Test8 />
      </div>

      <div className="home6">
        <img src={chart3} alt="" />
      </div>

     <div>
      <Home3/>
     </div>

      <div >
       <Test/>
       
      </div>


     

      {/* <div className="home9">
        <div className="left">
          <h2>Your Reliable Digital Partner</h2>
          <p>
            With a stellar track record and client-centric approach, Aayan
            Infotech is the trusted choice for all your digital needs. Our team
            of experts is committed to delivering exceptional services, driving
            your business growth. Choose us with confidence and experience the
            reliability and expertise that sets us apart.
          </p>
        </div>
        <div className="right">
          <video className="video-bg" autoPlay muted loop src={video3}></video>
        </div>
      </div> */}

 <div>
  <Hoop/>
 </div>

      <div className="home10">
        <div className="first">
          <img src={Group} alt="" />
        </div>

        <div className="second">
          <h2>Ready to get started?</h2>
          <span>Talk to us today</span>
          <div className="second-button">
            <button>View Services</button>
            <button>Contact Us</button>
          </div>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={50}  // This value can remain or be adjusted
            activeColor="yellow"
            classNames="custom-stars" // Apply the custom CSS class
          />


        </div>

        <div className="third">
          <img src={Group1} alt="" />
        </div>
      </div>

      <div className="home11">
        <span>
          As the world prioritizes a technology-driven environment for the
          benefit of all,
          <br />
          Aayan India stands committed to supporting agencies dedicated to
          national development.
        </span>
      </div>
    </div>
  );
}

export default Home;
