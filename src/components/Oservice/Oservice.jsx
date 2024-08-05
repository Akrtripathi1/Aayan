import React from 'react'
import './Oservice.scss'
import Group from './img/Group.png'
import Group1 from './img/Group1.png'
import Group2 from './img/Group2.png'
import Group3 from './img/Group3.png'
import Group4 from './img/Group4.png'
import Group5 from './img/Group5.png'
import Group6 from './img/Group6.png'
import Vector1 from './img/Vector1.png'

const Oservice = () => {
    return (
        <div className="oservices-container">
            <h1 className="title">OUR SERVICE</h1>
            <img src={Vector1} className='header-line' alt="" />
            <div className='oservice'>
                <img src={Group} alt="" />
                <div className="item-1">
                    <img src={Group2} alt="" />
                    <div className="item-content-1">
                        <h3>
                            Website Development
                        </h3>
                        <p>
                            custom web development services that fit your business perfectly
                        </p>
                    </div>
                </div>
                <div className="item-2">
                    <img src={Group1} alt="" />
                    <div className="item-content-2">
                        <h3>
                        App Development
                        </h3>
                        <p>
                        Custom Mobile App Development Services Leading the Way to Digital Change.

                        </p>
                    </div>
                </div>
                <div className="item-3">
                    <img src={Group3} alt="" />
                    <div className="item-content-1">
                        <h3>
                        Game Development
                        </h3>
                        <p>
                            custom Game development services that fit your business perfectly
                        </p>
                    </div>
                </div>
                <div className="item-4">
                    <img src={Group2} alt="" />
                    <div className="item-content-2">
                        <h3>
                        Software Development
                        </h3>
                        <p>
                        Custom Software Development Services Leading the Way to Digital Change.

                        </p>
                    </div>
                </div>
                <div className="item-5">
                    <img src={Group4} alt="" />
                    <div className="item-content-1">
                        <h3>
                            Digital Marketing
                        </h3>
                        <p>
                            custom iot development services that fit your business perfectly
                        </p>
                    </div>
                </div>
                <div className="item-6">
                    <img src={Group5} alt="" />
                    <div className="item-content-2">
                        <h3>
                           IOT Development
                        </h3>
                        <p>
                            custom iot development services that fit your business perfectly
                        </p>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default Oservice
