import React from 'react'
import './OurServices.scss'
import Vector from './img/Vector.png'
import Vector1 from './img/Vector1.png'
import Logo from './img/Logo.png'
import Group1 from './img/Group1.png'
import Group2 from './img/Group2.png'
import Group3 from './img/Group3.png'
import Group4 from './img/Group4.png'
import Group5 from './img/Group5.png'
import Group6 from './img/Group6.png'
import Oservice from '../Oservice/Oservice'

const OurServices = () => {
    return (
        <div className="services-container">
            <div className='aayan-header'>
                <h4>
                    OUR SERVICE
                </h4>
            </div>
            <div className='line'>
                <img src={Vector1} alt="" />
            </div>
            <div className="services-circle">
                <img src={Vector} alt="" />
                <div className="circle-1">
                    <div className="service-item-1">
                        <img src={Group2} alt="Website Development" />
                        <div className="service-item-content-1">
                            <h3>Website Development</h3>
                            <p>Custom web development services that fit your business perfectly</p>
                        </div>
                    </div>

                    <div className="service-item-2" >
                        <img src={Group3} alt="Game Development" />
                        <div className="service-item-content-1">
                            <h3>Game Development</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>

                    <div className="service-item-3" >
                        <img src={Group4} alt="Digital Marketing" />
                        <div className="service-item-content-1">
                            <h3>Digital Marketing</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>

                </div>
                <div className="circle-2">

                    <div className="service-item-4" >
                        <img src={Group1} alt="App Development" />
                        <div className="service-item-content-2">
                            <h3>App Development</h3>
                            <p>Custom Mobile App Development Services Leading the Way to Digital Change.</p>
                        </div>
                    </div>
                    <div className="service-item-5">
                        <img src={Group6} alt="Software Development" />
                        <div className="service-item-content-2">
                            <h3>Software Development</h3>
                            <p>Transform your business with custom software development services for exceptional performance.</p>
                        </div>
                    </div>
                    <div className="service-item-6" >
                        <img src={Group5} alt="Software Development" />
                        <div className="service-item-content-2">
                            <h3>IOT</h3>
                            <p >Transform your business with custom software development services for exceptional performance.</p>
                        </div>
                    </div>

                </div>
                <div className="center-logo">
                    <img src={Logo} alt="AI Logo" />
                </div>
            </div>
        </div>
    )
}

export default OurServices
