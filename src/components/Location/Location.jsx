import React from 'react'
import  map1 from './img/map1.png'
import  map2 from './img/map2.png'
import  map3 from './img/map3.png'
import  map4 from './img/map4.png'
import './Location.scss'

const Location = () => {
    return (
        <div className='location'>
            <h2 className='head'>Our Office In India     </h2>
            
           
           
            <div className="map-4">
                <img src={map3} alt="" />
                <div className="map-1-card">
                    <h2>NOIDA</h2>
                    <p>CV-1, Supertech Capetown, Noida Sector 74, Uttar Pradesh 201304, India</p>
                    <button>
                        Know More
                    </button>
                </div>
            </div>
            <div className="map-3">
                <img src={map4} alt="" />
                <div className="map-1-card">
                    <h2>LUDHIANA</h2>
                    <p>Eagle House, Bahadarke Rd, Guru Preet Nagar, Ludhiana, Punjab 141008, India</p>
                    <button>
                        Know More
                    </button>
                </div>
            </div>
            <div className="map-2">
                <img src={map1} alt="" />
                <div className="map-1-card">
                    <h2>CHANDIGARH</h2>
                    <p>H345, Sector 55, Phase 1, Chandigarh, Haryana 160055, India</p>
                    <button>
                        Know More
                    </button>
                </div>
            </div>
            <div className="map-1">
                <img src={map2} alt="" />
                <div className="map-1-card">
                    <h2>LUCKNOW</h2>
                    <p>C-84, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010</p>
                    <button>
                        Know More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Location
