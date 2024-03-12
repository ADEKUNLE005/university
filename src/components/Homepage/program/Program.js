import React, { useState, useEffect, useRef } from "react";
import "./programs.css";

const Program = () => {
  const carouselItems = [
    { feature: "200+", longFeature: "undergraduate programs" },
    { feature: "500+", longFeature: "graduate programs" },
    { feature: "1", longFeature: "Nobel Laureate" },
    { feature: "41", longFeature: "National 3M Teaching Fellows" },
    { feature: "75", longFeature: "Rhodes Scholars" },
    { feature: "99", longFeature: "national athletics titles" },
    { feature: "40,061", longFeature: "students from 156 countries" },
    { feature: "300,000", longFeature: "alumni in 140 countries" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const [translateValue, setTranslateValue] = useState(0);

  useEffect(() => {
    const newTranslateValue = -100 * currentIndex;
    setTranslateValue(newTranslateValue);
  }, [currentIndex]);
  function showNextSlide() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      showNextSlide();
    }, 3000);

    return () => {
      clearInterval(intervalRef.current);
    };
  });

  //

  return (
    <div
      id="carousel-UAlberta"
   
    >
      <div class="carousel-indicators">
        {carouselItems.map((item, index) => (
          <button
            key={index}
            className={`carousel-indicator ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
            style={{ backgroundColor: index === currentIndex ? "white" : "" }}
          ></button>
        ))}
      </div>
      <div className="carousel-inner"
      >
        {carouselItems.map((item, index) => (
          <div
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
            key={index}
            
          >
            <div className="carousel-feature">{item.feature}</div>
            <div className="long-feature">{item.longFeature}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
