import React from 'react';
import './Hoo.scss';
import video2 from './img/video2.mp4';

const Hoo = () => {
  return (
    <div className="home2">
      <div className="home2-left">
        <div className="bubbles-container">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
        <h2>
          WHAT WE DO
        </h2>
        <p>
          We provide many services which are most important for your business,
          like webpage designs, website development, application development,
          software development, gaming app development, and much more. Thus,
          we also provide 24x7 help service to all of our customers whenever
          they need it. All these services will help you to be the greatest
          among all the competitors in the market
        </p>
      </div>
      <div className="home2-right">
        <video className="video-bg" autoPlay muted loop src={video2}></video>
      </div>
    </div>
  );
};

export default Hoo;
