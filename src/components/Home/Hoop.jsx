import React from 'react';
import './Hoop.scss';

const Hoop = () => {
  return (
    <div className="home9">
      <div className="responsive-home">
        <div className="video-section">
          <iframe
            width="500"
            height="250"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your YouTube video ID
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="text-section">
          <h2>Your Reliable Digital Partner</h2>
          <div className="text-section1">
            <p>
              With a stellar track record and client-centric approach, Aayan Infotech is the trusted choice for all your digital needs. Our team of experts is committed to delivering exceptional services, driving your business growth. Choose us with confidence and experience the reliability and expertise that sets us apart.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hoop;
