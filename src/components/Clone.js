import React, { useState } from "react";
import wave from "../assets/img/wave.jpg";
import myday from "../assets/img/day.jpg";
import kakao from "../assets/img/ifkakao.jpg";
import airsound from "../assets/img/airsound.jpg";

const slides = [
  { img: wave, title: "Flow Motion : ConnectWave" },
  { img: myday, title: "MyDay" },
  { img: kakao, title: "Tech Week : if(kakao)" },
  { img: airsound, title: "airsound : 에어비앤비" },
];

const Clone = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="clone">
      <button className="nav left" onClick={prevSlide}>
        ◀
      </button>

      <ul
        className="carousel"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <li key={idx}>
            <img src={slide.img} alt={slide.title} />
            <h2>{slide.title}</h2>
          </li>
        ))}
      </ul>

      <button className="nav right" onClick={nextSlide}>
        ▶
      </button>
    </div>
  );
};

export default Clone;
