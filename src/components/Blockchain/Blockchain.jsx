import React from 'react';
import "./Blockchain.scss";
import blockchain from './image/blockchain.mp4';
import webdev2 from "./image/webdev2.png"
import webdev3 from "./image/webdev3.png"
import webdev4 from "./image/webdev4.png"
import webdev5 from "./image/webdev5.png"
import digital2 from "./image/digital2.png"
import We from '../Deliver/We';


const Blockchain = () => {
    return (
        <div className='blockchain'>
            <div className='blockchain-1'>
                <div className='blockchain-1-left'>
                    <video src={blockchain} autoPlay muted loop></video>
                </div>
                <div className='blockchain-1-right'>
                    <h4>Blockchain Technology</h4>
                    <div className='blockchain-1-p'>
                        Digital Marketing
                        Company in India
                    </div>
                    <div className="blockchain-1-button">
                        <button className='blockchain-1-button-1'>
                            Start a project together
                        </button>
                        <button className='blockchain-1-button-2'>
                            Call us
                        </button>
                    </div>
                </div>
            </div>
            <div className="blockchain-2">
                <div className="blockchain-2-left">
                    <h4>
                        Blockchain Technology
                    </h4>
                    <p>
                        We are a reputed leading digital marketing company in India offering world-class digital
                        marketing services ranging from digital marketing strategies to improving your online presence
                        and growing your business. Experience the benefits of digital marketing including cost-
                        efficiency, precise targeting and measurable results. Our services include SEO, PPC, social
                        media marketing, content marketing, and email marketing. By using digital marketing funnels,
                        we guide potential customers through each stage, thereby maximizing conversion rates. Join us
                        to discover the benefits of digital marketing and see your business flourish in a digital
                        environment
                    </p>
                </div>
                <div className="blockchain-2-right">
                    <img src={digital2} alt="" />
                </div>
            </div>
            <div className="blockchain-31">
                <div className='blockchain-3-head'>
                    <h4>
                        What we deliver
                    </h4>
                </div>
                <div className='blockchain-3-para'>
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
            <div className='s8'>
                <We/>
            </div>
            
        </div>


    )
}

export default Blockchain