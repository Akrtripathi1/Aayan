import React from 'react'
import video1 from './image/video1.mp4';
import './Case.scss'
import { Link } from 'react-router-dom';
const Case = () => {
  return (
   <div>
    <div className='ecllipse'>

    </div>
    <div className="case-study1">
            <video className="video-bg" autoPlay muted loop src={video1}></video>
            <div className="overlay"> </div>
            <div className="center">
                <h1>Our Work</h1>
                <p>In the last 6 years of our existence, we have partnered with 700+ businesses across the world, empowering them to scale their business,<br />
                and achieve unstoppable business growth. We have deep expertise in transforming businesses across different sectors and industries,<br />
                which you can leverage to attain long-term, consistent growth.</p>
                <div className="buttons">
                    <Link to='/contact-us'>
                        <button className="btn-contact">Contact us</button>
                    </Link>
                    <Link to='/services'>
                        <button className="btn-services">Services</button>
                    </Link>
                </div>
            </div>
        </div>
        <div className='ecllipse'>

        </div>
   </div>
  )
}

export default Case