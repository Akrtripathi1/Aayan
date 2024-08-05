import React from 'react'
import './AllAbout.scss'
import Group1 from './img/Group1.png'
import Group2 from './img/Group2.png'
import Group3 from './img/Group3.png'
import Group4 from './img/Group4.png'
import Group5 from './img/Group5.png'
const AllAbout = () => {
    
    return (
        <div className="allabout">
            <div className='timeline'>
                <div className='timeline-header'>
                    <h4>OUR</h4> 
                    <h1>Leadership</h1>
                </div>
                <div className="container left-container">
                    <img src={Group5} alt="" />
                    <div className="text-box">
                        <h2>Suraj Singh</h2>
                        <small><i>Founder and CEO</i></small>
                        <p>
                            10+ years as IT industry research &amp; design and innovation
                            consultant MBA in digital business from IIIT Lucknow
                        </p>
                    </div>
                    <span className='left-container-arrow'></span>
                </div>
                <div className="container right-container">
                    <img src={Group4} className='Gopal' alt="" />
                    <div className="text-box">
                        <h2>Gopal Kumar</h2>
                        <small><i> CTO</i></small>
                        <p>
                            Expirence over 12 years as a Full Stack devloper
                        </p>
                    </div>
                    <span className='right-container-arrow'></span>
                </div>
                <div className="container left-container">
                    <img src={Group3} className='shreya' alt="" />
                    <div className="text-box">
                        <h2>Shreya Aggarwal</h2>
                        <small><i>Human Resource Operations</i>
                        </small>
                        <p>
                            Expirence over 8 years in customer handeling and business management
                            MBA from Doon Business School
                        </p>
                    </div>
                    <span className='left-container-arrow'></span>
                </div>
                <div className="container right-container jyoti">
                    <img src={Group2} alt="" />
                    <div className="text-box">
                        <h2>Jyoti Singh</h2>
                        <small><i>Founder and CEO</i></small>
                        <p>
                            Expirence of working with fortune500 companieslike HCL.
                            Computer Science Engineer
                        </p>
                    </div>
                    <span className='right-container-arrow'></span>
                </div>

            </div >
        </div>
    )
}

export default AllAbout
