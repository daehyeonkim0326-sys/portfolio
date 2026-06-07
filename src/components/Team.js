import React, { useEffect, useRef, useState } from 'react'
import shopping from "../assets/img/shopping.jpg";
import map from "../assets/img/map.jpg";
import "./components.scss";

const slides = [
  { img: shopping, 
    title: "Reste : 쇼핑 홈페이지",
    popupTitle: "Reste",
    URL:"https://daehyeonkim0326-sys.github.io/reste/",
    popupDesc: "쇼핑몰 스타일을 참고한 UI 카피 프로젝트입니다.",
   },
  { img: map, 
    title: "ZIO : 공영주차장 관리 시스템",
    popupTitle: "ZIO",
    URL:"https://daehyeonkim0326-sys.github.io/ZIO/",
    popupDesc: "공영주차장 관리 시스템입니다.",
   },
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
    const [selectedSlide, setSelectedSlide] = useState(null);
    
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
    const openLink = (url) => {
    window.open(url, "_blank");
  };
      

      if (!isMobile) {
        return (
          <section className="clone-grid">
        {slides.map((slide, idx) => (
          <article className="card" key={idx}>
            <img src={slide.img} alt={slide.title} onClick={() => setSelectedSlide(slide)}/>
            <h2 onClick={() => setSelectedSlide(slide)}>{slide.title}</h2>
            {selectedSlide && (
    
            <div className="modal" onClick={() => setSelectedSlide(null)}>
              <div className="modal-popup">
                <h2 onClick={()=> openLink(selectedSlide.URL)}>{selectedSlide.popupTitle}</h2>
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

      <ul className="carousel" ref={carouselRef}>
        {slides.map((slide, idx) => (
          <li key={idx} className="slide">
            <img src={slide.img} alt={slide.title} onClick={() => setSelectedSlide(slide)}/>
            <h2 onClick={() => setSelectedSlide(slide)}>{slide.title}</h2>
          </li>
        ))}
      </ul>
        
      <button className="nav right" onClick={nextSlide} aria-label="next">
        ▶
      </button>

      {selectedSlide && (

        <div className="modal" onClick={() => setSelectedSlide(null)}>
          <div className="modal-popup">
            <h3 onClick={() => openLink(selectedSlide.URL)}>{selectedSlide.popupTitle}</h3>
            <p>{selectedSlide.popupDesc}</p>
          </div>
        </div>

      )}

    </div>
  )
}

export default Team