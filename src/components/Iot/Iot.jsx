import React from 'react';
import "./Iot.scss";
import metaverse from './image/metaverse.mp4';
import webdev2 from "./image/webdev2.png"
import webdev3 from "./image/webdev3.png"
import webdev4 from "./image/webdev4.png"
import webdev5 from "./image/webdev5.png"
import digital2 from "./image/digital2.png"
import We from '../Deliver/We';


const Blockchain = () => {
    return (
        <div className='iot'>
            <div className='iot-1'>
                <div className='iot-1-left'>
                    <video src={metaverse} autoPlay muted loop></video>
                </div>
                <div className='iot-1-right'>
                    <h4>IoT</h4>
                    <div className='iot-1-p'>
                        Digital Marketing
                        Company in India
                    </div>
                    <div className="iot-1-button">
                        <button className='iot-1-button-1'>
                            Start a project together
                        </button>
                        <button className='iot-1-button-2'>
                            Call us
                        </button>
                    </div>
                </div>
            </div>
            <div className="iot-2">
                <div className="iot-2-left">
                    <h4>
                        IoT
                    </h4>
                    <p>
                        App development is the creation of a set of programs or technologies that help perform
                        various tasks required by the business. Therefore, app development is very important for
                        the portability and usability of the audience’s mobile devices. Mobile apps send information
                        from different applications to the customers. With mobile apps, sending messages or spreading
                        information becomes easier.
                    </p>
                </div>
                <div className="iot-2-right">
                    <img src={digital2} alt="" />
                </div>
            </div>
            <div className="iot-31">
                <div className='iot-3-head'>
                    <h4>
                        What we deliver
                    </h4>
                </div>
                <div className='iot-3-para'>
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
           <div className='s6'>
            <We/>
           </div>
        </div>


    )
}

export default Blockchain