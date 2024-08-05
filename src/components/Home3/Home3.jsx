import React from 'react';
import './Home3.scss';
import Vector from './img/Vector.png';
import img1 from './img/img1.png';
import img2 from './img/img2.png';
import img3 from './img/img3.png';

const Card = ({ imgSrc, title, description }) => {
    return (
        <div className="home-3-card2">
            <div className="home-3-card-content">
                <img src={imgSrc} alt={title} className="card-image" />
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

const WhyTrust = () => {
    return (
        <div className="why-trust">
            <h2>Why Trust Aayan Infotech?</h2>
            <div className="home-3-card-container">
                <Card
                    imgSrc={img3}
                    title="Dedicated Team"
                    description="Driven by Excellence, Committed to Your Success."
                />
                <Card
                    imgSrc={img2}
                    title="24/7 Support"
                    description="Round-the-Clock Assistance for Your Peace of Mind."
                />
                <Card
                    imgSrc={Vector}
                    title="Full Satisfaction"
                    description="Your Success is Our Utmost Priority."
                />
                <Card
                    imgSrc={img1}
                    title="Cost Effective"
                    description="Affordable Solutions, Exceptional Quality."
                />
            </div>
        </div>
    );
};

export default WhyTrust;
