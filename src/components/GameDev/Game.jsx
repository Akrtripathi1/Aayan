import React from 'react';
import "./Game.scss";
import game from './image/game.mp4';
import webdev2 from "./image/webdev2.png"
import webdev3 from "./image/webdev3.png"
import webdev4 from "./image/webdev4.png"
import webdev5 from "./image/webdev5.png"
import digital2 from "./image/digital2.png"
import We from '../Deliver/We';


const Blockchain = () => {
    return (
        <div className='game'>
            <div className='game-1'>
                <div className='game-1-left'>
                    <video src={game} autoPlay muted loop></video>
                </div>
                <div className='game-1-right'>
                    <h4>Game
                    </h4>
                    <div className='game-1-p'>
                        Digital Marketing
                        Company in India
                    </div>
                    <div className="game-1-button">
                        <button className='game-1-button-1'>
                            Start a project together
                        </button>
                        <button className='game-1-button-2'>
                            Call us
                        </button>
                    </div>
                </div>
            </div>
            <div className="game-2">
                <div className="game-2-left">
                    <h4>
                        Game

                    </h4>
                    <p>
                        We are a reputed leading digital marketing company in India offering world-class digital
                        marketing services ranging from digital marketing strategies to improving your online
                        presence and growing your business. Experience the benefits of digital marketing including
                        cost-efficiency, precise targeting and measurable results. Our services include SEO, PPC,
                        social media marketing, content marketing, and email marketing. By using digital
                        marketing funnels, we guide potential customers through each stage, thereby maximizing
                        conversion rates. Join us to discover the benefits of digital marketing and see your
                        business flourish in a digital environment
                    </p>
                </div>
                <div className="game-2-right">
                    <img src={digital2} alt="" />
                </div>
            </div>
            <div className="game-31">
                <div className='game-3-head'>
                    <h4>
                        What we deliver
                    </h4>
                </div>
                <div className='game-3-para'>
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
           <div>
            <We/>
           </div>
        </div>


    )
}

export default Blockchain