import React from 'react'
import './Clients.scss'
import image7 from "./img/image7.png"
import image9 from "./img/image9.png"
import image10 from "./img/image10.png"
import image11 from "./img/image11.png"
import image12 from "./img/image12.png"
import image13 from "./img/image13.png"
import image17 from "./img/image 17.png"
import image18 from "./img/image 18.png"
import image19 from "./img/image 19.png"
import image20 from "./img/image 20.png"
import image21 from "./img/image 21.png"
import image22 from "./img/image 22.png"
import image23 from "./img/image 23.png"
import {Link} from  'react-router-dom'

const Clienys = () => {
    return (
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

    )
}

export default Clienys
