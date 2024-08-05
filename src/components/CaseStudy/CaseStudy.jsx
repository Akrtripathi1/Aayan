import React from 'react'
import './CaseStudy.scss'
import video1 from './image/video1.mp4';
import case2 from './image/case2.png';
import case3 from './image/case3.png';
import case4 from './image/case4.png';
import case5 from './image/case5.png';
import icon from './image/icon.png';
import Case from './Case';
import Workblock from './Workblock';
import Rehvap from './Rehvap'

function CaseStudy() {
  return (
    <div>
      {/* <div className="case-study1">
        <video className="video-bg" autoPlay muted loop src={video1}></video>
        <div className="overlay"> </div>
        <div className="center">
          <h1> Our Work</h1>
          <p>In the last 6 years of our existence, we have partnered with 700+ businesses across the world, empowering them to scale their business,<br />
           and achieve unstoppable business growth. We have deep expertise in transforming businesses across different sectors and industries,<br />
            which you can leverage to attain long-term, consistent growth.</p>
          <Link to= '/contact-us'>
          <button>Contact us</button>
          </Link>
          <Link to= '/services'>
          <button>services</button>
          </Link>

          
        </div>
      </div> */}
      <div>
        <Case />
      </div>



      <div className="case-study2">
        Exploring industries
      </div>



      <div className="case-study3">
        In the last 6 years of our existence, we have partnered with 700+ businesses across the world,<br />
        empowering them to scale their business, and achieve unstoppable business growth. We have deep<br />
        expertise in transforming businesses across different sectors and industries, which you can leverage to<br />
        attain long-term, consistent growth.
      </div>

      <div className="case-study4">
        <Workblock/>
      </div>

    <div>
      <Rehvap/>
    </div>
    </div>


  )
}

export default CaseStudy