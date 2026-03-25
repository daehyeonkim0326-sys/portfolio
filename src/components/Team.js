import React, { useEffect, useRef, useState } from 'react'
import shopping from "../assets/img/shopping.jpg";
import map from "../assets/img/map.jpg";
import "./components.scss";

const slides = [
  { img: shopping, title: "Reste : 쇼핑 홈페이지" },
  { img: map, title: "ZIO : 공영주차장 관리 시스템" },
];

function useIsMobile(breakpoint = 1024) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return isMobile;
}
const Team = () => {
    const isMobile = useIsMobile(1024);
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
    
      

      if (!isMobile) {
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

      <ul
        className="carousel"
        ref={carouselRef}
      >
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
  )
}

export default Team