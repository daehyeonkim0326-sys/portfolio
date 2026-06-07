import React, { useEffect, useRef, useState } from 'react'
import quiz from "../assets/img/quiz.jpg";
import shopping from "../assets/img/Luckydori.jpg";

const slides = [
  { img: quiz, 
    title: "Quiz",
    popupTitle: "Quiz",
    URL:"https://daehyeonkim0326-sys.github.io/myquiz/",
    popupDesc: "퀴즈 스타일을 참고한 UI 카피 프로젝트입니다.", 
  },
  { img: shopping, 
    title: "Luckydori",
    popupTitle: "Luckydori",
    URL:"https://daehyeonkim0326-sys.github.io/Lucky-dori/",
    popupDesc: "럭키도리 스타일을 참고한 UI 카피 프로젝트입니다.",
   },
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
  const [selectedSlide, setSelectedSlide] = useState(null);
  const openLink = (url) => {
    window.open(url, "_blank");
  };
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
              <img src={slide.img} alt={slide.title} onClick={() => setSelectedSlide(slide)}/>
              <h2 onClick={() => setSelectedSlide(slide)}>{slide.title}</h2>
              {selectedSlide && (
                <div className="modal" onClick={() => setSelectedSlide(null)}>
                  <div className="modal-popup">
                    <h3 onClick={() => openLink(selectedSlide.URL)}>{selectedSlide.popupTitle}</h3>
                    <p>{selectedSlide.popupDesc}</p>
                  </div>
                </div>
              )}
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
            <img src={slide.img} alt={slide.title} onClick={() => setSelectedSlide(slide)}/>
            <h2 onClick={() => setSelectedSlide(slide)}>{slide.title}</h2>
            {selectedSlide && (
                <div className="modal" onClick={() => setSelectedSlide(null)}>
                  <div className="modal-popup">
                    <h3 onClick={() => openLink(selectedSlide.URL)}>{selectedSlide.popupTitle}</h3>
                    <p>{selectedSlide.popupDesc}</p>
                  </div>
                </div>
              )}
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