import React, { useEffect, useRef, useState } from 'react'
import quiz from "../assets/img/quiz.jpg";
import blog from "../assets/img/blog.jpg";

const slides = [
  { img: quiz, title: "quiz" },
  { img: blog, title: "blog" },
  
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

const Personal = () => {
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

export default Personal