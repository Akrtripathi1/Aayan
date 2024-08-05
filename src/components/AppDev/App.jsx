import React from 'react';
import "./App.scss";
import AppVideo from './image/AppVideo.mp4';
import webdev2 from "./image/webdev2.png"
import webdev3 from "./image/webdev3.png"
import webdev4 from "./image/webdev4.png"
import webdev5 from "./image/webdev5.png"
import digital2 from "./image/digital2.png"
import We from '../Deliver/We';


const Blockchain = () => {
    return (
        <div className='Blockchain'>
            <div className="blockchain-service1">

                <div className="digital-service1-left">

                    <video className="video-bg" autoPlay muted loop src={AppVideo}></video>

                </div>

                <div className="web-service1-right">
                    <div className="web-service-right1">
                        App Development
                    </div>
                    <div className="web-service-right2">
                        Application Development<br />
                        Company in India
                        in india
                    </div>

                    <div className="web-service-right3">
                        <button>Start a project together</button>

                    </div>
                    <div className="web-service-right4">
                        <button>call us</button>

                    </div>

                </div>



            </div>

            <div className="blockchain-service2">

                <div className="web-service2-left">
                    <div className="web-service2-left1">
                        App Development
                    </div>

                    <div className="web-service2-left2">
                        App development is the creation of a set of programs or<br />
                        technologies that help perform various tasks required<br />
                        by the business. Therefore, app development is very<br />
                        important for the portability and usability of the<br />
                        audience’s mobile devices. Mobile apps send information<br />
                        from different applications to the customers. With<br />
                        mobile apps, sending messages or spreading information<br />
                        becomes easier.

                    </div>

                </div>

                <div className="web-service2-right">
                    <img src={digital2} alt="" />

                </div>


            </div>

            <div className="blockchain-service3">
                <div className="web-service3-first">
                    What we deliver
                </div>
                <div className="web-service3-second">
                    Aayan Infotech gives you the best of web design from their highly skilled and experienced web designers. Not<br />
                    only this, we have kept every factor in mind that is in required for an incredible web page, such as which <br />
                    color, fonts, and texture to use. We assemble all the information and data in a very categorized and<br />
                    précised manner. So that the user will find it very handy to have access to it. Every user wants a user-<br />
                    friendly website, and we are very much professional in providing that quality service to the customers.
                </div>

            </div>
   <div>
    < We/>
   </div>
       

            
        </div>
    )
}

export default Blockchain