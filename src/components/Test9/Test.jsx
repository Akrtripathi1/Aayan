import React, { useState } from 'react';
import Marquee from 'react-marquee-slider';
import { v4 as uuidv4 } from 'uuid';
import './Test.scss';

// Import your images
import certification1 from './img/certification1.png';
import certification2 from './img/certification2.png';
import certification3 from './img/certification3.png';
import certification4 from './img/certification4.png';
import certification5 from './img/certification5.png';

const certificates = [
    { id: uuidv4(), src: certification1, alt: 'certification1' },
    { id: uuidv4(), src: certification2, alt: 'certification2' },
    { id: uuidv4(), src: certification3, alt: 'certification3' },
    { id: uuidv4(), src: certification4, alt: 'certification4' },
    { id: uuidv4(), src: certification5, alt: 'certification5' },
    { id: uuidv4(), src: certification1, alt: 'certification1' },
    { id: uuidv4(), src: certification2, alt: 'certification2' },
    { id: uuidv4(), src: certification3, alt: 'certification3' },
    { id: uuidv4(), src: certification4, alt: 'certification4' },
    { id: uuidv4(), src: certification5, alt: 'certification5' },
];

const MarqueeComponent = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const getVelocity = () => {
        if (window.innerWidth <= 480) {
            return 20;
        } else if (window.innerWidth <= 768) {
            return 30;
        }
        return 50;
    };

    return (
        <div className="Test-marquee-container">
            <div className="Test-black"></div>
            <Marquee
                velocity={isHovered ? 0 : getVelocity()}
                scatterRandomly={false}
                resetAfterTries={0}
                loop={0}
                infinite={true}
            >
                {certificates.map((certificate) => (
                    <div
                        key={certificate.id}
                        className="certificate-item"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img src={certificate.src} alt={certificate.alt} />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default MarqueeComponent;
