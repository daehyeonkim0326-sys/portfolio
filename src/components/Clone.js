import React, { useEffect, useRef, useState } from "react";
import wave from "../assets/img/wave.jpg";
import myday from "../assets/img/day.jpg";
import kakao from "../assets/img/ifkakao.jpg";
import airsound from "../assets/img/airsound.jpg";

const slides = [
  { img: wave, title: "Flow Motion : ConnectWave" },
  { img: myday, title: "MyDay" },
  { img: kakao, title: "Tech Week : if(kakao)" },
  { img: airsound, title: "airsound : 에어비엔비 카피" },
];

function useIsTablet(breakpoint = 1024) {
  const [isTablet, setIsTablet] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
);

useEffect(() => {
  const onResize = () => setIsTablet(window.innerWidth < breakpoint);
  window.addEventListener("resize", onResize);
  return () => window.removeEventListener("resize", onResize);
}, [breakpoint]);

  return isTablet;
}

export default function Clone() {
  const isTablet = useIsTablet(1024);
  const carouselRef = useRef(null);

  const prevSlide = () => {
    if (!carouselRef.current) return;

    carouselRef.current.scrollBy({
      left: -carouselRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const nextSlide = () => {
    if (!carouselRef.current) return;

    carouselRef.current.scrollBy({
      left: carouselRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  if (!isTablet) {
    return (
      <section className="clone-grid">
        {slides.map((slide, idx) => (
          <article className="card" key={idx}>
            <img src={slide.img} alt={slide.title} />
            <h2>{slide.title}</h2>
          </article>
        ))}
      </section>
    );
  }

  return (
    <div className="clone">
      <button className="nav left" onClick={prevSlide} aria-label="prev">
        ◀
      </button>

      <ul className="carousel" ref={carouselRef}>
        {slides.map((slide, idx) => (
          <li key={idx} className="slide">
            <img src={slide.img} alt={slide.title} />
            <h2>{slide.title}</h2>
          </li>
        ))}
      </ul>

      <button className="nav right" onClick={nextSlide} aria-label="next">
        ▶
      </button>
    </div>
  );
}
