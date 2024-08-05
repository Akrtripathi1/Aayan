// CardCarousel.js
import React, { useEffect, useRef, useState } from 'react';
import './Caras.scss'; // Import the CSS file

const CardCarousel = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(80); // percentage width
  const [xScale, setXScale] = useState({});
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      const card = cardsRef.current[0];
      if (card) {
        setCardWidth((card.offsetWidth / containerRef.current.offsetWidth) * 100);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial calculation

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    build();
  }, [centerIndex, cardWidth]);

  const updateCards = (card, data) => {
    if (data.x !== undefined) {
      card.dataset.x = data.x;
    }

    if (data.scale !== undefined) {
      card.style.transform = `scale(${data.scale})`;
      card.style.opacity = data.scale === 0 ? 0 : 1;
    }

    if (data.leftPos !== undefined) {
      card.style.left = `${data.leftPos}%`;
    }

    if (data.zIndex !== undefined) {
      card.classList.toggle('highlight', data.zIndex === 0);
      card.style.zIndex = data.zIndex;
    }
  };

  const build = (fix = 0) => {
    cardsRef.current.forEach((card, i) => {
      const x = i - centerIndex;
      const scale = calcScale(x);
      const scale2 = calcScale2(x);
      const zIndex = -(Math.abs(i - centerIndex));
      const leftPos = calcPos(x, scale2);

      xScale[x] = card;
      updateCards(card, {
        x,
        scale,
        leftPos,
        zIndex,
      });
    });
  };

  const calcPos = (x, scale) => {
    if (x < 0) {
      return ((scale * 100 - cardWidth) / 2);
    } else if (x > 0) {
      return 100 - ((scale * 100 + cardWidth) / 2);
    } else {
      return 100 - ((scale * 100 + cardWidth) / 2);
    }
  };

  const calcScale = (x) => {
    const formula = 1 - (1 / 5) * Math.pow(x, 2);
    return formula <= 0 ? 0 : formula;
  };

  const calcScale2 = (x) => {
    if (x <= 0) {
      return 1 - (-1 / 5) * x;
    } else {
      return 1 - (1 / 5) * x;
    }
  };

  const handleDrag = (e) => {
    // Implement drag logic if necessary
  };

  return (
    <div className="container">
      <div
        ref={containerRef}
        className="carousel"
        onMouseDown={handleDrag}
        onTouchStart={handleDrag}
      >
        <div className="card-carousel">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="card"
            >
              <div className="image-container" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
