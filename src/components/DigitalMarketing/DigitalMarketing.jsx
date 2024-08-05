import React from 'react';
import "./DigitalMarketing.scss";
import digital1 from "./image/digital1.png"
import digital2 from "./image/digital2.png"
import webdev2 from "./image/webdev2.png"
import webdev3 from "./image/webdev3.png"
import webdev4 from "./image/webdev4.png"
import webdev5 from "./image/webdev5.png"
import video1 from "./image/video1.gif"
import We from '../Deliver/We';

const DigitalMarketing = () => {
    return (
        <div className='digitalm'>
            <div className='digitalm-1'>
                <div className='digitalm-1-left'>
                    <img src={video1} autoplay loop muted alt="" />
                </div>
                <div className='digitalm-1-right'>
                    <h4>Digital Marketing</h4>
                    <div className='digitalm-1-p'>
                        Digital Marketing
                        Company in India
                    </div>
                    <div className="digitalm-1-button">
                        <button className='digitalm-1-button-1'>
                            Start a project together
                        </button>
                        <button className='digitalm-1-button-2'>
                            Call us
                        </button>
                    </div>
                </div>
            </div>
            <div className="digitalm-2">
                <div className="digitalm-2-left">
                    <h4>
                        Software Development
                    </h4>
                    <p>
                        Software development is at the core of what Aayan Infotech does. We serve a diverse client base, each with
                        its own needs and requirements. We specialise in developing custom software solutions to improve business
                        performance and strategic planning of our clients. The software we create incorporates superior technical
                        intelligence to give our clients the tools they need to flourish. Our development team is dedicated to
                        creating high-quality software that fulfils each project's individual requirements while ensuring optimal
                        performance and client satisfaction.
                    </p>
                </div>
                <div className="digitalm-2-right">
                    <img src={digital2} alt="" />
                </div>
            </div>
            <div className="digitalm-31">
                <div className='digitalm-3-head'>
                    <h4>
                        What we deliver
                    </h4>
                </div>
                <div className='digitalm-3-para'>
                    <p>
                        Aayan India gives you the best of web design from their highly skilled and experienced
                        web designers. Not only this, we have kept every factor in mind that is in required for an
                        incredible web page, such as which color, fonts, and texture to use. We assemble all the information
                        and data in a very categorized and précised manner. So that the user will find it very handy to have
                        access to it. Every user wants a user-friendly website, and we are very much professional in providing
                        that quality service to the customers.
                    </p>
                </div>
            </div>
           <div className='s5'>
            < We/>
           </div>
        </div>


    )
}

export default DigitalMarketing