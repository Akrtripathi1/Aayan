import React from 'react'
import logo from "./img/logo.png";
import video1 from "./img/video1.mp4";
import "./Home1.scss";
import { Link } from 'react-router-dom';


const Home1 = () => {
    return (
        <div className='home'>
            <div className="home1">
                <video className="video-bg" autoPlay muted loop src={video1}></video>
                <div className="overlay"> </div>

                <div className="home-1-left">
                    <h2 className="one">
                        Delivering Comprehensive
                        <br /> Solutions for the
                    </h2>
                    <h2 className="two">Age of Technology</h2>

                    <Link to='/contact-us'>
                        <button>Get Started</button>
                    </Link>
                </div>
                <div className="home-1-right">
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home1