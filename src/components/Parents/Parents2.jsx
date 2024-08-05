import React from 'react'

import Background from './img/Background.png'
import Rectangle1 from './img/Rectangle1.png'
import Rectangle2 from './img/Rectangle2.png'
import Group1 from './img/Group1.png'
import Group2 from './img/Group2.png'

const Parents2 = () => {
  return (
    <div className="parents-2" style={{ backgroundImage: `url(${Background})` }}>
                <div className="father-2">
                    <div className="father-container">
                        <img src={Group1} alt="" />
                    </div>
                    <div className='father-content'>
                        <h3>Sudhir Singh</h3>
                        <p className='one'>
                            Chairman, Ex-Army Officer <br />
                            Once a soldier always a soldier
                        </p>
                        <p>
                            Served in Indian Army for 28 years in The Corps of Electronics and Mechanical Engineers (EME).
                        </p>
                        <p className='two'>
                            LOYALTY, DUTY, RESPECT, SELFLESS SERVICE, HONOUR. COURAGE
                        </p>
                    </div>
                </div>
                <div className="mother-2">
                    <div className="mother-container">
                        <img src={Group2} alt="" />
                    </div>
                    <div className="mother-content">
                        <h3>Mala Singh</h3>
                        <p className='one'>
                            Chairwoman <br />
                            Domestic Engineer
                        </p>
                        <p>
                            Who else can manage the world better than a mother, daughter and a sister.
                        </p>
                        <p className='two'>
                            PATIENT, RESPECTFUL, STRONG, HUMBLE, EMPATHETIC, AUTHORITATIVE, SUPPORTIVE
                        </p>
                    </div>
                </div>
            </div>
  )
}

export default Parents2
